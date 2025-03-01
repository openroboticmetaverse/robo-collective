
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-24 md:pt-28">{children}</main>
      <footer className="bg-secondary py-12 mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Robotics Collective</h3>
              <p className="text-muted-foreground">
                Fostering collaboration and innovation in robotics.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</a></li>
                <li><a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
                <li><a href="/meetups" className="text-muted-foreground hover:text-primary transition-colors">Meetups</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p className="text-muted-foreground mb-4">
                Join us in shaping the future of robotics.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">Twitter</a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">LinkedIn</a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Robotics Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
