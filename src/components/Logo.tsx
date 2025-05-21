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
          <div className={cn("relative group inline-block", className)}>
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
               <div className="relative px-7 py-4 bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 dark:ring-slate-100/5 rounded-lg leading-none flex items-center justify-center">
                    <span className={cn("font-bold tracking-tight", sizeClasses[size])}>
                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                              A
                         </span>
                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                              F
                         </span>
                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600 dark:from-pink-400 dark:to-blue-400">
                              X
                         </span>
                    </span>
               </div>
          </div>
     );
};

export default Logo; 