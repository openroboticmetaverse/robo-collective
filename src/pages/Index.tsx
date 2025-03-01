
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  // Simulate loading by sequentially revealing sections
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Building the Future of Robotics Together"
        subtitle="An open collaborative community connecting robotics researchers, engineers, and enthusiasts to shape the future of robotics."
        imageSrc="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
      >
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button size="lg">
            <Link to="/projects">Explore Projects</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </Hero>

      <section className="py-20 reveal-section opacity-0">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              We're building an open, collaborative ecosystem where researchers, engineers, and enthusiasts
              come together to develop next-generation robotics technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M16 16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8C6.9 2 6 2.9 6 4v10c0 1.1.9 2 2 2" />
                  <path d="M12 12h6" />
                  <path d="M12 16H6a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-6Z" />
                  <path d="M9 12V6" />
                  <path d="M15 12V6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Collaboration</h3>
              <p className="text-muted-foreground">
                We bring together diverse perspectives to create breakthrough robotics technologies through open collaboration.
              </p>
            </div>

            <div className="glass-panel p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-muted-foreground">
                Our community spans the globe, connecting robotics enthusiasts from different backgrounds and cultures.
              </p>
            </div>

            <div className="glass-panel p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Knowledge Sharing</h3>
              <p className="text-muted-foreground">
                We believe in the power of shared knowledge and open-source collaboration to accelerate innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary reveal-section opacity-0">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="section-title mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore some of our collaborative robotics projects that are pushing the boundaries of what's possible.
              </p>
            </div>
            <Button className="mt-4 md:mt-0">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="Autonomous Navigation System"
              description="An open-source navigation system that helps robots navigate complex environments with minimal human intervention."
              imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
              tags={["Robotics", "AI", "Navigation"]}
              link="/projects"
            />
            <ProjectCard
              title="Robotic Arm Control"
              description="A collaborative project focused on developing precise control systems for robotic arms in manufacturing and healthcare."
              imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
              tags={["Hardware", "Control Systems", "Manufacturing"]}
              link="/projects"
            />
            <ProjectCard
              title="Swarm Intelligence Framework"
              description="An expandable framework for implementing swarm intelligence algorithms in multi-robot systems."
              imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
              tags={["Swarm Robotics", "Algorithms", "Multi-agent"]}
              link="/projects"
            />
          </div>
        </div>
      </section>

      <section className="py-20 reveal-section opacity-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">Join Our Community</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Become part of a global community of robotics enthusiasts, researchers, and engineers working together to shape the future.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Access to collaborative robotics projects</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Regular meetups and knowledge sharing sessions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Mentorship opportunities with experienced roboticists</span>
                </li>
              </ul>
              <Button size="lg">
                <Link to="/contact">Join Now</Link>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80" 
                alt="Robotics collaboration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground reveal-section opacity-0">
        <div className="container text-center">
          <h2 className="section-title mb-8">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our growing community of robotics enthusiasts and be part of the future of robotics innovation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
              <Link to="/meetups">Upcoming Meetups</Link>
            </Button>
            <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
