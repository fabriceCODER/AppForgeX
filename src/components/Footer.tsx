import { Link } from "react-router-dom";
import Logo from "./Logo";

const socialLinks = [
     { name: 'Twitter', href: '#', icon: '𝕏' },
     { name: 'LinkedIn', href: '#', icon: 'in' },
     { name: 'GitHub', href: '#', icon: '⌨' },
     { name: 'Instagram', href: '#', icon: '📸' },
];

const quickLinks = ['About Us', 'Services', 'Portfolio', 'Blog', 'Careers'];
const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

const Footer = () => {
     return (
          <footer className="mt-32 border-t border-slate-200 dark:border-slate-800">
               <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                         {/* Logo and Description */}
                         <div className="col-span-1 md:col-span-2">
                              <div className="mb-6">
                                   <Logo size="sm" />
                              </div>
                              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
                                   Empowering businesses with innovative digital solutions. We transform ideas into reality through cutting-edge technology and expert development.
                              </p>
                              {/* Social Links */}
                              <div className="flex space-x-4">
                                   {socialLinks.map((social) => (
                                        <a
                                             key={social.name}
                                             href={social.href}
                                             className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                        >
                                             <span className="sr-only">{social.name}</span>
                                             <span className="text-xl">{social.icon}</span>
                                        </a>
                                   ))}
                              </div>
                         </div>

                         {/* Quick Links */}
                         <div>
                              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                                   Quick Links
                              </h3>
                              <ul className="space-y-3">
                                   {quickLinks.map((item) => (
                                        <li key={item}>
                                             <Link
                                                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                                                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
                                             >
                                                  {item}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         {/* Contact Info */}
                         <div>
                              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                                   Contact Us
                              </h3>
                              <ul className="space-y-3">
                                   <li className="text-slate-600 dark:text-slate-400">
                                        <span className="block">Email:</span>
                                        <a href="mailto:contact@appforgex.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                             contact@appforgex.com
                                        </a>
                                   </li>
                                   <li className="text-slate-600 dark:text-slate-400">
                                        <span className="block">Phone:</span>
                                        <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                             +1 (234) 567-890
                                        </a>
                                   </li>
                                   <li className="text-slate-600 dark:text-slate-400">
                                        <span className="block">Address:</span>
                                        <address className="not-italic">
                                             123 Tech Street<br />
                                             Silicon Valley, CA 94043
                                        </address>
                                   </li>
                              </ul>
                         </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                         <div className="flex flex-col md:flex-row justify-between items-center">
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                   © {new Date().getFullYear()} AppForgeX. All rights reserved.
                              </p>
                              <div className="flex space-x-6 mt-4 md:mt-0">
                                   {legalLinks.map((item) => (
                                        <Link
                                             key={item}
                                             to={`/${item.toLowerCase().replace(' ', '-')}`}
                                             className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
                                        >
                                             {item}
                                        </Link>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer; 