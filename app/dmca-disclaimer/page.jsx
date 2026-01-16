'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DmcaDisclaimerGenerator = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [disclaimer, setDisclaimer] = useState('');

    const generateDisclaimer = () => {
        const disclaimerText = `
            DMCA Disclaimer

            This website, ${website}, is protected by copyright law. 
            If you believe that your work has been copied in a way that constitutes copyright infringement, 
            please contact us at ${email}.

            Name: ${name}
            Email: ${email}
            Website: ${website}
        `;
        setDisclaimer(disclaimerText);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                        DMCA Disclaimer Generator
                    </h1>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Website
                        </label>
                        <input
                            type="text"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <button
                        onClick={generateDisclaimer}
                        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                    >
                        Generate Disclaimer
                    </button>

                    {disclaimer && (
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold mb-4">Generated DMCA Disclaimer</h2>
                            <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto">
                                {disclaimer}
                            </pre>
                        </div>
                    )}
                </div>
{/* New SEO Optimized Article Section */}
                <article className="mt-8 max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold">Understanding DMCA Disclaimers</h2>
                    <p>
                        The Digital Millennium Copyright Act (DMCA) is a significant piece of legislation that addresses copyright 
                        infringement on the internet. A DMCA disclaimer is a statement that informs users about the copyright 
                        policies of a website and outlines the procedures for reporting copyright infringement. In this article, 
                        we will explore the importance of DMCA disclaimers, the key components of a DMCA disclaimer, and how to 
                        effectively use our DMCA Disclaimer Generator tool.
                    </p>
                    <h3 className="text-xl font-semibold">What is a DMCA Disclaimer?</h3>
                    <p>
                        A DMCA disclaimer is a legal notice that protects website owners from liability for copyright infringement 
                        committed by users. It serves as a notification to users that the website respects copyright laws and provides 
                        a mechanism for copyright holders to report any infringing content. By including a DMCA disclaimer, website 
                        owners can demonstrate their commitment to copyright compliance and protect themselves from potential legal 
                        issues.
                    </p>
                    <h3 className="text-xl font-semibold">Why is a DMCA Disclaimer Important?</h3>
                    <p>
                        Including a DMCA disclaimer on your website is crucial for several reasons:
                    </p>
                    <ul className="list-disc list-inside">
                        <li><strong>Legal Protection:</strong> A DMCA disclaimer provides legal protection for website owners by outlining the procedures for reporting copyright infringement.</li>
                        <li><strong>Transparency:</strong> It informs users about the website's copyright policies and the steps they can take if they believe their work has been infringed.</li>
                        <li><strong>Trust:</strong> Having a DMCA disclaimer can enhance the credibility of your website, showing users that you take copyright issues seriously.</li>
                        <li><strong>Compliance:</strong> It helps ensure compliance with copyright laws, reducing the risk of legal disputes.</li>
                    </ul>
                    <h3 className="text-xl font-semibold">Key Components of a DMCA Disclaimer</h3>
                    <p>
                        A well-crafted DMCA disclaimer should include the following key components:
                    </p>
                    <ul className="list-disc list-inside">
                        <li><strong>Contact Information:</strong> Provide a clear method for copyright holders to contact you regarding infringement claims.</li>
                        <li><strong>Identification of Infringing Material:</strong> Outline the process for identifying and reporting infringing content on your website.</li>
                        <li><strong>Response Procedures:</strong> Describe how you will respond to infringement claims and the actions you will take.</li>
                        <li><strong>Disclaimer of Liability:</strong> Include a statement that limits your liability for user-generated content.</li>
                    </ul>
                    <h3 className="text-xl font-semibold">Using the DMCA Disclaimer Generator Tool</h3>
                    <p>
                        Our DMCA Disclaimer Generator tool simplifies the process of creating a DMCA disclaimer for your website. 
                        Here's how to use it effectively:
                    </p>
                    <ol className="list-decimal list-inside">
                        <li>Enter your name, email, and website in the provided fields.</li>
                        <li>Click the "Generate Disclaimer" button to create your DMCA disclaimer.</li>
                        <li>Review the generated disclaimer and make any necessary adjustments.</li>
                        <li>Copy the disclaimer and add it to your website to ensure compliance with copyright laws.</li>
                    </ol>
                    <h3 className="text-xl font-semibold">Best Practices for DMCA Disclaimers</h3>
                    <p>
                        To maximize the effectiveness of your DMCA disclaimer, consider the following best practices:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Keep your disclaimer up to date with current contact information and procedures.</li>
                        <li>Make the disclaimer easily accessible on your website, typically in the footer or a dedicated page.</li>
                        <li>Regularly review and revise your disclaimer to ensure compliance with changing laws and regulations.</li>
                        <li>Educate your users about copyright issues and the importance of respecting intellectual property rights.</li>
                    </ul>
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        A DMCA disclaimer is an essential component of any website that hosts user-generated content. By understanding 
                        the importance of DMCA disclaimers and utilizing our DMCA Disclaimer Generator tool, you can protect your 
                        website from potential legal issues and demonstrate your commitment to copyright compliance. Start generating 
                        your DMCA disclaimer today and ensure your website is legally protected!
                    </p>
                </article>
</main>
            <Footer />
        </div>
    );
};

export default DmcaDisclaimerGenerator;
