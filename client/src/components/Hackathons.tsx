import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy } from "lucide-react";

interface Hackathon {
  id: string;
  name: string;
  theme: string;
  date: string;
  position: string;
  role: string;
  technologies: string[];
  achievement?: string;
}

const Hackathons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hackathons: Hackathon[] = [
    {
      id: "hack1",
      name: "Health Tech Hackathon",
      theme: "Healthcare Solutions",
      date: "2023-03",
      position: "Winner",
      role: "Full Stack Developer & AI Integration",
      technologies: ["TensorFlow", "React", "Node.js", "Google Cloud"],
      achievement: "1st Place"
    },
    {
      id: "hack2",
      name: "AgriTech Innovation Challenge",
      theme: "Smart Agriculture",
      date: "2022-11",
      position: "Runner-up",
      role: "AI Developer & Team Lead",
      technologies: ["Computer Vision", "React Native", "AWS"],
      achievement: "2nd Place"
    },
    {
      id: "hack3",
      name: "EdTech Disruption 2022",
      theme: "Future of Education",
      date: "2022-07",
      position: "Finalist",
      role: "Backend Developer & ML Engineer",
      technologies: ["Python", "Flask", "TensorFlow", "MongoDB"],
      achievement: "Best Technical Implementation"
    },
    {
      id: "hack4",
      name: "Sustainability Hackathon",
      theme: "Green Technology Solutions",
      date: "2022-04",
      position: "Participant",
      role: "Frontend Developer & UX Designer",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      achievement: "Top 10"
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
    <section id="hackathons" className="section-padding">
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
            Hackathon <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Competitions where I've applied my skills under pressure to create innovative solutions.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {hackathons.map((hackathon) => (
            <motion.div 
              key={hackathon.id}
              variants={itemVariants}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-poppins font-semibold text-xl">{hackathon.name}</h3>
                  <p className="text-gray-400 text-sm">{hackathon.date}</p>
                </div>
                {hackathon.achievement && (
                  <div className="flex items-center gap-1 bg-secondary/20 px-3 py-1 rounded-full">
                    <Trophy className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium">{hackathon.achievement}</span>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Theme</p>
                  <p className="text-white">{hackathon.theme}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Role</p>
                  <p className="text-white">{hackathon.role}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-2">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, index) => (
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
              <Trophy className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          <motion.h3 
            variants={itemVariants}
            className="font-poppins font-semibold text-xl mb-3"
          >
            Ready for the Next Challenge
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            I'm always looking for exciting hackathons and coding competitions to participate in.
            Let me know if you're forming a team!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
