import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Logo size="lg" className="mx-auto mb-8" />

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Page Not Found
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Link to="/">Return Home</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>

          <div className="mt-16 p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Need Help?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our support team is here to help you find what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <p className="font-medium text-gray-900 dark:text-gray-100">Email Us</p>
                <a
                  href="mailto:support@example.com"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  support@example.com
                </a>
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-900 dark:text-gray-100">Call Us</p>
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
