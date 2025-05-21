import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Logo from "@/components/Logo";
import Newsletter from "@/components/Newsletter";

const services = [
  {
    title: "Custom Development",
    description: "Tailored software solutions built with modern technologies.",
    features: [
      "Web Applications",
      "Mobile Apps",
      "Enterprise Software",
      "API Development"
    ],
    progress: 90,
    badge: "Popular"
  },
  {
    title: "AI Integration",
    description: "Intelligent systems that enhance your business operations.",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics"
    ],
    progress: 85,
    badge: "Trending"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your needs.",
    features: [
      "Cloud Migration",
      "DevOps",
      "Serverless Architecture",
      "Cloud Security"
    ],
    progress: 95,
    badge: "Best Seller"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 py-4">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover our comprehensive range of technology solutions designed to transform your business
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Services</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="ai">AI Solutions</TabsTrigger>
            <TabsTrigger value="cloud">Cloud Services</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                      {service.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg text-slate-600 dark:text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                          <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400">
                        <span>Service Quality</span>
                        <span>{service.progress}%</span>
                      </div>
                      <Progress value={service.progress} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center">
          <Separator className="my-8" />
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <Newsletter
        title="Stay Informed About Our Services"
        description="Subscribe to receive updates about our latest services and special offers."
      />
    </div>
  );
};

export default Services;
