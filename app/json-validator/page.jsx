'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, RefreshCw, Download, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function JsonValidatorPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [indentSize, setIndentSize] = useState(2);

  const validateAndFormatJSON = (jsonString) => {
    try {
      // Parse JSON to validate
      const parsed = JSON.parse(jsonString);
      
      // Format JSON with specified indentation
      const formatted = JSON.stringify(parsed, null, indentSize);
      
      setIsValid(true);
      setErrorMessage('');
      return formatted;
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error.message);
      return jsonString;
    }
  };

  const handleValidate = () => {
    if (!input.trim()) {
      toast.error('Please enter JSON data');
      return;
    }
    const formatted = validateAndFormatJSON(input);
    setOutput(formatted);
    
    if (isValid) {
      toast.success('JSON is valid!');
    } else {
      toast.error('Invalid JSON!');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success('JSON copied to clipboard!');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setIsValid(true);
    setErrorMessage('');
    toast.success('Form cleared!');
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('JSON file downloaded!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">JSON Validator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Input JSON</Label>
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
                        {isValid ? (
                          <div className="flex items-center text-green-500">
                            <CheckCircle2 className="w-4 h-4 mr-1" />
                            <span>Valid</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-red-500">
                            <XCircle className="w-4 h-4 mr-1" />
                            <span>Invalid</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your JSON data here..."
                    className="min-h-[300px] font-mono"
                  />
                  {!isValid && (
                    <div className="text-sm text-red-500 mt-2">
                      Error: {errorMessage}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label>Formatted JSON</Label>
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
                <Button onClick={handleValidate} className="w-32">
                  Validate
                </Button>
                <Button onClick={handleClear} variant="outline" className="w-32">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">JSON Validation Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>JSON must be properly formatted with valid syntax</li>
                  <li>All strings must be enclosed in double quotes</li>
                  <li>Arrays and objects must be properly closed</li>
                  <li>Commas must separate array elements and object properties</li>
                  <li>Last property in an object should not have a trailing comma</li>
                  <li>Adjust indentation for better readability</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding JSON Validation</h2>
        <p>
          JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, 
          and easy for machines to parse and generate. JSON is widely used in web applications for data exchange between clients and servers. 
          However, ensuring that JSON data is valid is crucial for the proper functioning of applications. In this article, we will explore the importance of JSON validation, common issues, and best practices for validating JSON data.
        </p>
        
        <h3 className="text-xl font-semibold">Why is JSON Validation Important?</h3>
        <p>
          Validating JSON data is essential for several reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Data Integrity:</strong> Ensuring that JSON data is valid helps maintain data integrity, preventing errors that can arise from malformed data.</li>
          <li><strong>Application Stability:</strong> Invalid JSON can lead to application crashes or unexpected behavior. Validating JSON before processing it helps ensure that applications run smoothly.</li>
          <li><strong>Improved Debugging:</strong> When JSON data is validated, it becomes easier to identify and fix issues. Error messages can provide insights into what went wrong, making debugging more efficient.</li>
          <li><strong>Interoperability:</strong> Different systems may have varying requirements for JSON data. Validating JSON ensures that it meets the expected format, facilitating interoperability between systems.</li>
        </ul>

        <h3 className="text-xl font-semibold">Common JSON Validation Issues</h3>
        <p>
          There are several common issues that can lead to invalid JSON data:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Improper Syntax:</strong> JSON must adhere to strict syntax rules, including the use of double quotes for strings and proper placement of commas.</li>
          <li><strong>Missing Commas:</strong> Commas must separate elements in arrays and properties in objects. Missing commas can lead to parsing errors.</li>
          <li><strong>Trailing Commas:</strong> JSON does not allow trailing commas after the last element in an array or object. Including a trailing comma will result in invalid JSON.</li>
          <li><strong>Incorrect Data Types:</strong> JSON supports specific data types, including strings, numbers, arrays, objects, booleans, and null. Using an unsupported data type can cause validation errors.</li>
          <li><strong>Unescaped Characters:</strong> Certain characters, such as quotes and backslashes, must be escaped in JSON strings. Failing to escape these characters can lead to invalid JSON.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for JSON Validation</h3>
        <p>
          To effectively validate JSON data, consider the following best practices:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Use JSON Validators:</strong> Utilize online JSON validators or libraries in your programming language of choice to validate JSON data before processing it.</li>
          <li><strong>Implement Error Handling:</strong> Incorporate error handling in your applications to gracefully manage invalid JSON data and provide meaningful feedback to users.</li>
          <li><strong>Test with Sample Data:</strong> Use sample JSON data to test your validation logic and ensure that it correctly identifies valid and invalid cases.</li>
          <li><strong>Document JSON Structure:</strong> Clearly document the expected structure of JSON data, including required fields and data types, to help developers understand how to format their data correctly.</li>
          <li><strong>Regularly Review and Update Validation Logic:</strong> As your application evolves, regularly review and update your JSON validation logic to accommodate changes in data requirements.</li>
        </ol>

        <h3 className="text-xl font-semibold">Using JSON Validation Tools</h3>
        <p>
          JSON validation tools can simplify the process of checking JSON data for validity. Here's how to effectively use these tools:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Input Your JSON Data:</strong> Paste or type your JSON data into the input area of the validator.</li>
          <li><strong>Validate the JSON:</strong> Click the validate button to check the JSON for errors.</li>
          <li><strong>Review Error Messages:</strong> If the JSON is invalid, review the error messages provided by the tool to identify and fix issues.</li>
          <li><strong>Format Valid JSON:</strong> If the JSON is valid, use the formatting options to beautify the output for better readability.</li>
        </ol>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          JSON validation is a critical aspect of working with JSON data. By understanding the importance of validation, recognizing common issues, and following best practices, 
          you can ensure that your JSON data is accurate and reliable. Start implementing these techniques today to enhance your data processing capabilities and improve application stability.
        </p>
      </article>

<Footer />
    </div>
  );
}