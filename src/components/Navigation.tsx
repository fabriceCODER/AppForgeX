import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const NavigationLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-all duration-300"
          >
            <div className="relative">
              <Logo size="md" className="transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AppForgeX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                {NavigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link to={link.href}>
                      <NavigationMenuLink
                        className={cn(
                          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400",
                          "hover:bg-slate-100 dark:hover:bg-slate-800",
                          location.pathname === link.href
                            ? "text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-slate-800"
                            : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                        )}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center space-x-3 mb-8">
                  <Logo size="sm" />
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AppForgeX
                  </span>
                </div>
                <nav className="flex flex-col space-y-4">
                  {NavigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                        "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400",
                        "hover:bg-slate-100 dark:hover:bg-slate-800",
                        location.pathname === link.href
                          ? "text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-slate-800"
                          : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                      )}
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
