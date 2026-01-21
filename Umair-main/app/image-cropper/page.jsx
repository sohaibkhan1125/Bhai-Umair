'use client';

import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ImageCropper = () => {
  const [imageFile, setImageFile] = useState(null); // Selected image file
  const [croppedImage, setCroppedImage] = useState(null); // Cropped image URL
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 0, height: 0 }); // Crop area dimensions
  const canvasRef = useRef(null); // Reference to the canvas element

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(URL.createObjectURL(file));
    }
  };

  const handleCrop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imageFile;

    img.onload = () => {
      canvas.width = cropArea.width;
      canvas.height = cropArea.height;
      ctx.drawImage(img, cropArea.x, cropArea.y, cropArea.width, cropArea.height, 0, 0, cropArea.width, cropArea.height);
      const croppedDataUrl = canvas.toDataURL('image/jpeg');
      setCroppedImage(croppedDataUrl);
    };
  };

  const handleDownload = () => {
    if (!croppedImage) return;

    const link = document.createElement('a');
    link.href = croppedImage;
    link.download = 'cropped_image.jpg'; // Set the default file name
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
            Image Cropper
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

          {imageFile && (
            <div className="mb-6">
              <img src={imageFile} alt="Preview" className="mb-4" />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crop Area (x, y, width, height)
                </label>
                <input
                  type="number"
                  placeholder="X"
                  onChange={(e) => setCropArea({ ...cropArea, x: parseInt(e.target.value) })}
                  className="mr-2 border border-gray-300 rounded-md p-1"
                />
                <input
                  type="number"
                  placeholder="Y"
                  onChange={(e) => setCropArea({ ...cropArea, y: parseInt(e.target.value) })}
                  className="mr-2 border border-gray-300 rounded-md p-1"
                />
                <input
                  type="number"
                  placeholder="Width"
                  onChange={(e) => setCropArea({ ...cropArea, width: parseInt(e.target.value) })}
                  className="mr-2 border border-gray-300 rounded-md p-1"
                />
                <input
                  type="number"
                  placeholder="Height"
                  onChange={(e) => setCropArea({ ...cropArea, height: parseInt(e.target.value) })}
                  className="border border-gray-300 rounded-md p-1"
                />
              </div>
            </div>
          )}

          <button
            onClick={handleCrop}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Crop Image
          </button>

          {croppedImage && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Cropped Image</h2>
              <img src={croppedImage} alt="Cropped" className="mb-4" />
              <button
                onClick={handleDownload}
                className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Download Cropped Image
              </button>
            </div>
          )}

          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
      </main>
{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Image Cropping</h2>
        <p>
          Image cropping is a fundamental process in digital image editing that allows users to remove unwanted outer areas from an image. This technique is essential for enhancing the composition of photographs, improving focus on the subject, and optimizing images for various platforms. In this article, we will explore the importance of image cropping, the different methods available, and how to effectively use our Image Cropper tool.
        </p>
        <h3 className="text-xl font-semibold">Why is Image Cropping Important?</h3>
        <p>
          Cropping images can significantly impact their visual appeal and effectiveness. Here are some key reasons why image cropping is important:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Improved Composition:</strong> Cropping allows you to enhance the composition of an image by removing distractions and focusing on the main subject.</li>
          <li><strong>Aspect Ratio Adjustment:</strong> Different platforms require specific aspect ratios. Cropping helps you adjust images to fit these requirements without distorting the content.</li>
          <li><strong>Enhanced Visual Storytelling:</strong> A well-cropped image can convey a stronger message and evoke emotions, making it more engaging for viewers.</li>
          <li><strong>Optimized File Size:</strong> Cropping can also reduce the file size of images, which is beneficial for web performance and faster loading times.</li>
        </ul>
        <h3 className="text-xl font-semibold">Methods of Image Cropping</h3>
        <p>
          There are several methods for cropping images, including:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Manual Cropping:</strong> This method involves selecting the crop area manually using tools in image editing software or online tools.</li>
          <li><strong>Aspect Ratio Cropping:</strong> This method allows users to maintain a specific aspect ratio while cropping, ensuring that the image fits perfectly in designated spaces.</li>
          <li><strong>Automated Cropping:</strong> Some advanced tools use algorithms to automatically crop images based on content analysis, focusing on the most important elements.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Use the Image Cropper Tool</h3>
        <p>
          Our Image Cropper tool simplifies the process of cropping images. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Upload the image you want to crop using the file input.</li>
          <li>Specify the crop area by entering the x, y coordinates, width, and height.</li>
          <li>Click the "Crop Image" button to process your image.</li>
          <li>The cropped image will appear in the output area, ready for you to download.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using an Image Cropper</h3>
        <p>
          Using an image cropper offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Precision:</strong> Crop images with precision to achieve the desired composition and focus.</li>
          <li><strong>Time-Saving:</strong> Automated cropping tools can save time compared to manual cropping methods.</li>
          <li><strong>Quality Control:</strong> Maintain high image quality while cropping, ensuring that the final output meets your standards.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Image cropping is an essential skill for anyone working with digital images. By using our Image Cropper tool, you can easily enhance your images, improve their composition, and optimize them for various platforms. Start cropping your images today and unlock their full potential!
        </p>
      </article>
<Footer />
    </div>
  );
};

export default ImageCropper;
