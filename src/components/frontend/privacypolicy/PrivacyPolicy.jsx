import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-800 min-h-screen rounded-xl">
      <div className="bg-gray-800 shadow-2xl rounded-xl border border-gray-900 overflow-hidden">
        <div className="bg-gray-950 px-6 py-5 border-b border-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                PRIVACY POLICY
              </h1>
              <p className="text-md text-gray-400 mt-1">
                Last updated: 02/02/2026
              </p>
            </div>
            <div className="text-sm text-gray-300 sm:text-right">
              <p className="font-medium text-gray-200">S D W MARKETING MANGEMENT CO. L.L.C</p>
              <p>Email: hessan@sdw-ds.com</p>
              <p>Phone: 07896737814</p>
            </div>
          </div>
        </div>
        <div className="px-6 py-8 space-y-8">
          <p className="text-gray-300 leading-relaxed text-sm">
            S D W Marketing Management Co. L.L.C (“we”, “us”, or “our”) is committed to protecting your personal data and respecting your privacy.
            <br />
            This Privacy Policy explains how we collect, use, store and protect personal data when you use our ERP software platform and related services (“Service”).
          </p>
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
              1. Who We Are
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              We are the data controller responsible for your personal data.
            </p>
            <div className="mt-2 text-gray-300 space-y-1">
              <p><span className="font-medium text-gray-200 text-sm">Company name:</span> S D W Marketing Management Co. L.L.C</p>
              <p><span className="font-medium text-gray-200 text-sm">Email:</span> hessan@sdw-ds.com</p>
              <p><span className="font-medium text-gray-200 text-sm">Registered address:</span> Office 19, Floor 2, Al Arif Shipping Building, Port Saeed, Dubai, UAE</p>
            </div>
            <p className="mt-3 text-gray-300 text-sm">
              You have the right to lodge a complaint with the Information Commissioner’s Office (ICO):{" "}
              <a 
                href="https://www.ico.org.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 text-sm"
              >
                www.ico.org.uk
              </a>
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
              2. Personal Data We Collect
            </h2>
            <p className="text-sm leading-relaxed">We may collect and process: </p>
            <ul className="list-disc pl-8 space-y-1 text-gray-300 text-sm">
              <li>Name, email address, phone number</li>
              <li>Company details</li>
              <li>Login credentials</li>
              <li>Billing and payment information</li>
              <li>IP address and device information</li>
              <li>Support communications</li>
              <li>Usage data within the Service</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
              3. How We Use Your Data
            </h2>
            <p className="text-sm leading-relaxed">We use personal data to: </p>
            <ul className="list-disc pl-8 space-y-1 text-gray-300 text-sm">
              <li>Provide and operate the Service</li>
              <li>Manage subscriptions and billing</li>
              <li>Communicate with users</li>
              <li>Provide customer support</li>
              <li>Improve system performance and security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
              4. Lawful Bases for Processing
            </h2>
            <p className="text-sm leading-relaxed">We process personal data under the following lawfull bases: </p>
            <ul className="list-disc pl-8 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium text-gray-200">Contract</span> – to provide the Service</li>
              <li><span className="font-medium text-gray-200">Legal obligation</span> – accounting and compliance</li>
              <li><span className="font-medium text-gray-200">Legitimate interests</span> – security, analytics, service improvement</li>
              <li><span className="font-medium text-gray-200">Consent</span> – marketing communications (where required)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
              5. Data Sharing
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              We may share personal data with:
            </p>
            <ul className="list-disc pl-8 mt-1 space-y-1 text-gray-300 text-sm">
              <li>Hosting providers</li>
              <li>Payment processors</li>
              <li>Email and communication providers</li>
              <li>Support and monitoring tools</li>
            </ul>
            <p className="mt-2 text-gray-300 text-sm">
              All third parties are required to process data securely and lawfully.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
              6. International Transfers
            </h2>
            <p className="text-gray-300">
              Where data is transferred outside the UK, we ensure appropriate safeguards are in place, such as standard contractual clauses.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
              7. Data Retention
            </h2>
            <p className="text-sm leading-relaxed">We retain personal data only for as long as necessary</p>
            <ul className="list-disc pl-8 space-y-1 text-gray-300 text-sm">
              <li><span className="font-medium text-gray-200">Account data:</span> duration of contract + legal retention period</li>
              <li><span className="font-medium text-gray-200">Billing data:</span> up to 6 years</li>
              <li><span className="font-medium text-gray-200">Logs and analytics:</span> up to 12 months</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
              8. Your Rights
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              You have the right to:
            </p>
            <ul className="list-disc pl-8 mt-1 space-y-1 text-gray-300 text-sm">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure</li>
              <li>Restrict processing</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-3 text-gray-300 text-sm">
              Requests can be made using the contact details above.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
              9. Security
            </h2>
            <p className="text-gray-300 text-sm">
              We implement appropriate technical and organisational measures to protect personal data from loss, misuse, or unauthorised access.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-3">
              10. Changes
            </h2>
            <p className="text-gray-300 text-sm">
              We may update this Privacy Policy from time to time. Continued use of the Service constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;