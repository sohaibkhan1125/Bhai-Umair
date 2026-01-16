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

export default function SitemapGeneratorPage() {
  const [urls, setUrls] = useState([
    { url: '', priority: '1.0', changefreq: 'daily' }
  ]);
  const [output, setOutput] = useState('');
  const [baseUrl, setBaseUrl] = useState('https://example.com');

  const handleAddUrl = () => {
    setUrls([...urls, { url: '', priority: '1.0', changefreq: 'daily' }]);
  };

  const handleRemoveUrl = (index) => {
    const newUrls = urls.filter((_, i) => i !== index);
    setUrls(newUrls);
  };

  const handleUrlChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index] = { ...newUrls[index], [field]: value };
    setUrls(newUrls);
  };

  const generateSitemap = () => {
    try {
      // Validate URLs
      const validUrls = urls.filter(item => item.url.trim() !== '');
      if (validUrls.length === 0) {
        toast.error('Please add at least one URL');
        return;
      }

      // Generate XML
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${validUrls.map(item => `  <url>
    <loc>${baseUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}</loc>
    ${item.priority ? `<priority>${item.priority}</priority>` : ''}
    ${item.changefreq ? `<changefreq>${item.changefreq}</changefreq>` : ''}
  </url>`).join('\n')}
</urlset>`;

      setOutput(xml);
      toast.success('Sitemap generated successfully!');
    } catch (error) {
      toast.error('Error generating sitemap');
      console.error('Generation error:', error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast.success('Sitemap copied to clipboard!');
  };

  const handleClear = () => {
    setUrls([{ url: '', priority: '1.0', changefreq: 'daily' }]);
    setBaseUrl('https://example.com');
    setOutput('');
    toast.success('Form cleared!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Sitemap Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Base URL */}
              <div className="space-y-2">
                <Label htmlFor="baseUrl">Base URL</Label>
                <Input
                  id="baseUrl"
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value)}
                  placeholder="https://example.com"
                />
              </div>

              {/* URLs */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>URLs</Label>
                  <Button
                    onClick={handleAddUrl}
                    variant="outline"
                    size="sm"
                    className="h-8 px-2"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add URL
                  </Button>
                </div>
                {urls.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="space-y-2">
                      <Label htmlFor={`url-${index}`}>URL Path</Label>
                      <Input
                        id={`url-${index}`}
                        value={item.url}
                        onChange={(e) => handleUrlChange(index, 'url', e.target.value)}
                        placeholder="/about"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`priority-${index}`}>Priority</Label>
                      <Input
                        id={`priority-${index}`}
                        type="number"
                        step="0.1"
                        min="0"
                        max="1"
                        value={item.priority}
                        onChange={(e) => handleUrlChange(index, 'priority', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`changefreq-${index}`}>Change Frequency</Label>
                      <select
                        id={`changefreq-${index}`}
                        value={item.changefreq}
                        onChange={(e) => handleUrlChange(index, 'changefreq', e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="always">Always</option>
                        <option value="hourly">Hourly</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                        <option value="never">Never</option>
                      </select>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveUrl(index)}
                      className="h-8 px-2 text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex justify-center space-x-4">
                <Button onClick={generateSitemap} className="w-32">
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
                    <Label htmlFor="output">Generated Sitemap</Label>
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
        <h2 className="text-2xl font-bold">Understanding Sitemap Generation</h2>
        <p>
          A sitemap is an essential tool for webmasters and SEO professionals, serving as a roadmap for search engines to 
          navigate a website. It provides a structured list of all the pages on a site, helping search engines index content 
          more efficiently. In this article, we will explore the importance of sitemaps, the different types of sitemaps, 
          and how to effectively use our Sitemap Generator tool.
        </p>
        <h3 className="text-xl font-semibold">Why Are Sitemaps Important?</h3>
        <p>
          Sitemaps play a crucial role in SEO and website management for several reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Improved Indexing:</strong> Sitemaps help search engines discover and index all pages on a website, ensuring that no content is overlooked.</li>
          <li><strong>Prioritization of Content:</strong> By specifying the priority and change frequency of pages, webmasters can guide search engines on which pages to crawl more frequently.</li>
          <li><strong>Enhanced User Experience:</strong> Sitemaps can also be used to create a user-friendly navigation structure, making it easier for visitors to find content on the site.</li>
          <li><strong>Support for Rich Snippets:</strong> Sitemaps can include additional metadata that helps search engines display rich snippets in search results, improving click-through rates.</li>
        </ul>
        <h3 className="text-xl font-semibold">Types of Sitemaps</h3>
        <p>
          There are several types of sitemaps that webmasters can create:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>XML Sitemaps:</strong> These are designed for search engines and provide a structured format for listing URLs, along with additional metadata.</li>
          <li><strong>HTML Sitemaps:</strong> These are designed for users and provide a navigable list of links to all pages on a website, improving user experience.</li>
          <li><strong>Image Sitemaps:</strong> These specifically list images on a website, helping search engines index visual content.</li>
          <li><strong>Video Sitemaps:</strong> These provide information about video content on a site, helping search engines understand and index video files.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Use the Sitemap Generator Tool</h3>
        <p>
          Our Sitemap Generator tool simplifies the process of creating sitemaps. Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Enter your base URL and the URLs you want to include in the sitemap.</li>
          <li>Specify the priority and change frequency for each URL.</li>
          <li>Click the "Generate" button to create your sitemap.</li>
          <li>The generated sitemap will appear in the output area, ready for you to copy and use.</li>
        </ol>
        <h3 className="text-xl font-semibold">Benefits of Using a Sitemap Generator</h3>
        <p>
          Using a sitemap generator offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Efficiency:</strong> Automating the sitemap creation process saves time and ensures accuracy.</li>
          <li><strong>Consistency:</strong> Ensures that all URLs are formatted correctly and uniformly across your site.</li>
          <li><strong>SEO Optimization:</strong> Helps you implement best practices for SEO, improving your site's visibility.</li>
        </ul>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Sitemaps are a vital part of web development that can significantly impact your site's SEO and user engagement. 
          By using our Sitemap Generator tool, you can easily create and manage sitemaps for your web pages, ensuring that 
          your content is optimized for search engines. Start generating your sitemaps today and enhance your website's performance!
        </p>
      </article>
       <Footer />
</div>
  );
}