'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HtmlMinifier = () => {
  const [htmlInput, setHtmlInput] = useState(''); // Input HTML code
  const [minifiedHtml, setMinifiedHtml] = useState(''); // Minified HTML output

  const minifyHtml = () => {
    const minified = htmlInput
      .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
      .replace(/>\s+</g, '><')        // Remove space between tags
      .replace(/\s{2,}/g, ' ')       // Collapse multiple spaces
      .trim();
    setMinifiedHtml(minified);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(minifiedHtml).then(() => {
      alert('HTML copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            HTML Minifier
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input HTML
            </label>
            <textarea
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
              rows="10"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Paste your HTML code here..."
            />
          </div>

          <button
            onClick={minifyHtml}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Minify HTML
          </button>

          {minifiedHtml && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Minified HTML</h2>
              <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto whitespace-pre-wrap break-all">
                {minifiedHtml}
              </pre>
              <button
                onClick={handleCopy}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Copy Minified HTML
              </button>
            </div>
          )}
        </div>
      </main>
      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding HTML Minification</h2>
        <p>
          HTML minification is the process of removing unnecessary characters from HTML code without changing its functionality.
          This includes removing whitespace, comments, and other non-essential elements. Minification is crucial for optimizing
          web performance, as it reduces the size of HTML files, leading to faster load times and improved user experience.
          In this article, we will explore the importance of HTML minification, its benefits, and how to effectively use
          our HTML Minifier tool.
        </p>
        <h3 className="text-xl font-semibold">Why is HTML Minification Important?</h3>
        <p>
          The primary goal of HTML minification is to enhance the performance of web pages. Here are some key reasons
          why minification is important:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Faster Load Times:</strong> Minified HTML files are smaller in size, which means they can be downloaded
            more quickly by browsers. This leads to faster page load times, which is critical for user retention and
            overall satisfaction.</li>
          <li><strong>Reduced Bandwidth Usage:</strong> Smaller HTML files consume less bandwidth, which can be particularly
            beneficial for users on mobile devices or those with limited data plans.</li>
          <li><strong>Improved SEO:</strong> Search engines favor fast-loading websites. By minifying HTML, you can improve
            your site's performance, which can positively impact your search engine rankings.</li>
          <li><strong>Enhanced User Experience:</strong> A faster website provides a better user experience, reducing bounce
            rates and increasing engagement.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Minify HTML</h3>
        <p>
          Minifying HTML can be done manually or through automated tools. Here's how to effectively minify HTML:
        </p>
        <ol className="list-decimal list-inside">
          <li>Remove unnecessary whitespace, including spaces, tabs, and line breaks.</li>
          <li>Eliminate comments that are not needed for the final output.</li>
          <li>Use a minification tool or library to automate the process, ensuring that the original functionality remains intact.</li>
        </ol>
        <h3 className="text-xl font-semibold">Using the HTML Minifier Tool</h3>
        <p>
          Our HTML Minifier tool simplifies the process of minifying your HTML code. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Paste your HTML code into the input area.</li>
          <li>Click the "Minify HTML" button to process your code.</li>
          <li>The minified HTML will appear in the output area, ready for you to copy and use.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using an HTML Minifier</h3>
        <p>
          Using an HTML Minifier offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Efficiency:</strong> Automating the minification process saves time and reduces the risk of human error.</li>
          <li><strong>Consistency:</strong> Ensures that all HTML files are minified uniformly, maintaining a clean codebase.</li>
          <li><strong>Easy Integration:</strong> Minified HTML can be easily integrated into your web projects without affecting functionality.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          HTML minification is a vital practice for optimizing web performance. By using our HTML Minifier tool, you can
          ensure that your HTML code is clean, efficient, and ready for production. Start minifying your HTML today and
          experience the benefits of faster load times and improved user experience!
        </p>
      </article>
      <Footer />
    </div>
  );
};

export default HtmlMinifier;
