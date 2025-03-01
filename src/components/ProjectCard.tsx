
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags?: string[];
  link?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  tags = [],
  link,
  className,
}: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className="aspect-video w-full overflow-hidden relative">
        <div className={cn(
          "absolute inset-0 bg-muted animate-pulse",
          isLoaded ? "opacity-0" : "opacity-100"
        )} />
        <img
          src={imageSrc}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {link && (
          <a 
            href={link} 
            className="text-primary font-medium hover:underline inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
