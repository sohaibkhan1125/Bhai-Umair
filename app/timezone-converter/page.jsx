'use client'
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TimezoneConverter() {
  const [fromTime, setFromTime] = useState('');
  const [fromTimezone, setFromTimezone] = useState('UTC');
  const [toTimezone, setToTimezone] = useState('UTC');
  const [convertedTime, setConvertedTime] = useState('');
  const [timezones, setTimezones] = useState([]);

  useEffect(() => {
    // Get all available timezones
    const availableTimezones = Intl.supportedValuesOf('timeZone');
    setTimezones(availableTimezones);
  }, []);

  const convertTime = () => {
    if (!fromTime) return;

    try {
      // Create a date object from the input time
      const [hours, minutes] = fromTime.split(':').map(Number);
      const date = new Date();
      date.setUTCHours(hours, minutes, 0, 0);

      // Format the time in both timezones
      const fromOptions = {
        timeZone: fromTimezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };

      const toOptions = {
        timeZone: toTimezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };

      const fromFormatted = new Intl.DateTimeFormat('en-US', fromOptions).format(date);
      const toFormatted = new Intl.DateTimeFormat('en-US', toOptions).format(date);

      setConvertedTime(`${fromFormatted} ${fromTimezone} → ${toFormatted} ${toTimezone}`);
    } catch (error) {
      console.error('Error converting time:', error);
      setConvertedTime('Error converting time. Please check your input.');
    }
  };

  return (
    <section>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Timezone Converter</CardTitle>
              <CardDescription>
                Convert time between different timezones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fromTime">Time</Label>
                    <Input
                      id="fromTime"
                      type="time"
                      value={fromTime}
                      onChange={(e) => setFromTime(e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="fromTimezone">From Timezone</Label>
                    <Select
                      value={fromTimezone}
                      onValueChange={setFromTimezone}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        {timezones.map((tz) => (
                          <SelectItem key={tz} value={tz}>
                            {tz}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="toTimezone">To Timezone</Label>
                    <Select
                      value={toTimezone}
                      onValueChange={setToTimezone}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        {timezones.map((tz) => (
                          <SelectItem key={tz} value={tz}>
                            {tz}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={convertTime}
                  disabled={!fromTime}
                  className="w-full"
                >
                  Convert Time
                </Button>

                {convertedTime && (
                  <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <p className="text-lg font-medium text-center">{convertedTime}</p>
                  </div>
                )}

                <div className="mt-6 text-sm text-gray-500">
                  <p>Tips:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Enter the time you want to convert</li>
                    <li>Select the source and target timezones</li>
                    <li>Click Convert Time to see the result</li>
                    <li>All times are displayed in 24-hour format</li>
                    <li>Supports all major timezones worldwide</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding Timezone Conversion</h2>
        <p>
          Timezone conversion is an essential aspect of global communication and travel. As the world becomes increasingly interconnected, understanding how to convert time between different time zones is crucial for scheduling meetings, planning events, and ensuring effective communication across regions. This article explores the significance of timezone conversion, the challenges involved, and best practices for managing time zones effectively.
        </p>
        
        <h3 className="text-xl font-semibold">What is a Timezone?</h3>
        <p>
          A timezone is a region of the Earth that has the same standard time. Timezones are defined by their offset from Coordinated Universal Time (UTC), which is the time standard used worldwide. For example, UTC+0 represents the time in the Greenwich Mean Time (GMT) zone, while UTC-5 represents Eastern Standard Time (EST) in the United States. Timezones can vary by hours and sometimes by minutes, and they may also change due to Daylight Saving Time (DST) adjustments.
        </p>

        <h3 className="text-xl font-semibold">Why is Timezone Conversion Important?</h3>
        <p>
          Timezone conversion is vital for several reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Global Communication:</strong> In a globalized world, businesses and individuals often communicate across different time zones. Accurate timezone conversion ensures that meetings and appointments are scheduled at convenient times for all parties involved.</li>
          <li><strong>Travel Planning:</strong> Travelers need to be aware of timezone differences to avoid confusion when booking flights, checking in, and arriving at their destinations.</li>
          <li><strong>Event Coordination:</strong> Organizing events that involve participants from multiple time zones requires careful planning to ensure that everyone can attend at the right time.</li>
          <li><strong>Data Management:</strong> In technology and data analysis, accurate timezone conversion is essential for logging events, scheduling tasks, and analyzing time-sensitive data.</li>
        </ul>

        <h3 className="text-xl font-semibold">Challenges in Timezone Conversion</h3>
        <p>
          While converting time between time zones may seem straightforward, several challenges can arise:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Daylight Saving Time:</strong> Many regions observe Daylight Saving Time, which can complicate conversions. For example, a timezone may shift by one hour during certain months of the year, requiring adjustments in calculations.</li>
          <li><strong>Time Zone Changes:</strong> Political changes can lead to changes in time zones, which may not be reflected in all systems immediately. Keeping track of these changes is essential for accurate conversions.</li>
          <li><strong>Ambiguity:</strong> Some time zones have the same UTC offset but are in different regions, leading to potential confusion. For example, both New York and Toronto are in the UTC-5 zone, but they are in different countries.</li>
        </ul>

        <h3 className="text-xl font-semibold">Best Practices for Timezone Management</h3>
        <p>
          To effectively manage time zones and ensure accurate conversions, consider the following best practices:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Use Reliable Tools:</strong> Utilize reliable timezone conversion tools and libraries that account for DST and other factors to ensure accurate results.</li>
          <li><strong>Stay Informed:</strong> Keep up to date with changes in time zones and DST practices in different regions to avoid confusion.</li>
          <li><strong>Standardize Time Formats:</strong> Use a consistent time format (e.g., 24-hour format) to minimize misunderstandings when communicating time across different regions.</li>
          <li><strong>Provide Context:</strong> When scheduling meetings or events, provide the time in both the local timezone and UTC to ensure clarity for all participants.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Timezone conversion is a critical skill in today's interconnected world. By understanding the importance of time zones, the challenges involved, and best practices for managing them, you can ensure effective communication and planning across different regions. Whether for personal travel, business meetings, or data management, mastering timezone conversion will enhance your ability to navigate the complexities of time in a global context.
        </p>
      </article>
      <Footer/>
    </section>
  );
}
