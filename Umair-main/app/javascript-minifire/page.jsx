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

export default function JavaScriptMinifierPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [preserveComments, setPreserveComments] = useState(false);

  const minifyJavaScript = (code) => {
    try {
      let minified = code;

      // Remove comments if not preserving them
      if (!preserveComments) {
        minified = minified
          .replace(/\/\*[\s\S]*?\*\//g, '') // Multi-line comments
          .replace(/\/\/.*$/gm, ''); // Single-line comments
      }

      // Remove unnecessary whitespace
      minified = minified
        // Remove whitespace around operators
.replace(/\s*([+\-*/%=&|^<>!])\s*/g, '$1')
// Remove whitespace around parentheses and brackets
        .replace(/\s*([()\[\]{}])\s*/g, '$1')
        // Remove whitespace around commas and semicolons
        .replace(/\s*([,;])\s*/g, '$1')
// Remove multiple spaces
        .replace(/\s+/g, ' ')
        // Remove empty lines
        .replace(/\n\s*\n/g, '\n')
        // Trim whitespace
        .trim();

return minified;
    } catch (error) {
      console.error('Minification error:', error);
      return `Error minifying JavaScript: ${error.message}`;
    }
  };

  const handleMinify = () => {
    if (!input.trim()) {
      toast.error('Please enter JavaScript code');
      return;
    }
    const minified = minifyJavaScript(input);
    setOutput(minified);
    toast.success('JavaScript code minified successfully!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success('Minified code copied to clipboard!');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    toast.success('Form cleared!');
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'minified.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Minified JavaScript file downloaded!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">JavaScript Minifier</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Input JavaScript</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={preserveComments}
                        onChange={(e) => setPreserveComments(e.target.checked)}
                        className="rounded"
                      />
                      <Label>Preserve Comments</Label>
                    </div>
                  </div>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your JavaScript code here..."
                    className="min-h-[300px] font-mono"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Minified JavaScript</Label>
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
                  Minify
                </Button>
                <Button onClick={handleClear} variant="outline" className="w-32">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">JavaScript Minification Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Removes unnecessary whitespace and newlines</li>
                  <li>Preserves code functionality while reducing file size</li>
                  <li>Handles all JavaScript operators and special characters</li>
                  <li>Option to preserve comments for debugging</li>
                  <li>Maintains proper spacing around operators for readability</li>
                  <li>Handles template literals, arrow functions, and modern JS features</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding JavaScript Minification</h2>
        <p>
          JavaScript minification is a crucial process in web development that involves removing unnecessary characters from 
          JavaScript code without changing its functionality. This includes removing whitespace, comments, and other non-essential 
          elements. Minification is essential for optimizing web performance, improving load times, and enhancing user experience. 
          In this article, we will explore the importance of JavaScript minification, its benefits, and how to effectively use 
          our JavaScript Minifier tool.
        </p>
        <h3 className="text-xl font-semibold">Why is JavaScript Minification Important?</h3>
        <p>
          The primary goal of JavaScript minification is to reduce the size of JavaScript files, which can significantly impact 
          the performance of web applications. Here are some key reasons why minification is important:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Faster Load Times:</strong> Minified JavaScript files are smaller in size, which means they can be downloaded 
          more quickly by browsers. This leads to faster page load times, which is critical for user retention and overall satisfaction.</li>
          <li><strong>Reduced Bandwidth Usage:</strong> Smaller JavaScript files consume less bandwidth, which can be particularly 
          beneficial for users on mobile devices or those with limited data plans.</li>
          <li><strong>Improved SEO:</strong> Search engines favor fast-loading websites. By minifying JavaScript, you can improve 
          your site's performance, which can positively impact your search engine rankings.</li>
          <li><strong>Enhanced User Experience:</strong> A faster website provides a better user experience, reducing bounce rates 
          and increasing engagement.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Minify JavaScript</h3>
        <p>
          Minifying JavaScript can be done manually or through automated tools. Here's how to effectively minify JavaScript:
        </p>
        <ol className="list-decimal list-inside">
          <li>Remove unnecessary whitespace, including spaces, tabs, and line breaks.</li>
          <li>Eliminate comments that are not needed for the final output.</li>
          <li>Use a minification tool or library to automate the process, ensuring that the original functionality remains intact.</li>
        </ol>
        <h3 className="text-xl font-semibold">Using the JavaScript Minifier Tool</h3>
        <p>
          Our JavaScript Minifier tool simplifies the process of minifying your JavaScript code. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Paste your JavaScript code into the input area.</li>
          <li>Click the "Minify" button to process your code.</li>
          <li>The minified JavaScript will appear in the output area, ready for you to copy and use.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using a JavaScript Minifier</h3>
        <p>
          Using a JavaScript Minifier offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Efficiency:</strong> Automating the minification process saves time and reduces the risk of human error.</li>
          <li><strong>Consistency:</strong> Ensures that all JavaScript files are minified uniformly, maintaining a clean style.</li>
          <li><strong>Easy Integration:</strong> Minified JavaScript can be easily integrated into your web projects without affecting functionality.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          JavaScript minification is a vital practice for optimizing web performance. By using our JavaScript Minifier tool, you can 
          ensure that your JavaScript code is clean, efficient, and ready for production. Start minifying your JavaScript today and 
          experience the benefits of faster load times and improved user experience!
        </p>
      </article> 
<Footer />
    </div>
  );
}