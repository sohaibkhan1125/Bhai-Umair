'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CsvToSqlConverter = () => {
  const [csvData, setCsvData] = useState('');
  const [sqlData, setSqlData] = useState('');

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

  const convertCsvToSql = () => {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    const sqlStatements = lines.slice(1).map(line => {
      const values = line.split(',').map(value => value.trim());
      const formattedValues = values.map(value => `'${value.replace(/'/g, "''")}'`).join(', ');
      return `INSERT INTO your_table_name (${headers.join(', ')}) VALUES (${formattedValues});`;
    });
    setSqlData(sqlStatements.join('\n'));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlData).then(() => {
      alert('SQL data copied to clipboard!');
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            CSV to SQL Converter
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
            onClick={convertCsvToSql}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Convert to SQL
          </button>

          {sqlData && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Generated SQL</h2>
              <pre className="bg-gray-100 p-4 rounded-md border border-gray-300 overflow-x-auto">
                {sqlData}
              </pre>
              <button
                onClick={handleCopy}
                className="mt-4 w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                Copy SQL Data
              </button>
            </div>
          )}
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Understanding CSV to SQL Conversion</h2>
          <p>
            In the realm of data management, converting data from one format to another is a common and essential task. 
            One of the most frequent conversions is from CSV (Comma-Separated Values) to SQL (Structured Query Language). 
            This article will explore the significance of CSV and SQL formats, the benefits of converting between them, 
            and how to effectively use our CSV to SQL Converter tool.
          </p>
          <h3 className="text-xl font-semibold">What is CSV?</h3>
          <p>
            CSV, or Comma-Separated Values, is a simple file format used to store tabular data, such as spreadsheets or databases. 
            Each line in a CSV file corresponds to a row in the table, and each value is separated by a comma. 
            CSV files are widely used due to their simplicity and ease of use, making them a popular choice for data exchange.
          </p>
          <h3 className="text-xl font-semibold">What is SQL?</h3>
          <p>
            SQL, or Structured Query Language, is a standard programming language used to manage and manipulate relational databases. 
            SQL allows users to perform various operations such as querying data, updating records, and managing database structures. 
            It is essential for developers and data analysts who work with databases to understand SQL for effective data management.
          </p>
          <h3 className="text-xl font-semibold">Why Convert CSV to SQL?</h3>
          <p>
            Converting CSV to SQL offers several advantages:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Structured Data:</strong> SQL provides a more structured way to represent data, making it easier to work with in relational databases.</li>
            <li><strong>Data Integrity:</strong> SQL databases enforce data integrity and relationships, ensuring that data is accurate and consistent.</li>
            <li><strong>Querying Capabilities:</strong> SQL allows for complex queries and data manipulation, enabling users to extract meaningful insights from their data.</li>
            <li><strong>Scalability:</strong> SQL databases can handle large volumes of data efficiently, making them suitable for growing applications.</li>
          </ul>
          <h3 className="text-xl font-semibold">Using the CSV to SQL Converter Tool</h3>
          <p>
            Our CSV to SQL Converter tool simplifies the conversion process. Here's how to use it effectively:
          </p>
          <ol className="list-decimal list-inside">
            <li>Upload your CSV file using the file input.</li>
            <li>Click the "Convert to SQL" button to initiate the conversion.</li>
            <li>Review the generated SQL output displayed in the output area.</li>
            <li>Use the "Copy SQL Data" button to copy the converted data to your clipboard for easy use in your projects.</li>
          </ol>
          <h3 className="text-xl font-semibold">Best Practices for Working with CSV and SQL</h3>
          <p>
            To ensure smooth data handling, consider the following best practices:
          </p>
          <ul className="list-disc list-inside">
            <li>Ensure your CSV data is well-structured and free of errors before conversion.</li>
            <li>Validate the SQL output to ensure it meets the required format for your database.</li>
            <li>Use meaningful table and column names in SQL to enhance readability and maintainability.</li>
            <li>Regularly back up your data in both formats to prevent data loss.</li>
          </ul>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            Converting CSV to SQL is a valuable skill for anyone working with data. By understanding the differences 
            between these formats and utilizing our CSV to SQL Converter tool, you can streamline your data management 
            processes and enhance your web applications. Start converting your CSV files today and unlock the potential 
            of your data!
          </p>
        </article>
</main>
      <Footer />
    </div>
  );
};

export default CsvToSqlConverter;
