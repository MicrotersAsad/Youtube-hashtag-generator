import Head from 'next/head';
import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Terms & Conditions - AI YouTube Hashtag Generator</title>
                <meta
                    name="description"
                    content="Explore our Terms & Conditions for AI YouTube Hashtag Generator. Learn about Privacy eligibility, non-Privacyable scenarios, and how to contact support for assistance."
                />
                <meta name="keywords" content="Terms & Conditions, AI YouTube Hashtag Generator, subscription Privacy, support" />
                <meta name="author" content="AI YouTube Hashtag Generator Team" />
            </Head>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
                    Terms and Conditions
                </h1>
                <div>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-700">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            By accessing or using <strong>AI YouTube Hashtag Generator</strong>, you agree to comply
                            with and be bound by these Terms and Conditions. If you do not agree to these terms, you
                            are prohibited from using the tool or accessing the website.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-700">2. Free Service</h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            <strong>AI YouTube Hashtag Generator</strong> is currently offered as a free tool for
                            personal and commercial purposes. You may generate hashtags for your YouTube content without
                            any associated fees.
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg">
                            However, we reserve the right to introduce paid features or subscription plans in the future
                            with prior notice to our users.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-700">3. User Conduct</h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            As a user of <strong>AI YouTube Hashtag Generator</strong>, you agree to:
                        </p>
                        <ul className="list-disc ml-6 space-y-2 text-gray-600 text-base sm:text-lg">
                            <li>Use the tool responsibly and not for illegal, unethical, or harmful activities.</li>
                            <li>Refrain from attempting to hack, damage, or reverse-engineer the tool.</li>
                            <li>
                                Avoid using automated systems (bots, scripts, etc.) to interact with the tool without
                                explicit permission.
                            </li>
                            <li>Respect intellectual property laws and refrain from redistributing the tool's output as a competing service.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-700">4. Intellectual Property</h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            All content, code, and features of <strong>AI YouTube Hashtag Generator</strong> are the
                            intellectual property of the tool's creators. You may not replicate, distribute, or modify
                            the tool or its output without explicit written consent.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-700">5. Liability Disclaimer</h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            While we strive to ensure <strong>AI YouTube Hashtag Generator</strong> operates smoothly
                            and provides accurate results, we make no guarantees regarding its performance, availability,
                            or accuracy. You use the tool at your own risk, and we are not liable for any damages,
                            losses, or disruptions caused by your use of the tool.
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg">
                            The tool is provided "as is" without warranty of any kind, either express or implied.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-700">6. Changes to Terms</h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            We reserve the right to update or modify these Terms and Conditions at any time without
                            prior notice. Any changes will be effective immediately upon posting to this page. Continued
                            use of <strong>AI YouTube Hashtag Generator</strong> after such updates constitutes your
                            acceptance of the revised terms.
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg">
                            It is your responsibility to review these Terms periodically to stay informed of any
                            changes.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-700">7. Governing Law</h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            These Terms and Conditions are governed by and construed in accordance with the laws of your
                            jurisdiction. Any disputes arising from your use of <strong>AI YouTube Hashtag Generator</strong> will be subject to the exclusive jurisdiction of the courts in your region.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3 text-gray-700">8. Contact Us</h2>
                        <p className="text-gray-600 text-base sm:text-lg">
                            If you have any questions or concerns about these Terms and Conditions, please contact us:
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg">Email: <a href="mailto:support@aihashtaggen.com" className="text-blue-500">support@aihashtaggen.com</a></p>
                        <p className="text-gray-600 text-base sm:text-lg">Phone: +05 773 325 777</p>
                        <p className="text-gray-600 text-base sm:text-lg">Address: 123 Innovation Way, Tech City, CA 94043</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
