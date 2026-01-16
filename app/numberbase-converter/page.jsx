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

export default function NumberBaseConverterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [baseFrom, setBaseFrom] = useState(10);
  const [baseTo, setBaseTo] = useState(2);

  const convertBase = (number, fromBase, toBase) => {
    if (!number.trim()) return '';

    // Convert from the original base to decimal
    const decimal = parseInt(number, fromBase);
    if (isNaN(decimal)) return 'Invalid number for the selected base';

    // Convert from decimal to the target base
    return decimal.toString(toBase).toUpperCase();
};

  const handleConvert = () => {
    if (!input.trim()) {
toast.error('Please enter a number');
      return;
    }
    const converted = convertBase(input, baseFrom, baseTo);
    setOutput(converted);
    toast.success('Number converted successfully!');
};

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
toast.success('Converted number copied to clipboard!');
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
toast.success('Converted number downloaded!');
  };

return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
<CardTitle className="text-2xl font-bold text-center">Number Base Converter</CardTitle>
</CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
<Label>Input Number</Label>
                    <div className="flex space-x-2">
                      <select
                        value={baseFrom}
                        onChange={(e) => setBaseFrom(Number(e.target.value))}
                        className="px-3 py-1 border rounded-md bg-background"
                      >
                        <option value={2}>Binary (Base 2)</option>
                        <option value={8}>Octal (Base 8)</option>
                        <option value={10}>Decimal (Base 10)</option>
                        <option value={16}>Hexadecimal (Base 16)</option>
                      </select>
                      <span>to</span>
                      <select
                        value={baseTo}
                        onChange={(e) => setBaseTo(Number(e.target.value))}
                        className="px-3 py-1 border rounded-md bg-background"
                      >
                        <option value={2}>Binary (Base 2)</option>
                        <option value={8}>Octal (Base 8)</option>
                        <option value={10}>Decimal (Base 10)</option>
                        <option value={16}>Hexadecimal (Base 16)</option>
                      </select>
                    </div>
</div>
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
placeholder="Enter your number here..."
className="min-h-[300px]"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
<Label>Converted Number</Label>
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
<h3 className="font-semibold text-lg mb-2">Number Conversion Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Select the base of the input number and the desired output base</li>
                  <li>Paste or type your number in the input field</li>
                  <li>Click Convert to transform the number</li>
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
        <h2 className="text-2xl font-bold">Understanding Number Base Conversion</h2>
        <p>
          Number base conversion is the process of changing a number from one base to another. 
          This is a fundamental concept in mathematics and computer science, as different systems use different bases to represent numbers. 
          In this article, we will explore the importance of number base conversion, the various number systems, and best practices for performing conversions effectively.
        </p>
        
        <h3 className="text-xl font-semibold">Why is Number Base Conversion Important?</h3>
        <p>
          Understanding number base conversion is crucial for several reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Data Representation:</strong> Different computing systems and programming languages use various number bases (e.g., binary, decimal, hexadecimal) to represent data. Understanding how to convert between these bases is essential for effective programming and data manipulation.</li>
          <li><strong>Mathematical Applications:</strong> Number base conversion is used in various mathematical applications, including algorithms, cryptography, and digital signal processing.</li>
          <li><strong>Improved Problem Solving:</strong> Being able to convert numbers between bases enhances problem-solving skills and helps in understanding complex mathematical concepts.</li>
          <li><strong>Interoperability:</strong> In software development, different systems may require data in specific formats. Knowing how to convert numbers ensures compatibility between systems.</li>
        </ul>

        <h3 className="text-xl font-semibold">Common Number Systems</h3>
        <p>
          There are several common number systems used in computing and mathematics. Here are the most widely used:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Binary (Base 2):</strong> The binary system uses only two digits, 0 and 1. It is the foundation of all digital systems, as computers operate using binary logic.</li>
          <li><strong>Decimal (Base 10):</strong> The decimal system is the standard system for denoting integer and non-integer numbers. It uses ten digits, from 0 to 9, and is the most commonly used number system in everyday life.</li>
          <li><strong>Octal (Base 8):</strong> The octal system uses eight digits, from 0 to 7. It is often used in computing as a shorthand for binary, as each octal digit represents three binary digits.</li>
          <li><strong>Hexadecimal (Base 16):</strong> The hexadecimal system uses sixteen symbols, 0-9 and A-F. It is commonly used in programming and computer science as a more human-friendly representation of binary-coded values.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Number Base Conversion</h3>
        <p>
          To effectively perform number base conversions, consider the following best practices:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Understand the Basics:</strong> Familiarize yourself with the principles of each number system and how they relate to one another.</li>
          <li><strong>Use Reliable Tools:</strong> Utilize reliable conversion tools or libraries to ensure accuracy in your conversions.</li>
          <li><strong>Test Your Conversions:</strong> Always verify the results of your conversions, especially when working with critical data.</li>
          <li><strong>Document Your Process:</strong> Clearly document the steps taken during conversions to help others understand your methodology.</li>
          <li><strong>Practice Regularly:</strong> Regular practice with number base conversions will enhance your skills and confidence in performing them.</li>
        </ol>

        <h3 className="text-xl font-semibold">Using Number Base Conversion Tools</h3>
        <p>
          Number base conversion tools can simplify the process of converting numbers between different bases. Here's how to effectively use these tools:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Input Your Number:</strong> Enter the number you wish to convert into the input field.</li>
          <li><strong>Select the Base:</strong> Choose the base of the input number and the desired output base from the dropdown menus.</li>
          <li><strong>Convert the Number:</strong> Click the convert button to perform the conversion.</li>
          <li><strong>Review the Output:</strong> Check the converted number in the output area and make any necessary adjustments.</li>
        </ol>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Number base conversion is a vital skill for anyone working with data and programming. By understanding different number systems and following best practices, 
          you can ensure accurate and efficient conversions. Start implementing these techniques today to enhance your data processing capabilities.
        </p>
      </article>

<Footer />
    </div>
  );
}