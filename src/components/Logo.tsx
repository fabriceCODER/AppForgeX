import { cn } from "@/lib/utils";

interface LogoProps {
     className?: string;
     size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
     const sizeClasses = {
          sm: "text-2xl",
          md: "text-4xl",
          lg: "text-6xl",
     };

     return (
          <div className={cn("relative inline-flex items-center", className)}>
               <div className="relative flex items-center">
                    {/* A letter with gradient and hover effect */}
                    <span className={cn("font-bold tracking-tight relative", sizeClasses[size])}>
                         <span className="relative inline-block transform hover:scale-110 transition-transform duration-300">
                              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                   A
                              </span>
                         </span>
                    </span>

                    {/* F letter with offset and gradient */}
                    <span className={cn("font-bold tracking-tight relative -ml-1", sizeClasses[size])}>
                         <span className="relative inline-block transform hover:scale-110 transition-transform duration-300">
                              <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                                   F
                              </span>
                         </span>
                    </span>

                    {/* X letter with offset and gradient */}
                    <span className={cn("font-bold tracking-tight relative -ml-1", sizeClasses[size])}>
                         <span className="relative inline-block transform hover:scale-110 transition-transform duration-300">
                              <span className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 to-blue-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600 dark:from-pink-400 dark:to-blue-400">
                                   X
                              </span>
                         </span>
                    </span>

                    {/* Decorative elements */}
                    <div className="absolute -right-2 -top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-50" />
                    <div className="absolute -left-2 -bottom-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-50" />
               </div>
          </div>
     );
};

export default Logo; 