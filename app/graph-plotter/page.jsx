'use client'
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function GraphPlotter() {
  const [functionInput, setFunctionInput] = useState('x');
  const [xMin, setXMin] = useState(-10);
  const [xMax, setXMax] = useState(10);
  const [step, setStep] = useState(0.1);
  const [chartData, setChartData] = useState(null);

  const plotFunction = () => {
    try {
      const xValues = [];
      const yValues = [];
      
      for (let x = xMin; x <= xMax; x += step) {
        xValues.push(x);
        // Replace 'x' in the function with the current x value
        const y = eval(functionInput.replace(/x/g, `(${x})`));
        yValues.push(y);
      }

      setChartData({
        labels: xValues,
        datasets: [
          {
            label: `f(x) = ${functionInput}`,
            data: yValues,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            fill: false
          }
        ]
      });
    } catch (error) {
      console.error('Error plotting function:', error);
    }
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Function Plotter'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'x'
        }
      },
      y: {
        title: {
          display: true,
          text: 'f(x)'
        }
      }
    }
  };

  return (
    <section>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Graph Plotter</CardTitle>
              <CardDescription>
                Plot mathematical functions and visualize them on a graph
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="function">Function (use 'x' as variable)</Label>
                  <Input
                    id="function"
                    value={functionInput}
                    onChange={(e) => setFunctionInput(e.target.value)}
                    className="mt-2"
                    placeholder="e.g., x^2, sin(x), 2*x+1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="xMin">X Min</Label>
                    <Input
                      id="xMin"
                      type="number"
                      value={xMin}
                      onChange={(e) => setXMin(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="xMax">X Max</Label>
                    <Input
                      id="xMax"
                      type="number"
                      value={xMax}
                      onChange={(e) => setXMax(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="step">Step Size</Label>
                    <Input
                      id="step"
                      type="number"
                      value={step}
                      onChange={(e) => setStep(Number(e.target.value))}
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button onClick={plotFunction} className="w-full">
                  Plot Function
                </Button>
              </div>
            </CardContent>
          </Card>

          {chartData && (
            <Card>
              <CardContent className="pt-6">
                <div className="h-[400px]">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Graph Plotting</h2>
        <p>
          Graph plotting is a fundamental aspect of mathematics and data visualization. It involves representing mathematical functions or data sets visually, allowing for easier interpretation and analysis. This article explores the significance of graph plotting, its applications, and best practices for effectively using graph plotting tools.
        </p>
        
        <h3 className="text-xl font-semibold">What is Graph Plotting?</h3>
        <p>
          Graph plotting refers to the process of creating a visual representation of mathematical functions or data points on a coordinate system. The x-axis typically represents the independent variable, while the y-axis represents the dependent variable. By plotting points or curves, one can observe trends, patterns, and relationships within the data.
        </p>

        <h3 className="text-xl font-semibold">Applications of Graph Plotting</h3>
        <p>
          Graph plotting has a wide range of applications across various fields:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Mathematics:</strong> Graphs are used to visualize functions, helping students and professionals understand concepts such as slopes, intercepts, and asymptotes.</li>
          <li><strong>Science:</strong> In fields like physics and biology, graphs are used to represent experimental data, making it easier to analyze results and draw conclusions.</li>
          <li><strong>Economics:</strong> Economists use graphs to illustrate trends in data such as supply and demand, price changes, and economic growth.</li>
          <li><strong>Statistics:</strong> Graphs are essential for visualizing statistical data, helping to identify distributions, correlations, and outliers.</li>
          <li><strong>Engineering:</strong> Engineers use graphs to model systems, analyze performance, and optimize designs.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Graph Plotting</h3>
        <p>
          To effectively use graph plotting tools, consider the following best practices:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Choose the Right Type of Graph:</strong> Depending on the data, select the appropriate graph type (e.g., line graph, bar chart, scatter plot) to convey the information clearly.</li>
          <li><strong>Label Axes Clearly:</strong> Ensure that both axes are labeled with the appropriate units and descriptions to avoid confusion.</li>
          <li><strong>Use a Legend:</strong> If multiple datasets are plotted, include a legend to differentiate between them easily.</li>
          <li><strong>Maintain Consistent Scales:</strong> Use consistent scales on both axes to accurately represent the data and avoid misleading interpretations.</li>
          <li><strong>Highlight Key Points:</strong> Use colors or markers to emphasize important data points or trends within the graph.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Graph plotting is an invaluable tool for visualizing mathematical functions and data sets. By understanding its significance and following best practices, you can effectively utilize graph plotting in your projects. Whether for educational purposes, scientific research, or data analysis, mastering graph plotting will enhance your ability to communicate complex information clearly and effectively.
        </p>
      </article>

      <Footer/>
    </section>
  );
}
