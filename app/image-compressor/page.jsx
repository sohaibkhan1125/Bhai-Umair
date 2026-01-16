'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ImageCompressor = () => {
  const [imageFile, setImageFile] = useState(null); // Selected image file
  const [compressedImage, setCompressedImage] = useState(null); // Compressed image URL

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const compressImage = () => {
    if (!imageFile) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const MAX_WIDTH = 800; // Set max width for compression
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7); // Compress to JPEG with 70% quality
        setCompressedImage(compressedDataUrl);
      };
    };
    reader.readAsDataURL(imageFile);
  };

  const handleDownload = () => {
    if (!compressedImage) return;

    const link = document.createElement('a');
    link.href = compressedImage;
    link.download = 'compressed_image.jpg'; // Set the default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Image Compressor
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

          <button
            onClick={compressImage}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Compress Image
          </button>

          {compressedImage && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Compressed Image</h2>
              <img src={compressedImage}  alt="Compressed" className="mb-4 w-80 h-80 rounded-lg" />
              <button
                onClick={handleDownload}
                className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Download Compressed Image
              </button>
            </div>
          )}
        </div>
      </main>
{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Image Compression</h2>
        <p>
          Image compression is a crucial process in web development and digital media management. It involves reducing the file size of images without significantly compromising their quality. This is essential for optimizing website performance, improving load times, and enhancing user experience. In this article, we will explore the importance of image compression, the different types of compression, and how to effectively use our Image Compressor tool.
        </p>
        <h3 className="text-xl font-semibold">Why is Image Compression Important?</h3>
        <p>
          The primary goal of image compression is to reduce the amount of data required to represent an image. Here are some key reasons why image compression is important:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Faster Load Times:</strong> Compressed images load faster, which is critical for user retention. Studies show that users are more likely to abandon a website if it takes too long to load.</li>
          <li><strong>Reduced Bandwidth Usage:</strong> Smaller image files consume less bandwidth, which can be particularly beneficial for users on mobile devices or those with limited data plans.</li>
          <li><strong>Improved SEO:</strong> Search engines favor fast-loading websites. By compressing images, you can improve your site's performance, which can positively impact your search engine rankings.</li>
          <li><strong>Enhanced User Experience:</strong> A faster website provides a better user experience, reducing bounce rates and increasing engagement.</li>
        </ul>
        <h3 className="text-xl font-semibold">Types of Image Compression</h3>
        <p>
          There are two main types of image compression: lossy and lossless.
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Lossy Compression:</strong> This method reduces file size by permanently removing some data from the image. While this can significantly decrease file size, it may also result in a noticeable loss of quality. JPEG is a common format that uses lossy compression.</li>
          <li><strong>Lossless Compression:</strong> This method reduces file size without losing any data. The original image can be perfectly reconstructed from the compressed file. Formats like PNG and GIF typically use lossless compression.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Use the Image Compressor Tool</h3>
        <p>
          Our Image Compressor tool simplifies the process of compressing images. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Upload the image you want to compress using the file input.</li>
          <li>Click the "Compress Image" button to process your image.</li>
          <li>The compressed image will appear in the output area, ready for you to download.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using an Image Compressor</h3>
        <p>
          Using an image compressor offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Efficiency:</strong> Automating the compression process saves time and ensures consistent results.</li>
          <li><strong>Quality Control:</strong> You can adjust the quality settings to find the right balance between file size and image quality.</li>
          <li><strong>Easy Integration:</strong> Compressed images can be easily integrated into your web projects without affecting functionality.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Image compression is a vital practice for optimizing web performance and enhancing user experience. By using our Image Compressor tool, you can ensure that your images are efficiently compressed, leading to faster load times and improved SEO. Start compressing your images today and experience the benefits of optimized web performance!
        </p>
      </article>
<Footer />
    </div>
  );
};

export default ImageCompressor;
