"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TextToColumns() {
  const [inputText, setInputText] = useState("");
  const [delimiter, setDelimiter] = useState(",");
  const [outputText, setOutputText] = useState("");

  const convertToColumns = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to convert");
      return;
    }

    try {
      const lines = inputText.split("\n");
      const convertedLines = lines.map(line => {
        const columns = line.split(delimiter);
        return columns.join("\t"); // Convert to tab-separated
      });
      setOutputText(convertedLines.join("\n"));
      toast.success("Text converted successfully!");
    } catch (error) {
      toast.error("Error converting text. Please check your input.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    toast.success("Copied to clipboard!");
  };

  return (
    <section>
    <Navbar/>
    
    <div className="container mx-auto py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Text to Columns Converter</CardTitle>
          <CardDescription>
            Convert your text into columns using a custom delimiter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="delimiter">Delimiter</Label>
            <Input
              id="delimiter"
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value)}
              placeholder="Enter delimiter (e.g., , or ; or |)"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="input">Input Text</Label>
            <Textarea
              id="input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your text here..."
              className="min-h-[200px]"
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={convertToColumns}>Convert</Button>
            <Button variant="outline" onClick={copyToClipboard} disabled={!outputText}>
              Copy Result
            </Button>
          </div>

          {outputText && (
            <div className="space-y-2">
              <Label>Output</Label>
              <div className="p-4 bg-muted rounded-md">
                <pre className="whitespace-pre-wrap">{outputText}</pre>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Text to Columns Conversion</h2>
        <p>
          In today's data-driven world, the ability to manipulate and format text is crucial. 
          Whether you're a student, a professional, or just someone who deals with data, 
          understanding how to convert text into columns can save you time and enhance your productivity.
        </p>
        <h3 className="text-xl font-semibold">What is Text to Columns Conversion?</h3>
        <p>
          Text to columns conversion is a process that allows you to split a single column of text 
          into multiple columns based on a specified delimiter. This is particularly useful when 
          dealing with data exported from spreadsheets or databases, where information is often 
          stored in a single line.
        </p>
        <h3 className="text-xl font-semibold">Why Use a Custom Delimiter?</h3>
        <p>
          A delimiter is a character that separates values in a text string. Common delimiters include 
          commas, semicolons, and tabs. By allowing users to specify a custom delimiter, our tool 
          provides flexibility to handle various data formats. This means you can easily convert 
          text regardless of how it is structured.
        </p>
        <h3 className="text-xl font-semibold">How to Use the Text to Columns Converter</h3>
        <p>
          Using our Text to Columns Converter is simple. Just follow these steps:
        </p>
        <ol className="list-decimal list-inside">
          <li>Enter your desired delimiter in the provided input field.</li>
          <li>Paste or type your text into the input area.</li>
          <li>Click the "Convert" button to see your text transformed into columns.</li>
          <li>If needed, use the "Copy Result" button to copy the formatted text to your clipboard.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using Our Tool</h3>
        <p>
          Our Text to Columns Converter is designed with user experience in mind. Here are some 
          benefits of using our tool:
        </p>
        <ul className="list-disc list-inside">
          <li>Easy to use interface that requires no technical skills.</li>
          <li>Customizable delimiter options to suit your needs.</li>
          <li>Instant feedback with success and error messages.</li>
          <li>Ability to copy results directly to your clipboard for easy sharing.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          In conclusion, our Text to Columns Converter is a powerful tool that simplifies the 
          process of formatting text. By understanding how to use this tool effectively, you can 
          enhance your productivity and manage your data more efficiently. Try it out today and 
          experience the difference!
        </p>
        <h3 className="text-xl font-semibold">Additional Tips for Effective Text Management</h3>
        <p>
          To further enhance your text management skills, consider the following tips:
        </p>
        <ul className="list-disc list-inside">
          <li>Regularly clean your data to remove unnecessary spaces and characters.</li>
          <li>Utilize spreadsheet software for more complex data manipulation tasks.</li>
          <li>Explore additional tools that can complement your text conversion needs.</li>
          <li>Stay updated with best practices in data management and formatting.</li>
        </ul>
        <p>
          By implementing these strategies, you can ensure that your text data is not only well-formatted 
          but also easy to analyze and share with others.
        </p>
      </article>
    </div>
    <Footer/>
    </section>
  );
}
