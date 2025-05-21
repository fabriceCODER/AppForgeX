import React, { useState } from "react";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingCategories, { Category } from "@/components/pricing/PricingCategories";
import PricingTier from "@/components/PricingTier";
import PricingComparison, { ComparisonFeature } from "@/components/pricing/PricingComparison";
import PricingFAQ, { FAQItem } from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";
import Newsletter from "@/components/Newsletter";

const categories: Category[] = [
     { id: "all", name: "All Plans" },
     { id: "web", name: "Web Development" },
     { id: "ecommerce", name: "E-commerce" },
     { id: "enterprise", name: "Enterprise" }
];

const comparisonFeatures: ComparisonFeature[] = [
     {
          name: "Basic Website Development",
          starter: true,
          professional: true,
          enterprise: true
     },
     {
          name: "Advanced Website Development",
          starter: false,
          professional: true,
          enterprise: true
     },
     {
          name: "Custom Development",
          starter: false,
          professional: false,
          enterprise: true
     },
     {
          name: "Contact Form",
          starter: true,
          professional: true,
          enterprise: true
     },
     {
          name: "Social Media Integration",
          starter: false,
          professional: true,
          enterprise: true
     },
     {
          name: "Basic E-commerce",
          starter: false,
          professional: true,
          enterprise: true
     },
     {
          name: "Advanced E-commerce",
          starter: false,
          professional: false,
          enterprise: true
     },
     {
          name: "SEO Optimization",
          starter: true,
          professional: true,
          enterprise: true
     },
     {
          name: "Priority Support",
          starter: false,
          professional: false,
          enterprise: true
     }
];

const faqs: FAQItem[] = [
     {
          question: "Can I change my plan later?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
     },
     {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
     },
     {
          question: "Is there a setup fee?",
          answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee."
     },
     {
          question: "Do you offer custom solutions?",
          answer: "Yes, we offer custom solutions for businesses with specific requirements. Contact us to discuss your needs."
     }
];

const pricingTiers = [
     {
          title: "Starter",
          description: "Perfect for small businesses",
          price: 99,
          features: [
               { name: "Basic Website Development", description: "Responsive website with up to 5 pages" },
               { name: "Contact Form", description: "Basic contact form with email notifications" },
               { name: "SEO Optimization", description: "Basic SEO setup and optimization" }
          ],
          basePrice: 99,
          scalabilityOptions: [
               { name: "Basic", price: 0, description: "Up to 1,000 monthly visitors" },
               { name: "Standard", price: 49, description: "Up to 5,000 monthly visitors" }
          ],
          maxUsers: 1000,
          currentUsers: 0
     },
     {
          title: "Professional",
          description: "Ideal for growing businesses",
          price: 199,
          features: [
               { name: "Advanced Website Development", description: "Custom design with up to 10 pages" },
               { name: "Social Media Integration", description: "Connect with all major social platforms" },
               { name: "Basic E-commerce", description: "Up to 100 products with basic features" }
          ],
          basePrice: 199,
          scalabilityOptions: [
               { name: "Basic", price: 0, description: "Up to 5,000 monthly visitors" },
               { name: "Standard", price: 99, description: "Up to 20,000 monthly visitors" }
          ],
          maxUsers: 5000,
          currentUsers: 0
     },
     {
          title: "Enterprise",
          description: "For large organizations",
          price: 499,
          features: [
               { name: "Custom Development", description: "Fully customized solution" },
               { name: "Advanced E-commerce", description: "Unlimited products with advanced features" },
               { name: "Priority Support", description: "24/7 dedicated support" }
          ],
          basePrice: 499,
          scalabilityOptions: [
               { name: "Basic", price: 0, description: "Up to 50,000 monthly visitors" },
               { name: "Standard", price: 299, description: "Up to 200,000 monthly visitors" }
          ],
          maxUsers: 50000,
          currentUsers: 0
     }
];

const Pricing = () => {
     const [selectedCategory, setSelectedCategory] = useState("all");

     return (
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
               <div className="container mx-auto px-4 py-16">
                    <PricingHeader />
                    <PricingCategories
                         categories={categories}
                         selectedCategory={selectedCategory}
                         onCategoryChange={setSelectedCategory}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                         {pricingTiers.map((tier, index) => (
                              <PricingTier key={index} {...tier} />
                         ))}
                    </div>
                    <PricingComparison features={comparisonFeatures} />
                    <PricingFAQ faqs={faqs} />
                    <PricingCTA />
                    <Newsletter
                         title="Get Special Offers"
                         description="Subscribe to receive exclusive pricing updates and special offers."
                    />
               </div>
          </div>
     );
};

export default Pricing; 