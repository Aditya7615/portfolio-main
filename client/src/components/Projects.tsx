import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const projects: Project[] = [
    {
      id: "signease",
      title: "SignEase",
      description: "Real-time sign language interpreter using computer vision and deep learning. Created during a hackathon focused on accessibility technology.",
      image: "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "ai",
      techStack: ["TensorFlow", "OpenCV", "Flask", "React"],
      github: "https://github.com/username/signease",
      demo: "https://signease-demo.herokuapp.com"
    },
    {
      id: "deepfake-detector",
      title: "AI Deepfake Detector",
      description: "TensorFlow-based image classifier that can identify manipulated images and deepfakes with high accuracy.",
      image: "https://images.unsplash.com/photo-1633265486501-0cf524a07213?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "ai",
      techStack: ["TensorFlow", "Keras", "Python", "Scikit-Learn"],
      github: "https://github.com/username/deepfake-detector"
    },
    {
      id: "code-viz",
      title: "Code Execution Visualizer",
      description: "Web-based platform that visualizes code execution step-by-step, making complex algorithms easier to understand.",
      image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "web",
      techStack: ["React", "Node.js", "Docker", "Monaco Editor"],
      github: "https://github.com/username/code-viz",
      demo: "https://code-viz.vercel.app"
    },
    {
      id: "fashion-recommender",
      title: "Fashion Recommender System",
      description: "AI-powered outfit suggestions based on user preferences, weather, and fashion trends using collaborative filtering.",
      image: "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "ai",
      techStack: ["Python", "TensorFlow", "Flask", "React"],
      github: "https://github.com/username/fashion-recommender",
    },
    {
      id: "sales-dashboard",
      title: "Power BI Sales Dashboard",
      description: "Interactive Amazon sales data analysis dashboard with advanced visualizations and predictive analytics features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "data",
      techStack: ["Power BI", "DAX", "SQL", "Excel"],
    }
  ];

  const filteredProjects = 
    activeCategory === "all" 
      ? projects 
      : projects.filter(project => project.category === activeCategory);

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
    <section id="projects" className="section-padding bg-black/50">
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            A selection of my most significant work across different domains.
          </motion.p>
        </motion.div>
        
        <Tabs defaultValue="all" className="w-full">
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <TabsList className="bg-muted/50">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveCategory("all")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                onClick={() => setActiveCategory("ai")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                AI/ML
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                onClick={() => setActiveCategory("web")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Web Dev
              </TabsTrigger>
              <TabsTrigger 
                value="data" 
                onClick={() => setActiveCategory("data")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Data Analytics
              </TabsTrigger>
            </TabsList>
          </motion.div>
          
          <TabsContent value={activeCategory} className="mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-poppins font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 h-24 overflow-hidden">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-muted px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Github className="h-4 w-4" />
                            <span>GitHub</span>
                          </a>
                        </Button>
                      )}
                      
                      {project.demo && (
                        <Button variant="gradient" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <motion.div 
          variants={itemVariants}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span>View More on GitHub</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
