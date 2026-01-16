'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, RefreshCw, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RobotsTxtGeneratorPage() {
  const [rules, setRules] = useState([
    { userAgent: '*', allow: '', disallow: '', crawlDelay: '' }
  ]);
  const [sitemap, setSitemap] = useState('');
  const [output, setOutput] = useState('');

  const handleAddRule = () => {
    setRules([...rules, { userAgent: '*', allow: '', disallow: '', crawlDelay: '' }]);
  };

  const handleRemoveRule = (index) => {
    const newRules = rules.filter((_, i) => i !== index);
    setRules(newRules);
  };

  const handleRuleChange = (index, field, value) => {
    const newRules = [...rules];
    newRules[index] = { ...newRules[index], [field]: value };
    setRules(newRules);
  };

  const generateRobotsTxt = () => {
    try {
      // Validate rules
      const validRules = rules.filter(rule => 
        rule.userAgent.trim() !== '' || 
        rule.allow.trim() !== '' || 
        rule.disallow.trim() !== '' || 
        rule.crawlDelay.trim() !== ''
      );

      if (validRules.length === 0) {
        toast.error('Please add at least one rule');
        return;
      }

      // Generate robots.txt content
      let content = '';
      
      validRules.forEach((rule, index) => {
        if (index > 0) content += '\n';
        
        if (rule.userAgent) {
          content += `User-agent: ${rule.userAgent}\n`;
        }
        
        if (rule.allow) {
          content += `Allow: ${rule.allow}\n`;
        }
        
        if (rule.disallow) {
          content += `Disallow: ${rule.disallow}\n`;
        }
        
        if (rule.crawlDelay) {
          content += `Crawl-delay: ${rule.crawlDelay}\n`;
        }
      });

      if (sitemap.trim()) {
        content += `\nSitemap: ${sitemap.trim()}`;
      }

      setOutput(content);
      toast.success('Robots.txt generated successfully!');
    } catch (error) {
      toast.error('Error generating robots.txt');
      console.error('Generation error:', error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success('Robots.txt copied to clipboard!');
  };

  const handleClear = () => {
    setRules([{ userAgent: '*', allow: '', disallow: '', crawlDelay: '' }]);
    setSitemap('');
    setOutput('');
    toast.success('Form cleared!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Robots.txt Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Rules */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Rules</Label>
                  <Button
                    onClick={handleAddRule}
                    variant="outline"
                    size="sm"
                    className="h-8 px-2"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Rule
                  </Button>
                </div>
                {rules.map((rule, index) => (
                  <div key={index} className="space-y-4 p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <Label>Rule {index + 1}</Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveRule(index)}
                        className="h-8 px-2 text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`userAgent-${index}`}>User-agent</Label>
                        <Input
                          id={`userAgent-${index}`}
                          value={rule.userAgent}
                          onChange={(e) => handleRuleChange(index, 'userAgent', e.target.value)}
                          placeholder="*"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`allow-${index}`}>Allow</Label>
                        <Input
                          id={`allow-${index}`}
                          value={rule.allow}
                          onChange={(e) => handleRuleChange(index, 'allow', e.target.value)}
                          placeholder="/public/*"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`disallow-${index}`}>Disallow</Label>
                        <Input
                          id={`disallow-${index}`}
                          value={rule.disallow}
                          onChange={(e) => handleRuleChange(index, 'disallow', e.target.value)}
                          placeholder="/private/*"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`crawlDelay-${index}`}>Crawl-delay</Label>
                        <Input
                          id={`crawlDelay-${index}`}
                          type="number"
                          value={rule.crawlDelay}
                          onChange={(e) => handleRuleChange(index, 'crawlDelay', e.target.value)}
                          placeholder="10"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sitemap */}
              <div className="space-y-2">
                <Label htmlFor="sitemap">Sitemap URL (Optional)</Label>
                <Input
                  id="sitemap"
                  value={sitemap}
                  onChange={(e) => setSitemap(e.target.value)}
                  placeholder="https://example.com/sitemap.xml"
                />
              </div>

              <div className="flex justify-center space-x-4">
                <Button onClick={generateRobotsTxt} className="w-32">
                  Generate
                </Button>
                <Button onClick={handleClear} variant="outline" className="w-32">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>

              {output && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="output">Generated Robots.txt</Label>
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
              )}
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Robots.txt Files</h2>
        <p>
          The robots.txt file is a powerful tool for webmasters and SEO professionals, serving as a communication channel 
          between a website and search engine crawlers. It provides instructions on how search engines should interact 
          with the content on a website. In this article, we will explore the importance of robots.txt files, how they 
          work, and how to effectively use our Robots.txt Generator tool.
        </p>
        <h3 className="text-xl font-semibold">Why Are Robots.txt Files Important?</h3>
        <p>
          Robots.txt files play a crucial role in managing how search engines index a website. Here are some key reasons 
          why they are important:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Control Over Indexing:</strong> Robots.txt files allow webmasters to control which parts of their site 
          should be crawled and indexed by search engines. This is particularly useful for preventing the indexing of duplicate 
          content, staging sites, or sensitive information.</li>
          <li><strong>Improved Crawl Efficiency:</strong> By specifying which pages should not be crawled, webmasters can help 
          search engines focus on the most important content, improving crawl efficiency.</li>
          <li><strong>Preventing Server Overload:</strong> For large websites, limiting the number of pages crawled can help 
          prevent server overload and ensure that the site remains responsive for users.</li>
          <li><strong>SEO Strategy:</strong> A well-structured robots.txt file can be part of a broader SEO strategy, helping 
          to optimize how content is presented to search engines.</li>
        </ul>
        <h3 className="text-xl font-semibold">How Robots.txt Files Work</h3>
        <p>
          The robots.txt file is a simple text file placed in the root directory of a website. It consists of one or more 
          rules that specify which user agents (search engine crawlers) are allowed or disallowed from accessing certain 
          parts of the site. Here's a basic structure of a robots.txt file:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>
            User-agent: *
            Disallow: /private/
            Allow: /public/
            Crawl-delay: 10
          </code>
        </pre>
        <p>
          In this example, all user agents are disallowed from accessing the /private/ directory, while they are allowed 
          to access the /public/ directory. The crawl delay is set to 10 seconds, instructing crawlers to wait 10 seconds 
          between requests.
        </p>
        <h3 className="text-xl font-semibold">How to Use the Robots.txt Generator Tool</h3>
        <p>
          Our Robots.txt Generator tool simplifies the process of creating and managing robots.txt files. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Enter the user-agent, allow, and disallow rules in the provided fields.</li>
          <li>Click the "Generate" button to create your robots.txt file.</li>
          <li>The generated robots.txt content will appear in the output area, ready for you to copy and use.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using a Robots.txt Generator</h3>
        <p>
          Using a robots.txt generator offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Efficiency:</strong> Automating the creation of robots.txt files saves time and ensures accuracy.</li>
          <li><strong>Consistency:</strong> Ensures that all rules are formatted correctly and uniformly across your site.</li>
          <li><strong>SEO Optimization:</strong> Helps you implement best practices for SEO, improving your site's visibility.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Robots.txt files are a vital part of web development that can significantly impact your site's SEO and user engagement. 
          By using our Robots.txt Generator tool, you can easily create and manage robots.txt files for your web pages, ensuring 
          that your content is optimized for search engines. Start generating your robots.txt files today and enhance your website's performance!
        </p>
      </article>
<Footer />
    </div>
  );
}