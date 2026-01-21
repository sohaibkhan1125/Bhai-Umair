'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Hash, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import crypto from 'crypto';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function MD5GeneratorPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [salt, setSalt] = useState('');
  const [useSalt, setUseSalt] = useState(false);

  const generateMD5 = (text, salt = '') => {
    const hash = crypto.createHash('md5');
    hash.update(text + salt);
    return hash.digest('hex');
  };

  const handleGenerate = () => {
    if (!input.trim()) {
      toast.error('Please enter some text to generate MD5 hash');
      return;
    }

    const hash = generateMD5(input, useSalt ? salt : '');
    setOutput(hash);
    toast.success('MD5 hash generated!');
  };

  const handleCopy = () => {
    if (!output) {
      toast.error('No hash to copy');
      return;
    }
    navigator.clipboard.writeText(output);
    toast.success('Copied to clipboard!');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setSalt('');
    setUseSalt(false);
    toast.success('Form cleared!');
  };

  const handleGenerateSalt = () => {
    const newSalt = crypto.randomBytes(8).toString('hex');
    setSalt(newSalt);
    toast.success('New salt generated!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">MD5 Hash Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Input Text</Label>
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter text to generate MD5 hash..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Salt (Optional)</Label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="useSalt"
                          checked={useSalt}
                          onChange={(e) => setUseSalt(e.target.checked)}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="useSalt" className="text-sm">Use Salt</Label>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        value={salt}
                        onChange={(e) => setSalt(e.target.value)}
                        placeholder="Enter salt or generate one..."
                        disabled={!useSalt}
                      />
                      <Button
                        variant="outline"
                        onClick={handleGenerateSalt}
                        disabled={!useSalt}
                      >
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleGenerate} className="flex-1">
                      <Hash className="w-4 h-4 mr-2" />
                      Generate MD5
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
                  <Label>MD5 Hash</Label>
                  <Textarea
                    value={output}
                    readOnly
                    className="min-h-[100px] font-mono"
                    placeholder="Generated MD5 hash will appear here..."
                  />
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">About MD5 Hashing</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>MD5 (Message-Digest Algorithm 5) is a cryptographic hash function</li>
                  <li>It produces a 128-bit (32-character) hash value</li>
                  <li>MD5 hashes are commonly used for file integrity verification</li>
                  <li>While MD5 is widely used, it's not recommended for cryptographic security</li>
                  <li>Adding a salt can increase security by making rainbow table attacks more difficult</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding MD5 Hashing</h2>
        <p>
          MD5 (Message-Digest Algorithm 5) is a widely used cryptographic hash function that produces a 128-bit (16-byte) hash value. 
          It is commonly used to verify data integrity and is often employed in various security applications and protocols, including TLS and SSL, PGP, SSH, and IPsec. 
          In this article, we will explore the workings of MD5, its applications, and best practices for using it effectively.
        </p>
        
        <h3 className="text-xl font-semibold">How MD5 Works</h3>
        <p>
          MD5 processes input data in blocks of 512 bits (64 bytes) and produces a fixed-size output of 128 bits (16 bytes). 
          The algorithm consists of several steps, including initialization, processing the input data, and producing the final hash value. 
          Here's a simplified overview of the MD5 hashing process:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Initialization:</strong> MD5 initializes four variables (A, B, C, D) with specific constant values.</li>
          <li><strong>Processing Blocks:</strong> The input data is divided into 512-bit blocks, and each block is processed in a series of operations involving bitwise operations, modular addition, and logical functions.</li>
          <li><strong>Finalization:</strong> After processing all blocks, the final hash value is computed by concatenating the values of A, B, C, and D.</li>
        </ol>

        <h3 className="text-xl font-semibold">Applications of MD5</h3>
        <p>
          MD5 is used in various applications, including:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Data Integrity Verification:</strong> MD5 is commonly used to verify the integrity of files during transfer or storage. By comparing the MD5 hash of the original file with the hash of the received file, users can ensure that the file has not been altered.</li>
          <li><strong>Password Hashing:</strong> While not recommended for secure password storage due to vulnerabilities, MD5 has historically been used to hash passwords in databases.</li>
          <li><strong>Checksums:</strong> MD5 checksums are often used to verify the integrity of software downloads, ensuring that the downloaded file matches the original.</li>
          <li><strong>Digital Signatures:</strong> MD5 can be used in digital signature algorithms to ensure the authenticity of messages and documents.</li>
        </ul>

        <h3 className="text-xl font-semibold">Limitations of MD5</h3>
        <p>
          Despite its widespread use, MD5 has several limitations:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Vulnerability to Collisions:</strong> Researchers have demonstrated that it is possible to generate two different inputs that produce the same MD5 hash, known as a collision. This vulnerability undermines the integrity of MD5 as a cryptographic hash function.</li>
          <li><strong>Not Suitable for Security:</strong> Due to its vulnerabilities, MD5 is not recommended for cryptographic security purposes, such as password hashing or digital signatures.</li>
          <li><strong>Performance Issues:</strong> While MD5 is fast, its speed can be a disadvantage in security contexts, as it makes brute-force attacks easier.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Using MD5</h3>
        <p>
          To use MD5 effectively, consider the following best practices:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Use Salt:</strong> When hashing passwords, always use a unique salt for each password to protect against rainbow table attacks.</li>
          <li><strong>Consider Alternatives:</strong> For security-sensitive applications, consider using stronger hash functions such as SHA-256 or SHA-3.</li>
          <li><strong>Regularly Update Security Practices:</strong> Stay informed about the latest security practices and vulnerabilities related to hashing algorithms.</li>
          <li><strong>Implement Error Handling:</strong> Ensure that your application can gracefully handle errors related to hashing and validation.</li>
        </ol>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          MD5 hashing is a valuable tool for verifying data integrity and ensuring the authenticity of information. 
          However, due to its vulnerabilities, it is essential to use MD5 with caution and consider stronger alternatives for security-sensitive applications. 
          By understanding the workings of MD5 and following best practices, you can effectively utilize this hashing algorithm in your projects.
        </p>
      </article>

<Footer />
    </div>
  );
}