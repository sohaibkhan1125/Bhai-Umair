'use client';

import React, { useState } from 'react';
import http from 'https';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DnsLookupTool = () => {
    const [domain, setDomain] = useState('');
    const [dnsRecords, setDnsRecords] = useState(null);
    const [error, setError] = useState('');

    const handleDomainChange = (e) => {
        setDomain(e.target.value);
    };

    const performDnsLookup = () => {
        setError('');
        setDnsRecords(null);
        
        const options = {
            method: 'GET',
            hostname: 'dns-lookup11.p.rapidapi.com',
            port: null,
            path: `/nslookup?domain=${domain}`,
            headers: {
                'x-rapidapi-key': 'b9b276d0c1msh822603b0c726babp1e9c4djsn4fbc5f965e78',
                'x-rapidapi-host': 'dns-lookup11.p.rapidapi.com'
            }
        };

        const req = http.request(options, function (res) {
            const chunks = [];

            res.on('data', function (chunk) {
                chunks.push(chunk);
            });

            res.on('end', function () {
                const body = Buffer.concat(chunks);
                const data = JSON.parse(body.toString());
                setDnsRecords(data);
            });
        });

        req.on('error', (err) => {
            setError('Failed to fetch DNS records');
            console.error(err);
        });

        req.end();
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                        DNS Lookup Tool
                    </h1>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Enter Domain Name
                        </label>
                        <input
                            type="text"
                            value={domain}
                            onChange={handleDomainChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <button
                        onClick={performDnsLookup}
                        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                    >
                        Lookup DNS Records
                    </button>

                    {error && (
                        <div className="mt-4 text-red-500">
                            {error}
                        </div>
                    )}

                    {dnsRecords && (
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold mb-4">DNS Records</h2>
                            <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto">
                                {JSON.stringify(dnsRecords, null, 2)}
                            </pre>
                        </div>
                    )}
                </div>
{/* New SEO Optimized Article Section */}
                <article className="mt-8 max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold">Understanding DNS and Its Importance</h2>
                    <p>
                        The Domain Name System (DNS) is a fundamental component of the internet that translates human-readable 
                        domain names into IP addresses, allowing users to access websites easily. Without DNS, we would have 
                        to remember complex numerical IP addresses to visit our favorite sites. In this article, we will explore 
                        the importance of DNS, how it works, and how to use our DNS Lookup Tool effectively.
                    </p>
                    <h3 className="text-xl font-semibold">What is DNS?</h3>
                    <p>
                        DNS is often referred to as the "phonebook of the internet." It is a hierarchical system that consists 
                        of various servers that store and manage domain names and their corresponding IP addresses. When a user 
                        types a domain name into their browser, a DNS query is sent to a DNS server, which then resolves the 
                        domain name to its associated IP address, allowing the browser to connect to the correct server.
                    </p>
                    <h3 className="text-xl font-semibold">How DNS Works</h3>
                    <p>
                        The process of DNS resolution involves several steps:
                    </p>
                    <ol className="list-decimal list-inside">
                        <li>The user enters a domain name in their browser.</li>
                        <li>The browser checks its cache to see if it has recently resolved the domain name.</li>
                        <li>If not found in the cache, the browser sends a DNS query to a DNS resolver.</li>
                        <li>The resolver queries the appropriate DNS servers to find the IP address associated with the domain name.</li>
                        <li>Once the IP address is found, it is returned to the browser, which then connects to the web server.</li>
                    </ol>
                    <h3 className="text-xl font-semibold">Why is DNS Important?</h3>
                    <p>
                        DNS plays a crucial role in the functionality of the internet for several reasons:
                    </p>
                    <ul className="list-disc list-inside">
                        <li><strong>User-Friendly:</strong> DNS allows users to access websites using easy-to-remember domain names instead of numerical IP addresses.</li>
                        <li><strong>Load Balancing:</strong> DNS can distribute traffic across multiple servers, improving website performance and reliability.</li>
                        <li><strong>Redundancy:</strong> DNS provides redundancy by allowing multiple DNS servers to handle requests, ensuring that users can still access websites even if one server fails.</li>
                        <li><strong>Security:</strong> DNS can be configured to enhance security through features like DNSSEC, which helps protect against certain types of attacks.</li>
                    </ul>
                    <h3 className="text-xl font-semibold">Using the DNS Lookup Tool</h3>
                    <p>
                        Our DNS Lookup Tool allows you to easily check the DNS records associated with a domain name. Here's how to use it effectively:
                    </p>
                    <ol className="list-decimal list-inside">
                        <li>Enter the domain name you want to look up in the input field.</li>
                        <li>Click the "Lookup DNS Records" button to initiate the DNS query.</li>
                        <li>Review the DNS records displayed in the output area, which may include A records, CNAME records, MX records, and more.</li>
                    </ol>
                    <h3 className="text-xl font-semibold">Best Practices for DNS Management</h3>
                    <p>
                        To ensure optimal performance and reliability of your DNS, consider the following best practices:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Regularly monitor your DNS records to ensure they are accurate and up to date.</li>
                        <li>Implement DNS redundancy by using multiple DNS servers to handle requests.</li>
                        <li>Utilize DNS security features, such as DNSSEC, to protect against attacks.</li>
                        <li>Keep your domain registration information current to avoid service interruptions.</li>
                    </ul>
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        Understanding DNS and its importance is essential for anyone involved in web development or online business. 
                        By using our DNS Lookup Tool, you can easily check the DNS records for any domain and ensure that your 
                        website is functioning correctly. Start using the tool today to enhance your understanding of DNS and improve 
                        your web presence!
                    </p>
                </article>
</main>
            <Footer />
        </div>
    );
};

export default DnsLookupTool;
