
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  bio: string;
  socialLinks?: {
    platform: string;
    url: string;
  }[];
  className?: string;
}

const TeamMember = ({
  name,
  role,
  imageSrc,
  bio,
  socialLinks = [],
  className,
}: TeamMemberProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-2 border-border">
        <div className={cn(
          "absolute inset-0 bg-muted animate-pulse rounded-full",
          isLoaded ? "opacity-0" : "opacity-100"
        )} />
        <img
          src={imageSrc}
          alt={name}
          className={cn(
            "w-full h-full object-cover",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="text-sm font-medium text-muted-foreground mb-2">{role}</div>
      <p className="text-muted-foreground mb-4 max-w-sm">{bio}</p>
      {socialLinks.length > 0 && (
        <div className="flex space-x-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.platform}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamMember;
