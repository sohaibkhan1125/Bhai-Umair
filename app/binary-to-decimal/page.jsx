'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BinaryToDecimal() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const [error, setError] = useState('');

  const convertBinaryToDecimal = () => {
    setError('');
    // Validate binary input
    if (!binary) {
      setError('Please enter a binary number');
      setDecimal('');
      return;
    }

    // Check if input contains only 0s and 1s
    if (!/^[01]+$/.test(binary)) {
      setError('Binary numbers can only contain 0s and 1s');
      setDecimal('');
      return;
    }

    try {
      // Convert binary to decimal
      const decimalValue = parseInt(binary, 2);
      setDecimal(decimalValue.toString());
    } catch (err) {
      setError('Invalid binary number');
      setDecimal('');
    }
  };

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    setBinary(value);
    setError('');
    setDecimal('');
  };

  return (
    <section>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Binary to Decimal Converter</CardTitle>
              <CardDescription>
                Convert binary numbers to their decimal equivalent
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="binary">Binary Number</Label>
                  <Input
                    id="binary"
                    value={binary}
                    onChange={handleBinaryChange}
                    placeholder="Enter binary number (e.g., 1010)"
                    className="mt-2"
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </div>

                <Button onClick={convertBinaryToDecimal} className="w-full">
                  Convert to Decimal
                </Button>

                {decimal && (
                  <div className="mt-6">
                    <Label>Decimal Result</Label>
                    <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                      <p className="text-2xl font-mono">{decimal}</p>
                    </div>
                  </div>
                )}

                <div className="mt-6 text-sm text-gray-500">
                  <p>Tips:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Binary numbers can only contain 0s and 1s</li>
                    <li>Example: 1010 (binary) = 10 (decimal)</li>
                    <li>Maximum length: 32 bits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Binary Numbers</h2>
        <p>
          Binary numbers are the foundation of computing and digital systems. Unlike the decimal system, which is base 10 and uses ten digits (0-9), the binary system is base 2 and uses only two digits: 0 and 1. This article explores the significance of binary numbers, the process of converting binary to decimal, and practical applications of binary numbers in technology.
        </p>
        
        <h3 className="text-xl font-semibold">What are Binary Numbers?</h3>
        <p>
          Binary numbers represent values using only two symbols: 0 and 1. Each digit in a binary number is referred to as a "bit." The position of each bit represents a power of 2, similar to how each digit in a decimal number represents a power of 10. For example, the binary number 1011 can be broken down as follows:
        </p>
        <ul className="list-disc list-inside">
          <li>1 × 2^3 = 8</li>
          <li>0 × 2^2 = 0</li>
          <li>1 × 2^1 = 2</li>
          <li>1 × 2^0 = 1</li>
        </ul>
        <p>
          Therefore, 1011 in binary equals 8 + 0 + 2 + 1 = 11 in decimal.
        </p>

        <h3 className="text-xl font-semibold">Why Binary Numbers are Important</h3>
        <p>
          Binary numbers are crucial in computing for several reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Digital Representation:</strong> All digital data, including text, images, and audio, is ultimately represented in binary form. Computers use binary to process and store information.</li>
          <li><strong>Logic Operations:</strong> Binary numbers are used in logic gates and circuits, which are the building blocks of computer hardware. These operations are fundamental to how computers perform calculations and make decisions.</li>
          <li><strong>Data Transmission:</strong> Binary encoding is used in data transmission protocols, ensuring that information is sent and received accurately over networks.</li>
          <li><strong>Programming:</strong> Many programming languages and algorithms are designed to work with binary data, making it essential for software development.</li>
        </ul>

        <h3 className="text-xl font-semibold">Converting Binary to Decimal</h3>
        <p>
          Converting binary numbers to decimal is a straightforward process. The binary number is evaluated by multiplying each bit by its corresponding power of 2 and summing the results. This conversion is essential for understanding binary data in a decimal context, especially for users who may not be familiar with binary notation.
        </p>
        <p>
          For example, to convert the binary number 1101 to decimal:
        </p>
        <ul className="list-disc list-inside">
          <li>1 × 2^3 = 8</li>
          <li>1 × 2^2 = 4</li>
          <li>0 × 2^1 = 0</li>
          <li>1 × 2^0 = 1</li>
        </ul>
        <p>
          Thus, 1101 in binary equals 8 + 4 + 0 + 1 = 13 in decimal.
        </p>

        <h3 className="text-xl font-semibold">Practical Applications of Binary Numbers</h3>
        <p>
          Binary numbers are used in various applications, including:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Computer Programming:</strong> Understanding binary is essential for low-level programming and working with hardware.</li>
          <li><strong>Networking:</strong> Binary is used in IP addressing and subnetting, which are critical for network configuration.</li>
          <li><strong>Data Compression:</strong> Binary encoding techniques are used in data compression algorithms to reduce file sizes.</li>
          <li><strong>Cryptography:</strong> Binary numbers play a significant role in encryption algorithms, ensuring secure data transmission.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Binary numbers are fundamental to the world of computing and digital technology. Understanding how to convert binary to decimal and the significance of binary representation is essential for anyone working in technology. By mastering binary numbers, you can enhance your skills in programming, data analysis, and digital communication.
        </p>
      </article>

      <Footer/>
    </section>
  );
}
