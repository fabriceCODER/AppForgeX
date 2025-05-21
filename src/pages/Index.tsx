import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <Services />
      <Newsletter
        title="Stay Updated with Our Latest News"
        description="Join our newsletter to receive updates on new features, special offers, and industry insights."
      />
    </div>
  );
};

export default Index;
