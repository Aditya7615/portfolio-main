import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  id: string;
  role: string;
  company: string;
  duration: {
    start: string;
    end?: string;
  };
  description: string;
  technologies: string[];
}

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: Experience[] = [
    {
      id: "exp1",
      role: "Freelance AI Developer",
      company: "Various Clients",
      duration: {
        start: "2023-01",
        end: "Present"
      },
      description: "Developed custom AI solutions for different businesses, including computer vision applications and natural language processing systems.",
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "NLTK", "Flask"]
    },
    {
      id: "exp2",
      role: "Full Stack Developer Intern",
      company: "Tech Innovations Inc.",
      duration: {
        start: "2022-05",
        end: "2022-08"
      },
      description: "Contributed to the development of a scalable web application using modern technologies. Implemented responsive UI components and RESTful APIs.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Docker"]
    },
    {
      id: "exp3",
      role: "Open Source Contributor",
      company: "Various Projects",
      duration: {
        start: "2021-11",
        end: "Present"
      },
      description: "Active contributor to various open-source projects, primarily focusing on machine learning libraries and developer tools.",
      technologies: ["Python", "JavaScript", "Git", "TensorFlow", "React"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="section-padding bg-black/50">
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            My professional journey and collaborative projects.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              variants={itemVariants}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="font-poppins font-semibold text-xl">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">
                    {formatDate(exp.duration.start)} — {exp.duration.end === "Present" || !exp.duration.end ? "Present" : formatDate(exp.duration.end)}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{exp.description}</p>
              
              <div>
                <p className="text-sm text-gray-400 mb-2">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-muted px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 glass-card rounded-xl p-6 text-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          <motion.h3 
            variants={itemVariants}
            className="font-poppins font-semibold text-xl mb-3"
          >
            Open to New Opportunities
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            I'm always interested in hearing about new projects, collaborations, or full-time opportunities
            in AI development, full-stack engineering, or data science.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
