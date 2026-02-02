'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HexToJsxConverter = () => {
    const [hexColor, setHexColor] = useState('');
    const [jsxStyle, setJsxStyle] = useState('');
    const [error, setError] = useState('');

    const convertHexToJsx = () => {
        // Validate hex color input
        const hexPattern = /^#([0-9A-F]{3}){1,2}$/i;
        if (!hexPattern.test(hexColor)) {
            setError('Please enter a valid hex color code (e.g., #ff5733 or #f00).');
            setJsxStyle('');
            return;
        }

        // Convert hex to RGB
        let r, g, b;
        if (hexColor.length === 4) { // Short hex format
            r = parseInt(hexColor[1] + hexColor[1], 16);
            g = parseInt(hexColor[2] + hexColor[2], 16);
            b = parseInt(hexColor[3] + hexColor[3], 16);
        } else { // Long hex format
            r = parseInt(hexColor.slice(1, 3), 16);
            g = parseInt(hexColor.slice(3, 5), 16);
            b = parseInt(hexColor.slice(5, 7), 16);
        }

        // Create JSX style object
        const styleObject = `{
    backgroundColor: 'rgb(${r}, ${g}, ${b})'
}`;

        setJsxStyle(styleObject);
        setError('');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="container mx-auto p-4 md:p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Hex to JSX Converter</h1>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="hexColor" className="block text-gray-700">Enter Hex Color Code</label>
                        <input
                            type="text"
                            id="hexColor"
                            value={hexColor}
                            onChange={(e) => setHexColor(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="#ff5733"
                        />
                    </div>
                    <button
                        onClick={convertHexToJsx}
                        className="w-full bg-blue-500 text-white p-2 rounded-lg"
                    >
                        Convert to JSX
                    </button>
                    {error && (
                        <div className="mt-4 text-red-500">{error}</div>
                    )}
                    {jsxStyle && (
                        <div className="mt-4 bg-gray-100 p-4 rounded-lg overflow-x-auto">
                            <h2 className="text-xl font-bold">Generated JSX Style</h2>
                            <pre className="text-gray-700 whitespace-pre-wrap break-all">{jsxStyle}</pre>
                        </div>
                    )}
                </div>
            </main>
            {/* New SEO Optimized Article Section */}
            <article className="mt-8 max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold">Understanding Hex Colors and JSX Styling</h2>
                <p>
                    Hexadecimal color codes, commonly referred to as hex colors, are a way to represent colors in web design.
                    They are widely used in CSS and other styling languages to define colors for various elements. In this article,
                    we will explore what hex colors are, how to convert them to JSX style objects, and the importance of color
                    in web design.
                </p>
                <h3 className="text-xl font-semibold">What are Hex Colors?</h3>
                <p>
                    A hex color code is a six-digit representation of a color, prefixed with a hash symbol (#). The code consists
                    of three pairs of hexadecimal digits, where each pair represents the intensity of red, green, and blue (RGB)
                    components of the color. For example, the hex code <code>#ff5733</code> represents a color with full red,
                    a medium amount of green, and a low amount of blue.
                </p>
                <h3 className="text-xl font-semibold">The Structure of Hex Color Codes</h3>
                <p>
                    Hex color codes can be in two formats: short and long. The short format consists of three digits, where each
                    digit is repeated to form a six-digit code. For example, <code>#f00</code> is equivalent to <code>#ff0000</code>,
                    representing pure red. The long format consists of six digits, allowing for a wider range of colors.
                </p>
                <h3 className="text-xl font-semibold">Converting Hex Colors to JSX</h3>
                <p>
                    In React, inline styles are defined using JavaScript objects. To convert a hex color to a JSX style object,
                    we need to convert the hex values to RGB format. This is essential because JSX requires the color to be specified
                    in the <code>rgb(r, g, b)</code> format. Our Hex to JSX Converter tool simplifies this process by allowing users
                    to input a hex color code and receive the corresponding JSX style object.
                </p>
                <h3 className="text-xl font-semibold">Why Color Matters in Web Design</h3>
                <p>
                    Color plays a crucial role in web design, influencing user experience and perception. Here are some reasons
                    why color is important:
                </p>
                <ul className="list-disc list-inside">
                    <li><strong>Brand Identity:</strong> Colors are often associated with brands and can evoke specific emotions.
                        Consistent use of color helps reinforce brand identity.</li>
                    <li><strong>User Engagement:</strong> Well-chosen colors can enhance user engagement and make content more
                        appealing. Colors can guide users' attention to important elements.</li>
                    <li><strong>Accessibility:</strong> Choosing the right color combinations is essential for accessibility.
                        High contrast between text and background colors improves readability for all users.</li>
                    <li><strong>Emotional Response:</strong> Colors can evoke emotions and influence user behavior. For example,
                        blue is often associated with trust, while red can evoke excitement or urgency.</li>
                </ul>
                <h3 className="text-xl font-semibold">Best Practices for Using Color in Web Design</h3>
                <p>
                    To effectively use color in web design, consider the following best practices:
                </p>
                <ul className="list-disc list-inside">
                    <li>Use a limited color palette to create a cohesive look.</li>
                    <li>Ensure sufficient contrast between text and background colors.</li>
                    <li>Consider color blindness and choose colors that are distinguishable for all users.</li>
                    <li>Test your color choices on different devices and screens to ensure consistency.</li>
                </ul>
                <h3 className="text-xl font-semibold">Conclusion</h3>
                <p>
                    Understanding hex colors and their conversion to JSX is essential for web developers and designers.
                    By leveraging our Hex to JSX Converter tool, you can easily integrate colors into your React components,
                    enhancing the visual appeal of your web applications. Remember, color is not just about aesthetics;
                    it plays a vital role in user experience and brand identity. Start experimenting with colors today and see
                    how they can transform your designs!
                </p>
            </article>
            <Footer />
        </div>
    );
};

export default HexToJsxConverter;
