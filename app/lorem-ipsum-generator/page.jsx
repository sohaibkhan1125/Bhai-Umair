'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, RefreshCw, Text, List, Hash } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function LoremIpsumGeneratorPage() {
  const [type, setType] = useState('paragraphs');
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState('');
  const [startWithLorem, setStartWithLorem] = useState(true);

  const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation',
    'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat',
    'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'voluptate', 'velit',
    'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur',
    'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui',
    'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
  ];

  const generateParagraph = () => {
    const words = [...loremWords];
    const sentenceCount = Math.floor(Math.random() * 3) + 3; // 3-5 sentences
    let paragraph = '';

    for (let i = 0; i < sentenceCount; i++) {
      const wordCount = Math.floor(Math.random() * 10) + 10; // 10-20 words
      let sentence = '';

      for (let j = 0; j < wordCount; j++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        const word = words[randomIndex];
        sentence += (j === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word) + ' ';
      }

      paragraph += sentence.trim() + '. ';
    }

    return paragraph.trim();
  };

  const generateList = () => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const wordCount = Math.floor(Math.random() * 5) + 3; // 3-8 words
      let item = '';
      for (let j = 0; j < wordCount; j++) {
        const randomIndex = Math.floor(Math.random() * loremWords.length);
        const word = loremWords[randomIndex];
        item += (j === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word) + ' ';
      }
      items.push(item.trim() + '.');
    }
    return items.join('\n');
  };

  const generateWords = () => {
    const words = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * loremWords.length);
      words.push(loremWords[randomIndex]);
    }
    return words.join(' ');
  };

  const handleGenerate = () => {
    let result = '';
    switch (type) {
      case 'paragraphs':
        const paragraphs = [];
        for (let i = 0; i < count; i++) {
          paragraphs.push(generateParagraph());
        }
        result = paragraphs.join('\n\n');
        break;
      case 'sentences':
        const sentences = [];
        for (let i = 0; i < count; i++) {
          const wordCount = Math.floor(Math.random() * 10) + 10;
          let sentence = '';
          for (let j = 0; j < wordCount; j++) {
            const randomIndex = Math.floor(Math.random() * loremWords.length);
            const word = loremWords[randomIndex];
            sentence += (j === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word) + ' ';
          }
          sentences.push(sentence.trim() + '.');
        }
        result = sentences.join(' ');
        break;
      case 'words':
        result = generateWords();
        break;
      case 'list':
        result = generateList();
        break;
      default:
        result = generateParagraph();
    }

    if (startWithLorem) {
      result = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + result;
    }

    setOutput(result);
    toast.success('Lorem ipsum text generated!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success('Copied to clipboard!');
  };

  const handleClear = () => {
    setOutput('');
    toast.success('Output cleared!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Lorem Ipsum Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Type</Label>
                    <Select value={type} onValueChange={setType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paragraphs">
                          <div className="flex items-center gap-2">
                            <Text className="w-4 h-4" />
                            Paragraphs
                          </div>
                        </SelectItem>
                        <SelectItem value="sentences">
                          <div className="flex items-center gap-2">
                            <Text className="w-4 h-4" />
                            Sentences
                          </div>
                        </SelectItem>
                        <SelectItem value="words">
                          <div className="flex items-center gap-2">
                            <Hash className="w-4 h-4" />
                            Words
                          </div>
                        </SelectItem>
                        <SelectItem value="list">
                          <div className="flex items-center gap-2">
                            <List className="w-4 h-4" />
                            List Items
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Count</Label>
                    <Input
                      type="number"
                      value={count}
                      onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                      min={1}
                      max={100}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="startWithLorem"
                      checked={startWithLorem}
                      onChange={(e) => setStartWithLorem(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <Label htmlFor="startWithLorem">Start with "Lorem ipsum"</Label>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleGenerate} className="flex-1">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Generate
                    </Button>
                    <Button variant="outline" onClick={handleCopy}>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button variant="outline" onClick={handleClear}>
                      Clear
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Output</Label>
                  <Textarea
                    value={output}
                    readOnly
                    className="min-h-[300px] font-mono"
                    placeholder="Generated text will appear here..."
                  />
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">About Lorem Ipsum</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Lorem ipsum is placeholder text commonly used in the design industry</li>
                  <li>It has been used since the 1500s when an unknown printer took a galley of type</li>
                  <li>The text is derived from sections of Cicero's "de Finibus Bonorum et Malorum"</li>
                  <li>It helps designers focus on layout without being distracted by readable content</li>
                  <li>Lorem ipsum is now widely used in web design, typography, and publishing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Lorem Ipsum</h2>
        <p>
          Lorem Ipsum is a placeholder text commonly used in the design and publishing industries. 
          It serves as a temporary filler to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
          In this article, we will explore the history of Lorem Ipsum, its applications, and best practices for using placeholder text effectively.
        </p>
        
        <h3 className="text-xl font-semibold">History of Lorem Ipsum</h3>
        <p>
          The origins of Lorem Ipsum date back to the 1st century BC, when the Roman statesman and philosopher Cicero wrote a work titled "De Finibus Bonorum et Malorum" (On the Ends of Good and Evil). 
          The text has been altered over the years, but it remains a standard placeholder text in the design world. 
          The use of Lorem Ipsum allows designers to focus on layout and visual elements without being distracted by the content itself.
        </p>

        <h3 className="text-xl font-semibold">Applications of Lorem Ipsum</h3>
        <p>
          Lorem Ipsum is widely used in various fields, including:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Graphic Design:</strong> Designers use Lorem Ipsum to create mockups and prototypes, allowing clients to visualize the final product without the need for actual content.</li>
          <li><strong>Web Development:</strong> Web developers often use Lorem Ipsum to fill in text areas during the development phase, ensuring that the layout is visually appealing.</li>
          <li><strong>Publishing:</strong> In publishing, Lorem Ipsum is used to demonstrate how text will look in a printed format, helping editors and designers make decisions about typography and layout.</li>
          <li><strong>Marketing:</strong> Marketers may use Lorem Ipsum in presentations and proposals to illustrate design concepts without revealing sensitive information.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Using Lorem Ipsum</h3>
        <p>
          While Lorem Ipsum is a useful tool, there are best practices to consider when using it:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Use Meaningful Content:</strong> When possible, replace Lorem Ipsum with actual content to provide context and relevance to your designs.</li>
          <li><strong>Limit Usage:</strong> Avoid overusing Lorem Ipsum in final designs, as it can lead to a disconnect between design and content.</li>
          <li><strong>Customize Placeholder Text:</strong> Consider using custom placeholder text that reflects the tone and style of the final content.</li>
          <li><strong>Test with Real Data:</strong> Always test your designs with real data to ensure that the layout works as intended and that the content is readable.</li>
        </ol>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Lorem Ipsum is an invaluable tool for designers and developers, allowing them to focus on visual elements without the distraction of meaningful content. 
          By understanding its history, applications, and best practices, you can effectively use Lorem Ipsum to enhance your design process. 
          Start implementing these techniques today to improve your workflow and create visually appealing designs.
        </p>
      </article>

<Footer />
    </div>
  );
}
