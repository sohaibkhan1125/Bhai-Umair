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

export default function CaseConverterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [selectedCase, setSelectedCase] = useState('sentence');

  const convertCase = (text, caseType) => {
    if (!text.trim()) return '';

    switch (caseType) {
      case 'uppercase':
        return text.toUpperCase();
      
      case 'lowercase':
        return text.toLowerCase();
      
      case 'capitalize':
        return text
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      
      case 'sentence':
        return text
          .split('. ')
          .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase())
          .join('. ');
      
      case 'camelCase':
        return text
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
          .replace(/^[A-Z]/, c => c.toLowerCase());
      
      case 'PascalCase':
        return text
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
          .replace(/^[a-z]/, c => c.toUpperCase());
      
      case 'snake_case':
        return text
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+/g, '_')
          .replace(/^_+|_+$/g, '');
      
      case 'kebab-case':
        return text
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
      
      case 'dot.case':
        return text
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+/g, '.')
          .replace(/^\.+|\.+$/g, '');
      
      case 'CONSTANT_CASE':
        return text
          .toUpperCase()
          .replace(/[^A-Z0-9]+/g, '_')
          .replace(/^_+|_+$/g, '');
      
      case 'Title Case':
        return text
          .toLowerCase()
          .replace(/(?:^|\s|'|")\S/g, char => char.toUpperCase());
      
      case 'aNtIcAsE':
        return text
          .split('')
          .map((char, i) => i % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
          .join('');
      
      case 'InVeRsE cAsE':
        return text
          .split('')
          .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
          .join('');
      
      default:
        return text;
    }
  };

  const handleConvert = () => {
    if (!input.trim()) {
      toast.error('Please enter some text');
      return;
    }
    const converted = convertCase(input, selectedCase);
    setOutput(converted);
    toast.success('Text converted successfully!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success('Converted text copied to clipboard!');
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
    a.download = 'converted.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Converted text downloaded!');
  };

  const caseTypes = [
    { value: 'uppercase', label: 'UPPERCASE' },
    { value: 'lowercase', label: 'lowercase' },
    { value: 'capitalize', label: 'Capitalize' },
    { value: 'sentence', label: 'Sentence case' },
    { value: 'camelCase', label: 'camelCase' },
    { value: 'PascalCase', label: 'PascalCase' },
    { value: 'snake_case', label: 'snake_case' },
    { value: 'kebab-case', label: 'kebab-case' },
    { value: 'dot.case', label: 'dot.case' },
    { value: 'CONSTANT_CASE', label: 'CONSTANT_CASE' },
    { value: 'Title Case', label: 'Title Case' },
    { value: 'aNtIcAsE', label: 'aNtIcAsE' },
    { value: 'InVeRsE cAsE', label: 'InVeRsE cAsE' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Case Converter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Input Text</Label>
                    <select
                      value={selectedCase}
                      onChange={(e) => setSelectedCase(e.target.value)}
                      className="px-3 py-1 border rounded-md bg-background"
                    >
                      {caseTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your text here..."
                    className="min-h-[300px]"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Converted Text</Label>
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
                    className="min-h-[300px] bg-muted"
                  />
                </div>
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

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Case Conversion Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Select the desired case style from the dropdown menu</li>
                  <li>Paste or type your text in the input field</li>
                  <li>Click Convert to transform the text</li>
                  <li>Use Copy or Download to save the result</li>
                  <li>Clear the form to start over</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Case Conversion</h2>
        <p>
          Case conversion is a fundamental aspect of text processing that involves changing the case of characters in a string. 
          This process is essential in various applications, including programming, data entry, and content management. 
          In this article, we will explore the importance of case conversion, different case styles, and best practices for implementing case conversion effectively.
        </p>
        
        <h3 className="text-xl font-semibold">Why is Case Conversion Important?</h3>
        <p>
          Case conversion plays a crucial role in ensuring consistency and readability in text. Here are some key reasons why it is important:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Data Consistency:</strong> Maintaining a consistent case format across data entries helps in avoiding confusion and errors, especially in databases and programming.</li>
          <li><strong>Improved Readability:</strong> Proper case formatting enhances the readability of text, making it easier for users to understand and process information.</li>
          <li><strong>Search Optimization:</strong> In search engines and databases, case sensitivity can affect search results. Converting text to a standard case can improve search accuracy.</li>
          <li><strong>Standardization:</strong> Many coding standards and style guides recommend specific case formats (e.g., camelCase, PascalCase) for variable names and functions, promoting uniformity in code.</li>
        </ul>

        <h3 className="text-xl font-semibold">Common Case Styles</h3>
        <p>
          There are several common case styles used in programming and text formatting. Understanding these styles can help you choose the right one for your needs:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Uppercase:</strong> All letters are capitalized (e.g., "HELLO WORLD"). This style is often used for emphasis.</li>
          <li><strong>Lowercase:</strong> All letters are in lowercase (e.g., "hello world"). This style is commonly used in URLs and email addresses.</li>
          <li><strong>Capitalized:</strong> The first letter of each word is capitalized (e.g., "Hello World"). This style is often used for titles and headings.</li>
          <li><strong>Sentence Case:</strong> The first letter of the first word is capitalized, while the rest are in lowercase (e.g., "Hello world."). This style is used in regular sentences.</li>
          <li><strong>CamelCase:</strong> The first letter of each word is capitalized, except for the first word (e.g., "helloWorld"). This style is commonly used in programming for variable names.</li>
          <li><strong>PascalCase:</strong> Similar to CamelCase, but the first letter of every word is capitalized (e.g., "HelloWorld"). This style is often used for class names in programming.</li>
          <li><strong>snake_case:</strong> Words are separated by underscores and all letters are in lowercase (e.g., "hello_world"). This style is commonly used in database column names.</li>
          <li><strong>kebab-case:</strong> Words are separated by hyphens and all letters are in lowercase (e.g., "hello-world"). This style is often used in URLs.</li>
          <li><strong>CONSTANT_CASE:</strong> All letters are uppercase and words are separated by underscores (e.g., "HELLO_WORLD"). This style is typically used for constants in programming.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Case Conversion</h3>
        <p>
          To effectively implement case conversion, consider the following best practices:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Choose the Right Case Style:</strong> Select a case style that aligns with your project's requirements and coding standards.</li>
          <li><strong>Be Consistent:</strong> Maintain consistency in case formatting throughout your application or document to avoid confusion.</li>
          <li><strong>Test for Edge Cases:</strong> Ensure that your case conversion logic handles edge cases, such as empty strings or strings with special characters.</li>
          <li><strong>Document Your Choices:</strong> Clearly document the case styles used in your project to help other developers understand your decisions.</li>
          <li><strong>Utilize Tools:</strong> Use case conversion tools or libraries to automate the process and reduce the risk of errors.</li>
        </ol>

        <h3 className="text-xl font-semibold">Using Case Conversion Tools</h3>
        <p>
          Case conversion tools can simplify the process of changing text case. Here's how to effectively use these tools:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Input Your Text:</strong> Paste or type your text into the input area of the case converter.</li>
          <li><strong>Select the Desired Case Style:</strong> Choose the case style you want to apply from the dropdown menu.</li>
          <li><strong>Convert the Text:</strong> Click the convert button to apply the selected case style.</li>
          <li><strong>Review the Output:</strong> Check the converted text in the output area and make any necessary adjustments.</li>
        </ol>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Case conversion is an essential skill for anyone working with text data. By understanding different case styles and following best practices, 
          you can ensure that your text is formatted correctly and consistently. Start implementing these techniques today to enhance your text processing capabilities.
        </p>
      </article>

<Footer />
    </div>
  );
}