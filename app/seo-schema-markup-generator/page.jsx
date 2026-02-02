"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const schemaTypes = [
  { id: "article", label: "Article" },
  { id: "product", label: "Product" },
  { id: "organization", label: "Organization" },
  { id: "localBusiness", label: "Local Business" },
  { id: "person", label: "Person" },
  { id: "recipe", label: "Recipe" },
  { id: "event", label: "Event" },
  { id: "review", label: "Review" }
];

const commonFields = [
  { id: "name", label: "Name", type: "text" },
  { id: "description", label: "Description", type: "textarea" },
  { id: "image", label: "Image URL", type: "url" },
  { id: "url", label: "Website URL", type: "url" }
];

const schemaSpecificFields = {
  article: [
    { id: "headline", label: "Headline", type: "text" },
    { id: "author", label: "Author Name", type: "text" },
    { id: "datePublished", label: "Publication Date", type: "date" },
    { id: "dateModified", label: "Last Modified Date", type: "date" }
  ],
  product: [
    { id: "price", label: "Price", type: "number" },
    { id: "currency", label: "Currency", type: "text" },
    { id: "availability", label: "Availability", type: "select", options: ["InStock", "OutOfStock", "PreOrder"] },
    { id: "brand", label: "Brand", type: "text" }
  ],
  organization: [
    { id: "address", label: "Address", type: "text" },
    { id: "telephone", label: "Phone Number", type: "tel" },
    { id: "email", label: "Email", type: "email" },
    { id: "foundingDate", label: "Founding Date", type: "date" }
  ],
  localBusiness: [
    { id: "address", label: "Address", type: "text" },
    { id: "telephone", label: "Phone Number", type: "tel" },
    { id: "priceRange", label: "Price Range", type: "text" },
    { id: "openingHours", label: "Opening Hours", type: "text" }
  ],
  person: [
    { id: "jobTitle", label: "Job Title", type: "text" },
    { id: "worksFor", label: "Works For", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "telephone", label: "Phone Number", type: "tel" }
  ],
  recipe: [
    { id: "prepTime", label: "Prep Time", type: "text" },
    { id: "cookTime", label: "Cook Time", type: "text" },
    { id: "recipeYield", label: "Servings", type: "text" },
    { id: "recipeCategory", label: "Category", type: "text" }
  ],
  event: [
    { id: "startDate", label: "Start Date", type: "datetime-local" },
    { id: "endDate", label: "End Date", type: "datetime-local" },
    { id: "location", label: "Location", type: "text" },
    { id: "offers", label: "Ticket Price", type: "number" }
  ],
  review: [
    { id: "itemReviewed", label: "Item Reviewed", type: "text" },
    { id: "reviewRating", label: "Rating (1-5)", type: "number" },
    { id: "author", label: "Author", type: "text" },
    { id: "datePublished", label: "Review Date", type: "date" }
  ]
};

