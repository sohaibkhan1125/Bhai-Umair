'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <section>
      <Navbar />
      <div className="py-20 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
          <p className="text-gray-700 mb-4">
            At Web Craft Kit, accessible from <strong>webcraftkit.online</strong>, your privacy is of utmost importance to us. This Privacy Policy document outlines the types of personal information we collect, how we use it, and your rights regarding that information.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">Information We Collect</h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways, including directly from you, through cookies and tracking technologies, and from third parties.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">How We Use Your Information</h2>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">Third-Party Privacy Policies</h2>
          <p className="mb-4">
            Our Privacy Policy does not apply to other advertisers or websites. Therefore, we advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
          </p>

          <h2 className="text-xl font-bold mb-2">How We Protect Your Information</h2>
          <p className="text-gray-700 mb-4">
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. These security measures include password protected directories and databases to safeguard your information.
          </p>
          <h2 className="text-xl font-bold mb-2">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to request copies of your personal information. You may also request that we correct any information you believe is inaccurate or complete information you believe is incomplete. In certain circumstances, you may request that we erase your personal information.
          </p>
          <h2 className="text-xl font-bold mb-2">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
            <a href="mailto:admin@webcraftkit.online" className="text-blue-500 hover:underline"> admin@webcraftkit.online</a>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PrivacyPolicyPage;
