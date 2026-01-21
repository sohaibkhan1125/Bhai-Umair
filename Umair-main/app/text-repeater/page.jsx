'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TextRepeater() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(1);
  const [result, setResult] = useState('');
  const [separator, setSeparator] = useState('\n');

  const repeatText = () => {
    if (!text) return;
    const repeatedText = Array(count).fill(text).join(separator);
    setResult(repeatedText);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <section>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Text Repeater</CardTitle>
              <CardDescription>
                Repeat your text multiple times with custom separators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="text">Text to Repeat</Label>
                  <Textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="mt-2"
                    placeholder="Enter the text you want to repeat"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="count">Number of Times</Label>
                    <Input
                      id="count"
                      type="number"
                      min="1"
                      value={count}
                      onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="separator">Separator</Label>
                    <Input
                      id="separator"
                      value={separator}
                      onChange={(e) => setSeparator(e.target.value)}
                      className="mt-2"
                      placeholder="Enter separator (e.g., space, comma, newline)"
                    />
                  </div>
                </div>

                <Button onClick={repeatText} className="w-full">
                  Generate Repeated Text
                </Button>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Result</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Textarea
                      value={result}
                      readOnly
                      className="min-h-[200px]"
                    />
                    <Button
                      onClick={copyToClipboard}
                      className="absolute top-2 right-2"
                      variant="outline"
                    >
                      Copy
                    </Button>
                  </div>
                  <div className="text-sm text-gray-500">
                    Character count: {result.length}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Text Repetition</h2>
        <p>
          Text repetition is a useful technique in various fields, including programming, writing, and data processing. It involves duplicating a specific piece of text multiple times, often with the use of custom separators. This article explores the significance of text repetition, its applications, and best practices for effectively using repeated text.
        </p>
        
        <h3 className="text-xl font-semibold">What is Text Repetition?</h3>
        <p>
          Text repetition refers to the process of taking a string of text and repeating it a specified number of times. This can be useful in various scenarios, such as generating placeholder text, creating formatted output, or even in programming tasks where repeated strings are needed.
        </p>

        <h3 className="text-xl font-semibold">Applications of Text Repetition</h3>
        <p>
          Text repetition has a wide range of applications across different domains:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Placeholder Text:</strong> In design and development, repeated text can be used as placeholder content to visualize layouts.</li>
          <li><strong>Data Formatting:</strong> Repeating text can help format data for reports, logs, or user interfaces.</li>
          <li><strong>Testing:</strong> Developers often use repeated text to test input fields, ensuring that applications can handle various lengths and formats of text.</li>
          <li><strong>Content Generation:</strong> Content creators may use text repetition to quickly generate drafts or outlines for articles and documents.</li>
          <li><strong>Educational Tools:</strong> Text repetition can be used in educational applications to help students practice spelling, vocabulary, or language skills.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Using Repeated Text</h3>
        <p>
          To effectively use repeated text in your applications, consider the following best practices:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Define Clear Separators:</strong> When repeating text, choose separators that enhance readability and clarity, such as commas, spaces, or new lines.</li>
          <li><strong>Limit Repetition:</strong> Avoid excessive repetition that may lead to cluttered output. Ensure that the repeated text serves a clear purpose.</li>
          <li><strong>Use Dynamic Input:</strong> Allow users to customize the text, count, and separator to enhance flexibility and usability.</li>
          <li><strong>Test for Edge Cases:</strong> Ensure that your application can handle edge cases, such as very long text or high repetition counts, without performance issues.</li>
          <li><strong>Provide Clear Instructions:</strong> If your application allows users to repeat text, provide clear instructions on how to use the feature effectively.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Text repetition is a valuable technique that can enhance productivity and efficiency in various applications. By understanding its significance and following best practices, you can effectively utilize repeated text in your projects. Whether for generating placeholder content, formatting data, or creating educational tools, mastering text repetition will improve your programming skills and the quality of your applications.
        </p>
      </article>

      <Footer/>
    </section>
  );
}
