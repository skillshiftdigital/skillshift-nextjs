// pages/api/newsletter.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587', 10),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

      // Send notification email
      await transporter.sendMail({
        from: `"Website Newsletter" <${process.env.EMAIL_USER}>`, // sender address
        to: process.env.NOTIFICATION_EMAIL, // list of receivers
        subject: 'New Newsletter Subscription', // Subject line
        html: `<p>A new subscription has been created:</p>
               <p><strong>Email:</strong> ${email}</p>`, // html body
      });

      res.status(200).json({ success: true, result });
    } catch (error) {
      console.error('HubSpot API error:', error);
      res.status(500).json({ success: false, message: 'Failed to submit data to HubSpot' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
