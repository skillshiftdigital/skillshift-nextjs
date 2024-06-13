// pages/api/newsletter.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    const hubspotEndpoint = 'https://api.hubapi.com/crm/v3/objects/contacts';
    const hubspotApiKey = process.env.HUBSPOT_API_KEY;

    const data = {
      properties: {
        email: email,
      },
    };

    try {
      const response = await fetch(hubspotEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${hubspotApiKey}`,
        },
        body: JSON.stringify(data),
      });

      if (response.status === 409) {
        console.warn('Contact with this email already exists.');
        res.status(200).json({ success: false, message: 'This email is already subscribed.' });
        return;
      }

      if (!response.ok) {
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
