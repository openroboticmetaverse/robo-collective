
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
  overlay?: boolean;
  minHeight?: string;
}

const Hero = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = '',
  children,
  align = 'center',
  overlay = true,
  minHeight = 'min-h-[70vh]',
}: HeroProps) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section
      className={`relative flex flex-col justify-center ${minHeight} w-full overflow-hidden`}
    >
      {imageSrc && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-10000 ease-in-out animate-float"
            />
            {overlay && (
              <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
            )}
          </div>
        </>
      )}

      <div className={`container relative z-10 flex flex-col ${alignmentClasses[align]} gap-6`}>
        <h1 className="hero-text animate-fade-in delayed-fade-in-1 max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in delayed-fade-in-2">
            {subtitle}
          </p>
        )}
        {children && <div className="animate-fade-in delayed-fade-in-3">{children}</div>}
      </div>
    </section>
  );
};

export default Hero;
