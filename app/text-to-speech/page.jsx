'use client'
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TextToSpeech() {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Load available voices when component mounts
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0].name);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = () => {
    if (!text.trim()) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find(v => v.name === selectedVoice);
    
    if (voice) {
      utterance.voice = voice;
    }
    
    utterance.rate = rate;
    utterance.volume = volume;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <section>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Text to Speech Converter</CardTitle>
              <CardDescription>
                Convert your text to speech with customizable voice settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="text">Enter Text</Label>
                  <Textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="mt-2"
                    rows={5}
                    placeholder="Enter the text you want to convert to speech..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="voice">Select Voice</Label>
                    <Select
                      value={selectedVoice}
                      onValueChange={setSelectedVoice}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a voice" />
                      </SelectTrigger>
                      <SelectContent>
                        {voices.map((voice) => (
                          <SelectItem key={voice.name} value={voice.name}>
                            {voice.name} ({voice.lang})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="rate">Speech Rate</Label>
                    <Slider
                      id="rate"
                      value={[rate]}
                      onValueChange={([value]) => setRate(value)}
                      min={0.5}
                      max={2}
                      step={0.1}
                      className="mt-2"
                    />
                    <div className="text-sm text-gray-500 mt-1">
                      Current rate: {rate.toFixed(1)}x
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="volume">Volume</Label>
                    <Slider
                      id="volume"
                      value={[volume]}
                      onValueChange={([value]) => setVolume(value)}
                      min={0}
                      max={1}
                      step={0.1}
                      className="mt-2"
                    />
                    <div className="text-sm text-gray-500 mt-1">
                      Current volume: {Math.round(volume * 100)}%
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={speak}
                    disabled={isSpeaking || !text.trim()}
                    className="flex-1"
                  >
                    {isSpeaking ? 'Speaking...' : 'Speak'}
                  </Button>
                  <Button
                    onClick={stopSpeaking}
                    variant="outline"
                    disabled={!isSpeaking}
                    className="flex-1"
                  >
                    Stop
                  </Button>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  <p>Tips:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Enter the text you want to convert to speech</li>
                    <li>Choose from available voices in different languages</li>
                    <li>Adjust speech rate and volume to your preference</li>
                    <li>Click Speak to start and Stop to cancel</li>
                    <li>Make sure your device has audio output enabled</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
     

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Text-to-Speech Technology</h2>
        <p>
          Text-to-speech (TTS) technology converts written text into spoken words, enabling users to listen to content rather than read it. This technology has become increasingly popular in various applications, from accessibility tools to language learning and content consumption. This article explores the significance of text-to-speech technology, its applications, benefits, and best practices for using TTS tools effectively.
        </p>
        
        <h3 className="text-xl font-semibold">What is Text-to-Speech Technology?</h3>
        <p>
          Text-to-speech technology uses artificial intelligence and natural language processing to synthesize human speech from text. TTS systems analyze the text input, convert it into phonetic representations, and generate speech output using pre-recorded voice samples or synthesized voices. This technology allows users to listen to written content, making it accessible to a broader audience.
        </p>

        <h3 className="text-xl font-semibold">Applications of Text-to-Speech Technology</h3>
        <p>
          Text-to-speech technology has a wide range of applications across various fields:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Accessibility:</strong> TTS technology is essential for individuals with visual impairments or reading disabilities, allowing them to access written content through audio.</li>
          <li><strong>Language Learning:</strong> TTS can assist language learners by providing correct pronunciation and intonation, helping them improve their speaking and listening skills.</li>
          <li><strong>Content Consumption:</strong> Many users prefer listening to articles, books, and other written content while multitasking or on the go, making TTS a valuable tool for content consumption.</li>
          <li><strong>Customer Service:</strong> TTS is used in automated customer service systems, providing users with information and assistance through voice responses.</li>
          <li><strong>Entertainment:</strong> TTS technology is used in video games, virtual assistants, and interactive applications to create engaging experiences.</li>
        </ul>

        <h3 className="text-xl font-semibold">Benefits of Using Text-to-Speech Technology</h3>
        <p>
          Implementing text-to-speech technology offers several advantages:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Enhanced Accessibility:</strong> TTS technology makes content accessible to individuals with disabilities, ensuring that everyone can access information.</li>
          <li><strong>Improved Engagement:</strong> Audio content can enhance user engagement, as many people find it easier to listen than to read.</li>
          <li><strong>Multitasking:</strong> TTS allows users to consume content while performing other tasks, making it a convenient option for busy individuals.</li>
          <li><strong>Customization:</strong> Many TTS systems offer customizable voice options, allowing users to choose voices that suit their preferences.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Using Text-to-Speech Tools</h3>
        <p>
          To effectively use text-to-speech technology, consider the following best practices:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Choose the Right Voice:</strong> Select a voice that is clear and pleasant to listen to, as this can significantly impact the user experience.</li>
          <li><strong>Adjust Speech Rate and Volume:</strong> Customize the speech rate and volume settings to suit the preferences of your audience.</li>
          <li><strong>Use Clear and Concise Text:</strong> Ensure that the text you want to convert to speech is clear and easy to understand, as complex sentences may lead to mispronunciations.</li>
          <li><strong>Test the Output:</strong> Always test the TTS output to ensure that it sounds natural and accurately represents the intended message.</li>
          <li><strong>Provide Context:</strong> If using TTS for educational purposes, provide context or additional information to enhance understanding.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Text-to-speech technology is a valuable tool that enhances accessibility, engagement, and convenience in content consumption. By understanding its significance and following best practices, you can effectively implement TTS technology in various applications. Whether for accessibility, language learning, or content delivery, mastering text-to-speech technology will improve the user experience and broaden your audience reach.
        </p>
      </article> 
      <Footer/>
    </section>
  );
}
