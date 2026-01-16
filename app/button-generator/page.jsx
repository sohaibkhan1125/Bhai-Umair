'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ButtonGenerator = () => {
  const [buttonText, setButtonText] = useState('Click Me');
  const [buttonColor, setButtonColor] = useState('#4F46E5'); // Default color
  const [buttonSize, setButtonSize] = useState('md'); // Default size
  const [buttonStyle, setButtonStyle] = useState('solid'); // Default style
  const [hoverEffect, setHoverEffect] = useState('bg-blue-600'); // Default hover effect

  const buttonSizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const buttonClasses = `
    ${buttonSizes[buttonSize]} 
    ${buttonStyle === 'solid' ? 'bg-blue-500 text-white' : 'bg-transparent border border-blue-500 text-blue-500'}
    rounded-lg 
    hover:${hoverEffect} 
    transition-colors duration-200
  `;

  const handleCopyCode = () => {
    const code = `<button class="${buttonClasses}" style="background-color: ${buttonStyle === 'solid' ? buttonColor : 'transparent'};">${buttonText}</button>`;
    navigator.clipboard.writeText(code).then(() => {
      alert('Button code copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Button Generator Tool
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Button Text
            </label>
            <input
              type="text"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter button text"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Button Color
            </label>
            <input
              type="color"
              value={buttonColor}
              onChange={(e) => setButtonColor(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Button Size
            </label>
            <select
              value={buttonSize}
              onChange={(e) => setButtonSize(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Button Style
            </label>
            <select
              value={buttonStyle}
              onChange={(e) => setButtonStyle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="solid">Solid</option>
              <option value="outline">Outline</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hover Effect
            </label>
            <select
              value={hoverEffect}
              onChange={(e) => setHoverEffect(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="bg-blue-600">Solid Darker</option>
              <option value="bg-blue-100">Outline Light</option>
              <option value="bg-blue-300">Solid Lighter</option>
            </select>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Button Preview</h2>
            <button
              className={buttonClasses}
              style={{ backgroundColor: buttonStyle === 'solid' ? buttonColor : 'transparent' }}
            >
              {buttonText}
            </button>
          </div>

          <div className="mt-8">
            <button
              onClick={handleCopyCode}
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              Copy Button Code
            </button>
          </div>
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Creating Effective Buttons in Web Design</h2>
          <p>
            Buttons are a fundamental element of web design, serving as the primary means of interaction for users. 
            A well-designed button can significantly enhance user experience and engagement on a website. In this 
            article, we will explore the importance of buttons in web design, best practices for creating effective 
            buttons, and how to use our Button Generator tool to create custom buttons that fit your design needs.
          </p>
          <h3 className="text-xl font-semibold">The Importance of Buttons</h3>
          <p>
            Buttons are essential for guiding users through a website or application. They serve as call-to-action 
            elements, prompting users to take specific actions such as submitting a form, navigating to another page, 
            or making a purchase. The effectiveness of a button can influence user behavior and conversion rates, 
            making it crucial for designers to pay attention to their design and functionality.
          </p>
          <h3 className="text-xl font-semibold">Best Practices for Button Design</h3>
          <p>
            To create effective buttons, consider the following best practices:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Clarity:</strong> Use clear and concise text that communicates the action the button performs. Avoid vague labels.</li>
            <li><strong>Contrast:</strong> Ensure that the button stands out from the background and is easily visible. Use contrasting colors to draw attention.</li>
            <li><strong>Size:</strong> Make buttons large enough to be easily clickable, especially on mobile devices. Consider touch targets for mobile users.</li>
            <li><strong>Feedback:</strong> Provide visual feedback when a button is clicked or hovered over. This can include color changes, shadows, or animations.</li>
            <li><strong>Consistency:</strong> Maintain a consistent style for buttons throughout your website to create a cohesive user experience.</li>
          </ul>
          <h3 className="text-xl font-semibold">Using the Button Generator Tool</h3>
          <p>
            Our Button Generator tool allows you to create custom buttons quickly and easily. Here's how to use it:
          </p>
          <ol className="list-decimal list-inside">
            <li>Enter the desired button text in the input field.</li>
            <li>Select a color for the button using the color picker.</li>
            <li>Choose the button size and style (solid or outline).</li>
            <li>Set the hover effect to enhance user interaction.</li>
            <li>Preview the button and copy the generated code for use in your projects.</li>
          </ol>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            Buttons play a vital role in web design, serving as the primary means of interaction for users. By 
            following best practices for button design and utilizing our Button Generator tool, you can create 
            effective buttons that enhance user experience and drive engagement. Start designing your buttons today 
            and elevate your web projects!
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default ButtonGenerator;
