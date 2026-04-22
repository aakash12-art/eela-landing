import { forwardRef, ReactNode } from "react";

type SectionProps = {
  id?: string;
  backgroundImage?: string;
  overlayClassName?: string;
  className?: string;
  contentClassName?: string;
  children?: ReactNode;
};

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { id, backgroundImage, overlayClassName = "bg-black/45", className = "", contentClassName = "", children },
  ref
) {
  return (
    <section
      id={id}
      ref={ref}
      className={`relative w-full overflow-hidden ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {backgroundImage ? (
        <div className={`pointer-events-none absolute inset-0 ${overlayClassName}`} />
      ) : null}
      <div className={`relative z-10 mx-auto flex min-h-screen w-full max-w-7xl p-6 md:p-10 ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
});

export default Section;
