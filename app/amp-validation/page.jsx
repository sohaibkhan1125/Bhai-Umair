'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AmpValidation = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const validateAMP = async () => {
        if (!url.trim()) {
            alert('Please enter a valid URL.');
            return;
        }

        setLoading(true);
        setShowResult(false);

        // Simulate API call (replace with actual API call in production)
        setTimeout(() => {
            const isValidAMP = Math.random() > 0.5; // Random result for demo
            setResult({
                isValid: isValidAMP,
                url: url
            });
            setLoading(false);
            setShowResult(true);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto p-6">
<div className="mx-auto bg-white rounded-lg shadow-lg p-8">
<h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
                        AMP Validator Tool
                    </h1>

                    <div className="mb-6">
                        <label 
                            htmlFor="url" 
                            className="block text-gray-600 text-lg mb-2"
                        >
                            Enter the URL of the page to validate:
                        </label>
                        <input
                            type="text"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter URL..."
                            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-md focus:border-blue-600 focus:outline-none transition-colors duration-200"
                        />
                    </div>

                    <button
                        onClick={validateAMP}
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:bg-blue-400"
                    >
                        {loading ? 'Validating...' : 'Validate AMP'}
                    </button>

                    {loading && (
                        <div className="mt-6 text-center text-blue-600">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-2">Validating...</p>
                        </div>
                    )}

                    {showResult && (
                        <div className={`mt-6 p-4 rounded-md ${
                            result.isValid 
                                ? 'bg-green-100 border-2 border-green-200 text-green-800' 
                                : 'bg-red-100 border-2 border-red-200 text-red-800'
                        }`}>
                            <p className="text-lg">
                                The page at <strong>{result.url}</strong> is 
                                {result.isValid ? ' a valid' : ' not a valid'} AMP page.
                            </p>
                        </div>
                    )}

{/* New SEO Optimized Article Section */}
                    <article className="mt-8 max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold">Understanding AMP Validation</h2>
                        <p>
                            AMP, or Accelerated Mobile Pages, is an open-source initiative aimed at improving the performance of web pages on mobile devices. 
                            By adhering to AMP specifications, web pages can load faster, providing a better user experience. However, to ensure that your 
                            pages are compliant with AMP standards, validation is essential.
                        </p>
                        <h3 className="text-xl font-semibold">What is AMP Validation?</h3>
                        <p>
                            AMP validation is the process of checking whether a web page meets the AMP HTML specifications. 
                            Valid AMP pages are optimized for speed and can be cached by Google, which can significantly enhance 
                            their visibility in search results. This is particularly important in an era where mobile browsing is 
                            predominant, and users expect fast-loading content.
                        </p>
                        <h3 className="text-xl font-semibold">Why is AMP Validation Important?</h3>
                        <p>
                            The importance of AMP validation cannot be overstated. Here are several reasons why it matters:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong>Improved Load Times:</strong> Valid AMP pages load almost instantly, which can reduce bounce rates and increase user engagement.</li>
                            <li><strong>Enhanced SEO:</strong> Google favors AMP pages in search results, especially in mobile searches, which can lead to higher traffic.</li>
                            <li><strong>Better User Experience:</strong> Fast-loading pages provide a seamless experience for users, encouraging them to stay longer on your site.</li>
                        </ul>
                        <h3 className="text-xl font-semibold">How to Validate AMP Pages</h3>
                        <p>
                            Validating AMP pages can be done using various tools, including Google's AMP Validator. 
                            Here's a simple process to validate your AMP pages:
                        </p>
                        <ol className="list-decimal list-inside">
                            <li>Enter the URL of the page you want to validate in the AMP Validator tool.</li>
                            <li>Click the "Validate" button to initiate the validation process.</li>
                            <li>Review the results to see if your page is valid or if there are any errors that need to be addressed.</li>
                        </ol>
                        <h3 className="text-xl font-semibold">Common AMP Validation Errors</h3>
                        <p>
                            While validating AMP pages, you may encounter several common errors. Understanding these can help you 
                            troubleshoot effectively:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong>Missing Required Tags:</strong> Ensure that all necessary AMP tags are included in your HTML.</li>
                            <li><strong>Invalid HTML Structure:</strong> AMP has strict rules regarding HTML structure; ensure your code adheres to these.</li>
                            <li><strong>JavaScript Restrictions:</strong> AMP restricts the use of custom JavaScript; ensure you are using AMP components instead.</li>
                        </ul>
                        <h3 className="text-xl font-semibold">Conclusion</h3>
                        <p>
                            In conclusion, AMP validation is a crucial step in ensuring that your web pages are optimized for mobile 
                            performance. By validating your AMP pages, you can improve load times, enhance SEO, and provide a better 
                            user experience. Use our AMP Validator Tool to easily check your pages and ensure they meet AMP standards, 
                            helping you stay competitive in the digital landscape.
                        </p>
                    </article>
</div>
            </div>
            <Footer />
        </div>
    );
};

export default AmpValidation;
