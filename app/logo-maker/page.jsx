"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LogoMaker() {
  const [logoText, setLogoText] = useState("Your Logo");
  const [fontSize, setFontSize] = useState(48);
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [icon, setIcon] = useState("none");
  const [iconColor, setIconColor] = useState("#000000");
  const [iconSize, setIconSize] = useState(40);
  const [logoStyle, setLogoStyle] = useState("horizontal");
  const canvasRef = useRef(null);

  const icons = [
    { value: "none", label: "No Icon" },
    { value: "star", label: "Star" },
    { value: "heart", label: "Heart" },
    { value: "circle", label: "Circle" },
    { value: "square", label: "Square" },
    { value: "triangle", label: "Triangle" },
  ];

  const styles = [
    { value: "horizontal", label: "Horizontal" },
    { value: "vertical", label: "Vertical" },
    { value: "stacked", label: "Stacked" },
  ];

  const drawLogo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw icon if selected
    if (icon !== "none") {
      ctx.fillStyle = iconColor;
      const iconX = logoStyle === "horizontal" ? 50 : canvas.width / 2;
      const iconY = logoStyle === "horizontal" ? canvas.height / 2 : 50;

      switch (icon) {
        case "star":
          drawStar(ctx, iconX, iconY, iconSize);
          break;
        case "heart":
          drawHeart(ctx, iconX, iconY, iconSize);
          break;
        case "circle":
          ctx.beginPath();
          ctx.arc(iconX, iconY, iconSize / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "square":
          ctx.fillRect(iconX - iconSize / 2, iconY - iconSize / 2, iconSize, iconSize);
          break;
        case "triangle":
          drawTriangle(ctx, iconX, iconY, iconSize);
          break;
      }
    }

    // Draw text
    ctx.fillStyle = textColor;
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const textX = logoStyle === "horizontal" ? canvas.width / 2 + (icon !== "none" ? 50 : 0) : canvas.width / 2;
    const textY = logoStyle === "horizontal" ? canvas.height / 2 : canvas.height - 50;

    ctx.fillText(logoText, textX, textY);
  };

  const drawStar = (ctx, x, y, size) => {
    const spikes = 5;
    const outerRadius = size / 2;
    const innerRadius = size / 4;
    let rot = (Math.PI / 2) * 3;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(x, y - outerRadius);

    for (let i = 0; i < spikes; i++) {
      x = x + Math.cos(rot) * outerRadius;
      y = y + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = x + Math.cos(rot) * innerRadius;
      y = y + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }

    ctx.lineTo(x, y - outerRadius);
    ctx.closePath();
    ctx.fill();
  };

  const drawHeart = (ctx, x, y, size) => {
    const width = size;
    const height = size;
    ctx.beginPath();
    ctx.moveTo(x, y + height / 4);
    ctx.bezierCurveTo(
      x, y,
      x - width / 2, y,
      x - width / 2, y + height / 4
    );
    ctx.bezierCurveTo(
      x - width / 2, y + height / 2,
      x, y + height / 2,
      x, y + height
    );
    ctx.bezierCurveTo(
      x, y + height / 2,
      x + width / 2, y + height / 2,
      x + width / 2, y + height / 4
    );
    ctx.bezierCurveTo(
      x + width / 2, y,
      x, y,
      x, y + height / 4
    );
    ctx.fill();
  };

  const drawTriangle = (ctx, x, y, size) => {
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2);
    ctx.lineTo(x - size / 2, y + size / 2);
    ctx.lineTo(x + size / 2, y + size / 2);
    ctx.closePath();
    ctx.fill();
  };

  const downloadLogo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "logo.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  React.useEffect(() => {
    drawLogo();
  }, [logoText, fontSize, textColor, backgroundColor, icon, iconColor, iconSize, logoStyle]);

  return (
    <section>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Logo Maker</CardTitle>
              <CardDescription>
                Create your custom logo with text, icons, and colors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="logoText">Logo Text</Label>
                    <Input
                      id="logoText"
                      value={logoText}
                      onChange={(e) => setLogoText(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fontSize">Font Size</Label>
                    <Slider
                      id="fontSize"
                      min={24}
                      max={72}
                      step={1}
                      value={[fontSize]}
                      onValueChange={([value]) => setFontSize(value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="textColor">Text Color</Label>
                    <Input
                      id="textColor"
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-full h-10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="backgroundColor">Background Color</Label>
                    <Input
                      id="backgroundColor"
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-full h-10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="icon">Icon</Label>
                    <Select value={icon} onValueChange={setIcon}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an icon" />
                      </SelectTrigger>
                      <SelectContent>
                        {icons.map((icon) => (
                          <SelectItem key={icon.value} value={icon.value}>
                            {icon.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {icon !== "none" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="iconColor">Icon Color</Label>
                        <Input
                          id="iconColor"
                          type="color"
                          value={iconColor}
                          onChange={(e) => setIconColor(e.target.value)}
                          className="w-full h-10"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="iconSize">Icon Size</Label>
                        <Slider
                          id="iconSize"
                          min={20}
                          max={100}
                          step={1}
                          value={[iconSize]}
                          onValueChange={([value]) => setIconSize(value)}
                        />
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="logoStyle">Logo Style</Label>
                    <Select value={logoStyle} onValueChange={setLogoStyle}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a style" />
                      </SelectTrigger>
                      <SelectContent>
                        {styles.map((style) => (
                          <SelectItem key={style.value} value={style.value}>
                            {style.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <canvas
                    ref={canvasRef}
                    width={400}
                    height={200}
                    className="border border-gray-200 rounded-lg"
                  />
                  <Button onClick={downloadLogo} className="mt-4">
                    Download Logo
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                Create and download your custom logo. The logo will be downloaded as a PNG file.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">The Importance of Logo Design</h2>
        <p>
          A logo is a visual representation of a brand, serving as a crucial element in establishing a company's identity. It is often the first impression a customer has of a business, making effective logo design essential for brand recognition and loyalty. This article explores the significance of logo design, the elements of effective logos, best practices for creating logos, and the role of logos in branding.
        </p>
        
        <h3 className="text-xl font-semibold">Why is Logo Design Important?</h3>
        <p>
          A well-designed logo is vital for several reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Brand Identity:</strong> A logo encapsulates the essence of a brand, conveying its values, mission, and personality. It helps differentiate a business from its competitors.</li>
          <li><strong>First Impressions:</strong> Logos create the first impression of a brand. A professional and memorable logo can attract customers and instill trust.</li>
          <li><strong>Recognition:</strong> A strong logo enhances brand recognition, making it easier for customers to remember and identify a brand in a crowded market.</li>
          <li><strong>Consistency:</strong> A logo provides a consistent visual element across all marketing materials, reinforcing brand identity and coherence.</li>
        </ul>

        <h3 className="text-xl font-semibold">Elements of Effective Logo Design</h3>
        <p>
          Effective logos share several key characteristics:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Simple:</strong> A simple logo is easily recognizable and versatile, making it suitable for various applications.</li>
          <li><strong>Memorable:</strong> An effective logo should be memorable, leaving a lasting impression on customers.</li>
          <li><strong>Timeless:</strong> A good logo should stand the test of time, avoiding trends that may quickly become outdated.</li>
          <li><strong>Versatile:</strong> Logos should work across different mediums and applications, from business cards to billboards.</li>
          <li><strong>Appropriate:</strong> The design should be appropriate for the intended audience and reflect the brand's values and industry.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Creating a Logo</h3>
        <p>
          To create an effective logo, consider the following best practices:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Research Your Audience:</strong> Understand your target audience and what appeals to them to create a logo that resonates.</li>
          <li><strong>Sketch Ideas:</strong> Start with sketches to explore different concepts and designs before moving to digital formats.</li>
          <li><strong>Choose Colors Wisely:</strong> Colors evoke emotions and convey messages. Choose colors that align with your brand identity.</li>
          <li><strong>Get Feedback:</strong> Share your logo designs with others to gather feedback and make necessary adjustments.</li>
          <li><strong>Test in Different Formats:</strong> Ensure your logo looks good in various sizes and formats, both in color and black and white.</li>
        </ul>

        <h3 className="text-xl font-semibold">The Role of Logos in Branding</h3>
        <p>
          Logos play a crucial role in branding by serving as a visual anchor for a company's identity. They help establish a brand's presence in the market and create a connection with customers. A strong logo can evoke emotions, tell a story, and communicate the brand's values effectively. In today's competitive landscape, investing in professional logo design is essential for building a successful brand.
        </p>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Logo design is a vital component of branding that can significantly impact a company's success. By understanding the importance of logos, the elements of effective design, and best practices for creating logos, businesses can establish a strong brand identity that resonates with their audience. Embracing the logo-making process with creativity and strategy will lead to a memorable and impactful brand presence.
        </p>
      </article>
      <Footer />
    </section>
  );
}
