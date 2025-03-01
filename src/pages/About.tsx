
import { useEffect } from 'react';
import Hero from '@/components/Hero';

const About = () => {
  // Add animation to sections as they come into view
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
        title="About Robotics Collective"
        subtitle="Our story, mission, and vision for the future of robotics."
        minHeight="min-h-[50vh]"
      />

      <section className="py-20 reveal-section opacity-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                The Robotics Collective was founded in 2020 by a group of passionate robotics researchers and engineers who believed in the power of open collaboration to accelerate innovation in robotics.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                What started as informal meetups and knowledge-sharing sessions quickly grew into a global community of robotics enthusiasts working together on breakthrough technologies and applications.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're a diverse community spanning academia, industry, and hobbyists, united by our passion for robotics and belief in collaborative innovation.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80" 
                alt="Our team collaborating"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary reveal-section opacity-0">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground">
              We're dedicated to fostering collaboration in robotics research and development, making advanced robotics technologies more accessible, and building a global community of robotics enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                To create an open, collaborative ecosystem where researchers, engineers, and enthusiasts can work together to develop next-generation robotics technologies and applications.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span>Foster collaboration across disciplines and borders</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span>Democratize access to robotics technologies</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span>Accelerate innovation through open-source development</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-4">
                We envision a future where robotics technologies enhance human capabilities, solve complex challenges, and improve quality of life across the globe.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span>A global community driving the future of robotics</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span>Accessible robotics education for all</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span>Ethical and human-centered robotics development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 reveal-section opacity-0">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              These core principles guide everything we do at the Robotics Collective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" x2="6" y1="1" y2="4" />
                  <line x1="10" x2="10" y1="1" y2="4" />
                  <line x1="14" x2="14" y1="1" y2="4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Collaboration</h3>
              <p className="text-muted-foreground">
                We believe that the most innovative solutions come from diverse perspectives working together openly and transparently.
              </p>
            </div>

            <div className="glass-panel p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="18" cy="15" r="3" />
                  <circle cx="9" cy="7" r="3" />
                  <circle cx="3" cy="21" r="1" />
                  <circle cx="8" cy="17" r="1" />
                  <circle cx="13" cy="19" r="1" />
                  <circle cx="18" cy="8" r="1" />
                  <circle cx="21" cy="21" r="1" />
                  <path d="M6 12a4 4 0 0 1 0-8" />
                  <path d="M18 9a4 4 0 0 1-4 3 4 4 0 0 1-3-1.5" />
                  <path d="M3 20a10 10 0 0 1 9-12H7" />
                  <path d="M19 12h-3" />
                  <path d="M7.5 8H7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Knowledge Sharing</h3>
              <p className="text-muted-foreground">
                We promote the free exchange of ideas, research, and code to accelerate learning and innovation in robotics.
              </p>
            </div>

            <div className="glass-panel p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z" />
                  <path d="M6 11V7" />
                  <path d="M12 11V7" />
                  <path d="M18 11V7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ethical Innovation</h3>
              <p className="text-muted-foreground">
                We are committed to developing robotics technologies that are ethical, human-centered, and beneficial to society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
