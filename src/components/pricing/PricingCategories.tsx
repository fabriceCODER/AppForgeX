import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface Category {
     id: string;
     name: string;
}

interface PricingCategoriesProps {
     categories: Category[];
     selectedCategory: string;
     onCategoryChange: (category: string) => void;
}

const PricingCategories = ({
     categories,
     selectedCategory,
     onCategoryChange
}: PricingCategoriesProps) => {
     return (
          <div className="max-w-4xl mx-auto mb-12">
               <Tabs
                    defaultValue={selectedCategory}
                    className="w-full"
                    onValueChange={onCategoryChange}
               >
                    <TabsList className="grid w-full grid-cols-4">
                         {categories.map((category) => (
                              <TabsTrigger
                                   key={category.id}
                                   value={category.id}
                                   className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                              >
                                   {category.name}
                              </TabsTrigger>
                         ))}
                    </TabsList>
               </Tabs>
          </div>
     );
};

export default PricingCategories; 