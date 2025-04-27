import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import ThreeBackground from "@/components/ThreeBackground";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <ThreeBackground />
      
      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight">
              Hi, I'm Aditya —<br /> 
              <span className="gradient-text">
                Building AI, Coding Platforms, and Smart Solutions.
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
              AI Developer, Full Stack Web Developer, Hackathon Enthusiast, and Data Science Explorer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="gradient" 
                rounded="full" 
                size="xl"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                variant="gradient-outline" 
                rounded="full" 
                size="xl"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              <div className="glass-card rounded-2xl overflow-hidden animate-float">
                <div className="bg-gradient-to-r from-primary/30 to-secondary/30 p-12 rounded-2xl flex items-center justify-center">
                  <svg 
                    viewBox="0 0 200 200" 
                    className="w-full h-full" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                    <g transform="translate(100 100)">
                      <path
                        d="M50.6,-67.4C67.2,-54.7,83.2,-42.8,89.1,-26.8C95,-10.8,91,9.4,82.7,26.8C74.5,44.1,62,58.7,45.8,68.7C29.6,78.7,9.7,84,-8.6,80.7C-26.9,77.4,-43.7,65.5,-58.5,51.2C-73.4,36.9,-86.4,20.2,-87.1,2.8C-87.8,-14.6,-76.3,-33,-62.9,-47.3C-49.5,-61.7,-34.1,-72,-17.8,-75.6C-1.5,-79.1,15.7,-76,30,-70.1C44.3,-64.2,55.8,-55.5,67.2,-42.7C78.6,-29.9,89.9,-13.2,90.9,4.3C91.9,21.9,82.5,40.3,69.2,53.7C55.9,67.1,38.5,75.5,20.8,76.3C3,77.2,-15.1,70.5,-31.5,62.9C-47.9,55.3,-62.6,46.9,-71.5,33.8C-80.4,20.7,-83.4,3,-79.5,-13.2C-75.6,-29.5,-64.8,-44.3,-51.2,-57.6C-37.6,-70.9,-21.1,-82.7,-3.2,-79.2C14.8,-75.6,34,-80,50.6,-67.4Z"
                        fill="url(#gradient)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0"
                          to="360"
                          dur="30s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-poppins font-medium text-xl">AI Developer</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary animate-pulse delay-300"></div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">Building intelligent solutions with TensorFlow, React, Node.js, Power BI, and Docker.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-muted px-2 py-1 rounded-md text-xs font-medium">TensorFlow</span>
                    <span className="bg-muted px-2 py-1 rounded-md text-xs font-medium">React</span>
                    <span className="bg-muted px-2 py-1 rounded-md text-xs font-medium">Node.js</span>
                    <span className="bg-muted px-2 py-1 rounded-md text-xs font-medium">Docker</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/20 blur-xl z-[-1]"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-secondary/20 blur-xl z-[-1]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
