'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, RefreshCw, Download } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function SqlMinifierPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [preserveCase, setPreserveCase] = useState(false);

  const minifySQL = (sql) => {
    try {
      // Remove comments
      let minified = sql.replace(/--.*$/gm, '') // Single line comments
        .replace(/\/\*[\s\S]*?\*\//g, ''); // Multi-line comments

      // Remove extra whitespace and newlines
      minified = minified
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .replace(/\s*([,()])\s*/g, '$1') // Remove spaces around commas and parentheses
        .replace(/\s*([=<>!]+)\s*/g, ' $1 ') // Add spaces around operators
        .replace(/\s*([+\-*/%])\s*/g, ' $1 ') // Add spaces around arithmetic operators
        .replace(/\s*([<>])\s*/g, ' $1 ') // Add spaces around comparison operators
        .replace(/\s*([=])\s*/g, ' $1 ') // Add spaces around equals
        .replace(/\s*([!])\s*/g, ' $1 ') // Add spaces around exclamation marks
        .replace(/\s*([&|])\s*/g, ' $1 ') // Add spaces around logical operators
        .replace(/\s*([^=<>!+\-*/%&|])\s*/g, '$1') // Remove spaces around other characters
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .trim();

      // Handle SQL keywords
      if (!preserveCase) {
        const keywords = [
          'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'JOIN', 'LEFT', 'RIGHT',
          'INNER', 'OUTER', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT',
          'OFFSET', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER',
          'DROP', 'TABLE', 'DATABASE', 'INDEX', 'VIEW', 'TRIGGER',
          'PROCEDURE', 'FUNCTION', 'AS', 'ON', 'IN', 'NOT', 'NULL',
          'DEFAULT', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'UNIQUE',
          'CHECK', 'CONSTRAINT', 'VALUES', 'SET', 'INTO', 'DISTINCT',
          'COUNT', 'SUM', 'AVG', 'MAX', 'MIN', 'BETWEEN', 'LIKE',
          'IS', 'EXISTS', 'ANY', 'ALL', 'UNION', 'INTERSECT', 'EXCEPT'
        ];

        keywords.forEach(keyword => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
          minified = minified.replace(regex, keyword.toLowerCase());
        });
      }

      // Remove spaces around parentheses in function calls
      minified = minified.replace(/\s*\(\s*/g, '(').replace(/\s*\)\s*/g, ')');

      return minified;
    } catch (error) {
      console.error('Minification error:', error);
      return 'Error minifying SQL query';
    }
  };

  const handleMinify = () => {
    if (!input.trim()) {
      toast.error('Please enter a SQL query');
      return;
    }
    const minified = minifySQL(input);
    setOutput(minified);
    toast.success('SQL query minified successfully!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success('Minified SQL copied to clipboard!');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    toast.success('Form cleared!');
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'minified.sql';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Minified SQL file downloaded!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">SQL Minifier</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Input SQL</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={preserveCase}
                        onChange={(e) => setPreserveCase(e.target.checked)}
                        className="rounded"
                      />
                      <Label>Preserve Case</Label>
                    </div>
                  </div>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your SQL query here..."
                    className="min-h-[300px] font-mono"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Minified SQL</Label>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                        className="h-8 px-2"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleDownload}
                        className="h-8 px-2"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    value={output}
                    readOnly
                    className="min-h-[300px] font-mono bg-muted"
                  />
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button onClick={handleMinify} className="w-32">
                  Minify SQL
                </Button>
                <Button onClick={handleClear} variant="outline" className="w-32">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">SQL Minification Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Removes unnecessary whitespace and newlines</li>
                  <li>Removes SQL comments (both single-line and multi-line)</li>
                  <li>Converts SQL keywords to lowercase (unless case preservation is enabled)</li>
                  <li>Maintains proper spacing around operators for readability</li>
                  <li>Preserves query functionality while reducing file size</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding SQL Minification</h2>
        <p>
          SQL minification is the process of removing unnecessary characters from SQL code without changing its functionality. 
          This process is essential for optimizing SQL queries, especially in production environments where performance and efficiency are critical. 
          In this article, we will explore the importance of SQL minification, best practices, and how to effectively use SQL minification tools.
        </p>
        
        <h3 className="text-xl font-semibold">Why is SQL Minification Important?</h3>
        <p>
          Minifying SQL queries can lead to several benefits, including:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Reduced File Size:</strong> Minified SQL queries take up less space, which can be crucial when dealing with large databases or when transferring data over the network.</li>
          <li><strong>Improved Performance:</strong> Smaller queries can lead to faster execution times, as there is less data for the database engine to parse and process.</li>
          <li><strong>Enhanced Readability:</strong> While minification primarily focuses on reducing size, it can also help in organizing SQL code, making it easier to read and maintain.</li>
          <li><strong>Fewer Errors:</strong> By removing unnecessary whitespace and comments, the likelihood of syntax errors can be reduced, leading to more reliable code.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for SQL Minification</h3>
        <p>
          To effectively minify SQL queries, consider the following best practices:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Remove Comments:</strong> Eliminate both single-line and multi-line comments from your SQL code to reduce size and improve clarity.</li>
          <li><strong>Trim Whitespace:</strong> Remove unnecessary spaces, tabs, and newlines to condense your SQL queries.</li>
          <li><strong>Use Consistent Formatting:</strong> Maintain a consistent style for your SQL code, which can help in identifying areas that can be minified.</li>
          <li><strong>Preserve Case When Necessary:</strong> If your SQL queries rely on case sensitivity, ensure that you have an option to preserve the case of keywords.</li>
          <li><strong>Test After Minification:</strong> Always test your SQL queries after minification to ensure that they still function as intended.</li>
        </ol>

        <h3 className="text-xl font-semibold">Common SQL Minification Techniques</h3>
        <p>
          Here are some common techniques used in SQL minification:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Whitespace Removal:</strong> This involves eliminating all unnecessary spaces and newlines from the SQL code.</li>
          <li><strong>Comment Stripping:</strong> Removing comments helps to reduce the size of the SQL code without affecting its functionality.</li>
          <li><strong>Keyword Lowercasing:</strong> Converting SQL keywords to lowercase can help in maintaining consistency and reducing size, especially when case sensitivity is not a concern.</li>
          <li><strong>Operator Spacing:</strong> Ensuring proper spacing around operators can enhance readability while still allowing for minification.</li>
        </ul>

        <h3 className="text-xl font-semibold">Using SQL Minification Tools</h3>
        <p>
          SQL minification tools can automate the process of minifying SQL queries, saving time and ensuring consistency. 
          Here's how to effectively use SQL minification tools:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Input Your SQL Query:</strong> Paste your SQL query into the input area of the minifier.</li>
          <li><strong>Select Options:</strong> Choose options such as whether to preserve case or remove comments.</li>
          <li><strong>Minify the Query:</strong> Click the minify button to apply the minification rules.</li>
          <li><strong>Review the Output:</strong> Check the minified SQL in the output area and make any necessary adjustments.</li>
        </ol>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          SQL minification is a valuable practice for anyone working with databases. By following best practices and utilizing minification tools, 
          you can write cleaner, more efficient SQL queries that are easier to manage and execute. Start implementing these techniques today 
          to enhance your SQL coding practices and improve the performance of your database applications.
        </p>
      </article>

<Footer />
    </div>
  );
}