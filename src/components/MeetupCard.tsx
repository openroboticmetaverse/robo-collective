
import { cn } from '@/lib/utils';
import Button from './Button';

interface MeetupCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  isUpcoming?: boolean;
  className?: string;
}

const MeetupCard = ({
  title,
  date,
  time,
  location,
  description,
  buttonText = "Register",
  buttonLink = "#",
  isUpcoming = false,
  className,
}: MeetupCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-lg",
        isUpcoming ? "bg-secondary/50" : "bg-card",
        className
      )}
    >
      {isUpcoming && (
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
          Upcoming
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex flex-col space-y-1 mb-4">
        <div className="flex items-center text-muted-foreground">
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
            className="mr-2"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span>{date}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
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
            className="mr-2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{time}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
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
            className="mr-2"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{location}</span>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="default" size="default">
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </Button>
    </div>
  );
};

export default MeetupCard;
