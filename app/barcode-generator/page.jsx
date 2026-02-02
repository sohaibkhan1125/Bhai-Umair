'use client'
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

const BarcodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [showError, setShowError] = useState(false);
  const barcodeRef = useRef(null);
  const [isJsBarcodeLoaded, setIsJsBarcodeLoaded] = useState(false);

  useEffect(() => {
    // Load JsBarcode script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js';
    script.async = true;
    script.onload = () => setIsJsBarcodeLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const generateBarcode = () => {
    if (!inputText || !isJsBarcodeLoaded) {
      setShowError(true);
      setDownloadUrl('');
      return;
    }

    setShowError(false);
    const barcodeSvg = barcodeRef.current;
    barcodeSvg.innerHTML = '';

    try {
      // Generate barcode using JsBarcode
      window.JsBarcode(barcodeSvg, inputText, {
        format: "CODE128",
        width: 2,
        height: 100,
        displayValue: true
      });

      // Convert SVG to PNG for download
      const svgData = new XMLSerializer().serializeToString(barcodeSvg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngData = canvas.toDataURL('image/png');
        setDownloadUrl(pngData);
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    } catch (error) {
      console.error('Error generating barcode:', error);
      setShowError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
<div className="mx-auto">
<div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Barcode Generator
            </h1>
            
            <div className="mb-6">
              <label 
                htmlFor="inputText" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter Text:
              </label>
              <input
                type="text"
                id="inputText"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  setShowError(false);
                }}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter text to generate barcode"
              />
            </div>

            <button
              onClick={generateBarcode}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Generate Barcode
            </button>
            
            <div className="mt-6 flex flex-col items-center">
              {showError && (
                <p className="text-red-500 mb-4">
                  Please enter some text to generate a barcode.
                </p>
              )}
              <div className="w-full flex justify-center mb-4">
                <svg id="barcode" ref={barcodeRef}></svg>
              </div>
              
              {downloadUrl && (
                <a
                  href={downloadUrl}
                  download="barcode.png"
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 text-center"
                >
                  Download Barcode
                </a>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">How to Use</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Enter the text you want to convert into a barcode</li>
              <li>Click the "Generate Barcode" button</li>
              <li>Your barcode will be displayed on the screen</li>
              <li>Click the "Download Barcode" button to save it as a PNG image</li>
            </ol>
          </div>
{/* New SEO Optimized Article Section */}
          <article className="mt-8 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold">Understanding Barcode Technology</h2>
            <p>
              Barcodes are a vital part of modern commerce, enabling quick and accurate data capture for a variety of applications. 
              From retail to logistics, barcodes streamline processes and enhance efficiency. In this article, we will explore the 
              fundamentals of barcode technology, its applications, and how to create your own barcodes using our Barcode Generator.
            </p>
            <h3 className="text-xl font-semibold">What is a Barcode?</h3>
            <p>
              A barcode is a machine-readable representation of data, typically consisting of parallel lines of varying widths 
              and spaces. Barcodes can encode various types of information, including product identifiers, prices, and inventory data. 
              The most common types of barcodes include UPC (Universal Product Code), EAN (European Article Number), and Code 128.
            </p>
            <h3 className="text-xl font-semibold">How Barcodes Work</h3>
            <p>
              Barcodes work by using a scanner to read the pattern of lines and spaces. Each barcode type has a specific encoding 
              scheme that translates the visual pattern into readable data. When a barcode is scanned, the scanner emits a beam of 
              light that reflects off the barcode. The scanner then interprets the reflected light and converts it into a digital 
              signal, which is processed by a computer system.
            </p>
            <h3 className="text-xl font-semibold">Applications of Barcodes</h3>
            <p>
              Barcodes have a wide range of applications across various industries:
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Retail:</strong> Barcodes are used to track inventory, manage stock levels, and facilitate checkout processes.</li>
              <li><strong>Logistics:</strong> In shipping and warehousing, barcodes help track packages and streamline operations.</li>
              <li><strong>Healthcare:</strong> Barcodes are used to identify medications, track patient records, and manage medical supplies.</li>
              <li><strong>Manufacturing:</strong> Barcodes assist in tracking parts and components throughout the production process.</li>
            </ul>
            <h3 className="text-xl font-semibold">Creating Barcodes with Our Barcode Generator</h3>
            <p>
              Our Barcode Generator allows you to create custom barcodes quickly and easily. Here's how to use it:
            </p>
            <ol className="list-decimal list-inside">
              <li>Enter the text you want to convert into a barcode in the input field.</li>
              <li>Click the "Generate Barcode" button to create your barcode.</li>
              <li>Your barcode will be displayed on the screen, ready for use.</li>
              <li>Click the "Download Barcode" button to save it as a PNG image for your records.</li>
            </ol>
            <h3 className="text-xl font-semibold">Best Practices for Using Barcodes</h3>
            <p>
              To ensure the effectiveness of your barcodes, consider the following best practices:
            </p>
            <ul className="list-disc list-inside">
              <li>Ensure that the barcode is printed clearly and is not distorted.</li>
              <li>Test the barcode with a scanner to ensure it can be read accurately.</li>
              <li>Use appropriate barcode types for your specific application.</li>
              <li>Regularly update your barcode data to reflect changes in inventory or product information.</li>
            </ul>
            <h3 className="text-xl font-semibold">Conclusion</h3>
            <p>
              Barcodes are an essential tool in today's fast-paced business environment. By understanding how barcodes work and 
              utilizing our Barcode Generator, you can streamline your operations and improve efficiency. Start creating your 
              barcodes today and take advantage of the benefits they offer!
            </p>
          </article>
</div>
      </main>

      <Footer />
    </div>
  );
};

export default BarcodeGenerator;
