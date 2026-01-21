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

export default function JavaScriptFormatterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const formatJavaScript = (code) => {
    try {
      // Basic indentation and formatting
      let formatted = code
        // Add spaces around operators
        .replace(/([+\-*/%=&|<>!^~])/g, ' $1 ')
        // Add spaces after commas
        .replace(/,/g, ', ')
        // Add spaces after semicolons
        .replace(/;/g, '; ')
        // Add spaces after keywords
        .replace(/\b(if|else|for|while|do|switch|case|break|continue|return|function|var|let|const)\b/g, ' $1 ')
        // Remove multiple spaces
        .replace(/\s+/g, ' ')
        // Add newlines after semicolons
        .replace(/;/g, ';\n')
        // Add newlines after curly braces
        .replace(/{/g, '{\n')
        .replace(/}/g, '\n}')
        // Add newlines after parentheses
        .replace(/\(/g, '(\n')
        .replace(/\)/g, '\n)')
        // Add newlines after square brackets
        .replace(/\[/g, '[\n')
        .replace(/\]/g, '\n]')
        // Remove empty lines
        .replace(/\n\s*\n/g, '\n')
        // Trim whitespace
        .trim();

      // Add proper indentation
      let lines = formatted.split('\n');
      let indentLevel = 0;
      let indentedLines = lines.map(line => {
        line = line.trim();
        if (line.includes('}')) indentLevel--;
        let indented = '  '.repeat(indentLevel) + line;
        if (line.includes('{')) indentLevel++;
        return indented;
      });

      return indentedLines.join('\n');
    } catch (error) {
      toast.error('Error formatting JavaScript code');
      console.error('Formatting error:', error);
      return code;
    }
  };

  const minifyJavaScript = (code) => {
    try {
      return code
        // Remove comments
        .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
        // Remove whitespace
        .replace(/\s+/g, ' ')
        // Remove spaces around operators
        .replace(/\s*([+\-*/%=&|<>!^~])\s*/g, '$1')
        // Remove spaces after commas
        .replace(/,\s*/g, ',')
        // Remove spaces after semicolons
        .replace(/;\s*/g, ';')
        // Remove spaces around curly braces
        .replace(/\s*{\s*/g, '{')
        .replace(/\s*}\s*/g, '}')
        // Remove spaces around parentheses
        .replace(/\s*\(\s*/g, '(')
        .replace(/\s*\)\s*/g, ')')
        // Remove spaces around square brackets
        .replace(/\s*\[\s*/g, '[')
        .replace(/\s*\]\s*/g, ']')
        // Trim whitespace
        .trim();
    } catch (error) {
      toast.error('Error minifying JavaScript code');
      console.error('Minification error:', error);
      return code;
    }
  };

  const handleFormat = () => {
    if (!input.trim()) {
      toast.error('Please enter some JavaScript code to format');
      return;
    }
    setOutput(formatJavaScript(input));
  };

  const handleMinify = () => {
    if (!input.trim()) {
      toast.error('Please enter some JavaScript code to minify');
      return;
    }
    setOutput(minifyJavaScript(input));
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
            <CardTitle className="text-2xl font-bold text-center">JavaScript Formatter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="input">Input JavaScript Code</Label>
                <Textarea
                  id="input"
                  placeholder="Enter JavaScript code to format..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
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
        <h2 className="text-2xl font-bold">Understanding JavaScript Formatting</h2>
        <p>
          JavaScript formatting is an essential practice for developers to ensure that their code is clean, readable, and maintainable. Properly formatted code not only enhances readability but also helps in debugging and collaboration among team members. In this article, we will explore the importance of JavaScript formatting, common practices, and how our JavaScript Formatter tool can assist you in achieving clean code.
        </p>
        <h3 className="text-xl font-semibold">Why is JavaScript Formatting Important?</h3>
        <p>
          The primary goal of formatting JavaScript code is to improve its readability and maintainability. Here are some key reasons why formatting is crucial:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Enhanced Readability:</strong> Well-formatted code is easier to read and understand, allowing developers to quickly grasp the logic and flow of the program.</li>
          <li><strong>Consistency:</strong> Consistent formatting across a codebase helps maintain a uniform style, making it easier for teams to collaborate and contribute to the project.</li>
          <li><strong>Debugging and Maintenance:</strong> Clean code is easier to debug and maintain. When code is well-structured, developers can identify issues more quickly and implement fixes efficiently.</li>
          <li><strong>Professionalism:</strong> Adhering to formatting standards reflects professionalism and attention to detail, which can positively impact the perception of your work.</li>
        </ul>
        <h3 className="text-xl font-semibold">Common JavaScript Formatting Practices</h3>
        <p>
          Here are some best practices for formatting JavaScript code:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Indentation:</strong> Use consistent indentation to visually separate code blocks. This helps in understanding the structure of the code.</li>
          <li><strong>Whitespace:</strong> Use whitespace effectively to improve readability. Avoid excessive whitespace, but use it to separate logical sections of code.</li>
          <li><strong>Line Length:</strong> Keep lines of code within a reasonable length (typically 80-120 characters) to avoid horizontal scrolling and improve readability.</li>
          <li><strong>Commenting:</strong> Use comments to explain complex logic or important sections of code. This is especially helpful for other developers who may work on your code in the future.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Use the JavaScript Formatter Tool</h3>
        <p>
          Our JavaScript Formatter tool simplifies the process of formatting your code. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Paste your JavaScript code into the input field provided.</li>
          <li>Click the "Format" button to process your code.</li>
          <li>The formatted code will appear in the output area, ready for you to copy and use.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using a JavaScript Formatter</h3>
        <p>
          Using a JavaScript formatter offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Time-Saving:</strong> Automating the formatting process saves time compared to manual formatting.</li>
          <li><strong>Consistency:</strong> Ensures that all code is formatted uniformly, maintaining a clean codebase.</li>
          <li><strong>Error Reduction:</strong> Reduces the likelihood of errors caused by improperly formatted code.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          JavaScript formatting is a vital practice for developers to ensure clean, readable, and maintainable code. By using our JavaScript Formatter tool, you can easily format your code and improve its overall quality. Start formatting your JavaScript today and experience the benefits of clean code!
        </p>
      </article>
<Footer />
    </div>
  );
}
