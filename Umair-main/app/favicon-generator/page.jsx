'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FaviconGenerator = () => {
    const [file, setFile] = useState(null);
    const [faviconUrl, setFaviconUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFaviconUrl(URL.createObjectURL(selectedFile)); // Preview the favicon
            setError('');
        }
    };

    const generateFavicon = () => {
        if (!file) {
            alert('Please upload an image file.');
            return;
        }

        setLoading(true);
        setError('');

        // Simulate favicon generation process
        setTimeout(() => {
            // Here you would typically handle the file upload and processing
            // For demonstration, we will just set the favicon URL
            setFaviconUrl(URL.createObjectURL(file));
            setLoading(false);
        }, 2000); // Simulate a 2-second processing time
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="container mx-auto p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Favicon Generator Tool</h1>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label htmlFor="file" className="block text-gray-700">Upload Image File</label>
                        <input
                            type="file"
                            id="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <button
                        onClick={generateFavicon}
                        className={`w-full text-white p-2 rounded-lg ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                        disabled={loading}
                    >
                        {loading ? 'Generating...' : 'Generate Favicon'}
                    </button>
                </div>

                {faviconUrl && (
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Generated Favicon</h2>
                        <img src={faviconUrl} alt="Generated Favicon" className="w-16 h-16" />
                        <p className="mt-2">Right-click the image to save it as a favicon.</p>
                    </div>
                )}

                {error && (
                    <div className="mt-4 text-red-500">
                        {error}
                    </div>
                )}
            </main>
{/* New SEO Optimized Article Section */}
            <article className="mt-8 max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold">Understanding Favicons and Their Importance</h2>
                <p>
                    A favicon, short for "favorite icon," is a small image that represents a website. It is displayed in the browser's address bar, 
                    next to the page title in a tab, and in bookmarks. Favicons play a crucial role in branding and user experience, making it easier 
                    for users to identify and navigate to their favorite websites. In this article, we will explore the significance of favicons, 
                    how to create them, and how to use our Favicon Generator tool effectively.
                </p>
                <h3 className="text-xl font-semibold">Why Are Favicons Important?</h3>
                <p>
                    Favicons serve several important purposes:
                </p>
                <ul className="list-disc list-inside">
                    <li><strong>Brand Recognition:</strong> A well-designed favicon helps reinforce brand identity and makes your website easily recognizable among others.</li>
                    <li><strong>User Experience:</strong> Favicons enhance user experience by providing a visual cue that helps users quickly locate your site among multiple open tabs.</li>
                    <li><strong>Professionalism:</strong> Including a favicon on your website adds a level of professionalism and attention to detail, which can positively influence user perception.</li>
                    <li><strong>SEO Benefits:</strong> While favicons do not directly impact SEO rankings, they contribute to a better user experience, which can lead to increased engagement and lower bounce rates.</li>
                </ul>
                <h3 className="text-xl font-semibold">How to Create a Favicon</h3>
                <p>
                    Creating a favicon involves several steps:
                </p>
                <ol className="list-decimal list-inside">
                    <li><strong>Design:</strong> Create a simple and recognizable design that reflects your brand. Keep in mind that favicons are typically small (16x16 pixels or 32x32 pixels).</li>
                    <li><strong>File Format:</strong> Save your favicon in a suitable format, such as PNG, ICO, or SVG. The ICO format is widely used for favicons.</li>
                    <li><strong>Upload:</strong> Upload the favicon to your website's root directory or a designated folder.</li>
                    <li><strong>Link in HTML:</strong> Add a link to the favicon in the <code>&lt;head&gt;</code> section of your HTML document:</li>
                </ol>
                <pre className="bg-gray-100 p-2 rounded-md border border-gray-300">
                    &lt;link rel="icon" href="path/to/favicon.ico" type="image/x-icon"&gt;
                </pre>
                <h3 className="text-xl font-semibold">Using the Favicon Generator Tool</h3>
                <p>
                    Our Favicon Generator tool simplifies the process of creating favicons. Here's how to use it effectively:
                </p>
                <ol className="list-decimal list-inside">
                    <li>Upload an image file that you want to convert into a favicon.</li>
                    <li>Click the "Generate Favicon" button to create your favicon.</li>
                    <li>Preview the generated favicon and download it for use on your website.</li>
                </ol>
                <h3 className="text-xl font-semibold">Best Practices for Favicons</h3>
                <p>
                    To ensure your favicon is effective, consider the following best practices:
                </p>
                <ul className="list-disc list-inside">
                    <li>Keep the design simple and recognizable, even at small sizes.</li>
                    <li>Use contrasting colors to ensure visibility against different backgrounds.</li>
                    <li>Test your favicon on various devices and browsers to ensure it displays correctly.</li>
                    <li>Regularly update your favicon to reflect changes in branding or design.</li>
                </ul>
                <h3 className="text-xl font-semibold">Conclusion</h3>
                <p>
                    Favicons are a small but significant aspect of web design that can enhance brand recognition and user experience. 
                    By understanding the importance of favicons and utilizing our Favicon Generator tool, you can create professional 
                    and effective icons for your website. Start designing your favicon today and make your website stand out!
                </p>
            </article>
<Footer />
        </div>
    );
};

export default FaviconGenerator;
