import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Newsletter from "@/components/Newsletter";

const blogPosts = [
     {
          title: "The Future of Web Development",
          excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
          category: "Technology",
          date: "March 15, 2024",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
     },
     {
          title: "Building Scalable Applications",
          excerpt: "Best practices and strategies for creating applications that can grow with your business.",
          category: "Development",
          date: "March 10, 2024",
          readTime: "7 min read",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
     },
     {
          title: "UI/UX Design Principles",
          excerpt: "Essential design principles that every developer should know for creating better user experiences.",
          category: "Design",
          date: "March 5, 2024",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
     }
];

const categories = [
     "All Posts",
     "Technology",
     "Development",
     "Design",
     "Business",
     "Case Studies"
];

const Blog = () => {
     return (
          <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
               <div className="container mx-auto py-12 px-4">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                         <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 py-4">
                              Our Blog
                         </h1>
                         <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                              Insights, updates, and stories from our team
                         </p>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                         {categories.map((category, index) => (
                              <Button
                                   key={index}
                                   variant={index === 0 ? "default" : "outline"}
                                   className="rounded-full"
                              >
                                   {category}
                              </Button>
                         ))}
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                         {blogPosts.map((post, index) => (
                              <Card key={index} className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                   <div className="aspect-video overflow-hidden">
                                        <img
                                             src={post.image}
                                             alt={post.title}
                                             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                   </div>
                                   <CardHeader>
                                        <div className="flex items-center gap-2 mb-2">
                                             <span className="text-sm text-blue-600 dark:text-blue-400">{post.category}</span>
                                             <span className="text-sm text-slate-400">•</span>
                                             <span className="text-sm text-slate-400">{post.date}</span>
                                        </div>
                                        <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                                             {post.title}
                                        </CardTitle>
                                   </CardHeader>
                                   <CardContent>
                                        <CardDescription className="text-slate-600 dark:text-slate-300 mb-4">
                                             {post.excerpt}
                                        </CardDescription>
                                        <div className="flex items-center justify-between">
                                             <span className="text-sm text-slate-500">{post.readTime}</span>
                                             <Button variant="ghost" className="text-blue-600 dark:text-blue-400">
                                                  Read More →
                                             </Button>
                                        </div>
                                   </CardContent>
                              </Card>
                         ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className="mt-16 text-center">
                         <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                              Stay Updated
                         </h2>
                         <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                              Subscribe to our newsletter for the latest articles and updates
                         </p>
                         <Button
                              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                         >
                              Subscribe Now
                         </Button>
                    </div>
               </div>
               <Newsletter
                    title="Join Our Community"
                    description="Subscribe to our newsletter to stay connected with our team and community."
               />
          </div>
     );
};

export default Blog; 