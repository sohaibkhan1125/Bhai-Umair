'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CssMinifier = () => {
  const [cssInput, setCssInput] = useState(''); // Input CSS code
  const [minifiedCss, setMinifiedCss] = useState(''); // Minified CSS output

  const minifyCss = () => {
    const minified = cssInput
      .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
      .replace(/\/\*.*?\*\//g, '') // Remove comments
      .replace(/\s*([{};:])\s*/g, '$1') // Remove spaces around braces, semicolons, and colons
      .trim(); // Trim leading and trailing whitespace
    setMinifiedCss(minified);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(minifiedCss).then(() => {
      alert('Minified CSS copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            CSS Minifier
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input CSS
            </label>
            <textarea
              value={cssInput}
              onChange={(e) => setCssInput(e.target.value)}
              rows="10"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Paste your CSS code here..."
            />
          </div>

          <button
            onClick={minifyCss}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Minify CSS
          </button>

          {minifiedCss && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Minified CSS</h2>
              <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto">
                {minifiedCss}
              </pre>
              <button
                onClick={handleCopy}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Copy Minified CSS
              </button>
            </div>
          )}
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">The Importance of CSS Minification</h2>
          <p>
            CSS minification is a crucial process in web development that involves removing unnecessary characters 
            from CSS code without affecting its functionality. This process helps reduce the file size, leading to 
            faster loading times and improved performance for websites. In this article, we will explore the benefits 
            of CSS minification, best practices, and how to effectively use our CSS Minifier Tool.
          </p>
          <h3 className="text-xl font-semibold">Why Minify CSS?</h3>
          <p>
            Minifying CSS offers several advantages:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Improved Load Times:</strong> Smaller CSS files load faster, which can significantly enhance the user experience, especially on mobile devices.</li>
            <li><strong>Reduced Bandwidth Usage:</strong> Minified files consume less bandwidth, which can lead to cost savings for both developers and users.</li>
            <li><strong>Better Performance:</strong> Faster loading times can improve overall website performance, positively impacting search engine rankings.</li>
            <li><strong>Cleaner Code:</strong> Minification removes comments and whitespace, resulting in cleaner code that is easier to manage and maintain.</li>
          </ul>
          <h3 className="text-xl font-semibold">How CSS Minification Works</h3>
          <p>
            The process of CSS minification involves several steps:
          </p>
          <ol className="list-decimal list-inside">
            <li>Removing whitespace, line breaks, and comments from the CSS code.</li>
            <li>Shortening variable names and class names where possible.</li>
            <li>Combining multiple CSS rules into a single line to reduce file size.</li>
          </ol>
          <h3 className="text-xl font-semibold">Using the CSS Minifier Tool</h3>
          <p>
            Our CSS Minifier Tool simplifies the minification process. Here's how to use it effectively:
          </p>
          <ol className="list-decimal list-inside">
            <li>Paste your CSS code into the input field.</li>
            <li>Click the "Minify CSS" button to generate the minified version of your code.</li>
            <li>Review the minified CSS in the output area.</li>
            <li>Use the "Copy Minified CSS" button to copy the minified code for use in your projects.</li>
          </ol>
          <h3 className="text-xl font-semibold">Best Practices for CSS Minification</h3>
          <p>
            To maximize the benefits of CSS minification, consider the following best practices:
          </p>
          <ul className="list-disc list-inside">
            <li>Minify CSS files before deploying them to production to ensure optimal performance.</li>
            <li>Use version control to keep track of your original CSS files, as minified files can be difficult to read.</li>
            <li>Combine multiple CSS files into one before minification to reduce HTTP requests.</li>
            <li>Regularly review and update your CSS to remove unused styles and improve efficiency.</li>
          </ul>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            CSS minification is an essential practice for web developers looking to optimize their websites for 
            performance and user experience. By using our CSS Minifier Tool, you can easily minify your CSS code, 
            leading to faster load times and improved site performance. Start minifying your CSS today and enjoy 
            the benefits of cleaner, more efficient code!
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default CssMinifier;
