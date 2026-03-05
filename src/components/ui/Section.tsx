import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  bgColor?: "white" | "bone" | "forest";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, id, bgColor = "white", children, ...props }, ref) => {
    const bgClasses = {
      white: "bg-background-surface",
      bone: "bg-background",
      forest: "bg-primary text-white",
    };

    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "py-16 md:py-24 lg:py-section-gap",
          bgClasses[bgColor],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };