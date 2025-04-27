import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
    color?: string;
  }[];
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories: SkillCategory[] = [
    {
      title: "AI/ML",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      skills: [
        { name: "TensorFlow", level: 90, color: "primary" },
        { name: "Keras", level: 85, color: "secondary" },
        { name: "OpenCV", level: 80, color: "primary" },
        { name: "PyTorch", level: 75, color: "secondary" },
      ],
    },
    {
      title: "Web Dev",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      skills: [
        { name: "React", level: 95, color: "primary" },
        { name: "Node.js", level: 90, color: "secondary" },
        { name: "Docker", level: 85, color: "primary" },
        { name: "TypeScript", level: 88, color: "secondary" },
      ],
    },
    {
      title: "Data Analytics",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      skills: [
        { name: "Power BI", level: 85, color: "primary" },
        { name: "Pandas", level: 90, color: "secondary" },
        { name: "SQL", level: 88, color: "primary" },
        { name: "Matplotlib", level: 80, color: "secondary" },
      ],
    },
    {
      title: "Cloud",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      skills: [
        { name: "Google Cloud Platform", level: 85, color: "primary" },
        { name: "AWS", level: 75, color: "secondary" },
        { name: "Azure", level: 70, color: "primary" },
        { name: "Heroku", level: 90, color: "secondary" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold font-poppins mb-6"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            A collection of technologies I've worked with and proficient in.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-poppins font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        className={cn(
                          "h-full rounded-full",
                          skill.color === "primary"
                            ? "bg-primary"
                            : "bg-secondary"
                        )}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 glass-card rounded-xl p-6"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-poppins font-semibold mb-6 text-center"
          >
            Other Tools & Technologies
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "GitHub",
              "VS Code",
              "APIs",
              "Flask",
              "MongoDB",
              "PostgreSQL",
              "GraphQL",
              "Redux",
              "Next.js",
              "Tailwind CSS",
              "Jest",
              "CI/CD",
            ].map((tool, index) => (
              <span
                key={index}
                className="bg-muted px-3 py-2 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
