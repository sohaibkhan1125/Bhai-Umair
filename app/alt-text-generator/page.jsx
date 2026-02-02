'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Copy, Check } from "lucide-react";

const AltTextGenerator = () => {
    const [image, setImage] = useState(null);
    const [altText, setAltText] = useState('');
    const [showAltText, setShowAltText] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
                const generatedAltText = `An image of ${generateDescription(file.name)}`;
                setAltText(generatedAltText);
                setShowAltText(true);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload an image file.');
        }
    };

    const generateDescription = (filename) => {
        const keywords = ["beautiful", "stunning", "vibrant", "dynamic", "detailed", "complex"];
        const subjects = ["landscape", "cityscape", "portrait", "animal", "object", "scene"];
        const randKeyword = keywords[Math.floor(Math.random() * keywords.length)];
        const randSubject = subjects[Math.floor(Math.random() * subjects.length)];
        return `${randKeyword} ${randSubject}`;
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(altText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="container mx-auto p-6 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                    <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Alt Text Generator</h1>
                    
                    <div className="mb-4">
                        <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">Upload Image:</label>
                        <input 
                            type="file" 
                            id="imageUpload" 
                            accept="image/*" 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={handleImageUpload}
                        />
                    </div>

                    {image && (
                        <div className="mb-4 flex justify-center">
                            <img src={image} alt="Preview" className="w-96 h-96 rounded-md shadow-sm object-cover" />
                        </div>
                    )}

                    <button 
                        onClick={() => setShowAltText(true)} 
                        className="w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600"
                    >
                        Generate Alt Text
                    </button>

                    {showAltText && (
                        <div id="altTextOutput" className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-300">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-semibold">Generated Alt Text:</h2>
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors duration-200"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="h-4 w-4" />
                                            <span>Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-4 w-4" />
                                            <span>Copy</span>
                                        </>
                                    )}
                                </button>
                            </div>
                            <textarea 
                                id="altTextResult" 
                                rows="4" 
                                className="w-full p-2 border border-gray-300 rounded-md bg-white" 
                                value={altText} 
                                readOnly 
                            />
                        </div>
                    )}
                </div>
            </div>
{/* New SEO Optimized Article Section */}
            <article className="mt-8 max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold">The Importance of Alt Text for Images</h2>
                <p>
                    In the digital landscape, images play a crucial role in enhancing user experience and engagement. 
                    However, not all users can see images, whether due to visual impairments or slow internet connections. 
                    This is where alt text comes into play. Alt text, or alternative text, is a description of an image 
                    that is displayed when the image cannot be loaded or is read by screen readers for visually impaired users.
                </p>
                <h3 className="text-xl font-semibold">What is Alt Text?</h3>
                <p>
                    Alt text is a short description that provides context about an image. It is an essential part of web 
                    accessibility and SEO. By including descriptive alt text, you ensure that all users, regardless of 
                    their abilities, can understand the content of your images. Additionally, search engines use alt text 
                    to index images, which can improve your website's visibility in search results.
                </p>
                <h3 className="text-xl font-semibold">Why is Alt Text Important?</h3>
                <p>
                    Alt text serves several important purposes:
                </p>
                <ul className="list-disc list-inside">
                    <li><strong>Accessibility:</strong> Alt text makes your website more accessible to users with disabilities.</li>
                    <li><strong>SEO Benefits:</strong> Search engines use alt text to understand the content of images, which can improve your site's ranking.</li>
                    <li><strong>User Experience:</strong> If an image fails to load, alt text provides context, ensuring users still understand the content.</li>
                </ul>
                <h3 className="text-xl font-semibold">How to Write Effective Alt Text</h3>
                <p>
                    Writing effective alt text is crucial for maximizing its benefits. Here are some tips:
                </p>
                <ol className="list-decimal list-inside">
                    <li>Be descriptive: Clearly describe the image, including relevant details.</li>
                    <li>Keep it concise: Aim for a brief description, ideally under 125 characters.</li>
                    <li>Use keywords wisely: Incorporate relevant keywords without keyword stuffing.</li>
                    <li>Avoid redundancy: Do not start with "Image of" or "Picture of" as it is already implied.</li>
                </ol>
                <h3 className="text-xl font-semibold">Common Mistakes to Avoid</h3>
                <p>
                    When writing alt text, avoid these common pitfalls:
                </p>
                <ul className="list-disc list-inside">
                    <li>Using generic descriptions like "image" or "photo."</li>
                    <li>Writing overly long descriptions that may confuse users.</li>
                    <li>Neglecting to include alt text for decorative images that do not add value.</li>
                </ul>
                <h3 className="text-xl font-semibold">Conclusion</h3>
                <p>
                    Alt text is a vital component of web accessibility and SEO. By providing descriptive alt text for 
                    your images, you enhance user experience, improve your site's search engine ranking, and ensure that 
                    all users can engage with your content. Use our Alt Text Generator to create effective alt text 
                    quickly and easily, and make your website more inclusive for everyone.
                </p>
            </article>

<Footer />
        </div>
    );
};

export default AltTextGenerator;
