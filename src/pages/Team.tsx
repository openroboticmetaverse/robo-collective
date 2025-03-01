
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import TeamMember from '@/components/TeamMember';

const Team = () => {
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

  // Sample team data
  const coreTeam = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Founder & Director",
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&h=800",
      bio: "Robotics researcher with expertise in autonomous systems and AI. Founded the Robotics Collective to foster collaboration across disciplines.",
      socialLinks: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Twitter", url: "#" }
      ]
    },
    {
      name: "Dr. Michael Chen",
      role: "Technical Lead",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800",
      bio: "Specializes in robotic perception and computer vision. Leads the technical direction of our collaborative projects.",
      socialLinks: [
        { platform: "LinkedIn", url: "#" },
        { platform: "GitHub", url: "#" }
      ]
    },
    {
      name: "Dr. Sarah Okafor",
      role: "Research Director",
      imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?fit=crop&w=800&h=800",
      bio: "Expert in human-robot interaction and collaborative robotics. Oversees our research initiatives and academic partnerships.",
      socialLinks: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Academia", url: "#" }
      ]
    },
    {
      name: "James Wilson",
      role: "Community Manager",
      imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&h=800",
      bio: "Passionate about building inclusive tech communities. Manages our global network of robotics enthusiasts and organizes events.",
      socialLinks: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Twitter", url: "#" }
      ]
    },
  ];

  const contributors = [
    {
      name: "Alex Karpathy",
      role: "Machine Learning Expert",
      imageSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=800&h=800",
      bio: "Contributes to our computer vision and machine learning projects.",
      socialLinks: [
        { platform: "GitHub", url: "#" }
      ]
    },
    {
      name: "Maria Gonzalez",
      role: "Robotics Engineer",
      imageSrc: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=crop&w=800&h=800",
      bio: "Specializes in robot arm kinematics and control systems.",
      socialLinks: [
        { platform: "LinkedIn", url: "#" }
      ]
    },
    {
      name: "David Park",
      role: "Hardware Design",
      imageSrc: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=800&h=800",
      bio: "Expert in designing robots for challenging environments.",
      socialLinks: [
        { platform: "LinkedIn", url: "#" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Meet Our Team"
        subtitle="The dedicated individuals behind the Robotics Collective."
        minHeight="min-h-[50vh]"
      />

      <section className="py-20 reveal-section opacity-0">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Core Team</h2>
            <p className="text-xl text-muted-foreground">
              Our core team brings together expertise from robotics, AI, community building, and more to drive our collective forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {coreTeam.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                bio={member.bio}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary reveal-section opacity-0">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Key Contributors</h2>
            <p className="text-xl text-muted-foreground">
              Meet some of our valuable contributors who help make our projects successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {contributors.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                bio={member.bio}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 reveal-section opacity-0">
        <div className="container">
          <div className="glass-panel p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="section-title mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for passionate individuals to join our community and contribute to our projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">How You Can Contribute</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>Join our open-source projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>Share your expertise in workshops</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>Mentor newcomers to robotics</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Skills We Value</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>Robotics & AI expertise</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>Hardware & software development</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>Passion for collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-2 font-medium transition-colors hover:bg-primary/90"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
