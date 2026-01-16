'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(randomNum);
    setHistory(prev => [randomNum, ...prev].slice(0, 5));
  };

  return (
    <section>
      <Navbar/>
      
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Random Number Generator</CardTitle>
              <CardDescription>
                Generate random numbers within your specified range
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="min">Minimum Value</Label>
                  <Input
                    id="min"
                    type="number"
                    value={min}
                    onChange={(e) => setMin(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="max">Maximum Value</Label>
                  <Input
                    id="max"
                    type="number"
                    value={max}
                    onChange={(e) => setMax(Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
              </div>
              <Button onClick={generateRandomNumber} className="w-full">
                Generate Random Number
              </Button>
            </CardContent>
          </Card>

          {result !== null && (
            <Card>
              <CardHeader>
                <CardTitle>Result</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-center mb-6">{result}</div>
                {history.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Recent Numbers</h3>
                    <div className="flex gap-2">
                      {history.map((num, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 px-4 py-2 rounded-lg"
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Random Number Generation</h2>
        <p>
          Random number generation is a fundamental concept in computer science and statistics. It involves producing numbers that are not predictable and are uniformly distributed over a specified range. This article explores the importance of random number generation, its applications, and best practices for using random numbers effectively.
        </p>
        
        <h3 className="text-xl font-semibold">What is Random Number Generation?</h3>
        <p>
          Random number generation refers to the process of generating a sequence of numbers that lack any pattern. These numbers can be generated using algorithms (pseudo-random) or physical processes (true random). In programming, random numbers are often used for various purposes, including simulations, cryptography, and gaming.
        </p>

        <h3 className="text-xl font-semibold">Applications of Random Number Generation</h3>
        <p>
          Random numbers have a wide range of applications across different fields:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Simulations:</strong> Random numbers are essential in simulations, such as Monte Carlo simulations, where they help model complex systems and predict outcomes.</li>
          <li><strong>Cryptography:</strong> In cryptography, random numbers are used to generate keys and ensure secure communication.</li>
          <li><strong>Gaming:</strong> Random numbers are used in gaming to create unpredictable outcomes, enhancing the gaming experience.</li>
          <li><strong>Statistical Sampling:</strong> Random sampling techniques rely on random numbers to select samples from a population, ensuring unbiased results.</li>
          <li><strong>Machine Learning:</strong> Random numbers are used in algorithms for tasks such as initializing weights in neural networks and shuffling datasets.</li>
        </ul>

        <h3 className="text-xl font-semibold">Types of Random Number Generators</h3>
        <p>
          There are two main types of random number generators:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Pseudo-Random Number Generators (PRNGs):</strong> These use mathematical algorithms to produce sequences of numbers that appear random. They are deterministic, meaning that if you start with the same initial seed, you will get the same sequence of numbers.</li>
          <li><strong>True Random Number Generators (TRNGs):</strong> These generate numbers based on physical processes, such as electronic noise or radioactive decay. They are non-deterministic and provide true randomness.</li>
        </ol>

        <h3 className="text-xl font-semibold">Best Practices for Using Random Numbers</h3>
        <p>
          To effectively use random numbers in your applications, consider the following best practices:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Use a Good Seed:</strong> When using PRNGs, ensure that you initialize them with a good seed value to avoid predictable sequences.</li>
          <li><strong>Understand the Distribution:</strong> Be aware of the distribution of the random numbers you need. For example, uniform distribution is suitable for random sampling, while normal distribution is often used in statistical analysis.</li>
          <li><strong>Test for Randomness:</strong> Use statistical tests to verify the randomness of the generated numbers, especially in critical applications like cryptography.</li>
          <li><strong>Limit the Range:</strong> When generating random numbers, always define a clear range to avoid unexpected results.</li>
          <li><strong>Use Libraries:</strong> Utilize established libraries for random number generation, as they are optimized and tested for performance and security.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Random number generation is a crucial aspect of many applications in computer science and statistics. By understanding the principles of random number generation and following best practices, you can effectively utilize random numbers in your projects. Whether for simulations, cryptography, or gaming, mastering random number generation will enhance your programming skills and improve the quality of your applications.
        </p>
      </article>

      <Footer/>
    </section>
  );
}
