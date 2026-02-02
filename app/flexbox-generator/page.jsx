'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FlexboxGenerator = () => {
    const [flexDirection, setFlexDirection] = useState('row');
    const [justifyContent, setJustifyContent] = useState('flex-start');
    const [alignItems, setAlignItems] = useState('stretch');
    const [flexWrap, setFlexWrap] = useState('nowrap');
    const [copySuccess, setCopySuccess] = useState('');

    const flexContainerStyle = {
        display: 'flex',
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexWrap: flexWrap,
        height: '200px',
        border: '2px dashed #ccc',
        padding: '10px',
        marginBottom: '20px',
    };

    const generateFlexboxCode = () => {
        return `
            display: flex;
            flex-direction: ${flexDirection};
            justify-content: ${justifyContent};
            align-items: ${alignItems};
            flex-wrap: ${flexWrap};
        `;
    };

    const copyToClipboard = () => {
        const code = generateFlexboxCode();
        navigator.clipboard.writeText(code).then(() => {
            setCopySuccess('Flexbox code copied to clipboard!');
            setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="container mx-auto p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Flexbox Layout Generator</h1>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700">Flex Direction</label>
                        <select
                            value={flexDirection}
                            onChange={(e) => setFlexDirection(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="row">Row</option>
                            <option value="row-reverse">Row Reverse</option>
                            <option value="column">Column</option>
                            <option value="column-reverse">Column Reverse</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Justify Content</label>
                        <select
                            value={justifyContent}
                            onChange={(e) => setJustifyContent(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="flex-start">Flex Start</option>
                            <option value="flex-end">Flex End</option>
                            <option value="center">Center</option>
                            <option value="space-between">Space Between</option>
                            <option value="space-around">Space Around</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Align Items</label>
                        <select
                            value={alignItems}
                            onChange={(e) => setAlignItems(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="stretch">Stretch</option>
                            <option value="flex-start">Flex Start</option>
                            <option value="flex-end">Flex End</option>
                            <option value="center">Center</option>
                            <option value="baseline">Baseline</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Flex Wrap</label>
                        <select
                            value={flexWrap}
                            onChange={(e) => setFlexWrap(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="nowrap">No Wrap</option>
                            <option value="wrap">Wrap</option>
                            <option value="wrap-reverse">Wrap Reverse</option>
                        </select>
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="w-full bg-green-500 text-white p-2 rounded-lg mt-4"
                    >
                        Copy Flexbox Code
                    </button>
                    {copySuccess && (
                        <div className="mt-2 text-green-500">{copySuccess}</div>
                    )}
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4">Preview</h2>
                    <div style={flexContainerStyle}>
                        <div className="flex-item bg-blue-500 text-white p-4 m-2">Item 1</div>
                        <div className="flex-item bg-green-500 text-white p-4 m-2">Item 2</div>
                        <div className="flex-item bg-red-500 text-white p-4 m-2">Item 3</div>
                        <div className="flex-item bg-yellow-500 text-white p-4 m-2">Item 4</div>
                    </div>
                </div>
            </main>
{/* New SEO Optimized Article Section */}
            <article className="mt-8 max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold">Understanding Flexbox: A Comprehensive Guide</h2>
                <p>
                    Flexbox, or the Flexible Box Layout, is a powerful layout model in CSS that allows for the design of complex layouts 
                    with ease. It provides a more efficient way to lay out, align, and distribute space among items in a container, 
                    even when their size is unknown or dynamic. In this article, we will explore the fundamentals of Flexbox, its 
                    properties, and how to effectively use it in your web design projects.
                </p>
                <h3 className="text-xl font-semibold">What is Flexbox?</h3>
                <p>
                    Flexbox is a one-dimensional layout method for laying out items in rows or columns. It is designed to provide 
                    a more efficient way to arrange elements within a container, allowing for responsive design without the need 
                    for complex CSS floats or positioning. Flexbox is particularly useful for creating layouts that need to adapt 
                    to different screen sizes and orientations.
                </p>
                <h3 className="text-xl font-semibold">Key Properties of Flexbox</h3>
                <p>
                    Flexbox consists of several properties that can be applied to both the container and the items within it. 
                    Here are some of the most important properties:
                </p>
                <ul className="list-disc list-inside">
                    <li><strong>display: flex;</strong> - This property enables the flexbox layout on the container.</li>
                    <li><strong>flex-direction:</strong> Defines the direction in which the flex items are placed in the flex container. 
                        Possible values include <code>row</code>, <code>row-reverse</code>, <code>column</code>, and <code>column-reverse</code>.</li>
                    <li><strong>justify-content:</strong> Aligns flex items along the main axis. Options include <code>flex-start</code>, 
                        <code>flex-end</code>, <code>center</code>, <code>space-between</code>, and <code>space-around</code>.</li>
                    <li><strong>align-items:</strong> Aligns flex items along the cross axis. Options include <code>stretch</code>, 
                        <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, and <code>baseline</code>.</li>
                    <li><strong>flex-wrap:</strong> Controls whether flex items should wrap onto multiple lines. Options include 
                        <code>nowrap</code>, <code>wrap</code>, and <code>wrap-reverse</code>.</li>
                </ul>
                <h3 className="text-xl font-semibold">Benefits of Using Flexbox</h3>
                <p>
                    Flexbox offers several advantages for web developers:
                </p>
                <ul className="list-disc list-inside">
                    <li><strong>Responsive Design:</strong> Flexbox makes it easy to create responsive layouts that adapt to different screen sizes.</li>
                    <li><strong>Alignment Control:</strong> It provides precise control over the alignment of items, both horizontally and vertically.</li>
                    <li><strong>Space Distribution:</strong> Flexbox allows for efficient distribution of space among items, making it easier to create balanced layouts.</li>
                    <li><strong>Order Control:</strong> You can change the visual order of items without altering the HTML structure.</li>
                </ul>
                <h3 className="text-xl font-semibold">Common Use Cases for Flexbox</h3>
                <p>
                    Flexbox is ideal for various layout scenarios, including:
                </p>
                <ul className="list-disc list-inside">
                    <li>Navigation bars</li>
                    <li>Card layouts</li>
                    <li>Grid systems</li>
                    <li>Form layouts</li>
                </ul>
                <h3 className="text-xl font-semibold">Conclusion</h3>
                <p>
                    Flexbox is a powerful tool for modern web design, enabling developers to create flexible and responsive layouts 
                    with ease. By understanding its properties and benefits, you can leverage Flexbox to enhance your web projects 
                    and improve user experience. Start experimenting with Flexbox today and see how it can transform your layouts!
                </p>
            </article>
<Footer />
        </div>
    );
};

export default FlexboxGenerator;
