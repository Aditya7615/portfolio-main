import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string;
  tags: string[];
}

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts: BlogPost[] = [
    {
      id: "blog1",
      title: "Building a Real-Time AI Sign Language Translator",
      excerpt: "A deep dive into the technical challenges and solutions for creating a sign language translator using TensorFlow and computer vision techniques.",
      date: "2023-04-15",
      url: "#",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      tags: ["AI", "Computer Vision", "Accessibility"]
    },
    {
      id: "blog2",
      title: "Deepfake Detection — My Approach Using TensorFlow",
      excerpt: "An exploration of the methods and models I developed to identify manipulated media with high accuracy using deep learning techniques.",
      date: "2023-02-22",
      url: "#",
      image: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      tags: ["TensorFlow", "Deep Learning", "Image Processing"]
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
    <section id="blog" className="section-padding">
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
            Technical <span className="gradient-text">Blog</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Sharing insights, experiences, and knowledge from my journey in AI and software development.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              variants={itemVariants}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-muted/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Calendar className="h-3 w-3 text-gray-300" />
                  <span className="text-xs text-gray-300">{formatDate(post.date)}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-muted px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="gradient" rounded="full" size="sm" asChild>
                  <a href={post.url} className="flex items-center gap-2">
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <motion.a 
            variants={itemVariants}
            href="#" 
            className="inline-flex items-center gap-2 text-primary hover:underline transition-all"
          >
            <span>View all articles</span>
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
