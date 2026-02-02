'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Copy, RefreshCw, Lock, Check, X } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeSimilar: true,
    excludeAmbiguous: true
  });

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const similarChars = 'il1Lo0O';
  const ambiguousChars = '{}[]()/\'"`~,;:.<>';

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const generatePassword = () => {
    let chars = '';
    let password = '';

    // Build character set based on options
    if (options.uppercase) chars += uppercaseChars;
    if (options.lowercase) chars += lowercaseChars;
    if (options.numbers) chars += numberChars;
    if (options.symbols) chars += symbolChars;

    // Remove similar characters if option is enabled
    if (options.excludeSimilar) {
      chars = chars.split('').filter(char => !similarChars.includes(char)).join('');
    }

    // Remove ambiguous characters if option is enabled
    if (options.excludeAmbiguous) {
      chars = chars.split('').filter(char => !ambiguousChars.includes(char)).join('');
    }

    // Ensure at least one character from each selected type
    if (options.uppercase) {
      password += uppercaseChars[getRandomInt(uppercaseChars.length)];
    }
    if (options.lowercase) {
      password += lowercaseChars[getRandomInt(lowercaseChars.length)];
    }
    if (options.numbers) {
      password += numberChars[getRandomInt(numberChars.length)];
    }
    if (options.symbols) {
      password += symbolChars[getRandomInt(symbolChars.length)];
    }

    // Fill the rest randomly
    while (password.length < length) {
      password += chars[getRandomInt(chars.length)];
    }

    // Shuffle the password
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    setPassword(password);
    toast.success('Password generated!');
  };

  const handleCopy = () => {
    if (!password) {
      toast.error('No password to copy');
      return;
    }
    navigator.clipboard.writeText(password);
    toast.success('Copied to clipboard!');
  };

  const handleClear = () => {
    setPassword('');
    toast.success('Password cleared!');
  };

  const calculateStrength = () => {
    if (!password) return 0;

    let strength = 0;
    const length = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[^A-Za-z0-9]/.test(password);

    // Length contribution
    strength += Math.min(length * 2, 20);

    // Character type contribution
    if (hasUppercase) strength += 5;
    if (hasLowercase) strength += 5;
    if (hasNumbers) strength += 5;
    if (hasSymbols) strength += 5;

    return Math.min(strength, 100);
  };

  const getStrengthColor = (strength) => {
    if (strength < 30) return 'text-red-500';
    if (strength < 60) return 'text-yellow-500';
    if (strength < 80) return 'text-blue-500';
    return 'text-green-500';
  };

  const getStrengthText = (strength) => {
    if (strength < 30) return 'Weak';
    if (strength < 60) return 'Medium';
    if (strength < 80) return 'Strong';
    return 'Very Strong';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Password Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Password Length</Label>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(Math.max(8, Math.min(128, parseInt(e.target.value) || 8)))}
                        min={8}
                        max={128}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        onClick={() => setLength(16)}
                      >
                        Reset
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Options</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="uppercase"
                          checked={options.uppercase}
                          onChange={(e) => setOptions({ ...options, uppercase: e.target.checked })}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="uppercase">Include Uppercase (A-Z)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="lowercase"
                          checked={options.lowercase}
                          onChange={(e) => setOptions({ ...options, lowercase: e.target.checked })}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="lowercase">Include Lowercase (a-z)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="numbers"
                          checked={options.numbers}
                          onChange={(e) => setOptions({ ...options, numbers: e.target.checked })}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="numbers">Include Numbers (0-9)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="symbols"
                          checked={options.symbols}
                          onChange={(e) => setOptions({ ...options, symbols: e.target.checked })}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="symbols">Include Symbols (!@#$%^&*)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="excludeSimilar"
                          checked={options.excludeSimilar}
                          onChange={(e) => setOptions({ ...options, excludeSimilar: e.target.checked })}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="excludeSimilar">Exclude Similar Characters (il1Lo0O)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="excludeAmbiguous"
                          checked={options.excludeAmbiguous}
                          onChange={(e) => setOptions({ ...options, excludeAmbiguous: e.target.checked })}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="excludeAmbiguous">Exclude Ambiguous Characters (&#123;&#91;&#93;&#125;&#40;&#41;&#47;&#39;&#34;&#96;&#126;&#44;&#59;&#58;&#46;&#60;&#62;)</Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={generatePassword} className="flex-1">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Generate Password
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
                  <div className="space-y-2">
                    <Label>Generated Password</Label>
                    <div className="relative">
                      <Input
                        value={password}
                        readOnly
                        className="font-mono text-lg"
                        placeholder="Generated password will appear here..."
                      />
                      {password && (
                        <div className="absolute right-2 top-2">
                          <Lock className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>

                  {password && (
                    <div className="space-y-2">
                      <Label>Password Strength</Label>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Strength:</span>
                          <span className={getStrengthColor(calculateStrength())}>
                            {getStrengthText(calculateStrength())}
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${getStrengthColor(calculateStrength())}`}
                            style={{ width: `${calculateStrength()}%` }}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>Length: {password.length} characters</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>Unique: {new Set(password).size} characters</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {/[A-Z]/.test(password) ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <X className="w-4 h-4 text-red-500" />
                            )}
                            <span>Uppercase</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {/[a-z]/.test(password) ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <X className="w-4 h-4 text-red-500" />
                            )}
                            <span>Lowercase</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {/\d/.test(password) ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <X className="w-4 h-4 text-red-500" />
                            )}
                            <span>Numbers</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {/[^A-Za-z0-9]/.test(password) ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <X className="w-4 h-4 text-red-500" />
                            )}
                            <span>Symbols</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Password Security Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Use passwords that are at least 12 characters long</li>
                  <li>Include a mix of uppercase, lowercase, numbers, and symbols</li>
                  <li>Avoid using personal information or common words</li>
                  <li>Use different passwords for different accounts</li>
                  <li>Consider using a password manager to store your passwords securely</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

{/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Password Security</h2>
        <p>
          In today's digital age, password security is more important than ever. With the increasing number of online accounts and services, 
          ensuring that your passwords are strong and secure is crucial for protecting your personal information. 
          In this article, we will explore the importance of password security, best practices for creating strong passwords, and the role of password managers.
        </p>
        
        <h3 className="text-xl font-semibold">Why Password Security Matters</h3>
        <p>
          Passwords are the first line of defense against unauthorized access to your accounts. Here are some reasons why password security is essential:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Protection Against Unauthorized Access:</strong> Strong passwords help prevent unauthorized users from accessing your accounts, protecting your sensitive information.</li>
          <li><strong>Prevention of Identity Theft:</strong> Weak passwords can lead to identity theft, where malicious actors gain access to personal information and use it for fraudulent activities.</li>
          <li><strong>Safeguarding Financial Information:</strong> Many online services store financial information, and a compromised password can lead to financial loss.</li>
          <li><strong>Compliance with Regulations:</strong> Many industries have regulations that require organizations to implement strong password policies to protect customer data.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Creating Strong Passwords</h3>
        <p>
          To create strong passwords, consider the following best practices:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Use a Long Password:</strong> Aim for at least 12 characters. Longer passwords are generally more secure.</li>
          <li><strong>Include a Mix of Characters:</strong> Use a combination of uppercase letters, lowercase letters, numbers, and symbols to increase complexity.</li>
          <li><strong>Avoid Common Words:</strong> Do not use easily guessable information, such as names, birthdays, or common words.</li>
          <li><strong>Use Unique Passwords:</strong> Avoid reusing passwords across multiple accounts. Each account should have a unique password.</li>
          <li><strong>Consider Using a Passphrase:</strong> A passphrase is a sequence of words or a sentence that is easy to remember but hard to guess. For example, "BlueSky!2023" is stronger than "password123".</li>
        </ol>

        <h3 className="text-xl font-semibold">The Role of Password Managers</h3>
        <p>
          Password managers are tools that help users create, store, and manage their passwords securely. Here are some benefits of using a password manager:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Secure Storage:</strong> Password managers encrypt your passwords, making them secure and accessible only to you.</li>
          <li><strong>Automatic Password Generation:</strong> Many password managers can generate strong, random passwords for you, ensuring that your accounts are protected.</li>
          <li><strong>Convenience:</strong> With a password manager, you only need to remember one master password to access all your other passwords.</li>
          <li><strong>Cross-Device Syncing:</strong> Most password managers allow you to sync your passwords across multiple devices, making it easy to access your accounts from anywhere.</li>
        </ul>

        <h3 className="text-xl font-semibold">Common Password Security Mistakes</h3>
        <p>
          Avoid these common mistakes to enhance your password security:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Using Weak Passwords:</strong> Avoid simple passwords like "123456" or "password".</li>
          <li><strong>Ignoring Two-Factor Authentication:</strong> Enable two-factor authentication (2FA) wherever possible for an extra layer of security.</li>
          <li><strong>Not Updating Passwords Regularly:</strong> Change your passwords periodically, especially for sensitive accounts.</li>
          <li><strong>Sharing Passwords:</strong> Avoid sharing passwords via email or messaging apps. Use secure methods to share sensitive information.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Password security is a critical aspect of protecting your online presence. By following best practices for creating strong passwords and utilizing password managers, 
          you can significantly reduce the risk of unauthorized access to your accounts. Start implementing these strategies today to enhance your password security and safeguard your personal information.
        </p>
      </article>

<Footer />
    </div>
  );
}