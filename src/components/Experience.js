import { useEffect, useRef } from "react";
import { User, Code } from "lucide-react";

const ExperienceSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-fade");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: (
        <>
          Director of Player <br className="lg:hidden" /> Development
        </>
      ),
      company: "Las Posas Country Club",
      period: "Aug 2024 - Sep 2025",
      description:
        "Developed and implemented comprehensive player development programs, enhancing member engagement and satisfaction.",
      icon: <Code className="w-6 h-6 text-primary" />,
    },
    {
      title: "Web Developer",
      company: "Self",
      period: "Aug 2016 - Present",
      description:
        "Designing and developing responsive websites and applications using React, Tailwind CSS, and modern web technologies.",
      icon: <Code className="w-6 h-6 text-primary" />,
    },
    {
      title: "Director of Player Development",
      company: "Las Posas Country Club",
      period: "Aug 2024 - Sep 2025",
      description:
        "Developed and implemented comprehensive player development programs, enhancing member engagement and satisfaction.",
      icon: <Code className="w-6 h-6 text-primary" />,
    },
    {
      title: "Assistant Golf Professional",
      company: "Oakmont Country Club",
      period: "Jul 2023 - Aug 2024",
      description:
        "Assisted in daily golf operations, organized tournaments, and provided exceptional service to club members.",
      icon: <User className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="mb-16 relative">
      <h3 className="text-2xl font-bold text-primary font-serif mb-12 text-center">
        Experience
      </h3>

      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent hidden md:block"></div>

      <div className="space-y-12 md:space-y-0 md:flex md:flex-col md:gap-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-primary p-6 md:p-8 rounded-lg shadow-custom relative md:pl-20 opacity-0 translate-y-12 transition-all duration-700"
          >
            {/* Timeline Dot for desktop, Icon in top-right for mobile */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow md:hidden">
              {exp.icon}
            </div>
            <div className="absolute md:left-3 top-8 w-6 h-6 bg-primary border-4 border-accent rounded-full items-center justify-center hidden md:flex">
              {exp.icon}
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-primary font-serif mb-1">
                  {exp.title}
                </h4>
                <p className="font-medium font-sans text-accent">
                  {exp.company}
                </p>
              </div>
              <span className="text-secondary text-sm bg-secondary px-3 py-1 rounded-full font-sans mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>
            <p className="text-secondary font-sans">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style>{`
        .animate-slide-fade {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
