import React from "react";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export interface ComparisonFeature {
     name: string;
     starter: boolean;
     professional: boolean;
     enterprise: boolean;
}

interface PricingComparisonProps {
     features: ComparisonFeature[];
}

const PricingComparison = ({ features }: PricingComparisonProps) => {
     return (
          <div className="max-w-6xl mx-auto mb-16">
               <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Compare Plans
               </h2>
               <div className="overflow-x-auto">
                    <table className="w-full">
                         <thead>
                              <tr className="border-b border-gray-200 dark:border-gray-800">
                                   <th className="py-4 px-6 text-left">Features</th>
                                   <th className="py-4 px-6 text-center">Starter</th>
                                   <th className="py-4 px-6 text-center">
                                        Professional
                                        <Badge className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600">
                                             Popular
                                        </Badge>
                                   </th>
                                   <th className="py-4 px-6 text-center">Enterprise</th>
                              </tr>
                         </thead>
                         <tbody>
                              {features.map((feature, index) => (
                                   <tr
                                        key={index}
                                        className="border-b border-gray-200 dark:border-gray-800"
                                   >
                                        <td className="py-4 px-6">{feature.name}</td>
                                        <td className="py-4 px-6 text-center">
                                             {feature.starter ? (
                                                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                                             ) : (
                                                  <X className="w-5 h-5 text-red-500 mx-auto" />
                                             )}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                             {feature.professional ? (
                                                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                                             ) : (
                                                  <X className="w-5 h-5 text-red-500 mx-auto" />
                                             )}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                             {feature.enterprise ? (
                                                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                                             ) : (
                                                  <X className="w-5 h-5 text-red-500 mx-auto" />
                                             )}
                                        </td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default PricingComparison; 