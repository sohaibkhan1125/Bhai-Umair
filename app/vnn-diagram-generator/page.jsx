'use client'
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as d3 from 'd3';

export default function VennDiagramGenerator() {
  const [circle1, setCircle1] = useState({
    label: 'Set A',
    items: '',
    color: '#FF6B6B'
  });
  const [circle2, setCircle2] = useState({
    label: 'Set B',
    items: '',
    color: '#4ECDC4'
  });
  const [circle3, setCircle3] = useState({
    label: 'Set C',
    items: '',
    color: '#45B7D1'
  });
  const svgRef = useRef(null);

  const drawVennDiagram = () => {
    if (!svgRef.current) return;

    // Clear previous diagram
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 600;
    const height = 400;
    const margin = 50;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Calculate intersections
    const items1 = circle1.items.split(',').map(item => item.trim());
    const items2 = circle2.items.split(',').map(item => item.trim());
    const items3 = circle3.items.split(',').map(item => item.trim());

    const intersection12 = items1.filter(item => items2.includes(item));
    const intersection13 = items1.filter(item => items3.includes(item));
    const intersection23 = items2.filter(item => items3.includes(item));
    const intersection123 = items1.filter(item => 
      items2.includes(item) && items3.includes(item)
    );

    // Draw circles
    const circle1Group = svg.append("g")
      .attr("transform", `translate(${width/3},${height/2})`);

    const circle2Group = svg.append("g")
      .attr("transform", `translate(${2*width/3},${height/2})`);

    const circle3Group = svg.append("g")
      .attr("transform", `translate(${width/2},${height/3})`);

    // Draw circles with colors
    circle1Group.append("circle")
      .attr("r", 100)
      .attr("fill", circle1.color)
      .attr("opacity", 0.5);

    circle2Group.append("circle")
      .attr("r", 100)
      .attr("fill", circle2.color)
      .attr("opacity", 0.5);

    circle3Group.append("circle")
      .attr("r", 100)
      .attr("fill", circle3.color)
      .attr("opacity", 0.5);

    // Add labels
    circle1Group.append("text")
      .text(circle1.label)
      .attr("text-anchor", "middle")
      .attr("dy", -110)
      .style("font-size", "14px")
      .style("font-weight", "bold");

    circle2Group.append("text")
      .text(circle2.label)
      .attr("text-anchor", "middle")
      .attr("dy", -110)
      .style("font-size", "14px")
      .style("font-weight", "bold");

    circle3Group.append("text")
      .text(circle3.label)
      .attr("text-anchor", "middle")
      .attr("dy", -110)
      .style("font-size", "14px")
      .style("font-weight", "bold");

    // Add intersection counts
    if (intersection12.length > 0) {
      svg.append("text")
        .text(intersection12.length)
        .attr("x", width/2)
        .attr("y", height/2)
        .attr("text-anchor", "middle")
        .style("font-size", "12px");
    }

    if (intersection13.length > 0) {
      svg.append("text")
        .text(intersection13.length)
        .attr("x", width/2)
        .attr("y", height/3)
        .attr("text-anchor", "middle")
        .style("font-size", "12px");
    }

    if (intersection23.length > 0) {
      svg.append("text")
        .text(intersection23.length)
        .attr("x", 2*width/3)
        .attr("y", height/3)
        .attr("text-anchor", "middle")
        .style("font-size", "12px");
    }

    if (intersection123.length > 0) {
      svg.append("text")
        .text(intersection123.length)
        .attr("x", width/2)
        .attr("y", height/2.5)
        .attr("text-anchor", "middle")
        .style("font-size", "12px");
    }
  };

  useEffect(() => {
    drawVennDiagram();
  }, [circle1, circle2, circle3]);

  return (
    <section>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Venn Diagram Generator</CardTitle>
              <CardDescription>
                Create and customize Venn diagrams with up to three sets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="circle1-label">Set A Label</Label>
                    <Input
                      id="circle1-label"
                      value={circle1.label}
                      onChange={(e) => setCircle1({ ...circle1, label: e.target.value })}
                      className="mt-2"
                    />
                    <Label htmlFor="circle1-items" className="mt-4">Set A Items (comma-separated)</Label>
                    <Textarea
                      id="circle1-items"
                      value={circle1.items}
                      onChange={(e) => setCircle1({ ...circle1, items: e.target.value })}
                      className="mt-2"
                      rows={3}
                    />
                    <Label htmlFor="circle1-color" className="mt-4">Set A Color</Label>
                    <Input
                      id="circle1-color"
                      type="color"
                      value={circle1.color}
                      onChange={(e) => setCircle1({ ...circle1, color: e.target.value })}
                      className="mt-2 w-full h-10"
                    />
                  </div>

                  <div>
                    <Label htmlFor="circle2-label">Set B Label</Label>
                    <Input
                      id="circle2-label"
                      value={circle2.label}
                      onChange={(e) => setCircle2({ ...circle2, label: e.target.value })}
                      className="mt-2"
                    />
                    <Label htmlFor="circle2-items" className="mt-4">Set B Items (comma-separated)</Label>
                    <Textarea
                      id="circle2-items"
                      value={circle2.items}
                      onChange={(e) => setCircle2({ ...circle2, items: e.target.value })}
                      className="mt-2"
                      rows={3}
                    />
                    <Label htmlFor="circle2-color" className="mt-4">Set B Color</Label>
                    <Input
                      id="circle2-color"
                      type="color"
                      value={circle2.color}
                      onChange={(e) => setCircle2({ ...circle2, color: e.target.value })}
                      className="mt-2 w-full h-10"
                    />
                  </div>

                  <div>
                    <Label htmlFor="circle3-label">Set C Label</Label>
                    <Input
                      id="circle3-label"
                      value={circle3.label}
                      onChange={(e) => setCircle3({ ...circle3, label: e.target.value })}
                      className="mt-2"
                    />
                    <Label htmlFor="circle3-items" className="mt-4">Set C Items (comma-separated)</Label>
                    <Textarea
                      id="circle3-items"
                      value={circle3.items}
                      onChange={(e) => setCircle3({ ...circle3, items: e.target.value })}
                      className="mt-2"
                      rows={3}
                    />
                    <Label htmlFor="circle3-color" className="mt-4">Set C Color</Label>
                    <Input
                      id="circle3-color"
                      type="color"
                      value={circle3.color}
                      onChange={(e) => setCircle3({ ...circle3, color: e.target.value })}
                      className="mt-2 w-full h-10"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
                <svg ref={svgRef} className="w-full h-full"></svg>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Venn Diagrams</h2>
        <p>
          Venn diagrams are a powerful visual tool used to represent the relationships between different sets. They are particularly useful in various fields such as mathematics, statistics, logic, and computer science. This article explores the significance of Venn diagrams, their applications, and best practices for creating and interpreting them.
        </p>
        
        <h3 className="text-xl font-semibold">What is a Venn Diagram?</h3>
        <p>
          A Venn diagram consists of overlapping circles, each representing a set. The areas where the circles overlap indicate the elements that are common to the sets. Venn diagrams can illustrate relationships between two or more sets, making them an effective way to visualize logical relationships and intersections.
        </p>

        <h3 className="text-xl font-semibold">Applications of Venn Diagrams</h3>
        <p>
          Venn diagrams have a wide range of applications across various fields:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Mathematics:</strong> Venn diagrams are used to teach set theory concepts, helping students understand unions, intersections, and complements of sets.</li>
          <li><strong>Statistics:</strong> In statistics, Venn diagrams can illustrate the relationships between different data sets, making it easier to analyze overlaps and differences.</li>
          <li><strong>Logic:</strong> Venn diagrams are used in logic to represent logical relationships and to solve problems involving categorical propositions.</li>
          <li><strong>Computer Science:</strong> In computer science, Venn diagrams can help visualize data structures, algorithms, and relationships between different data sets.</li>
          <li><strong>Business:</strong> Businesses use Venn diagrams to analyze market segments, customer preferences, and product features, helping to identify overlaps and unique selling points.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Creating Venn Diagrams</h3>
        <p>
          To effectively create and interpret Venn diagrams, consider the following best practices:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Clearly Define Sets:</strong> Ensure that each set is clearly defined and labeled to avoid confusion.</li>
          <li><strong>Use Distinct Colors:</strong> Use different colors for each circle to enhance visibility and understanding of the relationships.</li>
          <li><strong>Highlight Intersections:</strong> Clearly indicate the areas of intersection to emphasize the relationships between sets.</li>
          <li><strong>Keep It Simple:</strong> Avoid overcrowding the diagram with too many sets or elements, as this can lead to confusion.</li>
          <li><strong>Provide Context:</strong> Include a brief explanation or legend to help viewers understand the significance of the diagram.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Venn diagrams are an invaluable tool for visualizing relationships between sets. By understanding their significance and following best practices, you can effectively utilize Venn diagrams in your projects. Whether for educational purposes, data analysis, or logical reasoning, mastering Venn diagrams will enhance your ability to communicate complex information clearly and effectively.
        </p>
      </article>

      <Footer/>
    </section>
  );
}
