'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Copy, Check } from 'lucide-react';

const Base64EncoderDecoder = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState(false);

  const encodeBase64 = () => {
    if (inputText) {
      try {
        const encoded = btoa(unescape(encodeURIComponent(inputText)));
        setOutputText(encoded);
      } catch (error) {
        setOutputText('Error encoding text. Please check your input.');
      }
    } else {
      setOutputText('Please enter some text.');
    }
  };

  const decodeBase64 = () => {
    if (inputText) {
      try {
        const decoded = decodeURIComponent(escape(atob(inputText)));
        setOutputText(decoded);
      } catch (error) {
        setOutputText('Invalid Base64 input.');
      }
    } else {
      setOutputText('Please enter some text.');
    }
  };

  const copyToClipboard = async () => {
    if (outputText) {
      try {
        await navigator.clipboard.writeText(outputText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        alert('Failed to copy: ' + err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
<div className="mx-auto">
<div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Base64 Encoder/Decoder
            </h1>
            
            <div className="mb-6">
              <label 
                htmlFor="inputText" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Input Text:
              </label>
              <textarea
                id="inputText"
                rows="4"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter text here"
              />
            </div>

            <div className="flex gap-4 mb-6">
              <button
                onClick={encodeBase64}
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
              >
                Encode to Base64
              </button>
              <button
                onClick={decodeBase64}
                className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Decode from Base64
              </button>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label 
                  htmlFor="outputText" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Output:
                </label>
                {outputText && (
                  <button
                    onClick={copyToClipboard}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center gap-1 text-sm"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
              <textarea
                id="outputText"
                rows="4"
                value={outputText}
                readOnly
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 sm:text-sm"
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">How to Use</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Enter the text you want to encode or decode in the input field</li>
              <li>Click "Encode to Base64" to convert text to Base64 format</li>
              <li>Click "Decode from Base64" to convert Base64 back to regular text</li>
              <li>Click the copy icon to copy the output to your clipboard</li>
            </ol>
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Base64 encoding is commonly used for encoding binary data 
                (such as images or files) into ASCII text format that can be safely transmitted 
                over text-based protocols.
              </p>
            </div>
          </div>
{/* New SEO Optimized Article Section */}
          <article className="mt-8 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold">Understanding Base64 Encoding</h2>
            <p>
              Base64 encoding is a method of converting binary data into a text format that can be easily 
              transmitted over text-based protocols. This encoding scheme is widely used in various applications, 
              including email, web development, and data storage. In this article, we will explore the fundamentals 
              of Base64 encoding, its applications, and how to use our Base64 Encoder/Decoder tool effectively.
            </p>
            <h3 className="text-xl font-semibold">What is Base64 Encoding?</h3>
            <p>
              Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. 
              It uses a set of 64 characters, which includes uppercase letters (A-Z), lowercase letters (a-z), 
              digits (0-9), and two additional characters, typically '+' and '/'. The primary purpose of Base64 
              encoding is to ensure that binary data can be safely transmitted over channels that only support text.
            </p>
            <h3 className="text-xl font-semibold">How Base64 Encoding Works</h3>
            <p>
              The Base64 encoding process involves dividing the binary data into groups of 6 bits, which are then 
              mapped to the Base64 character set. Each group of 6 bits corresponds to a single character in the 
              Base64 alphabet. If the input data is not a multiple of 3 bytes, padding characters ('=') are added 
              to the end of the encoded string to ensure proper alignment.
            </p>
            <h3 className="text-xl font-semibold">Applications of Base64 Encoding</h3>
            <p>
              Base64 encoding is used in various scenarios, including:
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Email Attachments:</strong> Base64 is commonly used to encode binary files (like images and documents) 
              for email transmission, ensuring that the data remains intact during transfer.</li>
              <li><strong>Data URIs:</strong> In web development, Base64 encoding allows images and other binary data to be 
              embedded directly into HTML or CSS files as Data URIs, reducing the number of HTTP requests.</li>
              <li><strong>APIs:</strong> Many web APIs use Base64 encoding to transmit binary data, such as images or files, 
              in a text-friendly format.</li>
              <li><strong>File Storage:</strong> Base64 encoding is often used to store binary data in databases or text files, 
              making it easier to handle and transmit.</li>
            </ul>
            <h3 className="text-xl font-semibold">Using Our Base64 Encoder/Decoder Tool</h3>
            <p>
              Our Base64 Encoder/Decoder tool simplifies the process of encoding and decoding text. Here's how to use it:
            </p>
            <ol className="list-decimal list-inside">
              <li>Enter the text you want to encode or decode in the input field.</li>
              <li>Click the "Encode to Base64" button to convert text to Base64 format.</li>
              <li>Click the "Decode from Base64" button to convert Base64 back to regular text.</li>
              <li>Use the copy icon to copy the output to your clipboard for easy sharing.</li>
            </ol>
            <h3 className="text-xl font-semibold">Best Practices for Base64 Encoding</h3>
            <p>
              To ensure effective use of Base64 encoding, consider the following best practices:
            </p>
            <ul className="list-disc list-inside">
              <li>Use Base64 encoding for small to medium-sized files, as it increases the size of the data by approximately 33%.</li>
              <li>Be mindful of the limitations of the systems you are working with, as some may have restrictions on data size.</li>
              <li>Always validate the input before encoding or decoding to prevent errors and ensure data integrity.</li>
              <li>Consider using alternative encoding methods for larger files or when performance is critical.</li>
            </ul>
            <h3 className="text-xl font-semibold">Conclusion</h3>
            <p>
              Base64 encoding is a valuable tool for converting binary data into a text format that can be easily 
              transmitted and stored. By understanding how Base64 works and utilizing our Base64 Encoder/Decoder tool, 
              you can efficiently handle binary data in your applications. Start using our tool today to simplify your 
              encoding and decoding tasks!
            </p>
          </article>
</div>
      </main>

      <Footer />
    </div>
  );
};

export default Base64EncoderDecoder;
