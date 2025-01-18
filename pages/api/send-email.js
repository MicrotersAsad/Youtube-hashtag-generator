import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

           const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.NEXT_PUBLIC_EMAIL_USER,
              pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
            },
          });
        try {
            await transporter.sendMail({
                from: `"${name}" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
                to: `"<${email}>`, // Replace with your email
                subject: `New Contact Form Submission: ${subject}`,
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
                        <div style="background-color: #007BFF; color: #fff; padding: 20px; text-align: center;">
                            <h1 style="margin: 0; font-size: 24px;">AI YouTube Hashtag Generator</h1>
                            <p style="margin: 0; font-size: 16px;">New Contact Form Submission</p>
                        </div>
                        <div style="padding: 20px;">
                            <h2 style="font-size: 20px; margin-bottom: 10px;">Contact Details</h2>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Subject:</strong> ${subject}</p>
                            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                            <h2 style="font-size: 20px; margin-bottom: 10px;">Message</h2>
                            <p style="white-space: pre-line;">${message}</p>
                            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                            <p style="font-size: 14px; color: #555;">This message was sent via the contact form on your website.</p>
                        </div>
                        <div style="background-color: #f4f4f4; padding: 10px; text-align: center; font-size: 12px; color: #777;">
                            <p style="margin: 0;">&copy; ${new Date().getFullYear()} AI YouTube Hashtag Generator. All Rights Reserved.</p>
                        </div>
                    </div>
                `,
            });
            

            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
