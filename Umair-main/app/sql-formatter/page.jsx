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
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect } from 'react';
export default function SqlFormatterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [indentSize, setIndentSize] = useState(2);
  const [uppercase, setUppercase] = useState(true);

  const formatSQL = (sql) => {
    try {
      // Basic SQL formatting logic
      let formatted = sql
        // Remove extra whitespace
        .replace(/\s+/g, ' ')
        // Add newlines before keywords
        .replace(/\b(SELECT|FROM|WHERE|AND|OR|JOIN|LEFT|RIGHT|INNER|OUTER|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET)\b/gi, '\n$1')
        // Add newlines after commas
        .replace(/,/g, ',\n')
        // Add newlines after parentheses
        .replace(/\(/g, '(\n')
        .replace(/\)/g, '\n)')
        // Remove empty lines
        .replace(/\n\s*\n/g, '\n')
        // Trim whitespace
        .trim();

      // Apply indentation
      let lines = formatted.split('\n');
      let indentLevel = 0;
      let result = lines.map(line => {
        line = line.trim();
        if (line.includes(')')) {
          indentLevel--;
        }
        const indentation = ' '.repeat(indentLevel * indentSize);
        if (line.includes('(')) {
          indentLevel++;
        }
        return indentation + line;
      }).join('\n');

      // Apply uppercase to keywords if enabled
      if (uppercase) {
        const keywords = [
          'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'JOIN', 'LEFT', 'RIGHT',
          'INNER', 'OUTER', 'GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT',
          'OFFSET', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER',
          'DROP', 'TABLE', 'DATABASE', 'INDEX', 'VIEW', 'TRIGGER',
          'PROCEDURE', 'FUNCTION', 'AS', 'ON', 'IN', 'NOT', 'NULL',
          'DEFAULT', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'UNIQUE',
          'CHECK', 'CONSTRAINT'
        ];
        
        keywords.forEach(keyword => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
          result = result.replace(regex, keyword);
        });
      }

      return result;
    } catch (error) {
      console.error('Formatting error:', error);
      return 'Error formatting SQL query';
    }
  };

  const handleFormat = () => {
    if (!input.trim()) {
      toast.error('Please enter a SQL query');
      return;
    }
    const formatted = formatSQL(input);
    setOutput(formatted);
    toast.success('SQL query formatted successfully!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success('Formatted SQL copied to clipboard!');
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
    a.download = 'formatted.sql';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('SQL file downloaded!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">SQL Formatter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Input SQL</Label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          min="1"
                          max="8"
                          value={indentSize}
                          onChange={(e) => setIndentSize(Number(e.target.value))}
                          className="w-16 px-2 py-1 border rounded"
                        />
                        <Label>Indent</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={uppercase}
                          onChange={(e) => setUppercase(e.target.checked)}
                          className="rounded"
                        />
                        <Label>Uppercase Keywords</Label>
                      </div>
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
                    <Label>Formatted SQL</Label>
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
                  <div className="min-h-[300px] border rounded-md overflow-auto">
                    <SyntaxHighlighter
                      language="sql"
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        height: '100%',
                        minHeight: '300px'
                      }}
                    >
                      {output || 'Formatted SQL will appear here...'}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button onClick={handleFormat} className="w-32">
                  Format SQL
                </Button>
                <Button onClick={handleClear} variant="outline" className="w-32">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">SQL Formatting Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Keywords are automatically capitalized for better readability</li>
                  <li>Proper indentation is applied based on query structure</li>
                  <li>Line breaks are added before major clauses (SELECT, FROM, WHERE, etc.)</li>
                  <li>Commas and parentheses are properly formatted</li>
                  <li>Extra whitespace is removed while maintaining query structure</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding SQL Formatting</h2>
        <p>
          SQL (Structured Query Language) is the standard language used to communicate with databases. 
          Writing clean and well-structured SQL queries is essential for maintaining readability, 
          performance, and efficiency in database management. In this article, we will explore the importance of SQL formatting, 
          best practices for writing SQL queries, and how to use SQL formatting tools effectively.
        </p>
        
        <h3 className="text-xl font-semibold">Why is SQL Formatting Important?</h3>
        <p>
          Proper SQL formatting enhances the readability of your queries, making it easier for developers and database administrators 
          to understand and maintain the code. Here are some key reasons why SQL formatting is crucial:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Improved Readability:</strong> Well-formatted SQL queries are easier to read and comprehend, reducing the likelihood of errors.</li>
          <li><strong>Collaboration:</strong> In team environments, clear formatting helps team members understand each other's work, facilitating collaboration.</li>
          <li><strong>Debugging:</strong> When issues arise, formatted SQL queries make it easier to identify problems and debug code.</li>
          <li><strong>Performance:</strong> While formatting itself does not directly impact performance, well-structured queries can lead to better execution plans.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Writing SQL Queries</h3>
        <p>
          Following best practices when writing SQL queries can significantly improve their quality. Here are some tips to consider:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Use Consistent Indentation:</strong> Indentation helps to visually separate different parts of the query, making it easier to follow the logic.</li>
          <li><strong>Capitalize SQL Keywords:</strong> Capitalizing keywords (e.g., SELECT, FROM, WHERE) helps them stand out and improves readability.</li>
          <li><strong>Break Long Queries into Multiple Lines:</strong> If a query is too long, break it into multiple lines to avoid horizontal scrolling.</li>
          <li><strong>Comment Your Code:</strong> Use comments to explain complex logic or important decisions within your queries.</li>
          <li><strong>Use Aliases Wisely:</strong> When using table or column aliases, ensure they are meaningful and enhance clarity.</li>
        </ol>

        <h3 className="text-xl font-semibold">Common SQL Formatting Techniques</h3>
        <p>
          Here are some common techniques used in SQL formatting:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Newlines Before Keywords:</strong> Adding newlines before major SQL keywords (e.g., SELECT, FROM, WHERE) helps to visually separate different clauses.</li>
          <li><strong>Indentation for Nested Queries:</strong> Indent nested queries to show their relationship to the main query.</li>
          <li><strong>Consistent Use of Spaces:</strong> Use spaces around operators (e.g., =, &lt;, &gt;) to improve readability.</li>
          <li><strong>Properly Format Lists:</strong> When using lists (e.g., in SELECT statements), ensure each item is on a new line for clarity.</li>
        </ul>

        <h3 className="text-xl font-semibold">Using SQL Formatting Tools</h3>
        <p>
          SQL formatting tools, like the one provided in this application, can automate the process of formatting SQL queries. 
          These tools can save time and ensure consistency across your SQL code. Here's how to effectively use SQL formatting tools:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Input Your SQL Query:</strong> Paste your SQL query into the input area of the formatter.</li>
          <li><strong>Select Formatting Options:</strong> Choose options such as indentation size and whether to capitalize keywords.</li>
          <li><strong>Format the Query:</strong> Click the format button to apply the formatting rules.</li>
          <li><strong>Review the Output:</strong> Check the formatted SQL in the output area and make any necessary adjustments.</li>
        </ol>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          SQL formatting is an essential skill for anyone working with databases. By following best practices and utilizing formatting tools, 
          you can write cleaner, more efficient SQL queries that are easier to read and maintain. Start implementing these techniques today 
          to enhance your SQL coding practices and improve collaboration with your team.
        </p>
      </article>

<Footer />
    </div>
  );
}