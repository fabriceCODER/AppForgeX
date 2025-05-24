import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import Newsletter from "@/components/Newsletter";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a hidden form
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/formResponse';
      form.target = 'hidden-iframe';

      // Create hidden input fields
      const fields = {
        'entry.1234567890': name,
        'entry.0987654321': email,
        'entry.1111111111': subject,
        'entry.2222222222': message
      };

      // Add fields to form
      Object.entries(fields).forEach(([id, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = id;
        input.value = value;
        form.appendChild(input);
      });

      // Create hidden iframe
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Add form to document and submit
      document.body.appendChild(form);
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);

      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 py-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project or ask any questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Send us a Message
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300">
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help?"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[150px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Email</h3>
                  <a href="mailto:fabricecoder009@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    fabricecoder009@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">WhatsApp or Phone</h3>
                  <a href="tel:+250794500945" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +250 794 500 945
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Monday - Friday</span>
                  <span className="text-slate-900 dark:text-slate-100">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Saturday</span>
                  <span className="text-slate-900 dark:text-slate-100">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-300">Sunday</span>
                  <span className="text-slate-900 dark:text-slate-100">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Newsletter
        title="Stay Connected"
        description="Subscribe to our newsletter to receive updates and stay connected with our team."
      />
    </div>
  );
};

export default Contact;
