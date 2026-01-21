'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, RefreshCw, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function JsonFormatterPage() {
  const [input, setInput] = useState(`{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA",
    "zipCode": "10001"
  },
  "hobbies": ["reading", "gaming", "coding"],
  "education": [
    {
      "degree": "Bachelor's",
      "major": "Computer Science",
      "year": 2015
    },
    {
      "degree": "Master's",
      "major": "Software Engineering",
      "year": 2017
    }
  ],
  "isActive": true,
  "lastLogin": "2024-03-15T10:30:00Z"
}`);

  const [output, setOutput] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const formatJSON = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed, null, 2);
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error.message);
      return jsonString;
    }
  };

  const minifyJSON = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      return JSON.stringify(parsed);
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error.message);
      return jsonString;
    }
  };

  const validateJSON = (jsonString) => {
    try {
      JSON.parse(jsonString);
      setIsValid(true);
      setErrorMessage('');
      return true;
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error.message);
      return false;
    }
  };

  const handleFormat = () => {
    if (!input.trim()) {
      toast.error('Please enter some JSON to format');
      return;
    }
    if (validateJSON(input)) {
      setOutput(formatJSON(input));
    }
  };

  const handleMinify = () => {
    if (!input.trim()) {
      toast.error('Please enter some JSON to minify');
      return;
    }
    if (validateJSON(input)) {
      setOutput(minifyJSON(input));
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success('Copied to clipboard!');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setIsValid(true);
    setErrorMessage('');
    toast.success('Cleared all fields');
  };

  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
    validateJSON(newInput);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">JSON Formatter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="input">Input JSON</Label>
                  <div className="flex items-center space-x-2">
                    {isValid ? (
                      <div className="flex items-center text-green-500">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm">Valid JSON</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-500">
                        <XCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm">Invalid JSON</span>
                      </div>
                    )}
                  </div>
                </div>
                {!isValid && (
                  <div className="text-sm text-red-500">
                    Error: {errorMessage}
                  </div>
                )}
                <Textarea
                  id="input"
                  placeholder="Enter JSON to format..."
                  value={input}
                  onChange={handleInputChange}
                  className="min-h-[200px] font-mono"
                />
              </div>

              <div className="flex justify-center space-x-4">
                <Button onClick={handleFormat} className="w-32">
                  Format
                </Button>
                <Button onClick={handleMinify} className="w-32">
                  Minify
                </Button>
                <Button onClick={handleClear} variant="outline" className="w-32">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="output">Output</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="h-8 px-2"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
                <Textarea
                  id="output"
                  value={output}
                  readOnly
                  className="min-h-[200px] font-mono bg-muted"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding JSON Formatting</h2>
        <p>
          JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, 
          and easy for machines to parse and generate. It is widely used for data exchange between a server and a web application. 
          Properly formatted JSON is crucial for ensuring that data is structured correctly and can be easily consumed by applications. 
          In this article, we will explore the importance of JSON formatting, common practices, and how our JSON Formatter tool can assist you.
        </p>
        <h3 className="text-xl font-semibold">Why is JSON Formatting Important?</h3>
        <p>
          The primary goal of formatting JSON is to improve its readability and maintainability. Here are some key reasons why formatting is crucial:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Enhanced Readability:</strong> Well-formatted JSON is easier to read and understand, allowing developers to quickly grasp the structure and content of the data.</li>
          <li><strong>Consistency:</strong> Consistent formatting across a codebase helps maintain a uniform style, making it easier for teams to collaborate and contribute to the project.</li>
          <li><strong>Debugging and Maintenance:</strong> Clean JSON is easier to debug and maintain. When data is well-structured, developers can identify issues more quickly and implement fixes efficiently.</li>
          <li><strong>Professionalism:</strong> Adhering to formatting standards reflects professionalism and attention to detail, which can positively impact the perception of your work.</li>
        </ul>
        <h3 className="text-xl font-semibold">Common JSON Formatting Practices</h3>
        <p>
          Here are some best practices for formatting JSON:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Indentation:</strong> Use consistent indentation to visually separate data structures. This helps in understanding the hierarchy of the data.</li>
          <li><strong>Whitespace:</strong> Use whitespace effectively to improve readability. Avoid excessive whitespace, but use it to separate logical sections of the data.</li>
          <li><strong>Line Length:</strong> Keep lines of JSON within a reasonable length (typically 80-120 characters) to avoid horizontal scrolling and improve readability.</li>
          <li><strong>Commenting:</strong> While JSON does not support comments, consider documenting your JSON structure in accompanying documentation to explain complex data.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Use the JSON Formatter Tool</h3>
        <p>
          Our JSON Formatter tool simplifies the process of formatting your JSON data. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Paste your JSON data into the input area provided.</li>
          <li>Click the "Format" button to process your JSON.</li>
          <li>The formatted JSON will appear in the output area, ready for you to copy and use.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using a JSON Formatter</h3>
        <p>
          Using a JSON Formatter offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Accuracy:</strong> Automated formatting tools provide precise formatting, eliminating the risk of human error.</li>
          <li><strong>Real-Time Feedback:</strong> Many JSON formatters offer real-time updates as you type, allowing you to monitor your progress instantly.</li>
          <li><strong>Comprehensive Statistics:</strong> In addition to formatting, our tool provides validation to ensure your JSON is correctly structured.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          JSON formatting is a vital practice for anyone working with data interchange in web applications. By using our JSON Formatter tool, 
          you can ensure that your JSON data is well-structured, readable, and ready for use in your applications. Start formatting your JSON today 
          and experience the benefits of clean data!
        </p>
      </article>
<Footer />
    </div>
  );
}
