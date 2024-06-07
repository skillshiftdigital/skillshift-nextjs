// pages/api/contact.ts

import { NextApiRequest, NextApiResponse } from 'next';

const hubspotContactsEndpoint = 'https://api.hubapi.com/crm/v3/objects/contacts';
const hubspotEngagementsEndpoint = 'https://api.hubapi.com/engagements/v1/engagements';
const hubspotApiKey = process.env.HUBSPOT_API_KEY;

const addNoteToContact = async (contactId: string, message: string) => {
  const noteData = {
    engagement: {
      active: true,
      type: 'NOTE',
    },
    associations: {
      contactIds: [contactId],
    },
    metadata: {
      body: `User tried to send a message via the website: ${message}`,
    },
  };

  const response = await fetch(hubspotEngagementsEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${hubspotApiKey}`,
    },
    body: JSON.stringify(noteData),
  });

  if (!response.ok) {
    const noteError = await response.json();
    console.error('HubSpot API note error:', noteError);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, honeypot } = req.body;

    if (honeypot) {
      // If honeypot field is filled, discard the submission
      res.status(400).json({ success: false, message: 'Spam detected' });
      return;
    }

    const data = {
      properties: {
        firstname: name,
        email: email,
        website_form_message: message,
      },
    };

    try {
      let response = await fetch(hubspotContactsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${hubspotApiKey}`,
        },
        body: JSON.stringify(data),
      });

      if (response.status === 409) {
        // Handle conflict error (contact already exists)
        console.warn('Contact with this email already exists.');
        
        // Fetch the existing contact by email
        const searchEndpoint = `https://api.hubapi.com/crm/v3/objects/contacts/search`;
        const searchResponse = await fetch(searchEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${hubspotApiKey}`,
          },
          body: JSON.stringify({
            filterGroups: [
              {
                filters: [
                  {
                    propertyName: 'email',
                    operator: 'EQ',
                    value: email,
                  },
                ],
              },
            ],
          }),
        });

        if (!searchResponse.ok) {
          const searchError = await searchResponse.json();
          console.error('HubSpot API search error:', searchError);
          throw new Error(`HTTP error! status: ${searchResponse.status}`);
        }

        const searchResult = await searchResponse.json();
        if (searchResult.results.length > 0) {
          const contactId = searchResult.results[0].id;

          // Add a note to the existing contact
          await addNoteToContact(contactId, message);

          res.status(200).json({ success: true, message: 'Note added to existing contact.' });
          return;
        } else {
          throw new Error('Contact not found');
        }
      } else if (!response.ok) {
        const creationError = await response.json();
        console.error('HubSpot API creation error:', creationError);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      res.status(200).json({ success: true, result });
    } catch (error) {
      console.error('HubSpot API error:', error);
      res.status(500).json({ success: false, message: 'Failed to submit data to HubSpot' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
