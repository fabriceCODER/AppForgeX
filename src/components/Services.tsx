import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Service {
     title: string;
     description: string;
     gradient: string;
}

const services: Service[] = [
     {
          title: "Custom Development",
          description: "Tailored software solutions built with modern technologies.",
          gradient: "from-blue-500 to-cyan-500",
     },
     {
          title: "AI Integration",
          description: "Intelligent systems that enhance your business operations.",
          gradient: "from-purple-500 to-pink-500",
     },
     {
          title: "Cloud Solutions",
          description: "Scalable and secure cloud infrastructure for your needs.",
          gradient: "from-indigo-500 to-blue-500",
     },
];

const Services = () => {
     return (
          <section className="mb-20">
               <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    AppForgeX Solutions
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                         <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                              <CardHeader>
                                   <CardTitle className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                        {service.title}
                                   </CardTitle>
                              </CardHeader>
                              <CardContent>
                                   <CardDescription className="text-slate-600 dark:text-slate-300">
                                        {service.description}
                                   </CardDescription>
                              </CardContent>
                              <CardFooter>
                                   <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300"
                                   >
                                        <Link to="/services">Learn More</Link>
                                   </Button>
                              </CardFooter>
                         </Card>
                    ))}
               </div>
          </section>
     );
};

export default Services; 