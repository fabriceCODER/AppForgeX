import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Hero = () => {
     return (
          <section className="mb-20 relative">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-3xl blur-3xl" />
               <div className="text-center max-w-3xl mx-auto relative">
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 py-4">
                         Welcome to AppForgeX
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                         Transforming ideas into powerful digital solutions with cutting-edge technology.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                         <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                              <Link to="/services">Our Services</Link>
                         </Button>
                         <Button asChild variant="outline" size="lg" className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300">
                              <Link to="/contact">Contact Us</Link>
                         </Button>
                    </div>
               </div>
          </section>
     );
};

export default Hero; 