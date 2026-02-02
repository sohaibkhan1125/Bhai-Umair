'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CsvToJsonConverter = () => {
  const [csvData, setCsvData] = useState('');
  const [jsonData, setJsonData] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCsvData(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const convertCsvToJson = () => {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const jsonResult = lines.slice(1).map(line => {
      const values = line.split(',').map(value => value.trim());
      return headers.reduce((acc, header, index) => {
        acc[header] = values[index];
        return acc;
      }, {});
    });
    setJsonData(JSON.stringify(jsonResult, null, 2));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonData).then(() => {
      alert('JSON data copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            CSV to JSON Converter
          </h1>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload CSV File
            </label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            onClick={convertCsvToJson}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Convert to JSON
          </button>

          {jsonData && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Converted JSON</h2>
              <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto">
                {jsonData}
              </pre>
              <button
                onClick={handleCopy}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Copy JSON Data
              </button>
            </div>
          )}
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Understanding CSV to JSON Conversion</h2>
          <p>
            In the world of data management, converting data from one format to another is a common task. 
            One of the most frequent conversions is from CSV (Comma-Separated Values) to JSON (JavaScript Object Notation). 
            This article will explore the significance of CSV and JSON formats, the benefits of converting between them, 
            and how to effectively use our CSV to JSON Converter tool.
          </p>
          <h3 className="text-xl font-semibold">What is CSV?</h3>
          <p>
            CSV, or Comma-Separated Values, is a simple file format used to store tabular data, such as spreadsheets or databases. 
            Each line in a CSV file corresponds to a row in the table, and each value is separated by a comma. 
            CSV files are widely used due to their simplicity and ease of use, making them a popular choice for data exchange.
          </p>
          <h3 className="text-xl font-semibold">What is JSON?</h3>
          <p>
            JSON, or JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write, 
            and easy for machines to parse and generate. JSON is often used in web applications to transmit data between a server and a client. 
            It represents data as key-value pairs, making it a versatile format for structured data.
          </p>
          <h3 className="text-xl font-semibold">Why Convert CSV to JSON?</h3>
          <p>
            Converting CSV to JSON offers several advantages:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Structured Data:</strong> JSON provides a more structured way to represent data, making it easier to work with in programming languages.</li>
            <li><strong>Compatibility:</strong> Many APIs and web services use JSON as their data format, making it essential for developers to convert CSV data for integration.</li>
            <li><strong>Readability:</strong> JSON is more human-readable than CSV, especially for complex data structures.</li>
            <li><strong>Support for Nested Data:</strong> JSON allows for nested data structures, which is not possible with CSV.</li>
          </ul>
          <h3 className="text-xl font-semibold">Using the CSV to JSON Converter Tool</h3>
          <p>
            Our CSV to JSON Converter tool simplifies the conversion process. Here's how to use it effectively:
          </p>
          <ol className="list-decimal list-inside">
            <li>Upload your CSV file using the file input.</li>
            <li>Click the "Convert to JSON" button to initiate the conversion.</li>
            <li>Review the converted JSON output displayed in the output area.</li>
            <li>Use the "Copy JSON Data" button to copy the converted data to your clipboard for easy use in your projects.</li>
          </ol>
          <h3 className="text-xl font-semibold">Best Practices for Working with CSV and JSON</h3>
          <p>
            To ensure smooth data handling, consider the following best practices:
          </p>
          <ul className="list-disc list-inside">
            <li>Ensure your CSV data is well-structured and free of errors before conversion.</li>
            <li>Validate the JSON output to ensure it meets the required format for your application.</li>
            <li>Use meaningful keys in JSON to enhance readability and maintainability.</li>
            <li>Regularly back up your data in both formats to prevent data loss.</li>
          </ul>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            Converting CSV to JSON is a valuable skill for anyone working with data. By understanding the differences 
            between these formats and utilizing our CSV to JSON Converter tool, you can streamline your data management 
            processes and enhance your web applications. Start converting your CSV files today and unlock the potential 
            of your data!
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default CsvToJsonConverter;
