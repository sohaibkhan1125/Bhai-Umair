'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContrastAccessibilityChecker = () => {
  const [foregroundColor, setForegroundColor] = useState('#FFFFFF'); // Default foreground color
  const [backgroundColor, setBackgroundColor] = useState('#000000'); // Default background color
  const [contrastRatio, setContrastRatio] = useState(null);
  const [isAccessible, setIsAccessible] = useState(null);

  const calculateContrastRatio = (fg, bg) => {
    const luminance = (color) => {
      const rgb = color.match(/\w\w/g).map((x) => parseInt(x, 16) / 255);
      const [r, g, b] = rgb.map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const fgLuminance = luminance(fg);
    const bgLuminance = luminance(bg);
    const ratio = (Math.max(fgLuminance, bgLuminance) + 0.05) / (Math.min(fgLuminance, bgLuminance) + 0.05);
    return ratio.toFixed(2);
  };

  const checkAccessibility = () => {
    const ratio = calculateContrastRatio(foregroundColor.replace('#', ''), backgroundColor.replace('#', ''));
    setContrastRatio(ratio);
    setIsAccessible(ratio >= 4.5); // WCAG AA standard for normal text
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Contrast Accessibility Checker
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Foreground Color
            </label>
            <input
              type="color"
              value={foregroundColor}
              onChange={(e) => setForegroundColor(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Background Color
            </label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            onClick={checkAccessibility}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Check Contrast
          </button>

          {contrastRatio !== null && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Contrast Ratio</h2>
              <p className="text-gray-700">Ratio: {contrastRatio}</p>
              <p className={`text-lg font-bold ${isAccessible ? 'text-green-600' : 'text-red-600'}`}>
                {isAccessible ? 'Accessible' : 'Not Accessible'}
              </p>
            </div>
          )}
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Understanding Contrast Accessibility in Web Design</h2>
          <p>
            Contrast accessibility is a critical aspect of web design that ensures content is readable and usable 
            for all users, including those with visual impairments. Proper contrast between text and background colors 
            is essential for creating an inclusive web experience. In this article, we will explore the importance 
            of contrast accessibility, the guidelines set by the Web Content Accessibility Guidelines (WCAG), and how 
            to effectively use our Contrast Accessibility Checker tool.
          </p>
          <h3 className="text-xl font-semibold">Why is Contrast Accessibility Important?</h3>
          <p>
            Contrast accessibility is vital for several reasons:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Readability:</strong> Sufficient contrast between text and background colors enhances readability, making it easier for users to consume content.</li>
            <li><strong>Inclusivity:</strong> Ensuring that your website is accessible to users with visual impairments or color blindness is essential for inclusivity.</li>
            <li><strong>Compliance:</strong> Many organizations are required to comply with accessibility standards, such as WCAG, to ensure their websites are usable by everyone.</li>
            <li><strong>User Experience:</strong> Good contrast improves overall user experience, leading to higher engagement and satisfaction.</li>
          </ul>
          <h3 className="text-xl font-semibold">Understanding WCAG Guidelines</h3>
          <p>
            The Web Content Accessibility Guidelines (WCAG) provide a set of recommendations for making web content 
            more accessible. One of the key aspects of WCAG is the contrast ratio between text and background colors. 
            The guidelines specify the following contrast ratios:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Normal Text:</strong> A contrast ratio of at least 4.5:1 is required for normal text.</li>
            <li><strong>Large Text:</strong> A contrast ratio of at least 3:1 is required for large text (18pt or 14pt bold).</li>
            <li><strong>Graphical Objects:</strong> Any graphical objects must also meet the minimum contrast ratio requirements.</li>
          </ul>
          <h3 className="text-xl font-semibold">Using the Contrast Accessibility Checker Tool</h3>
          <p>
            Our Contrast Accessibility Checker tool allows you to easily assess the contrast ratio between foreground 
            and background colors. Here's how to use it effectively:
          </p>
          <ol className="list-decimal list-inside">
            <li>Select a foreground color using the color picker.</li>
            <li>Select a background color using the color picker.</li>
            <li>Click the "Check Contrast" button to calculate the contrast ratio.</li>
            <li>Review the results to determine if the color combination is accessible.</li>
          </ol>
          <h3 className="text-xl font-semibold">Best Practices for Ensuring Contrast Accessibility</h3>
          <p>
            To ensure your website meets contrast accessibility standards, consider the following best practices:
          </p>
          <ul className="list-disc list-inside">
            <li>Use high-contrast color combinations for text and backgrounds.</li>
            <li>Test your color choices with various tools to ensure compliance with WCAG guidelines.</li>
            <li>Consider using tools that simulate color blindness to see how your color choices appear to users with visual impairments.</li>
            <li>Regularly review and update your color schemes to maintain accessibility as design trends evolve.</li>
          </ul>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            Contrast accessibility is a crucial aspect of web design that ensures all users can access and engage 
            with your content. By understanding the importance of contrast, adhering to WCAG guidelines, and utilizing 
            our Contrast Accessibility Checker tool, you can create a more inclusive web experience. Start checking 
            your color combinations today and enhance the accessibility of your website!
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default ContrastAccessibilityChecker;
