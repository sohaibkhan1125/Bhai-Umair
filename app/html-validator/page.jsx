'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HtmlValidator() {
  const [htmlCode, setHtmlCode] = useState('');
  const [validationResult, setValidationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateHtml = async () => {
    setIsLoading(true);
    try {
      // Create a temporary iframe to validate HTML
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Write the HTML to the iframe
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(htmlCode);
      iframe.contentWindow.document.close();

      // Check for common HTML errors
      const errors = [];
      const warnings = [];

      // Check for missing doctype
      if (!htmlCode.toLowerCase().includes('<!doctype html>')) {
        warnings.push('Missing DOCTYPE declaration');
      }

      // Check for missing title
      if (!htmlCode.toLowerCase().includes('<title>')) {
        warnings.push('Missing <title> tag');
      }

      // Check for missing meta charset
      if (!htmlCode.toLowerCase().includes('charset=')) {
        warnings.push('Missing charset meta tag');
      }

      // Check for unclosed tags
      const openTags = htmlCode.match(/<[^/][^>]*>/g) || [];
      const closeTags = htmlCode.match(/<\/[^>]*>/g) || [];
      
      if (openTags.length !== closeTags.length) {
        errors.push('Mismatched number of opening and closing tags');
      }

      // Check for common accessibility issues
      if (!htmlCode.toLowerCase().includes('alt=')) {
        warnings.push('Images missing alt attributes');
      }

      // Check for deprecated tags
      const deprecatedTags = ['<center>', '<font>', '<strike>', '<u>', '<big>', '<small>'];
      deprecatedTags.forEach(tag => {
        if (htmlCode.toLowerCase().includes(tag)) {
          warnings.push(`Deprecated tag found: ${tag}`);
        }
      });

      setValidationResult({
        errors,
        warnings,
        isValid: errors.length === 0
      });

      // Clean up
      document.body.removeChild(iframe);
    } catch (error) {
      setValidationResult({
        errors: ['Error validating HTML: ' + error.message],
        warnings: [],
        isValid: false
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>HTML Validator</CardTitle>
              <CardDescription>
                Validate your HTML code for errors and best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="html-code">HTML Code</Label>
                  <Textarea
                    id="html-code"
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    placeholder="Paste your HTML code here..."
                    className="mt-2 h-64 font-mono"
                  />
                </div>

                <Button 
                  onClick={validateHtml} 
                  className="w-full"
                  disabled={isLoading || !htmlCode.trim()}
                >
                  {isLoading ? 'Validating...' : 'Validate HTML'}
                </Button>

                {validationResult && (
                  <div className="mt-6">
                    <Label>Validation Results</Label>
                    <div className="mt-2 space-y-4">
                      {validationResult.errors.length > 0 && (
                        <div className="bg-red-50 p-5 rounded-lg">
                          <h3 className="text-red-800 font-semibold mb-2">Errors</h3>
                          <ul className="list-disc pl-5 text-red-600">
                            {validationResult.errors.map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {validationResult.warnings.length > 0 && (
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <h3 className="text-yellow-800 font-semibold mb-2">Warnings</h3>
                          <ul className="list-disc pl-5 text-yellow-600">
                            {validationResult.warnings.map((warning, index) => (
                              <li key={index}>{warning}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {validationResult.errors.length === 0 && validationResult.warnings.length === 0 && (
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-green-800 font-semibold">
                            Your HTML code is valid!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-6 text-sm text-gray-500">
                  <p>Tips:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Always include a DOCTYPE declaration</li>
                    <li>Use semantic HTML elements</li>
                    <li>Include alt attributes for images</li>
                    <li>Ensure proper tag nesting and closing</li>
                    <li>Use lowercase for HTML tags and attributes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">The Importance of HTML Validation</h2>
        <p>
          HTML validation is a crucial step in web development that ensures your HTML code adheres to web standards. Valid HTML not only improves the accessibility and usability of your website but also enhances its search engine optimization (SEO). This article explores the significance of HTML validation, common errors, best practices for writing valid HTML, and the role of HTML in web development.
        </p>
        
        <h3 className="text-xl font-semibold">What is HTML Validation?</h3>
        <p>
          HTML validation is the process of checking HTML code against a set of standards defined by the World Wide Web Consortium (W3C). A validator analyzes the HTML code to identify errors, warnings, and potential issues that could affect the rendering of the webpage in browsers. Validating HTML helps ensure that the code is well-structured, follows best practices, and is compatible with various web browsers.
        </p>

        <h3 className="text-xl font-semibold">Why is HTML Validation Important?</h3>
        <p>
          Valid HTML is essential for several reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Improved Browser Compatibility:</strong> Valid HTML ensures that your website displays correctly across different browsers and devices, reducing the risk of rendering issues.</li>
          <li><strong>Enhanced Accessibility:</strong> Valid HTML helps create a more accessible web experience for users with disabilities, ensuring that assistive technologies can interpret the content correctly.</li>
          <li><strong>Better SEO:</strong> Search engines favor well-structured HTML, which can improve your website's ranking in search results. Valid HTML helps search engines crawl and index your site more effectively.</li>
          <li><strong>Fewer Bugs:</strong> Validating HTML can help identify and fix errors early in the development process, reducing the likelihood of bugs and issues in the final product.</li>
        </ul>

        <h3 className="text-xl font-semibold">Common HTML Errors to Avoid</h3>
        <p>
          When writing HTML, developers often encounter common errors that can lead to validation issues. Here are some of the most frequent mistakes to watch out for:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Missing DOCTYPE Declaration:</strong> Every HTML document should begin with a DOCTYPE declaration to specify the HTML version being used.</li>
          <li><strong>Unclosed Tags:</strong> Ensure that all HTML tags are properly closed. Unclosed tags can lead to unexpected rendering behavior.</li>
          <li><strong>Missing Alt Attributes:</strong> Images should always include alt attributes to provide alternative text for screen readers and improve accessibility.</li>
          <li><strong>Using Deprecated Tags:</strong> Avoid using outdated or deprecated HTML tags, as they may not be supported in modern browsers.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Writing Valid HTML</h3>
        <p>
          To ensure your HTML code is valid, follow these best practices:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Use Semantic HTML:</strong> Utilize semantic elements (e.g., <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>) to improve the structure and meaning of your content.</li>
          <li><strong>Keep It Simple:</strong> Write clean and straightforward HTML code. Avoid unnecessary complexity that can lead to errors.</li>
          <li><strong>Validate Regularly:</strong> Use HTML validation tools regularly during development to catch errors early and ensure compliance with standards.</li>
          <li><strong>Stay Updated:</strong> Keep up with the latest HTML standards and best practices to ensure your code remains valid and effective.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          HTML validation is a vital aspect of web development that ensures your code is well-structured, accessible, and compatible with various browsers. By understanding the importance of HTML validation, avoiding common errors, and following best practices, you can create high-quality web pages that provide a better user experience and improve your site's SEO. Embrace HTML validation as an essential part of your development workflow to enhance the quality and effectiveness of your web projects.
        </p>
      </article>

      <Footer/>
    </section>
  );
}
