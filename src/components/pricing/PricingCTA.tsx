import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PricingCTAProps {
     title?: string;
     description?: string;
     buttonText?: string;
     buttonLink?: string;
}

const PricingCTA = ({
     title = "Need a Custom Solution?",
     description = "Contact us for a tailored plan that fits your specific requirements.",
     buttonText = "Contact Us",
     buttonLink = "/contact"
}: PricingCTAProps) => {
     return (
          <div className="max-w-4xl mx-auto text-center mb-16">
               <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {title}
               </h2>
               <p className="text-gray-600 dark:text-gray-400 mb-8">{description}</p>
               <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
               >
                    <Link to={buttonLink}>{buttonText}</Link>
               </Button>
          </div>
     );
};

export default PricingCTA; 