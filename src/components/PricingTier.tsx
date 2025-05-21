import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface PricingFeature {
  name: string;
  description?: string;
}

export interface ScalabilityOption {
  name: string;
  price: number;
  description: string;
}

export interface PricingTierProps {
  title: string;
  description: string;
  price: number;
  features: PricingFeature[];
  basePrice: number;
  scalabilityOptions: ScalabilityOption[];
  maxUsers: number;
  currentUsers: number;
}

const PricingTier = ({
  title,
  description,
  price,
  features,
  basePrice,
  scalabilityOptions,
  maxUsers,
  currentUsers
}: PricingTierProps) => {
  const [selectedScaling, setSelectedScaling] = useState(scalabilityOptions[0]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("monthly");

  const calculatePrice = () => {
    const total = basePrice + selectedScaling.price;
    return selectedPaymentMethod === "yearly" ? total * 0.8 : total;
  };

  const handlePayment = () => {
    // Implement payment processing logic here
    console.log("Processing payment for:", {
      plan: title,
      price: calculatePrice(),
      scaling: selectedScaling,
      paymentMethod: selectedPaymentMethod
    });
  };

  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <div className="mt-4">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">${calculatePrice()}</span>
            <span className="ml-2 text-gray-600 dark:text-gray-400">
              /{selectedPaymentMethod === "yearly" ? "year" : "month"}
            </span>
          </div>
          <div className="mt-4 space-x-2">
            <Button
              variant={selectedPaymentMethod === "monthly" ? "default" : "outline"}
              onClick={() => setSelectedPaymentMethod("monthly")}
              className="w-1/2"
            >
              Monthly
            </Button>
            <Button
              variant={selectedPaymentMethod === "yearly" ? "default" : "outline"}
              onClick={() => setSelectedPaymentMethod("yearly")}
              className="w-1/2"
            >
              Yearly (20% off)
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Scalability</label>
            <Select
              value={selectedScaling.name}
              onValueChange={(value) =>
                setSelectedScaling(
                  scalabilityOptions.find((option) => option.name === value) ||
                  scalabilityOptions[0]
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select scaling option" />
              </SelectTrigger>
              <SelectContent>
                {scalabilityOptions.map((option) => (
                  <SelectItem key={option.name} value={option.name}>
                    {option.name} (+${option.price}/month)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {selectedScaling.description}
            </p>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Usage</span>
              <span>
                {currentUsers}/{maxUsers} users
              </span>
            </div>
            <Progress value={(currentUsers / maxUsers) * 100} />
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Badge className="mr-2 bg-green-500">✓</Badge>
                <div>
                  <p className="font-medium">{feature.name}</p>
                  {feature.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            onClick={handlePayment}
          >
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingTier;
