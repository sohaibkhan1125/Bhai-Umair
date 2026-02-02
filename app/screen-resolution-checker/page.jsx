'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ScreenResolutionCheckerPage() {
  const [screenInfo, setScreenInfo] = useState({
    width: 0,
    height: 0,
    availWidth: 0,
    availHeight: 0,
    colorDepth: 0,
    pixelDepth: 0,
    devicePixelRatio: 0,
    orientation: '',
    aspectRatio: '',
  });

  const updateScreenInfo = () => {
    const newInfo = {
      width: window.screen.width,
      height: window.screen.height,
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight,
      colorDepth: window.screen.colorDepth,
      pixelDepth: window.screen.pixelDepth,
      devicePixelRatio: window.devicePixelRatio,
      orientation: window.screen.orientation?.type || 'unknown',
      aspectRatio: (window.screen.width / window.screen.height).toFixed(2),
    };
    setScreenInfo(newInfo);
  };

  useEffect(() => {
    updateScreenInfo();
    
    // Update on resize and orientation change
    window.addEventListener('resize', updateScreenInfo);
    window.addEventListener('orientationchange', updateScreenInfo);
    
    return () => {
      window.removeEventListener('resize', updateScreenInfo);
      window.removeEventListener('orientationchange', updateScreenInfo);
    };
  }, []);

  const handleCopy = () => {
    const infoText = `Screen Resolution Information:
Width: ${screenInfo.width}px
Height: ${screenInfo.height}px
Available Width: ${screenInfo.availWidth}px
Available Height: ${screenInfo.availHeight}px
Color Depth: ${screenInfo.colorDepth} bits
Pixel Depth: ${screenInfo.pixelDepth} bits
Device Pixel Ratio: ${screenInfo.devicePixelRatio}
Orientation: ${screenInfo.orientation}
Aspect Ratio: ${screenInfo.aspectRatio}`;

    navigator.clipboard.writeText(infoText);
    toast.success('Screen information copied to clipboard!');
  };

  const handleRefresh = () => {
    updateScreenInfo();
    toast.success('Screen information refreshed!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Screen Resolution Checker</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4 p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg">Screen Dimensions</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Width:</span>
                      <span className="font-medium">{screenInfo.width}px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Height:</span>
                      <span className="font-medium">{screenInfo.height}px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Available Width:</span>
                      <span className="font-medium">{screenInfo.availWidth}px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Available Height:</span>
                      <span className="font-medium">{screenInfo.availHeight}px</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg">Display Properties</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Color Depth:</span>
                      <span className="font-medium">{screenInfo.colorDepth} bits</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pixel Depth:</span>
                      <span className="font-medium">{screenInfo.pixelDepth} bits</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Device Pixel Ratio:</span>
                      <span className="font-medium">{screenInfo.devicePixelRatio}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Orientation:</span>
                      <span className="font-medium capitalize">{screenInfo.orientation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Aspect Ratio:</span>
                      <span className="font-medium">{screenInfo.aspectRatio}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button onClick={handleCopy} className="w-32">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Info
                </Button>
                <Button onClick={handleRefresh} variant="outline" className="w-32">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">What is Screen Resolution?</h3>
                <p className="text-muted-foreground">
                  Screen resolution refers to the number of pixels displayed on your screen, typically shown as width × height (e.g., 1920 × 1080). 
                  The higher the resolution, the more pixels are displayed, resulting in sharper and clearer images. 
                  Available resolution is the actual usable screen space, excluding taskbars and other system UI elements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Screen Resolution</h2>
        <p>
          Screen resolution is a critical aspect of modern computing and digital media. It refers to the number of pixels displayed on a screen, 
          typically represented as width × height (e.g., 1920 × 1080). The resolution of a display affects the clarity and detail of images, 
          videos, and text. In this article, we will explore the importance of screen resolution, how it impacts user experience, and the 
          various types of screen resolutions available today.
        </p>
        <h3 className="text-xl font-semibold">Why is Screen Resolution Important?</h3>
        <p>
          Understanding screen resolution is essential for several reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Image Clarity:</strong> Higher resolutions provide more pixels, resulting in sharper and clearer images. This is particularly important for graphic design, photography, and video production.</li>
          <li><strong>User Experience:</strong> A higher resolution can enhance the user experience by providing more detail and better visual quality, making applications and websites more engaging.</li>
          <li><strong>Responsive Design:</strong> Knowing the screen resolution helps developers create responsive designs that adapt to different devices, ensuring a consistent experience across platforms.</li>
          <li><strong>Gaming and Multimedia:</strong> For gamers and multimedia enthusiasts, screen resolution plays a significant role in the overall experience, affecting graphics quality and performance.</li>
        </ul>
        <h3 className="text-xl font-semibold">Types of Screen Resolutions</h3>
        <p>
          There are several common screen resolutions used today, including:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>HD (1280 × 720):</strong> This resolution is often used in budget televisions and monitors, providing decent quality for casual viewing.</li>
          <li><strong>Full HD (1920 × 1080):</strong> A popular resolution for most modern displays, offering a good balance between quality and performance.</li>
          <li><strong>Quad HD (2560 × 1440):</strong> This resolution provides higher pixel density, making it ideal for gaming and professional applications.</li>
          <li><strong>4K UHD (3840 × 2160):</strong> Known for its stunning clarity and detail, 4K resolution is becoming increasingly common in high-end televisions and monitors.</li>
          <li><strong>8K UHD (7680 × 4320):</strong> The latest in display technology, 8K offers unparalleled detail, but requires powerful hardware to run effectively.</li>
        </ul>
        <h3 className="text-xl font-semibold">How to Check Your Screen Resolution</h3>
        <p>
          Checking your screen resolution is a straightforward process. Here's how you can do it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Right-click on your desktop and select "Display settings" (Windows) or "System Preferences" &gt; "Displays" (Mac).</li>
          <li>Look for the resolution settings, which will typically display the current resolution of your screen.</li>
          <li>You can also use online tools or applications that provide detailed information about your display settings.</li>
        </ol>
        <h3 className="text-xl font-semibold">Using the Screen Resolution Checker Tool</h3>
        <p>
          Our Screen Resolution Checker tool provides real-time information about your screen's resolution and other display properties. 
          Here's how to use it:
        </p>
        <ol className="list-decimal list-inside">
          <li>Open the Screen Resolution Checker tool.</li>
          <li>The tool will automatically display your current screen resolution, available width and height, color depth, pixel depth, device pixel ratio, orientation, and aspect ratio.</li>
          <li>You can refresh the information at any time by clicking the refresh button.</li>
        </ol>
        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Understanding screen resolution is essential for anyone involved in web development, graphic design, or multimedia. 
          By using our Screen Resolution Checker tool, you can easily monitor your display settings and ensure that your content 
          is optimized for various devices. Start using the tool today and enhance your understanding of screen resolutions!
        </p>
      </article>
      <Footer />

</div>
  );
}