import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { validateEmail } from "@/lib/utils";
import { Linkedin, Github, Mail, Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="section-padding bg-black/50">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to explore collaboration opportunities? Let's connect!
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-poppins font-semibold text-xl mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out for collaborations, project inquiries, or just to say hello!
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:contact@adityadev.com" className="text-white hover:text-primary transition-colors">
                    contact@adityadev.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Github className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a href="https://github.com/aditya-dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                    github.com/aditya-dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a href="https://linkedin.com/in/aditya-dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                    linkedin.com/in/aditya-dev
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="font-poppins font-semibold text-xl mb-4">Let's Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/aditya-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="https://github.com/aditya-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-secondary/20 transition-colors duration-300"
                >
                  <Github className="h-6 w-6 text-white" />
                </a>
                <a 
                  href="mailto:contact@adityadev.com"
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                >
                  <Mail className="h-6 w-6 text-white" />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass-card rounded-xl p-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="font-poppins font-semibold text-xl mb-6"
            >
              Send Me a Message
            </motion.h3>
            
            <motion.form 
              variants={containerVariants}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                  className="bg-muted/50 border-white/10"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </motion.div>
              
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email", { 
                    required: "Email is required",
                    validate: (value) => validateEmail(value) || "Please enter a valid email"
                  })}
                  className="bg-muted/50 border-white/10"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </motion.div>
              
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={6}
                  {...register("message", { required: "Message is required" })}
                  className="bg-muted/50 border-white/10 resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </motion.div>
              
              <motion.div variants={itemVariants} className="pt-2">
                <Button 
                  type="submit" 
                  variant="gradient" 
                  rounded="full"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
