'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DomainAgeChecker = () => {
    const [domain, setDomain] = useState('');
    const [results, setResults] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const checkDomainAge = () => {
        if (!domain) {
            alert('Please enter a domain name.');
            return;
        }
        fetchDomainAge(domain);
    };

    const fetchDomainAge = (domain) => {
        setLoading(true);
        setError('');
        setResults(null);
        
        fetch(`https://seo-api2.p.rapidapi.com/domain-age-checker?domain=${domain}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'cca330428dmsh4b459b029c77e3cp1a7504jsn8f61efbba564',
                'x-rapidapi-host': 'seo-api2.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.domain_name) {
                displayResults(data);
            } else {
                setError('Failed to fetch domain information.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setError('An error occurred while fetching domain information.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    const displayResults = (data) => {
        const formattedResults = {
            domainName: data.domain_name || 'N/A',
            domainAge: data.age || 'N/A',
            creationDate: new Date(data.creation_date * 1000).toLocaleDateString() || 'N/A',
            updatedDate: new Date(data.updated_date * 1000).toLocaleDateString() || 'N/A',
            expirationDate: new Date(data.expiration_date * 1000).toLocaleDateString() || 'N/A',
        };
        setResults(formattedResults);
        setError('');
    };

    const copyResults = () => {
        if (results) {
            const resultsText = `
                Domain Name: ${results.domainName}
                Domain Age: ${results.domainAge}
                Creation Date: ${results.creationDate}
                Last Updated: ${results.updatedDate}
                Expiration Date: ${results.expirationDate}
            `.trim();

            navigator.clipboard.writeText(resultsText).then(() => {
                alert('Results copied to clipboard!');
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="container mx-auto p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Domain Age Checker Tool</h1>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="domain" className="block text-gray-700">Enter Domain Name</label>
                        <input
                            type="text"
                            id="domain"
                            className="w-full p-2 border rounded"
                            placeholder="e.g., facebook.com"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={checkDomainAge}
                        className={`w-full text-white p-2 rounded-lg ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Check Domain Age'}
                    </button>
                </div>

                {results && (
                    <div id="results" className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Domain Information</h2>
                        <p className="mb-2">Domain Name: {results.domainName}</p>
                        <p className="mb-2">Domain Age: {results.domainAge}</p>
                        <p className="mb-2">Creation Date: {results.creationDate}</p>
                        <p className="mb-2">Last Updated: {results.updatedDate}</p>
                        <p className="mb-2">Expiration Date: {results.expirationDate}</p>
                        <button
                            onClick={copyResults}
                            className="w-full bg-green-500 text-white p-2 rounded-lg flex items-center justify-center mt-4"
                        >
                            Copy All Results
                        </button>
                    </div>
                )}

                {error && (
                    <div className="mt-4 text-red-500">
                        {error}
                    </div>
                )}
            </main>
{/* New SEO Optimized Article Section */}
            <article className="mt-8 max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold">Understanding Domain Age and Its Importance</h2>
                <p>
                    Domain age refers to the length of time a domain name has been registered. It is an important factor in 
                    search engine optimization (SEO) and can influence a website's credibility and trustworthiness. In this 
                    article, we will explore the significance of domain age, how it affects SEO, and how to use our Domain 
                    Age Checker tool effectively.
                </p>
                <h3 className="text-xl font-semibold">What is Domain Age?</h3>
                <p>
                    Domain age is calculated from the date a domain name is registered until the current date. Older domains 
                    are often perceived as more trustworthy by search engines and users alike. This perception can be attributed 
                    to the idea that older domains have been around longer, have established a history, and are less likely to 
                    be associated with spam or malicious activity.
                </p>
                <h3 className="text-xl font-semibold">Why is Domain Age Important for SEO?</h3>
                <p>
                    Domain age plays a significant role in SEO for several reasons:
                </p>
                <ul className="list-disc list-inside">
                    <li><strong>Trustworthiness:</strong> Search engines tend to favor older domains, as they are often seen as more reliable and credible.</li>
                    <li><strong>Link Building:</strong> Older domains may have accumulated backlinks over time, which can positively impact search rankings.</li>
                    <li><strong>Brand Recognition:</strong> Established domains are more likely to be recognized by users, leading to higher click-through rates.</li>
                    <li><strong>Stability:</strong> Older domains are less likely to change ownership or undergo drastic changes, providing a sense of stability for users.</li>
                </ul>
                <h3 className="text-xl font-semibold">How to Check Domain Age</h3>
                <p>
                    Checking the age of a domain is simple with our Domain Age Checker tool. Here's how to use it effectively:
                </p>
                <ol className="list-decimal list-inside">
                    <li>Enter the domain name you want to check in the input field.</li>
                    <li>Click the "Check Domain Age" button to initiate the lookup.</li>
                    <li>Review the domain information displayed, including the age, creation date, and expiration date.</li>
                </ol>
                <h3 className="text-xl font-semibold">Best Practices for Domain Management</h3>
                <p>
                    To maximize the benefits of owning a domain, consider the following best practices:
                </p>
                <ul className="list-disc list-inside">
                    <li>Regularly monitor your domain's registration status and renewal dates to avoid losing ownership.</li>
                    <li>Keep your contact information up to date to ensure you receive important notifications from your registrar.</li>
                    <li>Consider purchasing additional domain extensions or variations to protect your brand.</li>
                    <li>Utilize a reputable registrar that offers good customer support and security features.</li>
                </ul>
                <h3 className="text-xl font-semibold">Conclusion</h3>
                <p>
                    Understanding domain age and its implications for SEO is essential for anyone involved in web development or online marketing. 
                    By using our Domain Age Checker tool, you can easily assess the age of any domain and make informed decisions about your 
                    online presence. Start checking your domain age today and enhance your website's credibility and trustworthiness!
                </p>
            </article>
            <Footer />

</div>
    );
};

export default DomainAgeChecker;
