'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CssCodeFormatter = () => {
  const [cssInput, setCssInput] = useState('');
  const [formattedCss, setFormattedCss] = useState('');

  const formatCss = () => {
    try {
      // Using a simple regex to format CSS
      const formatted = cssInput
        .replace(/([{}])/g, '\n$1\n') // Add new lines around braces
        .replace(/;\s*/g, ';\n') // Add new lines after semicolons
        .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
        .trim(); // Trim leading/trailing whitespace

      setFormattedCss(formatted);
    } catch (error) {
      setFormattedCss('Error formatting CSS');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedCss).then(() => {
      alert('Formatted CSS copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            CSS Code Formatter
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Input CSS Code
            </label>
            <textarea
              value={cssInput}
              onChange={(e) => setCssInput(e.target.value)}
              rows="10"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your CSS code here..."
            />
          </div>

          <button
            onClick={formatCss}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Format CSS
          </button>

          {formattedCss && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Formatted CSS</h2>
              <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto">
                {formattedCss}
              </pre>
              <button
                onClick={handleCopy}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Copy Formatted CSS
              </button>
            </div>
          )}
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">The Importance of CSS Code Formatting</h2>
          <p>
            Cascading Style Sheets (CSS) are essential for styling web pages, allowing developers to create visually 
            appealing and user-friendly interfaces. However, as projects grow in complexity, maintaining clean and 
            organized CSS code becomes increasingly important. In this article, we will explore the significance of 
            CSS code formatting, best practices for writing clean CSS, and how to use our CSS Code Formatter tool to 
            enhance your coding workflow.
          </p>
          <h3 className="text-xl font-semibold">Why is CSS Code Formatting Important?</h3>
          <p>
            Properly formatted CSS code is crucial for several reasons:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Readability:</strong> Well-structured CSS is easier to read and understand, making it simpler for developers to collaborate and maintain the code.</li>
            <li><strong>Debugging:</strong> Clean code is easier to debug. When issues arise, developers can quickly identify and fix problems in a well-organized stylesheet.</li>
            <li><strong>Consistency:</strong> Consistent formatting helps maintain a uniform style across the entire codebase, which is especially important in larger projects.</li>
            <li><strong>Efficiency:</strong> Properly formatted CSS can improve loading times and performance by reducing unnecessary code and ensuring efficient selectors.</li>
          </ul>
          <h3 className="text-xl font-semibold">Best Practices for Writing Clean CSS</h3>
          <p>
            To ensure your CSS is clean and maintainable, consider the following best practices:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Use Consistent Indentation:</strong> Choose a consistent indentation style (spaces or tabs) and stick to it throughout your stylesheet.</li>
            <li><strong>Organize Your Styles:</strong> Group related styles together and use comments to separate sections for better organization.</li>
            <li><strong>Minimize Specificity:</strong> Avoid overly specific selectors to keep your CSS flexible and easier to override when necessary.</li>
            <li><strong>Utilize Shorthand Properties:</strong> Use shorthand properties where possible to reduce the amount of code and improve readability.</li>
            <li><strong>Comment Your Code:</strong> Use comments to explain complex styles or sections of code, making it easier for others (and yourself) to understand later.</li>
          </ul>
          <h3 className="text-xl font-semibold">Using the CSS Code Formatter Tool</h3>
          <p>
            Our CSS Code Formatter tool is designed to help you quickly format your CSS code for better readability 
            and organization. Here's how to use it effectively:
          </p>
          <ol className="list-decimal list-inside">
            <li>Paste your CSS code into the input field.</li>
            <li>Click the "Format CSS" button to apply formatting.</li>
            <li>Review the formatted CSS in the output area.</li>
            <li>Use the "Copy Formatted CSS" button to copy the formatted code to your clipboard for easy use in your projects.</li>
          </ol>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            Proper CSS code formatting is essential for maintaining clean, readable, and efficient stylesheets. By 
            following best practices and utilizing our CSS Code Formatter tool, you can enhance your coding workflow 
            and improve collaboration with other developers. Start formatting your CSS today and experience the benefits 
            of clean code!
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default CssCodeFormatter;
