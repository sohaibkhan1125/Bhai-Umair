'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Copy, Check } from 'lucide-react';

interface Stats {
  words: number;
  characters: number;
  sentences: number;
  paragraphs: number;
}

export default function WordCounter() {
  const [inputText, setInputText] = useState('');
  const [stats, setStats] = useState<Stats>({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    calculateStats();
  }, [inputText]);

  const calculateStats = () => {
    // Count words (excluding whitespace)
    const words = inputText.trim().split(/\s+/).filter(word => word.length > 0).length;
    
    // Count characters (including spaces)
    const characters = inputText.length;
    
    // Count sentences (basic implementation)
    const sentences = inputText.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    
    // Count paragraphs
    const paragraphs = inputText.split(/\n\s*\n/).filter(para => para.trim().length > 0).length;

    setStats({
      words,
      characters,
      sentences,
      paragraphs
    });
  };

  const copyToClipboard = async () => {
    if (inputText) {
      try {
        await navigator.clipboard.writeText(inputText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        alert('Failed to copy: ' + err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Word Counter
            </h1>
            
            <div className="mb-6">
              <label 
                htmlFor="inputText" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter Text:
              </label>
              <textarea
                id="inputText"
                rows={6}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Type or paste your text here..."
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800">Words</h3>
                <p className="text-2xl font-bold text-blue-600">{stats.words}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800">Characters</h3>
                <p className="text-2xl font-bold text-green-600">{stats.characters}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800">Sentences</h3>
                <p className="text-2xl font-bold text-purple-600">{stats.sentences}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800">Paragraphs</h3>
                <p className="text-2xl font-bold text-orange-600">{stats.paragraphs}</p>
              </div>
            </div>

            <div className="flex justify-end mb-6">
              {inputText && (
                <button
                  onClick={copyToClipboard}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center gap-1 text-sm"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">How to Use</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Type or paste your text in the input field above</li>
              <li>The tool will automatically count words, characters, sentences, and paragraphs</li>
              <li>Use the copy button to copy your text to the clipboard</li>
              <li>Clear the input field to reset the counters</li>
            </ol>
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This tool provides real-time counting as you type. 
                It counts words by splitting on whitespace, sentences by splitting on periods, 
                exclamation marks, and question marks, and paragraphs by splitting on double line breaks.
              </p>
            </div>
          </div>
        </div>
{/* New SEO Optimized Article Section */}
        <article className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Understanding Word Counting</h2>
          <p>
            Word counting is an essential task in various fields, including writing, editing, and academic research. 
            Whether you are a student, a professional writer, or someone who needs to keep track of their writing, 
            understanding how to count words accurately can be incredibly beneficial. In this article, we will explore 
            the importance of word counting, the methods used to count words, and how our Word Counter tool can help you.
          </p>
          <h3 className="text-xl font-semibold">Why is Word Counting Important?</h3>
          <p>
            Word counting serves several purposes, including:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Meeting Requirements:</strong> Many writing assignments, articles, and publications have specific word count requirements. Knowing how many words you have written helps ensure you meet these guidelines.</li>
            <li><strong>Improving Clarity:</strong> Keeping track of word count can help you focus on clarity and conciseness in your writing. It encourages you to express your ideas more succinctly.</li>
            <li><strong>Time Management:</strong> Understanding how many words you can write in a given time frame can help you manage your writing sessions more effectively.</li>
            <li><strong>Editing and Revising:</strong> Knowing the word count can assist in the editing process, allowing you to identify areas where you may need to cut or expand content.</li>
          </ul>
          <h3 className="text-xl font-semibold">Methods of Word Counting</h3>
          <p>
            There are several methods to count words, including:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Manual Counting:</strong> This method involves counting words by hand, which can be time-consuming and prone to errors, especially for longer texts.</li>
            <li><strong>Word Processing Software:</strong> Most word processors, such as Microsoft Word and Google Docs, have built-in word count features that provide accurate counts with just a few clicks.</li>
            <li><strong>Online Word Counters:</strong> Various online tools, like our Word Counter, allow you to paste text and receive an instant word count, along with additional statistics like character and sentence counts.</li>
          </ul>
          <h3 className="text-xl font-semibold">How to Use the Word Counter Tool</h3>
          <p>
            Our Word Counter tool is designed to make counting words easy and efficient. Here's how to use it:
          </p>
          <ol className="list-decimal list-inside">
            <li>Type or paste your text into the input field provided.</li>
            <li>The tool will automatically calculate the number of words, characters, sentences, and paragraphs.</li>
            <li>You can copy the text to your clipboard using the copy button for easy sharing.</li>
          </ol>
          <h3 className="text-xl font-semibold">Benefits of Using a Word Counter</h3>
          <p>
            Using a word counter offers several advantages:
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Accuracy:</strong> Automated word counting tools provide precise counts, eliminating the risk of human error.</li>
            <li><strong>Real-Time Feedback:</strong> Many word counters offer real-time updates as you type, allowing you to monitor your progress instantly.</li>
            <li><strong>Comprehensive Statistics:</strong> In addition to word counts, our tool provides character, sentence, and paragraph counts, giving you a complete overview of your text.</li>
          </ul>
          <h3 className="text-xl font-semibold">Conclusion</h3>
          <p>
            Word counting is a vital skill for anyone involved in writing or editing. By using our Word Counter tool, you can easily keep track of your word count and other important statistics, helping you to improve your writing and meet your goals. Start using our Word Counter today and enhance your writing process!
          </p>
        </article>
</main>

      <Footer />
    </div>
  );
} 