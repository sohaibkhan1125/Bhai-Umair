'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditionsPage = () => {
  return (
    <section>
      <Navbar />
      <div className="py-20 bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">Terms and Conditions</h1>
          <p className="text-gray-700 mb-4">
            Welcome to Web Craft Kit! These terms and conditions outline the rules and regulations for the use of our website, located at <strong>webcraftkit.online</strong>.
          </p>
          <p className="mb-4">
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Web Craft Kit if you do not agree to all of the terms and conditions stated on this page.
          </p>
          <p className="mb-4 text-gray-700">
            Unless otherwise stated, Web Craft Kit and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from <strong>webcraftkit.online</strong> for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p className="mb-4">
            You must not:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Republish material from our website</li>
            <li>Sell, rent, or sub-license material from the website</li>
            <li>Reproduce, duplicate, or copy material from the website</li>
            <li>Redistribute content from Web Craft Kit (unless content is specifically made for redistribution)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">Reservation of Rights</h2>
          <p className="mb-4">
            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">Removal of links from our website</h2>
          <p className="mb-4">
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
          </p>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about these Terms and Conditions, please contact us at:
            <a href="mailto:admin@webcraftkit.online" className="text-blue-500 hover:underline"> admin@webcraftkit.online</a> the date of the publication of the revised terms on our website. Please check this page regularly to ensure you are familiar with the current version.
          </p>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms and Conditions, please contact us at:
            <a href="mailto:admin@webcraftkit.online" className="text-blue-500 hover:underline"> admin@webcraftkit.online</a>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default TermsAndConditionsPage;

