'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ColorPickerTool = () => {
  const [color, setColor] = useState('#4F46E5'); // Default color

  const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    }
    // 6 digits
    else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }

    return `RGB: ${r}, ${g}, ${b}`;
  };

  const hexToHsl = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return `HSL: ${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Color Picker Tool
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Color
            </label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Color Values</h2>
            <p className="text-gray-700">HEX: {color}</p>
            <p className="text-gray-700">{hexToRgb(color)}</p>
            <p className="text-gray-700">{hexToHsl(color)}</p>
          </div>
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

export default ColorPickerTool;
