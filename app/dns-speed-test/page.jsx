'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DnsSpeedTestTool = () => {
    const [dnsList, setDnsList] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const testDNSServers = () => {
        const servers = dnsList.trim().split("\n");
        setResults([]); // Clear previous results
        setShowResults(false);

        if (servers.length === 0) {
            alert("Please enter at least one DNS server.");
            return;
        }

        servers.forEach(server => {
            const startTime = performance.now();
            const img = new Image();
            const url = `https://${server.trim()}/favicon.ico`;

            img.onload = img.onerror = () => {
                const endTime = performance.now();
                const responseTime = Math.round(endTime - startTime);
                setResults(prevResults => [
                    ...prevResults,
                    { server: server.trim(), time: responseTime }
                ]);
                setShowResults(true);
            };

            img.src = url + "?cache=" + Math.random(); // Prevent caching
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                        DNS Speed Test Tool
                    </h1>
                    <p className="mb-4">Enter a list of DNS server addresses and test their speed.</p>
                    <textarea
                        id="dnsList"
                        value={dnsList}
                        onChange={(e) => setDnsList(e.target.value)}
                        placeholder="Enter DNS servers (one per line)"
                        rows="5"
                        cols="50"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <br />
                    <button
                        onClick={testDNSServers}
                        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
                    >
                        Test DNS Servers
                    </button>

                    {showResults && (
                        <table className="mt-8 w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-2 bg-green-500 text-white">DNS Server</th>
                                    <th className="border border-gray-300 p-2 bg-green-500 text-white">Response Time (ms)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 p-2">{result.server}</td>
                                        <td className="border border-gray-300 p-2">{result.time} ms</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
{/* New SEO Optimized Article Section */}
                <article className="mt-8 max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold">Understanding DNS Speed Testing</h2>
                    <p>
                        DNS speed testing is an essential process for evaluating the performance of Domain Name System (DNS) servers. 
                        The speed at which a DNS server responds to queries can significantly impact the overall performance of a website. 
                        In this article, we will explore the importance of DNS speed testing, how it works, and how to effectively use 
                        our DNS Speed Test Tool to optimize your web experience.
                    </p>
                    <h3 className="text-xl font-semibold">What is DNS?</h3>
                    <p>
                        The Domain Name System (DNS) is a hierarchical system that translates human-readable domain names into 
                        IP addresses, allowing users to access websites easily. When you enter a URL in your browser, a DNS query 
                        is sent to a DNS server, which resolves the domain name to its corresponding IP address, enabling the browser 
                        to connect to the correct server.
                    </p>
                    <h3 className="text-xl font-semibold">Why is DNS Speed Important?</h3>
                    <p>
                        The speed of DNS resolution is crucial for several reasons:
                    </p>
                    <ul className="list-disc list-inside">
                        <li><strong>User Experience:</strong> Slow DNS resolution can lead to delays in loading websites, negatively impacting user experience.</li>
                        <li><strong>Website Performance:</strong> Faster DNS responses can improve overall website performance, leading to higher engagement and lower bounce rates.</li>
                        <li><strong>SEO Impact:</strong> Search engines consider page load times as a ranking factor. Faster DNS resolution can contribute to better search engine rankings.</li>
                        <li><strong>Reliability:</strong> Testing DNS speed helps identify reliable DNS servers that provide consistent performance.</li>
                    </ul>
                    <h3 className="text-xl font-semibold">How DNS Speed Testing Works</h3>
                    <p>
                        DNS speed testing involves measuring the time it takes for a DNS server to respond to a query. 
                        This is typically done by sending a request to the DNS server and recording the time it takes to receive a response. 
                        The results can help users determine which DNS servers provide the fastest response times for their location.
                    </p>
                    <h3 className="text-xl font-semibold">Using the DNS Speed Test Tool</h3>
                    <p>
                        Our DNS Speed Test Tool allows you to easily evaluate the performance of different DNS servers. 
                        Here's how to use it effectively:
                    </p>
                    <ol className="list-decimal list-inside">
                        <li>Enter a list of DNS server addresses in the provided text area, one per line.</li>
                        <li>Click the "Test DNS Servers" button to initiate the speed test.</li>
                        <li>Review the results displayed in the table, which includes the response time for each DNS server.</li>
                    </ol>
                    <h3 className="text-xl font-semibold">Best Practices for DNS Management</h3>
                    <p>
                        To ensure optimal DNS performance, consider the following best practices:
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Regularly test your DNS servers to identify any performance issues.</li>
                        <li>Use multiple DNS servers for redundancy and reliability.</li>
                        <li>Choose DNS servers that are geographically closer to your location for faster response times.</li>
                        <li>Stay informed about DNS updates and changes in server performance.</li>
                    </ul>
                    <h3 className="text-xl font-semibold">Conclusion</h3>
                    <p>
                        DNS speed testing is a vital process for ensuring optimal website performance and user experience. 
                        By using our DNS Speed Test Tool, you can easily evaluate the performance of different DNS servers 
                        and make informed decisions to enhance your web experience. Start testing your DNS servers today and 
                        ensure your website is running at its best!
                    </p>
                </article>
</main>
            <Footer />
        </div>
    );
};

export default DnsSpeedTestTool;
