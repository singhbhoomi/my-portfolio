import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; 

const skills = [
  "Frontend Development",
  "Backend Development",
  "Web Designing",
  "UX/UI Designing"
];

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prevSkill) => (prevSkill + 1) % skills.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setMousePos({ x, y });
  };

  const backgroundPosition = {
    x: (mousePos.x / window.innerWidth) * 50 - 25, 
    y: (mousePos.y / window.innerHeight) * 50 - 25,
  };

  return (
    <section 
      id="home" 
      className="bg-gray-900 text-white h-screen flex flex-col md:flex-row items-center justify-center text-left relative overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-40 blur-md animate-pulse"
        style={{
          transform: `translate(${backgroundPosition.x}px, ${backgroundPosition.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      ></div>
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0" 
        style={{ 
          backgroundImage: 'url("/images/hero-background.jpg")',
          transform: `translate(${backgroundPosition.x}px, ${backgroundPosition.y}px)`,
          transition: 'transform 0.1s ease-out',
        }} 
      ></div>

      <div className="relative flex flex-col md:mr-10 md:w-1/2 z-10">
        <motion.h1
          className="text-5xl relative overflow-hidden leading-snug"
          style={{ paddingBottom: '0.1em' }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          Hi, I'm Bhoomi Sengar
        </motion.h1>

        
        <div className="text-lg mt-4">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            I am into
          </span>{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSkill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="ml-2 text-blue-300 font-bold"
            >
              {skills[currentSkill]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="text-md mt-4 max-w-md">
          I'm a passionate software developer with experience in building dynamic web applications. I enjoy turning complex problems into simple, beautiful solutions.
        </p>

        
        <motion.a
          href="/images/Resume_B11.pdf"
          download="Resume_B11.pdf"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6 transition-transform duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-lg w-24"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            backgroundColor: "#1D4ED8",
            boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.7)",
            transition: { duration: 0.3 },
          }}
        >
          Resume
        </motion.a>

        
        <div className="flex space-x-4 mt-6">
          {[
            { href: "https://www.linkedin.com/in/bhoomi-sengar/?originalSubdomain=in", icon: <FaLinkedin size={30} />, color: "text-blue-500", hoverColor: "text-blue-600" },
            { href: "https://github.com/singhbhoomi", icon: <FaGithub size={30} />, color: "text-gray-400", hoverColor: "text-gray-500" },
            { href: "https://leetcode.com/u/Bhoomi_Sengar_30/", icon: <SiLeetcode size={30} />, color: "text-yellow-500", hoverColor: "text-yellow-600" },
            { href: "https://twitter.com/your-profile", icon: <FaTwitter size={30} />, color: "text-blue-400", hoverColor: "text-blue-500" },
            { href: "https://instagram.com/your-profile", icon: <FaInstagram size={30} />, color: "text-pink-500", hoverColor: "text-pink-600" }
          ].map(({ href, icon, color, hoverColor }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${color} hover:${hoverColor}`}
              whileHover={{
                scale: 1.2,
                rotate: [0, 10, -10, 0],
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.4)",
                transition: { duration: 0.3 },
              }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        className="relative overflow-hidden rounded-full w-64 h-64 md:w-96 md:h-96 mt-6 md:mt-0 md:ml-10 z-10"
        whileHover={{ scale: 1.15, rotate: 7, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-50 blur-md animate-pulse"></div>
        <img
          src="/images/bhoomi.jpg" 
          alt="Bhoomi Sengar"
          className="relative rounded-full w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
