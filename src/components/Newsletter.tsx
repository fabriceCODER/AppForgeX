import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";

interface NewsletterProps {
     title?: string;
     description?: string;
     className?: string;
}

const Newsletter = ({
     title = "Subscribe to Our Newsletter",
     description = "Stay updated with our latest news, updates, and exclusive offers.",
     className = ""
}: NewsletterProps) => {
     const [email, setEmail] = useState("");
     const [isLoading, setIsLoading] = useState(false);

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setIsLoading(true);

          try {
               // Create a hidden iframe
               const iframe = document.createElement('iframe');
               iframe.style.display = 'none';
               document.body.appendChild(iframe);

               // Create the form data
               const formData = new FormData();
               formData.append('entry.3333333333', email); // Replace with your Google Form field ID

               // Submit the form to Google Forms
               const response = await fetch('https://docs.google.com/forms/d/e/YOUR_NEWSLETTER_FORM_ID/formResponse', {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
               });

               toast({
                    title: "Success!",
                    description: "Thank you for subscribing to our newsletter.",
                    variant: "default",
               });

               setEmail("");
          } catch (error) {
               toast({
                    title: "Error",
                    description: "Something went wrong. Please try again.",
                    variant: "destructive",
               });
          } finally {
               setIsLoading(false);
          }
     };

     return (
          <section className={`py-16 ${className}`}>
               <div className="container mx-auto px-4">
                    <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 border-0">
                         <CardContent className="p-8 md:p-12">
                              <div className="max-w-3xl mx-auto text-center">
                                   <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                   </div>

                                   <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {title}
                                   </h2>

                                   <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                                        {description}
                                   </p>

                                   <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                        <Input
                                             type="email"
                                             placeholder="Enter your email"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             required
                                             className="flex-1 min-w-[200px] bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200 dark:border-slate-700"
                                        />
                                        <Button
                                             type="submit"
                                             disabled={isLoading}
                                             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white whitespace-nowrap"
                                        >
                                             {isLoading ? "Subscribing..." : "Subscribe"}
                                        </Button>
                                   </form>

                                   <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                                   </p>
                              </div>
                         </CardContent>
                    </Card>
               </div>
          </section>
     );
};

export default Newsletter; 