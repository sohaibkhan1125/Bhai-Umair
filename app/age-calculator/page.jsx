"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    if (!birthDate) {
      setError("Please enter your birth date");
      setAge(null);
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
      setError("Birth date cannot be in the future");
      setAge(null);
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birth.getDate());
      days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setError("");
    setAge({ years, months, days });
  };

  return (
    <section>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Age Calculator</CardTitle>
              <CardDescription>
                Calculate your exact age in years, months, and days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Birth Date</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full"
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
                <Button onClick={calculateAge} className="w-full">
                  Calculate Age
                </Button>
              </div>

              {age && (
                <div className="mt-6 space-y-2">
                  <h3 className="font-semibold">Your Age:</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">{age.years}</p>
                      <p className="text-sm text-gray-600">Years</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">{age.months}</p>
                      <p className="text-sm text-gray-600">Months</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">{age.days}</p>
                      <p className="text-sm text-gray-600">Days</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                This calculator provides your exact age based on the current date.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Age Calculation</h2>
        <p>
          Age calculation is a fundamental aspect of understanding one's life journey and milestones. It provides insights into various life stages, influences decisions, and helps in planning for the future. This article explores the significance of age calculation, methods for determining age, practical applications, and the importance of knowing your age in different contexts.
        </p>
        
        <h3 className="text-xl font-semibold">Why is Age Calculation Important?</h3>
        <p>
          Knowing your age is essential for several reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Legal Requirements:</strong> Age is often a determining factor for legal rights and responsibilities, such as voting, drinking alcohol, and driving.</li>
          <li><strong>Health Considerations:</strong> Age can influence health risks and medical care, as certain conditions are more prevalent at different life stages.</li>
          <li><strong>Life Milestones:</strong> Age marks significant life events, such as graduation, marriage, and retirement, which are often celebrated or planned around specific ages.</li>
          <li><strong>Personal Reflection:</strong> Understanding your age can help in reflecting on personal growth, achievements, and future goals.</li>
        </ul>

        <h3 className="text-xl font-semibold">Methods for Calculating Age</h3>
        <p>
          The most common method for calculating age is by subtracting the birth year from the current year. However, this simple calculation can be adjusted to account for the month and day of birth to provide a more accurate age. Here's how to calculate age:
        </p>
        <ol className="list-decimal list-inside">
          <li>Determine the current date.</li>
          <li>Subtract the birth year from the current year.</li>
          <li>If the current month is before the birth month, subtract one year.</li>
          <li>If the current month is the same as the birth month but the current day is before the birth day, subtract one year.</li>
        </ol>
        <p>
          For example, if someone was born on March 15, 1990, and today is April 10, 2023, their age would be calculated as follows:
        </p>
        <ul className="list-disc list-inside">
          <li>2023 - 1990 = 33 years</li>
          <li>Since April is after March, the age remains 33.</li>
        </ul>

        <h3 className="text-xl font-semibold">Practical Applications of Age Calculation</h3>
        <p>
          Age calculation has various practical applications, including:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Healthcare:</strong> Medical professionals often consider age when diagnosing and treating patients, as certain conditions are age-related.</li>
          <li><strong>Education:</strong> Age is a factor in school enrollment and grade placement, ensuring that children are in appropriate educational settings.</li>
          <li><strong>Insurance:</strong> Insurance companies use age to assess risk and determine premiums for health, life, and auto insurance.</li>
          <li><strong>Demographics:</strong> Age data is crucial for demographic studies, helping governments and organizations understand population trends and needs.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Age Calculation</h3>
        <p>
          To ensure accurate age calculation, consider the following best practices:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Use Reliable Tools:</strong> Utilize age calculators or software that accurately account for leap years and date formats.</li>
          <li><strong>Keep Records:</strong> Maintain accurate records of birth dates and other relevant information to facilitate easy age calculation.</li>
          <li><strong>Be Aware of Time Zones:</strong> When calculating age across different time zones, ensure that the correct local time is considered.</li>
          <li><strong>Educate Others:</strong> Share knowledge about age calculation methods to help others understand their age and its implications.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Age calculation is a fundamental aspect of personal and societal understanding. By accurately determining age, individuals can navigate legal, health, and personal milestones effectively. Understanding the methods and applications of age calculation enhances awareness and helps in making informed decisions throughout life. Embracing tools like age calculators can simplify this process and provide clarity in various contexts.
        </p>
      </article>
      <Footer />
    </section>
  );
}
