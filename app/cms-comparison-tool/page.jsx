'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CmsComparisonTool = () => {
  const [selectedCms, setSelectedCms] = useState('WordPress');
  const cmsOptions = ['WordPress', 'Joomla', 'Drupal', 'Shopify', 'Wix'];

  const cmsFeatures = {
    WordPress: {
      easeOfUse: 'Easy',
      customization: 'High',
      support: 'Large community',
      cost: 'Free (with paid options)',
    },
    Joomla: {
      easeOfUse: 'Moderate',
      customization: 'High',
      support: 'Moderate community',
      cost: 'Free (with paid options)',
    },
    Drupal: {
      easeOfUse: 'Difficult',
      customization: 'Very High',
      support: 'Large community',
      cost: 'Free (with paid options)',
    },
    Shopify: {
      easeOfUse: 'Easy',
      customization: 'Moderate',
      support: '24/7 support',
      cost: 'Monthly subscription',
    },
    Wix: {
      easeOfUse: 'Very Easy',
      customization: 'Low',
      support: 'Email support',
      cost: 'Free (with paid options)',
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            CMS Comparison Tool
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select CMS to Compare
            </label>
            <select
              value={selectedCms}
              onChange={(e) => setSelectedCms(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              {cmsOptions.map((cms) => (
                <option key={cms} value={cms}>
                  {cms}
                </option>
              ))}
            </select>
          </div>

          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(cmsFeatures[selectedCms]).map(([feature, value]) => (
              <div key={feature} className="bg-gray-100 p-4 rounded-md shadow">
                <h3 className="font-bold">{feature.replace(/([A-Z])/g, ' $1')}</h3>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Choosing the Right CMS for Your Needs</h2>
          <p>
            A Content Management System (CMS) is a crucial tool for anyone looking to create and manage a website. 
            With numerous options available, selecting the right CMS can significantly impact your website's performance, 
            ease of use, and overall success. In this article, we will explore the key features of popular CMS platforms, 
            their advantages and disadvantages, and how to use our CMS Comparison Tool to make an informed decision.
          </p>
          <h3 className="text-xl font-semibold">What is a CMS?</h3>
          <p>
            A Content Management System (CMS) is software that allows users to create, manage, and modify content on a 
            website without needing specialized technical knowledge. CMS platforms provide a user-friendly interface, 
            enabling users to publish content, manage media files, and customize the design of their websites easily.
          </p>
          <h3 className="text-xl font-semibold">Why Use a CMS?</h3>
          <p>
            Using a CMS offers several benefits:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Ease of Use:</strong> Most CMS platforms are designed for non-technical users, making it easy to create and manage content.</li>
            <li><strong>Customization:</strong> Many CMS platforms offer themes and plugins that allow users to customize their websites without coding.</li>
            <li><strong>SEO-Friendly:</strong> Most CMS platforms come with built-in SEO tools or plugins that help optimize your website for search engines.</li>
            <li><strong>Community Support:</strong> Popular CMS platforms have large communities that provide support, tutorials, and resources.</li>
          </ul>
          <h3 className="text-xl font-semibold">Popular CMS Platforms</h3>
          <p>
            Here are some of the most popular CMS platforms and their key features:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>WordPress:</strong> The most widely used CMS, known for its flexibility and extensive plugin ecosystem. Ideal for blogs, portfolios, and e-commerce sites.</li>
            <li><strong>Joomla:</strong> A powerful CMS that offers more advanced features than WordPress, suitable for complex websites and applications.</li>
            <li><strong>Drupal:</strong> Known for its robustness and scalability, Drupal is ideal for large and complex websites, but it has a steeper learning curve.</li>
            <li><strong>Shopify:</strong> A dedicated e-commerce platform that allows users to create online stores quickly and easily, with built-in payment processing.</li>
            <li><strong>Wix:</strong> A user-friendly website builder that offers drag-and-drop functionality, making it easy for beginners to create websites.</li>
          </ul>
          <h3 className="text-xl font-semibold">Using the CMS Comparison Tool</h3>
          <p>
            Our CMS Comparison Tool allows you to easily compare different CMS platforms based on key features such as ease of use, customization options, support, and cost. 
            Here's how to use it:
          </p>
          <ol className="list-decimal list-inside">
            <li>Select a CMS from the dropdown menu to view its features.</li>
            <li>Compare the selected CMS with others to see how they stack up against each other.</li>
            <li>Use the information to make an informed decision about which CMS best fits your needs.</li>
          </ol>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            Choosing the right CMS is essential for the success of your website. By understanding the features and 
            capabilities of different platforms, you can select the one that best meets your needs. Use our CMS Comparison 
            Tool to simplify the decision-making process and find the perfect CMS for your project.
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default CmsComparisonTool;
