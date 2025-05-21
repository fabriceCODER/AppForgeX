import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import Newsletter from "@/components/Newsletter";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Visionary leader with 15+ years of experience in software development and business strategy."
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Tech innovator specializing in AI and machine learning solutions."
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Full-stack developer with expertise in modern web technologies."
  }
];

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to revolutionize web development"
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Successfully delivered a complex e-commerce platform"
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew to a team of 20+ talented professionals"
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Featured in top tech publications and awards"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 py-4">
            About AppForgeX
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We're a team of passionate developers and designers creating innovative web solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Mission Section */}
          <Card className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                At AppForgeX, we're dedicated to transforming ideas into exceptional digital experiences.
                Our mission is to empower businesses with cutting-edge web solutions that drive growth and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-white/50 dark:bg-slate-700/50">
                  <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">Innovation</h3>
                  <p className="text-slate-600 dark:text-slate-300">Pushing boundaries with cutting-edge technology</p>
                </div>
                <div className="p-6 rounded-lg bg-white/50 dark:bg-slate-700/50">
                  <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">Excellence</h3>
                  <p className="text-slate-600 dark:text-slate-300">Delivering quality in every project</p>
                </div>
                <div className="p-6 rounded-lg bg-white/50 dark:bg-slate-700/50">
                  <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">Collaboration</h3>
                  <p className="text-slate-600 dark:text-slate-300">Working together to achieve greatness</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-center mb-1 text-slate-900 dark:text-slate-100">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 text-center mb-4">
                      {member.role}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-center">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-1/2 px-8">
                        <Card className="border-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                              {milestone.year}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                              {milestone.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="w-1/2 px-8 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Let's create something amazing together
            </p>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      <Newsletter
        title="Join Our Community"
        description="Subscribe to our newsletter to stay connected with our team and community."
      />
    </div>
  );
};

export default About;
