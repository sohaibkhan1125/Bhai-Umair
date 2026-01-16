'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function JsxToJavaScriptPage() {
  const [input, setInput] = useState(`// Sample JSX code to demonstrate conversion
function UserProfile({ name, age, hobbies }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="user-profile">
      <h1>Welcome, {name}!</h1>
      <p>Age: {age}</p>
      
      <div className="hobbies-section">
        <h2>Hobbies:</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="expand-btn"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>

      {isExpanded && (
        <div className="additional-info">
          <p>This is additional information</p>
          <span className="highlight">Highlighted text</span>
        </div>
      )}
    </div>
  );
}`);

  const [output, setOutput] = useState('');

  const convertJsxToJavaScript = (code) => {
    try {
      let converted = code
        // Convert JSX className to className
        .replace(/className=/g, 'className=')
        // Convert JSX self-closing tags
        .replace(/<(\w+)\s*\/>/g, 'React.createElement($1)')
        // Convert JSX opening tags
        .replace(/<(\w+)([^>]*)>/g, 'React.createElement($1, $2)')
        // Convert JSX closing tags
        .replace(/<\/(\w+)>/g, ')')
        // Convert JSX attributes
        .replace(/(\w+)=["']([^"']*)["']/g, '$1: "$2"')
        // Convert JSX expressions
        .replace(/{([^}]+)}/g, '$1')
        // Convert JSX children
        .replace(/>([^<]+)</g, ', "$1", ')
        // Clean up extra commas
        .replace(/,\s*\)/g, ')')
        // Add React.createElement import if not present
        .replace(/^/, 'import React from "react";\n\n');

      // Format the output
      converted = converted
        .replace(/\s+/g, ' ')
        .replace(/React\.createElement\(/g, '\nReact.createElement(')
        .replace(/\)/g, ')\n')
        .trim();

      return converted;
    } catch (error) {
      toast.error('Error converting JSX to JavaScript');
      console.error('Conversion error:', error);
      return code;
    }
  };

  const handleConvert = () => {
    if (!input.trim()) {
      toast.error('Please enter some JSX code to convert');
      return;
    }
    setOutput(convertJsxToJavaScript(input));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success('Copied to clipboard!');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    toast.success('Cleared all fields');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">JSX to JavaScript Converter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="input">Input JSX Code</Label>
                <Textarea
                  id="input"
                  placeholder="Enter JSX code to convert..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[200px] font-mono"
                />
              </div>

              <div className="flex justify-center space-x-4">
                <Button onClick={handleConvert} className="w-32">
                  Convert
                </Button>
                <Button onClick={handleClear} variant="outline" className="w-32">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="output">JavaScript Output</Label>
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
        <h2 className="text-2xl font-bold">Understanding JSX to JavaScript Conversion</h2>
        <p>
          Converting JSX to JavaScript is a fundamental process for developers working with React. JSX, or JavaScript XML, 
          allows developers to write HTML-like syntax directly within JavaScript, making it easier to create and manage user 
          interfaces. However, browsers do not understand JSX natively; it must be converted to standard JavaScript before 
          it can be executed. In this article, we will explore the importance of converting JSX to JavaScript, the differences 
          between the two, and how to effectively use our JSX to JavaScript Converter tool.
        </p>
        <h3 className="text-xl font-semibold">Why Convert JSX to JavaScript?</h3>
        <p>
          The primary reason for converting JSX to JavaScript is to enable the use of HTML-like syntax in React components. 
          JSX provides several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Readability:</strong> JSX syntax is more readable and intuitive for developers familiar with HTML, making it easier to visualize the structure of components.</li>
          <li><strong>Dynamic Content:</strong> JSX allows for the integration of JavaScript expressions within HTML, enabling dynamic rendering of content based on application state.</li>
          <li><strong>Component-Based Architecture:</strong> JSX promotes a component-based architecture, allowing developers to create reusable UI components that encapsulate their own logic and styles.</li>
        </ul>
        <h3 className="text-xl font-semibold">Key Differences Between JSX and JavaScript</h3>
        <p>
          While JSX resembles JavaScript, there are some key differences that developers should be aware of:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Attribute Naming:</strong> In JSX, the <code>class</code> attribute is replaced with <code>className</code>, and the <code>for</code> attribute is replaced with <code>htmlFor</code> to avoid conflicts with JavaScript reserved words.</li>
          <li><strong>Self-Closing Tags:</strong> JSX requires self-closing tags for elements like <code>&lt;img&gt;</code> and <code>&lt;input&gt;</code>, which must be written as <code>&lt;img /&gt;</code> and <code>&lt;input /&gt;</code>.</li>
          <li><strong>Style Attributes:</strong> Inline styles in JSX are specified as objects, requiring camelCase property names instead of the traditional CSS syntax.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Use the JSX to JavaScript Converter Tool</h3>
        <p>
          Our JSX to JavaScript Converter tool simplifies the process of converting JSX code to JavaScript syntax. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Paste your JSX code into the input field provided.</li>
          <li>Click the "Convert" button to process your JSX.</li>
          <li>The converted JavaScript code will appear in the output area, ready for you to copy and use in your React components.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using the JSX to JavaScript Converter</h3>
        <p>
          Using a JSX to JavaScript converter offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Efficiency:</strong> Automating the conversion process saves time and reduces the risk of errors compared to manual conversion.</li>
          <li><strong>Consistency:</strong> Ensures that the conversion is done uniformly, maintaining a clean and organized codebase.</li>
          <li><strong>Learning Tool:</strong> For beginners, using a converter can help understand the differences between JSX and JavaScript, facilitating the learning process.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Converting JSX to JavaScript is an essential skill for React developers. By using our JSX to JavaScript Converter tool, 
          you can streamline the conversion process and ensure that your code is ready for use in React applications. Start converting 
          your JSX today and take advantage of the benefits of JavaScript!
        </p>
      </article>
<Footer />
    </div>
  );
}
