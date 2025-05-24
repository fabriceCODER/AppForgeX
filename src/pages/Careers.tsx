import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Newsletter from "@/components/Newsletter";

const jobOpenings = [
     {
          title: "Senior Frontend Developer",
          department: "Engineering",
          location: "Remote",
          type: "Full-time",
          description: "Join our team to build cutting-edge web applications using modern technologies."
     },
     {
          title: "UX/UI Designer",
          department: "Design",
          location: "Hybrid",
          type: "Full-time",
          description: "Create beautiful and intuitive user interfaces for our web applications."
     },
     {
          title: "Backend Developer",
          department: "Engineering",
          location: "Remote",
          type: "Full-time",
          description: "Design and implement scalable backend services and APIs."
     }
];

const benefits = [
     {
          title: "Health & Wellness",
          description: "Comprehensive health insurance and wellness programs",
          icon: "🏥"
     },
     {
          title: "Learning & Development",
          description: "Continuous learning opportunities and professional development",
          icon: "📚"
     },
     {
          title: "Work-Life Balance",
          description: "Flexible working hours and remote work options",
          icon: "⚖️"
     },
     {
          title: "Team Events",
          description: "Regular team building and social events",
          icon: "🎉"
     }
];

const values = [
     {
          title: "Innovation",
          description: "We push boundaries and embrace new technologies",
          icon: "💡"
     },
     {
          title: "Collaboration",
          description: "We believe in the power of working together",
          icon: "🤝"
     },
     {
          title: "Excellence",
          description: "We strive for excellence in everything we do",
          icon: "⭐"
     }
];

const Careers = () => {
     return (
          <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
               <div className="container mx-auto py-12 px-4">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                         <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 py-4">
                              Join Our Team
                         </h1>
                         <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                              Build the future with us. We're always looking for talented individuals to join our team.
                         </p>
                    </div>

                    {/* Values Section */}
                    <div className="max-w-6xl mx-auto mb-16">
                         <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                              Our Values
                         </h2>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {values.map((value, index) => (
                                   <Card key={index} className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                                        <CardContent className="p-6 text-center">
                                             <div className="text-4xl mb-4">{value.icon}</div>
                                             <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                                                  {value.title}
                                             </h3>
                                             <p className="text-slate-600 dark:text-slate-300">
                                                  {value.description}
                                             </p>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="max-w-6xl mx-auto mb-16">
                         <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                              Benefits & Perks
                         </h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                              {benefits.map((benefit, index) => (
                                   <Card key={index} className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                             <div className="text-3xl mb-4">{benefit.icon}</div>
                                             <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
                                                  {benefit.title}
                                             </h3>
                                             <p className="text-slate-600 dark:text-slate-300">
                                                  {benefit.description}
                                             </p>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>

                    {/* Job Openings Section */}
                    <div className="max-w-6xl mx-auto mb-16">
                         <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                              Open Positions
                         </h2>
                         <div className="space-y-6">
                              {jobOpenings.map((job, index) => (
                                   <Card key={index} className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                  <div>
                                                       <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                                                            {job.title}
                                                       </h3>
                                                       <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                                                            <span>{job.department}</span>
                                                            <span>•</span>
                                                            <span>{job.location}</span>
                                                            <span>•</span>
                                                            <span>{job.type}</span>
                                                       </div>
                                                       <p className="mt-2 text-slate-600 dark:text-slate-300">
                                                            {job.description}
                                                       </p>
                                                  </div>
                                                  <Button
                                                       className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                                                  >
                                                       Apply Now
                                                  </Button>
                                             </div>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                         <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                              Don't See Your Role?
                         </h2>
                         <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                              We're always looking for talented individuals. Send us your resume!
                         </p>
                         <Button
                              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                         >
                              Send Resume
                         </Button>
                    </div>
               </div>
               <Newsletter
                    title="Join Our Community"
                    description="Subscribe to our newsletter to stay updated with our latest opportunities."
               />
          </div>
     );
};

export default Careers; 