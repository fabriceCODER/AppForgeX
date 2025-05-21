import React from "react";
import Logo from "@/components/Logo";

interface PricingHeaderProps {
     title?: string;
     description?: string;
}

const PricingHeader = ({
     title = "Choose Your Plan",
     description = "Select the perfect plan for your business needs. All plans include our core features with different levels of scalability."
}: PricingHeaderProps) => {
     return (
          <div className="text-center mb-16">
               <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 py-4">
                    {title}
               </h1>
               <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    {description}
               </p>
          </div>
     );
};

export default PricingHeader; 