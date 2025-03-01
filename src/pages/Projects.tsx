
import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';

// Sample project data
const allProjects = [
  {
    id: 1,
    title: "Autonomous Navigation System",
    description: "An open-source navigation system that helps robots navigate complex environments with minimal human intervention.",
    imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    categories: ["Robotics", "AI", "Navigation"],
    tags: ["Robotics", "AI", "Navigation"],
    status: "active"
  },
  {
    id: 2,
    title: "Robotic Arm Control",
    description: "A collaborative project focused on developing precise control systems for robotic arms in manufacturing and healthcare applications.",
    imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    categories: ["Hardware", "Control Systems"],
    tags: ["Hardware", "Control Systems", "Manufacturing"],
    status: "active"
  },
  {
    id: 3,
    title: "Swarm Intelligence Framework",
    description: "An expandable framework for implementing swarm intelligence algorithms in multi-robot systems for coordinated tasks.",
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    categories: ["Swarm Robotics", "Algorithms"],
    tags: ["Swarm Robotics", "Algorithms", "Multi-agent"],
    status: "active"
  },
  {
    id: 4,
    title: "Human-Robot Interaction Toolkit",
    description: "Tools and libraries for creating natural interfaces between humans and robots in collaborative environments.",
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    categories: ["HRI", "UX", "Interface Design"],
    tags: ["Human-Robot Interaction", "User Experience", "Interface"],
    status: "active"
  },
  {
    id: 5,
    title: "Low-Cost Robotic Hand",
    description: "An affordable, open-source robotic hand design that can be 3D printed and assembled by anyone.",
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    categories: ["Hardware", "Accessibility"],
    tags: ["Hardware", "3D Printing", "Accessibility"],
    status: "completed"
  },
  {
    id: 6,
    title: "Environmental Monitoring Drones",
    description: "A fleet of autonomous drones designed to collect environmental data in hard-to-reach or dangerous areas.",
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    categories: ["Drones", "Environmental Science"],
    tags: ["Drones", "Environmental", "Data Collection"],
    status: "planned"
  }
];

// Define the filter options
const categories = [
  "All",
  "Robotics",
  "AI",
  "Hardware",
  "Control Systems",
  "Swarm Robotics",
  "HRI",
  "Drones"
];

const statuses = [
  "All",
  "Active",
  "Completed",
  "Planned"
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  // Apply filters when category or status changes
  useEffect(() => {
    let filtered = allProjects;
    
    if (activeCategory !== "All") {
      filtered = filtered.filter(project => 
        project.categories.some(category => 
          category.toLowerCase() === activeCategory.toLowerCase()
        )
      );
    }
    
    if (activeStatus !== "All") {
      filtered = filtered.filter(project => 
        project.status.toLowerCase() === activeStatus.toLowerCase()
      );
    }
    
    setFilteredProjects(filtered);
  }, [activeCategory, activeStatus]);

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
        title="Our Projects"
        subtitle="Collaborative robotics projects pushing the boundaries of what's possible."
        minHeight="min-h-[50vh]"
      />

      <section className="py-20 reveal-section opacity-0">
        <div className="container">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h2 className="section-title mb-4">Explore Our Projects</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Discover our collaborative robotics projects spanning various domains and technologies.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {statuses.map(status => (
                  <button
                    key={status}
                    onClick={() => setActiveStatus(status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeStatus === status
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 overflow-x-auto pb-4 md:flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  tags={project.tags}
                  link="#"
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground">
                  Try changing your filter criteria to see more projects.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary reveal-section opacity-0">
        <div className="container">
          <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title mb-4">Start a New Project</h2>
              <p className="text-xl text-muted-foreground">
                Have an idea for a collaborative robotics project? We'd love to help you bring it to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Project Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Technical guidance and mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Access to our collaborative platform</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Connection with our community</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">We're Looking For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Innovative ideas with real-world applications</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Projects that embrace open collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1 text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Commitment to ethical robotics development</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-2 font-medium transition-colors hover:bg-primary/90"
              >
                Propose a Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
