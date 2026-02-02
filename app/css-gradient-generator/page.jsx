'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CssGradientGenerator = () => {
  const [color1, setColor1] = useState('#ff7e5f'); // Default color 1
  const [color2, setColor2] = useState('#feb47b'); // Default color 2
  const [gradientType, setGradientType] = useState('linear'); // Default gradient type
  const [angle, setAngle] = useState(90); // Default angle for linear gradient
  const [cssGradient, setCssGradient] = useState('');

  const generateGradient = () => {
    const gradient = gradientType === 'linear'
      ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
      : `radial-gradient(circle, ${color1}, ${color2})`;
    setCssGradient(gradient);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cssGradient).then(() => {
      alert('Gradient CSS copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            CSS Gradient Generator
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color 1
            </label>
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color 2
            </label>
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gradient Type
            </label>
            <select
              value={gradientType}
              onChange={(e) => setGradientType(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>

          {gradientType === 'linear' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Angle (degrees)
              </label>
              <input
                type="number"
                value={angle}
                onChange={(e) => setAngle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter angle (0-360)"
                min="0"
                max="360"
              />
            </div>
          )}

          <button
            onClick={generateGradient}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Generate Gradient
          </button>

          {cssGradient && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Generated CSS Gradient</h2>
              <div
                className="h-32 rounded-md"
                style={{ background: cssGradient }}
              />
              <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto mt-2">
                {cssGradient}
              </pre>
              <button
                onClick={handleCopy}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Copy Gradient CSS
              </button>
            </div>
          )}
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Understanding Color in Web Design</h2>
          <p>
            Color is a fundamental aspect of web design that can significantly impact user experience and engagement. 
            The right color choices can evoke emotions, convey messages, and enhance the overall aesthetic of a website. 
            In this article, we will explore the importance of color in web design, the psychology of color, and how 
            to effectively use our Color Picker Tool to create stunning color palettes for your projects.
          </p>
          <h3 className="text-xl font-semibold">The Importance of Color in Web Design</h3>
          <p>
            Color plays a crucial role in web design for several reasons:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Brand Identity:</strong> Colors are often associated with brands and can help establish a strong brand identity. Consistent use of color across a website reinforces brand recognition.</li>
            <li><strong>User Experience:</strong> The right color combinations can enhance readability and navigation, making it easier for users to interact with the site.</li>
            <li><strong>Emotional Impact:</strong> Colors can evoke specific emotions and reactions. For example, blue is often associated with trust and calmness, while red can evoke excitement or urgency.</li>
            <li><strong>Visual Hierarchy:</strong> Color can be used to create a visual hierarchy, guiding users' attention to important elements such as calls to action or key information.</li>
          </ul>
          <h3 className="text-xl font-semibold">The Psychology of Color</h3>
          <p>
            Understanding the psychology of color can help designers make informed choices about their color palettes. 
            Here are some common associations with different colors:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Red:</strong> Energy, passion, urgency.</li>
            <li><strong>Blue:</strong> Trust, calmness, professionalism.</li>
            <li><strong>Green:</strong> Growth, health, tranquility.</li>
            <li><strong>Yellow:</strong> Optimism, happiness, attention.</li>
            <li><strong>Purple:</strong> Creativity, luxury, wisdom.</li>
            <li><strong>Black:</strong> Sophistication, elegance, power.</li>
            <li><strong>White:</strong> Simplicity, purity, cleanliness.</li>
          </ul>
          <h3 className="text-xl font-semibold">Using the Color Picker Tool</h3>
          <p>
            Our Color Picker Tool allows you to easily select and customize colors for your web design projects. 
            Here's how to use it effectively:
          </p>
          <ol className="list-decimal list-inside">
            <li>Select a color using the color picker.</li>
            <li>View the HEX, RGB, and HSL values of the selected color.</li>
            <li>Use these values in your CSS to apply the chosen color to your website elements.</li>
            <li>Experiment with different colors to create harmonious color palettes that enhance your design.</li>
          </ol>
          <h3 className="text-xl font-semibold">Best Practices for Color Usage</h3>
          <p>
            To maximize the effectiveness of color in your web design, consider the following best practices:
          </p>
          <ul className="list-disc list-inside">
            <li>Limit your color palette to a few key colors to maintain a cohesive look.</li>
            <li>Ensure sufficient contrast between text and background colors for readability.</li>
            <li>Test your color choices on different devices and screens to ensure consistency.</li>
            <li>Stay updated on color trends and adapt your designs accordingly.</li>
          </ul>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            Color is a powerful tool in web design that can influence user behavior and enhance the overall experience. 
            By understanding the importance of color, the psychology behind it, and utilizing our Color Picker Tool, 
            you can create visually appealing and effective designs. Start experimenting with colors today and elevate 
            your web projects to new heights!
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default CssGradientGenerator;
