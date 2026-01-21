'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CssGridGenerator = () => {
  const [rows, setRows] = useState(2); // Default number of rows
  const [columns, setColumns] = useState(2); // Default number of columns
  const [gridCss, setGridCss] = useState('');

  const generateGridCss = () => {
    const css = `
      .grid-container {
        display: grid;
        grid-template-rows: repeat(${rows}, 1fr);
        grid-template-columns: repeat(${columns}, 1fr);
        gap: 10px; /* Adjust the gap between grid items */
      }
    `;
    setGridCss(css);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(gridCss).then(() => {
      alert('Grid CSS copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            CSS Grid Generator
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Rows
            </label>
            <input
              type="number"
              value={rows}
              onChange={(e) => setRows(e.target.value)}
              min="1"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Columns
            </label>
            <input
              type="number"
              value={columns}
              onChange={(e) => setColumns(e.target.value)}
              min="1"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            onClick={generateGridCss}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Generate Grid CSS
          </button>

          {gridCss && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Generated CSS</h2>
              <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto">
                {gridCss}
              </pre>
              <button
                onClick={handleCopy}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Copy Grid CSS
              </button>
            </div>
          )}
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Understanding CSS Grid Layout</h2>
          <p>
            CSS Grid Layout is a powerful layout system that allows developers to create complex web layouts with ease. 
            It provides a two-dimensional grid-based layout system, enabling the arrangement of elements in rows and columns. 
            In this article, we will explore the fundamentals of CSS Grid, its benefits, and how to effectively use our 
            CSS Grid Generator tool to create responsive layouts.
          </p>
          <h3 className="text-xl font-semibold">What is CSS Grid?</h3>
          <p>
            CSS Grid is a layout system that allows developers to design web pages using a grid-based approach. 
            It enables the creation of complex layouts without the need for floats or positioning. With CSS Grid, 
            you can define rows and columns, and place elements within the grid, making it easier to create responsive designs.
          </p>
          <h3 className="text-xl font-semibold">Benefits of Using CSS Grid</h3>
          <p>
            There are several advantages to using CSS Grid for web design:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Two-Dimensional Layouts:</strong> CSS Grid allows for both rows and columns, making it easier to create complex layouts.</li>
            <li><strong>Responsive Design:</strong> CSS Grid makes it simple to create responsive designs that adapt to different screen sizes.</li>
            <li><strong>Alignment Control:</strong> You can easily align items within the grid, providing greater control over the layout.</li>
            <li><strong>Less Code:</strong> CSS Grid can reduce the amount of code needed to create layouts, making your stylesheets cleaner and more maintainable.</li>
          </ul>
          <h3 className="text-xl font-semibold">Using the CSS Grid Generator Tool</h3>
          <p>
            Our CSS Grid Generator tool simplifies the process of creating CSS Grid layouts. Here's how to use it effectively:
          </p>
          <ol className="list-decimal list-inside">
            <li>Enter the desired number of rows and columns for your grid.</li>
            <li>Click the "Generate Grid CSS" button to create the CSS code for your grid layout.</li>
            <li>Review the generated CSS and copy it for use in your projects.</li>
          </ol>
          <h3 className="text-xl font-semibold">Best Practices for CSS Grid Layouts</h3>
          <p>
            To maximize the effectiveness of CSS Grid, consider the following best practices:
          </p>
          <ul className="list-disc list-inside">
            <li>Use semantic HTML elements to improve accessibility and SEO.</li>
            <li>Keep your grid layout simple and avoid unnecessary complexity.</li>
            <li>Test your grid layouts on various devices to ensure responsiveness.</li>
            <li>Utilize CSS Grid features like `grid-template-areas` for more intuitive layouts.</li>
          </ul>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            CSS Grid Layout is a powerful tool for modern web design, allowing developers to create flexible and responsive layouts with ease. 
            By understanding the fundamentals of CSS Grid and utilizing our CSS Grid Generator tool, you can enhance your web projects and 
            create visually appealing designs. Start experimenting with CSS Grid today and take your web design skills to the next level!
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default CssGridGenerator;
