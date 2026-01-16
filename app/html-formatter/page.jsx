'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HtmlFormatter = () => {
  const [htmlInput, setHtmlInput] = useState(''); // Input HTML code
  const [formattedHtml, setFormattedHtml] = useState(''); // Formatted HTML output

  const formatHtml = () => {
    const formatted = htmlInput
      .replace(/>\s+</g, '><') // Remove whitespace between tags
      .replace(/</g, '\n<') // Add new line before each tag
      .replace(/(\s*<\/\w+>)/g, '$1\n') // Add new line after closing tags
      .trim(); // Trim leading and trailing whitespace
    setFormattedHtml(formatted);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedHtml).then(() => {
      alert('Formatted HTML copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            HTML Formatter
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
            onClick={formatHtml}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Format HTML
          </button>

          {formattedHtml && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Formatted HTML</h2>
              <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto">
                {formattedHtml}
              </pre>
              <button
                onClick={handleCopy}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Copy Formatted HTML
              </button>
            </div>
          )}
        </div>
      </main>
{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding HTML Formatting</h2>
        <p>
          HTML (HyperText Markup Language) is the standard markup language used to create web pages. 
          Properly formatted HTML is crucial for ensuring that web pages are readable, maintainable, and 
          accessible. In this article, we will explore the importance of HTML formatting, common practices, 
          and how our HTML Formatter tool can help you achieve clean and organized code.
        </p>
        <h3 className="text-xl font-semibold">Why is HTML Formatting Important?</h3>
        <p>
          Proper HTML formatting enhances the readability of your code, making it easier for developers 
          to understand and maintain. Well-structured HTML also improves accessibility for users with 
          disabilities, as screen readers can interpret the content more effectively. Additionally, 
          search engines favor well-structured HTML, which can positively impact your website's SEO.
        </p>
        <h3 className="text-xl font-semibold">Common HTML Formatting Practices</h3>
        <p>
          Here are some best practices for formatting HTML:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Indentation:</strong> Use consistent indentation to visually separate nested elements. This makes it easier to see the hierarchy of your HTML structure.</li>
          <li><strong>Whitespace:</strong> Use whitespace effectively to improve readability. Avoid excessive whitespace between tags, but use it to separate logical sections of your code.</li>
          <li><strong>Line Breaks:</strong> Insert line breaks before opening tags and after closing tags to create a clear separation between elements.</li>
          <li><strong>Commenting:</strong> Use comments to explain complex sections of your HTML. This is especially helpful for other developers who may work on your code in the future.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Use the HTML Formatter Tool</h3>
        <p>
          Our HTML Formatter tool simplifies the process of cleaning up your HTML code. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Paste your unformatted HTML code into the input area.</li>
          <li>Click the "Format HTML" button to process your code.</li>
          <li>The formatted HTML will appear in the output area, ready for you to copy and use.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using an HTML Formatter</h3>
        <p>
          Using an HTML Formatter offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Time-Saving:</strong> Automatically formatting your HTML saves time compared to manual formatting.</li>
          <li><strong>Consistency:</strong> Ensures consistent formatting across your codebase, making it easier to read and maintain.</li>
          <li><strong>Error Reduction:</strong> Reduces the likelihood of errors caused by improperly nested tags or missing elements.</li>
          <li><strong>Improved Collaboration:</strong> Clean and organized code makes it easier for teams to collaborate on projects.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Proper HTML formatting is essential for creating clean, maintainable, and accessible web pages. 
          By using our HTML Formatter tool, you can ensure that your HTML code is well-structured and easy to read. 
          Start formatting your HTML today and experience the benefits of clean code!
        </p>
      </article>
<Footer />
    </div>
  );
};

export default HtmlFormatter;
