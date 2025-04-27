import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

function App() {
  const activeSection = useScrollSpy([
    "hero",
    "about",
    "skills",
    "projects",
    "hackathons",
    "experience",
    "blog",
    "contact",
  ]);

  useEffect(() => {
    // Apply smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <TooltipProvider>
      <Navbar activeSection={activeSection} />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Experience />
        <Blog />
        <Contact />
        <Footer />
      </main>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
