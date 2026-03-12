import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  bgColor?: "white" | "bone" | "forest";
  id?: string;
}

const Section = ({
  children,
  className,
  bgColor = "white",
  id,
  ...props
}: SectionProps) => {
  const bgStyles = {
    white: "bg-white",
    bone: "bg-bone",
    forest: "bg-primary text-white",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32 transition-colors duration-300",
        bgStyles[bgColor],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export { Section };
export default Section;