import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiNodedotjs, SiExpress, SiNextdotjs, SiMysql, SiTailwindcss, SiGithub, SiFigma, SiFramer } from 'react-icons/si';


const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  hover: {
    scale: 1.2,
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const educationVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const shineKeyframes = `
@keyframes shine {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-900 text-white">
      <style>{shineKeyframes}</style>
      <div className="container mx-auto max-w-4xl">
        {/* About Me Section */}
        <motion.div
          className="relative bg-gray-800 p-8 rounded-lg shadow-lg border-4 border-gray-700 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '0px 0px -200px 0px' }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
        >
          <div className="absolute inset-0 border-4 border-blue-500 rounded-lg animate-pulse"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg leading-relaxed text-justify mb-6">
              I'm Bhoomi Sengar, a passionate software developer with a deep love for technology and innovation. With experience in building dynamic and responsive web applications, I strive to create solutions that are not only functional but also aesthetically pleasing. My journey in software development has been fueled by a curiosity to learn and a desire to solve complex problems. Whether it's front-end development with React or back-end logic, I enjoy every aspect of the development process.
            </p>
            <p className="text-lg leading-relaxed text-justify mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with others in the community. I believe in continuous learning and am always excited to take on new challenges that push my limits and help me grow both professionally and personally.
            </p>
          </div>
        </motion.div>

        {/* Languages & Tools Section */}
        <div className="relative mt-12 mb-12 bg-gray-800 p-8 rounded-lg shadow-lg border-4 border-gray-700">
          <h3 className="text-3xl font-bold mb-6 text-center text-white">
            Languages & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { Icon: FaJava, name: 'Java', color: 'text-red-600' },
              { Icon: FaPython, name: 'Python', color: 'text-blue-500' },
              { Icon: FaHtml5, name: 'HTML5', color: 'text-orange-600' },
              { Icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-600' },
              { Icon: FaJs, name: 'JavaScript', color: 'text-yellow-500' },
              { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
              { Icon: SiExpress, name: 'Express.js', color: 'text-green-500' },
              { Icon: FaReact, name: 'React.js', color: 'text-blue-400' },
              { Icon: SiNodedotjs, name: 'Node.js', color: 'text-green-400' },
              { Icon: SiNextdotjs, name: 'Next.js', color: 'text-black' },
              { Icon: SiMysql, name: 'MySQL', color: 'text-blue-600' },
              { Icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-700' },
              { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-blue-400' },
              { Icon: SiGithub, name: 'GitHub', color: 'text-gray-400' },
              { Icon: SiFigma, name: 'Figma', color: 'text-purple-600' },
              { Icon: SiFramer, name: 'Framer', color: 'text-pink-500' },
            ].map(({ Icon, name, color }, index) => (
              <motion.div
                key={name}
                className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-lg"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '0px 0px -200px 0px' }}
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
              >
                <Icon className={`text-4xl ${color} mb-2`} title={name} />
                <span className="text-lg text-white">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Journey */}
        <div className="relative mt-12">
          <h3 className="text-3xl font-bold mb-6 text-center p-4 border-4 border-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent animate-shine">
            Education Journey
          </h3>
          <div className="absolute inset-0 border-4 border-transparent animate-shine rounded-lg"></div>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-l-4 border-gray-700 h-full"></div>
          <div className="flex flex-col space-y-12">
            {[
              {
                title: 'Seemax International School',
                level: 'High School',
                year: '2019',
              },
              {
                title: 'Seemax International School',
                level: 'Intermediate',
                year: '2021',
              },
              {
                title: 'GLA University',
                level: 'Bachelor of Engineering in Computer Science',
                year: '2021',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800 p-6 rounded-lg shadow-lg"
                variants={educationVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, margin: '-50px' }}
                transition={{ delay: index * 0.3 }}
              >
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.level}</p>
                <p className="text-gray-400 mt-2">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
