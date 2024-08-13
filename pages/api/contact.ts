// pages/api/contact.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const hubspotContactsEndpoint = 'https://api.hubapi.com/crm/v3/objects/contacts';
const hubspotEmailEndpoint = 'https://api.hubapi.com/marketing/v3/transactional/single-email/send';
const hubspotApiKey = process.env.HUBSPOT_API_KEY;
const hubspotEmailId = process.env.HUBSPOT_EMAIL_ID;
const siteOwnerEmail = process.env.SITE_OWNER_EMAIL;

async function fetchWithAuth(url: string, options: any) {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${hubspotApiKey}`,
  };

  const response = await fetch(url, { ...options, headers });
  if (!response.ok) {
    const error: any = await response.json();
    console.error('HubSpot API error:', error);

    if (response.status === 409 && error.category === 'CONFLICT') {
      console.log(`Contact already exists. Existing ID: ${error.message.split('Existing ID: ')[1]}`);
      return { error: 'Contact already exists', details: error };
    } else if (response.status === 403 && error.category === 'MISSING_SCOPES') {
      console.error('Missing required scopes:', error);
      return { error: 'Missing required scopes', details: error };
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }
  return response.json();
}

const sendEmailToContact = async (contactEmail: string) => {
  const emailData = {
    emailId: hubspotEmailId,
    message: {
      to: contactEmail,
    },
    contactProperties: [
      {
        name: 'email',
        value: contactEmail,
      },
    ],
  };

  await fetchWithAuth(hubspotEmailEndpoint, {
    method: 'POST',
    body: JSON.stringify(emailData),
  });
};

const notifySiteOwner = async (contactEmail: string, message: string) => {
  const emailData = {
    emailId: hubspotEmailId,
    message: {
      to: siteOwnerEmail,
      from: contactEmail,
      subject: 'New Message Received',
      text: `You have received a new message from ${contactEmail}:\n\n${message}`,
    },
    contactProperties: [
      {
        name: 'email',
        value: siteOwnerEmail,
      },
    ],
  };

  await fetchWithAuth(hubspotEmailEndpoint, {
    method: 'POST',
    body: JSON.stringify(emailData),
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message, honeypot } = req.body;

    if (honeypot) {
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
      const contactResponse: any = await fetchWithAuth(hubspotContactsEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (contactResponse.error === 'Contact already exists') {
        const existingContactId = contactResponse.details.message.split('Existing ID: ')[1];
        await fetchWithAuth(`${hubspotContactsEndpoint}/${existingContactId}`, {
          method: 'PATCH',
          body: JSON.stringify({ properties: { website_form_message: message } }),
        });
      } else if (contactResponse.error === 'Missing required scopes') {
        res.status(403).json({ success: false, message: 'Missing required scopes to perform this action' });
        return;
      }

      await sendEmailToContact(email);
      await notifySiteOwner(email, message);

      res.status(200).json({ success: true, message: 'Contact created or updated successfully.' });
    } catch (error) {
      console.error('Failed to submit data to HubSpot:', error);
      res.status(500).json({ success: false, message: 'Failed to submit data to HubSpot' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}