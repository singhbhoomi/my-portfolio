import React from 'react';
import { motion } from 'framer-motion';

const slideInVariants = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
});

const Experience = () => {
  return (
    <section id="experience" className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-transparent h-full"></div>
          <div className="flex flex-col space-y-16">
            {[
              {
                title: 'Full-Stack Trainee',
                company: 'Job Oriented Value Added Course',
                year: 'June 2023-July 2023',
                side: 'left',
                description: 'Demonstrated a high level of expertise in database management specializing in CRUD (Create, Read, Update, Delete) operations using SQL database and MongoDB.    Established and managed robust and efficient database connections to web applications ensuring seamless data flow and integration between frontend and backend systems.',
              },
              {
                title: 'Club Member',
                company: 'Code Freakpy Club ',
                year: 'current',
                side: 'right',
                description: 'Participated in and organized tech meetups and workshops to foster a community of tech enthusiasts.',
              },
              {
                title: 'UX/UI Desiner',
                company: 'CFPY club',
                year: 'current',
                side: 'left',
                description: 'As a UX/UI Designer in the college club,played a pivotal role in creating engaging and intuitive user experiences for club’s digital platforms.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex ${item.side === 'left' ? 'justify-start' : 'justify-end'} items-center`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '0px' }} 
                variants={slideInVariants(item.side)}
                transition={{ delay: index * 0.3 }}
              >
                <div className={`relative ${item.side === 'left' ? 'ml-12' : 'mr-12'} p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform group-hover:scale-105`}>
                  <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.company}</p>
                  <p className="text-gray-400 mt-2">{item.year}</p>
                  <p className="text-gray-200 mt-4">{item.description}</p>
                </div>
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${item.side === 'left' ? '-left-4' : '-right-4'} w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-md`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
