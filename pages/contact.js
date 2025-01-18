import Head from 'next/head';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setStatus('Failed to send message. Please try again later.');
        }
    };

    return (
        <div id="contact" className="py-10 px-5 bg-gray-100">
            <Head>
                <title>Contact Us - AI YouTube Hashtag Generator</title>
                <meta
                    name="description"
                    content="Contact AI YouTube Hashtag Generator. Reach out for inquiries, support, or feedback. We're here to help!"
                />
                <meta name="keywords" content="Contact, AI YouTube Hashtag Generator, support" />
                <meta name="author" content="AI YouTube Hashtag Generator Team" />
            </Head>
            <div className="container max-w-7xl mx-auto">
                <div className="flex justify-center">
                    <h2 className="text-4xl font-bold text-center">Contact us</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
                    <div data-aos="fade-right" className="space-y-6">
                        <div>
                            <h6 className="text-lg font-bold">Phone:</h6>
                            <p className="text-gray-600 text-base sm:text-lg">Phone: +05 773 325 777</p>
                        </div>
                        <div>
                            <h6 className="text-lg font-bold">Email:</h6>
                            <p className="text-gray-600 text-base sm:text-lg">
                                Email: <a href="mailto:support@aihashtaggen.com" className="text-blue-500">support@aihashtaggen.com</a>
                            </p>
                        </div>
                        <div>
                            <h6 className="text-lg font-bold">Address:</h6>
                            <p className="text-gray-600 text-base sm:text-lg">Address: 123 Innovation Way, Tech City, CA 94043</p>
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    id="form_name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    id="form_email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    id="form_subject"
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Your Subject"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="form_message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
