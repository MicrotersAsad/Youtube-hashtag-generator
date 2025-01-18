import React from 'react';
import Head from 'next/head';

const RefundPolicy = () => {
    return (
        <div className="py-10 px-5 bg-gray-100">
            <Head>
                <title>Refund Policy - AI YouTube Hashtag Generator</title>
                <meta
                    name="description"
                    content="Explore our Refund Policy for AI YouTube Hashtag Generator. Learn about refund eligibility, non-refundable scenarios, and how to contact support for assistance."
                />
                <meta name="keywords" content="Refund Policy, AI YouTube Hashtag Generator, subscription refund, support" />
                <meta name="author" content="AI YouTube Hashtag Generator Team" />
            </Head>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6">Refund Policy</h1>
                <div>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">1. Free Service</h2>
                        <p>
                            <strong>AI YouTube Hashtag Generator</strong> is currently offered as a free tool. Since no
                            payment is required to access the tool, there is no refund policy applicable. Users are
                            welcome to explore and use the tool without incurring any charges.
                        </p>
                        <p>
                            In the event that a payment model is introduced, users will be notified in advance, and this
                            policy will be updated to reflect the changes.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">2. Eligibility for Refunds</h2>
                        <p>
                            When paid features or premium plans are introduced, refunds may be applicable in the
                            following cases:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                If a technical issue prevents access to a purchased feature, and the issue cannot be
                                resolved within a reasonable time frame.
                            </li>
                            <li>
                                If the service provided is significantly different from what was advertised or promised.
                            </li>
                            <li>
                                If a user accidentally purchases a subscription and notifies us within 48 hours of the
                                transaction.
                            </li>
                        </ul>
                        <p>
                            Refund requests must be submitted within 30 days of the original purchase date to be
                            eligible for review.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">3. Non-Refundable Scenarios</h2>
                        <p>
                            Certain situations may not qualify for refunds, including but not limited to:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Change of mind after purchase.</li>
                            <li>Failure to cancel a subscription before the renewal date.</li>
                            <li>
                                Issues resulting from the user's own technical setup or equipment that are beyond our
                                control.
                            </li>
                            <li>Misuse or violation of our terms and conditions.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">4. Refund Process</h2>
                        <p>
                            To request a refund, please contact our support team with the following information:
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Your name and email address used during the purchase.</li>
                            <li>The transaction ID or receipt for the purchase.</li>
                            <li>A detailed explanation of the reason for the refund request.</li>
                        </ul>
                        <p>
                            Refund requests will be reviewed within 5-7 business days, and eligible refunds will be
                            processed to the original payment method within 10 business days after approval.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">5. Subscription Cancellation</h2>
                        <p>
                            If we introduce subscription plans, users can cancel their subscriptions at any time through
                            their account settings. Cancellations will apply to the next billing cycle, and no refunds
                            will be issued for the current billing period.
                        </p>
                        <p>
                            We recommend canceling at least 24 hours before the renewal date to avoid being charged for
                            the next period.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">6. Customer Support</h2>
                        <p>
                            If you have any questions, concerns, or need assistance with payments or refunds, please
                            contact our support team. We are here to help and ensure your satisfaction with our
                            services.
                        </p>
                        <p>Email: <a href="mailto:support@aihashtaggen.com" className="text-blue-500">support@aihashtaggen.com</a></p>
                        <p>Phone: +05 773 325 777</p>
                        <p>Address: 123 Innovation Way, Tech City, CA 94043</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
