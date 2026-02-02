'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BrowserCapabilityChecker = () => {
  const [capabilities, setCapabilities] = useState([]);
  const [result, setResult] = useState(null);

  const checkCapabilities = () => {
    const features = [
      { name: 'Geolocation', supported: 'geolocation' in navigator },
      { name: 'Web Storage', supported: 'localStorage' in window },
      { name: 'Service Workers', supported: 'serviceWorker' in navigator },
      { name: 'WebSockets', supported: 'WebSocket' in window },
      { name: 'Fetch API', supported: 'fetch' in window },
      { name: 'WebRTC', supported: 'RTCPeerConnection' in window },
      { name: 'WebGL', supported: !!document.createElement('canvas').getContext('webgl') },
    ];

    setCapabilities(features);
    setResult(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Browser Capability Checker
          </h1>

          <button
            onClick={checkCapabilities}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Check Browser Capabilities
          </button>

          {capabilities.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Capabilities</h2>
              <ul className="list-disc list-inside">
                {capabilities.map((feature, index) => (
                  <li key={index} className={`flex justify-between ${feature.supported ? 'text-green-600' : 'text-red-600'}`}>
                    <span>{feature.name}</span>
                    <span>{feature.supported ? 'Supported' : 'Not Supported'}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Understanding Browser Capabilities</h2>
          <p>
            In today's web development landscape, understanding browser capabilities is crucial for creating 
            responsive and functional web applications. Different browsers support various features, and knowing 
            these capabilities can help developers optimize their applications for a wider audience. In this 
            article, we will explore the importance of browser capability checking, common features to test, 
            and how to use our Browser Capability Checker tool effectively.
          </p>
          <h3 className="text-xl font-semibold">What are Browser Capabilities?</h3>
          <p>
            Browser capabilities refer to the features and functionalities that a web browser supports. These 
            capabilities can include support for HTML5, CSS3, JavaScript APIs, and various web technologies. 
            Understanding these capabilities is essential for developers to ensure that their applications work 
            seamlessly across different browsers and devices.
          </p>
          <h3 className="text-xl font-semibold">Why is Browser Capability Checking Important?</h3>
          <p>
            Browser capability checking is important for several reasons:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Cross-Browser Compatibility:</strong> Different browsers may implement features differently or may not support certain features at all. Checking capabilities helps ensure that your application functions correctly across all major browsers.</li>
            <li><strong>Enhanced User Experience:</strong> By understanding what features are supported, developers can provide fallbacks or alternative solutions for unsupported features, ensuring a smooth user experience.</li>
            <li><strong>Performance Optimization:</strong> Knowing the capabilities of a user's browser can help developers optimize performance by loading only the necessary resources and features.</li>
            <li><strong>Future-Proofing:</strong> As web standards evolve, new features are introduced. Regularly checking browser capabilities helps developers stay updated and adapt their applications accordingly.</li>
          </ul>
          <h3 className="text-xl font-semibold">Common Features to Check</h3>
          <p>
            When checking browser capabilities, there are several key features that developers often test:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Geolocation:</strong> The ability to access the user's geographical location.</li>
            <li><strong>Web Storage:</strong> Support for local storage and session storage for storing data on the client side.</li>
            <li><strong>Service Workers:</strong> The ability to run background scripts that enable features like offline access and push notifications.</li>
            <li><strong>WebSockets:</strong> Support for real-time communication between the client and server.</li>
            <li><strong>Fetch API:</strong> A modern way to make network requests and handle responses.</li>
            <li><strong>WebRTC:</strong> Support for real-time communication capabilities, such as video and audio streaming.</li>
            <li><strong>WebGL:</strong> The ability to render 3D graphics in the browser.</li>
          </ul>
          <h3 className="text-xl font-semibold">Using the Browser Capability Checker Tool</h3>
          <p>
            Our Browser Capability Checker tool simplifies the process of checking browser capabilities. Here's how to use it:
          </p>
          <ol className="list-decimal list-inside">
            <li>Click the "Check Browser Capabilities" button to initiate the capability check.</li>
            <li>Review the list of features and their support status.</li>
            <li>Use the information to make informed decisions about your web application development.</li>
          </ol>
          <h3 className="text-xl font-semibold">Best Practices for Browser Capability Checking</h3>
          <p>
            To maximize the effectiveness of browser capability checking, consider the following best practices:
          </p>
          <ul className="list-disc list-inside">
            <li>Regularly update your capability checks to include new features and technologies.</li>
            <li>Provide fallbacks for unsupported features to ensure a seamless user experience.</li>
            <li>Test your application on multiple browsers and devices to identify compatibility issues.</li>
            <li>Stay informed about browser updates and changes in support for web standards.</li>
          </ul>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            Understanding browser capabilities is essential for modern web development. By using our Browser 
            Capability Checker tool, you can easily assess the features supported by different browsers and 
            ensure that your applications provide a consistent and engaging user experience. Start checking 
            browser capabilities today and enhance your web development process!
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default BrowserCapabilityChecker;