export default function SchemaGenerator() {
  const [activeSchema, setActiveSchema] = useState("article");
  const [formData, setFormData] = useState({});
  const [generatedSchema, setGeneratedSchema] = useState("");
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": activeSchema.charAt(0).toUpperCase() + activeSchema.slice(1),
      ...formData
    };

    // Format the schema with proper indentation
    const formattedSchema = JSON.stringify(schema, null, 2);
    setGeneratedSchema(formattedSchema);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedSchema);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>SEO Schema Markup Generator</CardTitle>
              <CardDescription>
                Generate structured data markup for better SEO
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="article" onValueChange={setActiveSchema}>
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4 h-auto">
                  {schemaTypes.map((type) => (
                    <TabsTrigger key={type.id} value={type.id}>
                      {type.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="space-y-4">
                  {commonFields.map((field) => (
                    <div key={field.id} className="space-y-2">
                      <Label htmlFor={field.id}>{field.label}</Label>
                      <Input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        value={formData[field.id] || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}
                  {schemaSpecificFields[activeSchema]?.map((field) => (
                    <div key={field.id} className="space-y-2">
                      <Label htmlFor={field.id}>{field.label}</Label>
                      {field.type === "select" ? (
                        <select
                          id={field.id}
                          name={field.id}
                          value={formData[field.id] || ""}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="">Select {field.label}</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          value={formData[field.id] || ""}
                          onChange={handleInputChange}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </Tabs>
              <Button onClick={generateSchema} className="w-full">
                Generate Schema
              </Button>

              {generatedSchema && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <Label>Generated Schema</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyToClipboard}
                    >
                      {copied ? 'Copied!' : 'Copy to Clipboard'}
                    </Button>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      {generatedSchema}
                    </pre>
                  </div>
                </div>
              )}

              <div className="mt-6 text-sm text-gray-500">
                <p>Tips:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Use descriptive names and descriptions</li>
                  <li>Include high-quality images</li>
                  <li>Ensure all URLs are absolute</li>
                  <li>Use proper date formats (YYYY-MM-DD)</li>
                  <li>Test your schema with Google's Rich Results Test</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding SEO Schema Markup</h2>
        <p>
          SEO schema markup is a powerful tool that helps search engines understand the content of your website better. By using structured data, you can provide additional context about your content, which can enhance your visibility in search results. This article explores the importance of schema markup, its benefits for SEO, common types of schema, and best practices for implementing schema on your website.
        </p>

        <h3 className="text-xl font-semibold">What is Schema Markup?</h3>
        <p>
          Schema markup is a form of microdata that you can add to your HTML to provide search engines with more information about your website's content. It uses a specific vocabulary defined by Schema.org, which is a collaborative project between major search engines like Google, Bing, and Yahoo. By implementing schema markup, you can help search engines understand the context of your content, which can lead to better indexing and more relevant search results.
        </p>

        <h3 className="text-xl font-semibold">Why is Schema Markup Important for SEO?</h3>
        <p>
          Implementing schema markup on your website offers several benefits:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Enhanced Search Visibility:</strong> Schema markup can improve your website's visibility in search results by enabling rich snippets, which provide additional information such as ratings, reviews, and images.</li>
          <li><strong>Improved Click-Through Rates:</strong> Rich snippets can make your listings more attractive, leading to higher click-through rates and increased traffic to your site.</li>
          <li><strong>Better Understanding of Content:</strong> Schema markup helps search engines understand the context of your content, which can lead to more accurate indexing and improved search rankings.</li>
          <li><strong>Voice Search Optimization:</strong> As voice search becomes more prevalent, schema markup can help your content be more easily understood and retrieved by voice assistants.</li>
        </ul>

        <h3 className="text-xl font-semibold">Common Types of Schema Markup</h3>
        <p>
          There are various types of schema markup that you can implement, depending on the content of your website. Some common types include:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Article:</strong> Used for news articles, blog posts, and other written content.</li>
          <li><strong>Product:</strong> Used for e-commerce websites to provide information about products, including price, availability, and reviews.</li>
          <li><strong>Organization:</strong> Used to provide information about a business or organization, including its name, address, and contact information.</li>
          <li><strong>Local Business:</strong> A specific type of organization schema that provides details about local businesses, including location and hours of operation.</li>
          <li><strong>Event:</strong> Used to describe events, including concerts, festivals, and conferences, with details such as date, location, and ticket information.</li>
          <li><strong>Recipe:</strong> Used to provide structured data for recipes, including ingredients, cooking time, and nutritional information.</li>
          <li><strong>Review:</strong> Used to provide information about reviews and ratings for products, services, or businesses.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Implementing Schema Markup</h3>
        <p>
          To effectively implement schema markup on your website, consider the following best practices:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Use the Right Schema Type:</strong> Choose the appropriate schema type that best describes your content to ensure accurate representation.</li>
          <li><strong>Follow Schema.org Guidelines:</strong> Adhere to the guidelines provided by Schema.org to ensure proper implementation and avoid errors.</li>
          <li><strong>Test Your Markup:</strong> Use tools like Google's Rich Results Test to validate your schema markup and ensure it is correctly implemented.</li>
          <li><strong>Keep It Updated:</strong> Regularly review and update your schema markup to reflect any changes in your content or business information.</li>
          <li><strong>Monitor Performance:</strong> Track the performance of your schema markup using Google Search Console to see how it impacts your search visibility and click-through rates.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          SEO schema markup is an essential aspect of modern web development that can significantly enhance your website's visibility and performance in search engines. By understanding the importance of schema markup, implementing it correctly, and following best practices, you can improve your site's SEO and provide a better experience for users. Embrace schema markup as a vital tool in your SEO strategy to maximize your online presence and reach your target audience effectively.
        </p>
      </article>

      <Footer />
    </section>
  );
}
