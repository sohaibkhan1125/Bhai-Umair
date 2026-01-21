'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ImageToBase64Converter = () => {
  const [imageFile, setImageFile] = useState(null); // Selected image file
  const [base64String, setBase64String] = useState(''); // Base64 string output

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64String(reader.result); // Set the Base64 string
      };
      reader.readAsDataURL(file); // Read the file as a data URL
      setImageFile(file);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(base64String).then(() => {
      alert('Base64 string copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Image to Base64 Converter
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {base64String && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Base64 String</h2>
              <textarea
                value={base64String}
                readOnly
                rows="5"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <button
                onClick={handleCopy}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Copy Base64 String
              </button>
            </div>
          )}
        </div>
      </main>
{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Image to Base64 Conversion</h2>
        <p>
          Converting images to Base64 format is a common practice in web development and digital media management. 
          Base64 encoding allows binary data, such as images, to be represented as ASCII text. This is particularly useful 
          for embedding images directly into HTML or CSS files, reducing the number of HTTP requests and improving load times. 
          In this article, we will explore the importance of Base64 conversion, its benefits, and how to effectively use 
          our Image to Base64 Converter tool.
        </p>
        <h3 className="text-xl font-semibold">What is Base64 Encoding?</h3>
        <p>
          Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It uses a 
          set of 64 characters (A-Z, a-z, 0-9, +, and /) to encode data. Each Base64 digit represents 6 bits of data, 
          allowing for efficient encoding of binary files, such as images, audio, and video. The encoded string can be 
          easily transmitted over text-based protocols, such as HTTP.
        </p>
        <h3 className="text-xl font-semibold">Why Convert Images to Base64?</h3>
        <p>
          There are several reasons to convert images to Base64 format:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Reduced HTTP Requests:</strong> By embedding images directly into HTML or CSS files, you can reduce the number of HTTP requests made by the browser, leading to faster page load times.</li>
          <li><strong>Improved Performance:</strong> Base64-encoded images can be loaded faster since they are included in the HTML or CSS, eliminating the need for separate image requests.</li>
          <li><strong>Easy Data Transfer:</strong> Base64 encoding allows for easy transfer of images in text-based formats, making it suitable for APIs and data URIs.</li>
          <li><strong>Inline Images:</strong> Base64 encoding enables the use of inline images in emails and other text-based formats where traditional image links may not work.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Use the Image to Base64 Converter Tool</h3>
        <p>
          Our Image to Base64 Converter tool simplifies the process of converting images to Base64 format. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Upload the image you want to convert using the file input.</li>
          <li>The tool will automatically convert the image to a Base64 string.</li>
          <li>The Base64 string will be displayed in the output area, ready for you to copy and use.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using Base64 Encoding</h3>
        <p>
          Using Base64 encoding for images offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Simplicity:</strong> Base64 encoding simplifies the process of including images in web pages, as it eliminates the need for separate image files.</li>
          <li><strong>Portability:</strong> Base64-encoded images can be easily embedded in various formats, making them highly portable.</li>
          <li><strong>Compatibility:</strong> Base64 encoding is widely supported across different browsers and platforms, ensuring consistent rendering of images.</li>
        </ul>
        <h3 className="text-xl font-semibold">Considerations When Using Base64 Encoding</h3>
        <p>
          While Base64 encoding has its benefits, there are some considerations to keep in mind:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Increased File Size:</strong> Base64-encoded images are typically larger than their binary counterparts, which can lead to increased file sizes and longer load times if used excessively.</li>
          <li><strong>Browser Limitations:</strong> Some browsers may have limitations on the size of data URIs, so it's important to consider the size of the images being encoded.</li>
          <li><strong>Not Suitable for All Use Cases:</strong> For large images or when using many images, traditional methods of linking to image files may be more efficient.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Converting images to Base64 format is a valuable technique for web developers and designers. By using our Image to Base64 Converter tool, you can easily convert images for use in web applications, emails, and other text-based formats. Start converting your images today and take advantage of the benefits of Base64 encoding!
        </p>
      </article>
<Footer />
    </div>
  );
};

export default ImageToBase64Converter;


