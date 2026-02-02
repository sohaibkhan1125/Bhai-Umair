'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Copy, RefreshCw, Globe, MapPin, Network, Shield, Clock } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function MyIpAddressPage() {
  const [ipInfo, setIpInfo] = useState({
    ip: '',
    city: '',
    region: '',
    country: '',
    loc: '',
    org: '',
    postal: '',
    timezone: '',
    hostname: '',
    isp: '',
    asn: '',
    connection: {
      type: '',
      speed: '',
      isp: ''
    },
    security: {
      proxy: false,
      hosting: false,
      tor: false
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchIpInfo = async () => {
    try {
      setLoading(true);
      setError('');

      // Fetch IP information from multiple APIs for comprehensive data
      const [ipifyResponse, ipApiResponse] = await Promise.all([
        fetch('https://api.ipify.org?format=json'),
        fetch('http://ip-api.com/json/')
      ]);

      if (!ipifyResponse.ok || !ipApiResponse.ok) {
        throw new Error('Failed to fetch IP information');
      }

      const ipifyData = await ipifyResponse.json();
      const ipApiData = await ipApiResponse.json();

      // Get hostname (optional bit, wrap in try-catch to avoid crashing if DNS service is down)
      let hostnameData = { Answer: [] };
      try {
        const hostnameResponse = await fetch(`https://dns.google/resolve?name=${ipifyData.ip}`);
        if (hostnameResponse.ok) {
          hostnameData = await hostnameResponse.json();
        }
      } catch (err) {
        console.warn("Hostname lookup failed:", err);
      }

      // Get connection info
      const connectionInfo = {
        type: navigator.connection?.effectiveType || 'unknown',
        speed: navigator.connection?.downlink || 'unknown',
        isp: ipApiData.isp || 'unknown'
      };

      // Get security info
      const securityInfo = {
        proxy: false, // Would need additional API to check
        hosting: ipApiData.hosting || false,
        tor: false // Would need additional API to check
      };

      setIpInfo({
        ip: ipifyData.ip,
        city: ipApiData.city || 'Unknown',
        region: ipApiData.regionName || 'Unknown',
        country: ipApiData.country || 'Unknown',
        loc: ipApiData.lat && ipApiData.lon ? `${ipApiData.lat}, ${ipApiData.lon}` : 'Unknown',
        org: ipApiData.org || 'Unknown',
        postal: ipApiData.zip || 'Unknown',
        timezone: ipApiData.timezone || 'Unknown',
        hostname: hostnameData.Answer?.[0]?.data || 'Unknown',
        isp: ipApiData.isp || 'Unknown',
        asn: ipApiData.as || 'Unknown',
        connection: connectionInfo,
        security: securityInfo
      });

      toast.success('IP information updated!');
    } catch (error) {
      console.error('Error fetching IP info:', error);
      setError('Failed to fetch IP information. Please try again.');
      toast.error('Failed to fetch IP information');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIpInfo();
  }, []);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const handleRefresh = () => {
    fetchIpInfo();
  };

  const InfoCard = ({ icon: Icon, title, value, copyable = true }) => (
    <div className="p-4 border rounded-lg bg-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon className="w-5 h-5 text-muted-foreground" />
          <Label className="font-medium">{title}</Label>
        </div>
        {copyable && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleCopy(value)}
            className="h-8 px-2"
          >
            <Copy className="w-4 h-4" />
          </Button>
        )}
      </div>
      <div className="mt-2 text-lg font-mono">{value}</div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">My IP Address</CardTitle>
              <Button onClick={handleRefresh} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {error ? (
                <div className="text-red-500 text-center py-4">{error}</div>
              ) : loading ? (
                <div className="text-center py-4">Loading IP information...</div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard
                      icon={Globe}
                      title="IP Address"
                      value={ipInfo.ip}
                    />
                    <InfoCard
                      icon={MapPin}
                      title="Location"
                      value={`${ipInfo.city}, ${ipInfo.region}, ${ipInfo.country}`}
                    />
                    <InfoCard
                      icon={Network}
                      title="ISP"
                      value={ipInfo.isp}
                    />
                    <InfoCard
                      icon={Clock}
                      title="Timezone"
                      value={ipInfo.timezone}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard
                      icon={MapPin}
                      title="Coordinates"
                      value={ipInfo.loc}
                    />
                    <InfoCard
                      icon={Network}
                      title="Organization"
                      value={ipInfo.org}
                    />
                    <InfoCard
                      icon={Network}
                      title="ASN"
                      value={ipInfo.asn}
                    />
                    <InfoCard
                      icon={Network}
                      title="Hostname"
                      value={ipInfo.hostname}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg bg-card">
                      <h3 className="font-semibold mb-2">Connection Details</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <span className="font-mono">{ipInfo.connection.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Speed:</span>
                          <span className="font-mono">{ipInfo.connection.speed} Mbps</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg bg-card">
                      <h3 className="font-semibold mb-2">Security Information</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Proxy:</span>
                          <span className="font-mono">{ipInfo.security.proxy ? 'Yes' : 'No'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Hosting:</span>
                          <span className="font-mono">{ipInfo.security.hosting ? 'Yes' : 'No'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tor:</span>
                          <span className="font-mono">{ipInfo.security.tor ? 'Yes' : 'No'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-lg mb-2">About IP Addresses</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>An IP address is a unique identifier assigned to devices on a network</li>
                  <li>IPv4 addresses are in the format xxx.xxx.xxx.xxx</li>
                  <li>Your IP address can reveal your approximate location</li>
                  <li>ISPs assign IP addresses to their customers</li>
                  <li>Some IP addresses are reserved for special purposes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* New SEO Optimized Article Section */}
      <article className="mt-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold">Understanding IP Addresses</h2>
        <p>
          An IP address (Internet Protocol address) is a unique identifier assigned to each device connected to a computer network that uses the Internet Protocol for communication.
          IP addresses serve two main functions: identifying the host or network interface and providing the location of the device in the network.
          In this article, we will explore the different types of IP addresses, their importance, and how they work.
        </p>

        <h3 className="text-xl font-semibold">Types of IP Addresses</h3>
        <p>
          There are two main types of IP addresses: IPv4 and IPv6.
        </p>
        <ul className="list-disc list-inside">
          <li><strong>IPv4:</strong> The most widely used IP address format, IPv4 addresses are 32-bit numbers typically represented in decimal format as four octets (e.g., 192.168.1.1).
            IPv4 can support approximately 4.3 billion unique addresses, but due to the rapid growth of the internet, this space is nearly exhausted.</li>
          <li><strong>IPv6:</strong> To address the limitations of IPv4, IPv6 was introduced. IPv6 addresses are 128-bit numbers, allowing for a vastly larger address space (approximately 340 undecillion addresses).
            IPv6 addresses are represented in hexadecimal format and separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).</li>
        </ul>

        <h3 className="text-xl font-semibold">How IP Addresses Work</h3>
        <p>
          IP addresses function as unique identifiers for devices on a network. When a device connects to the internet, it is assigned an IP address by its Internet Service Provider (ISP).
          This address allows the device to send and receive data over the internet. Here's how the process works:
        </p>
        <ol className="list-decimal list-inside">
          <li><strong>Device Connection:</strong> When a device connects to a network, it requests an IP address from the DHCP (Dynamic Host Configuration Protocol) server.</li>
          <li><strong>Address Assignment:</strong> The DHCP server assigns an available IP address to the device for a specified lease time.</li>
          <li><strong>Data Transmission:</strong> The device can now send and receive data using its assigned IP address. Data packets are routed through the internet based on the destination IP address.</li>
          <li><strong>Address Release:</strong> When the device disconnects from the network, the IP address is released back to the DHCP server for reuse.</li>
        </ol>

        <h3 className="text-xl font-semibold">Importance of IP Addresses</h3>
        <p>
          IP addresses are crucial for several reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Network Communication:</strong> IP addresses enable devices to communicate with each other over the internet, facilitating data exchange and connectivity.</li>
          <li><strong>Geolocation:</strong> IP addresses can provide approximate geographical locations, allowing services to tailor content based on user location.</li>
          <li><strong>Security:</strong> IP addresses can be used to implement security measures, such as firewalls and access controls, to protect networks from unauthorized access.</li>
          <li><strong>Network Management:</strong> IP addresses are essential for managing and monitoring network traffic, helping administrators optimize performance and troubleshoot issues.</li>
        </ul>

        <h3 className="text-xl font-semibold">Common IP Address Issues</h3>
        <p>
          Users may encounter several common issues related to IP addresses:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>IP Address Conflicts:</strong> When two devices on the same network are assigned the same IP address, it can lead to connectivity issues.</li>
          <li><strong>Dynamic vs. Static IP Addresses:</strong> Dynamic IP addresses change over time, while static IP addresses remain constant. Users may need to configure their devices accordingly.</li>
          <li><strong>Blocked IP Addresses:</strong> Some websites may block specific IP addresses due to security concerns or abuse, preventing access to their services.</li>
        </ul>

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          Understanding IP addresses is essential for anyone using the internet. By knowing the types of IP addresses, how they work, and their importance,
          users can better navigate the complexities of network communication. Start implementing these insights to enhance your understanding of internet connectivity and security.
        </p>
      </article>

      <Footer />
    </div>
  );
}