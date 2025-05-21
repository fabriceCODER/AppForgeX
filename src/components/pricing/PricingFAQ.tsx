import React from "react";
import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
     question: string;
     answer: string;
}

interface PricingFAQProps {
     faqs: FAQItem[];
}

const PricingFAQ = ({ faqs }: PricingFAQProps) => {
     return (
          <div className="max-w-4xl mx-auto mb-16">
               <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Frequently Asked Questions
               </h2>
               <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                         <AccordionItem key={index} value={`item-${index}`}>
                              <AccordionTrigger className="text-left">
                                   {faq.question}
                              </AccordionTrigger>
                              <AccordionContent>{faq.answer}</AccordionContent>
                         </AccordionItem>
                    ))}
               </Accordion>
          </div>
     );
};

export default PricingFAQ; 