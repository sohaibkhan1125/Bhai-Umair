'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BoxShadowGenerator = () => {
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#000000');
  const [boxShadow, setBoxShadow] = useState('');

  const generateBoxShadow = () => {
    setBoxShadow(`${horizontal}px ${vertical}px ${blur}px ${spread}px ${color}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Box Shadow Generator
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Horizontal Offset
            </label>
            <input
              type="number"
              value={horizontal}
              onChange={(e) => setHorizontal(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter horizontal offset"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vertical Offset
            </label>
            <input
              type="number"
              value={vertical}
              onChange={(e) => setVertical(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter vertical offset"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Blur Radius
            </label>
            <input
              type="number"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter blur radius"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Spread Radius
            </label>
            <input
              type="number"
              value={spread}
              onChange={(e) => setSpread(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter spread radius"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shadow Color
            </label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            onClick={generateBoxShadow}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Generate Box Shadow
          </button>

          {boxShadow && (
            <div className="mt-8 p-6 border border-gray-200 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <div
                className="w-full h-32 bg-white border border-gray-300 rounded-md"
                style={{ boxShadow: boxShadow }}
              >
                <p className="text-center text-gray-600 mt-12">{boxShadow}</p>
              </div>
            </div>
          )}
        </div>
{/* Instructions */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Adjust the horizontal and vertical offsets to position the shadow.</li>
            <li>Set the blur radius to control the softness of the shadow.</li>
            <li>Use the spread radius to increase or decrease the size of the shadow.</li>
            <li>Select a color for your shadow using the color picker.</li>
            <li>Click "Generate Box Shadow" to see the result in the preview area.</li>
          </ol>
        </div>

        {/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Understanding Box Shadows in CSS</h2>
          <p>
            Box shadows are a powerful feature in CSS that allow developers to create depth and dimension 
            in their web designs. By adding shadows to elements, you can enhance the visual hierarchy of 
            your content, making it more engaging and easier to navigate. In this article, we will explore 
            the fundamentals of box shadows, their syntax, and how to effectively use our Box Shadow Generator tool.
          </p>
          <h3 className="text-xl font-semibold">What is a Box Shadow?</h3>
          <p>
            A box shadow is a visual effect that adds a shadow to an element's box model. This effect can 
            create the illusion of depth, making elements appear as if they are floating above the background. 
            Box shadows can be customized in terms of color, size, blur, and position, allowing for a wide 
            range of creative possibilities.
          </p>
          <h3 className="text-xl font-semibold">How Box Shadows Work</h3>
          <p>
            The CSS property for creating box shadows is `box-shadow`. This property accepts several values:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Horizontal Offset:</strong> The distance of the shadow from the element on the x-axis.</li>
            <li><strong>Vertical Offset:</strong> The distance of the shadow from the element on the y-axis.</li>
            <li><strong>Blur Radius:</strong> The amount of blur applied to the shadow, creating a softer edge.</li>
            <li><strong>Spread Radius:</strong> The size of the shadow, which can be increased or decreased.</li>
            <li><strong>Color:</strong> The color of the shadow, which can be specified using color names, hex codes, or RGBA values.</li>
          </ul>
          <h3 className="text-xl font-semibold">Benefits of Using Box Shadows</h3>
          <p>
            Box shadows offer several advantages in web design:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Visual Depth:</strong> Shadows create a sense of depth, making elements stand out and improving user experience.</li>
            <li><strong>Focus:</strong> By adding shadows to important elements, you can draw attention to them and guide users through your content.</li>
            <li><strong>Customization:</strong> Box shadows can be easily customized to fit your design aesthetic, allowing for creative freedom.</li>
            <li><strong>Responsive Design:</strong> Shadows can enhance the appearance of elements on various screen sizes, contributing to a cohesive design.</li>
          </ul>
          <h3 className="text-xl font-semibold">Using the Box Shadow Generator Tool</h3>
          <p>
            Our Box Shadow Generator tool simplifies the process of creating custom box shadows. Here's how to use it:
          </p>
          <ol className="list-decimal list-inside">
            <li>Adjust the horizontal and vertical offsets to position the shadow as desired.</li>
            <li>Set the blur radius to control how soft or sharp the shadow appears.</li>
            <li>Use the spread radius to increase or decrease the size of the shadow.</li>
            <li>Select a color for your shadow using the color picker.</li>
            <li>Click "Generate Box Shadow" to see the result in the preview area.</li>
          </ol>
          <h3 className="text-xl font-semibold">Best Practices for Using Box Shadows</h3>
          <p>
            To maximize the effectiveness of box shadows, consider the following best practices:
          </p>
          <ul className="list-disc list-inside">
            <li>Use shadows sparingly to avoid overwhelming the design.</li>
            <li>Ensure that the shadow color complements the overall color scheme of your site.</li>
            <li>Test shadows on different backgrounds to ensure they remain visible and effective.</li>
            <li>Consider accessibility; ensure that shadows do not hinder readability or usability.</li>
          </ul>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            Box shadows are a versatile and powerful tool in CSS that can enhance the visual appeal of your web 
            designs. By understanding how to use box shadows effectively and utilizing our Box Shadow Generator tool, 
            you can create stunning effects that improve user experience and engagement. Start experimenting with 
            box shadows today and elevate your web design to the next level!
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default BoxShadowGenerator;
