import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/hooks/use-theme';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 50;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Clear any existing canvas
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.7,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      color: theme === 'dark' ? 0x5f8bff : 0x5f8bff, // Blue color for both themes, but brighter for dark
    });
    
    // Create the positions for particles
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      // Create a sphere of particles
      const distance = Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      const x = distance * Math.sin(phi) * Math.cos(theta);
      const y = distance * Math.sin(phi) * Math.sin(theta);
      const z = distance * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Create the particle system
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);
    
    // Create connecting lines between nearby particles
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: theme === 'dark' ? 0x3a70ff : 0x3a70ff,
      transparent: true,
      opacity: 0.3,
    });
    
    // Create connection lines for closest particles
    function createConnections() {
      // Remove previous lines
      scene.children.forEach(child => {
        if (child instanceof THREE.Line) {
          scene.remove(child);
        }
      });
      
      // Create new lines for particles that are close to each other
      const threshold = 10; // Distance threshold for creating lines
      
      // Create lines
      for (let i = 0; i < particlesCount; i++) {
        for (let j = i + 1; j < particlesCount; j++) {
          const x1 = positions[i * 3];
          const y1 = positions[i * 3 + 1];
          const z1 = positions[i * 3 + 2];
          
          const x2 = positions[j * 3];
          const y2 = positions[j * 3 + 1];
          const z2 = positions[j * 3 + 2];
          
          const distance = Math.sqrt(
            Math.pow(x2 - x1, 2) + 
            Math.pow(y2 - y1, 2) + 
            Math.pow(z2 - z1, 2)
          );
          
          if (distance < threshold) {
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(x1, y1, z1),
              new THREE.Vector3(x2, y2, z2)
            ]);
            
            const line = new THREE.Line(lineGeometry, lineMaterial);
            scene.add(line);
            
            // Limit the number of lines to avoid performance issues
            if (scene.children.length > 1000) break;
          }
        }
        if (scene.children.length > 1000) break;
      }
    }
    
    // Only create lines initially for better performance
    createConnections();
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the particle system
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.0005;
      
      // Rotate lines along with particles
      scene.children.forEach(child => {
        if (child instanceof THREE.Line) {
          child.rotation.x += 0.0005;
          child.rotation.y += 0.0005;
        }
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose geometries and materials
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      lineMaterial.dispose();
      
      scene.children.forEach(child => {
        if (child instanceof THREE.Line) {
          child.geometry.dispose();
        }
      });
      
      renderer.dispose();
    };
  }, [theme]);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      aria-hidden="true"
    />
  );
};

export default ThreeBackground;