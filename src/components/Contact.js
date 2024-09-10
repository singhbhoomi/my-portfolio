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
      duration: 0.6,
      ease: 'easeOut',
    },
  },
});

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Sliding header */}
        <motion.h2
          className="text-4xl font-bold mb-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInVariants('left')}
        >
          Get In Touch
        </motion.h2>

        {/* Contact form */}
        <form>
          {[
            { label: 'Name', type: 'text', placeholder: 'Your Name', direction: 'left' },
            { label: 'Email', type: 'email', placeholder: 'Your Email', direction: 'right' },
            { label: 'Message', type: 'textarea', placeholder: 'Your Message', direction: 'left' },
          ].map((field, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={slideInVariants(field.direction)}
              transition={{ delay: index * 0.2 }}
            >
              <label className="block text-gray-300 mb-2">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                  rows="5"
                  placeholder={field.placeholder}
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500"
                  placeholder={field.placeholder}
                />
              )}
            </motion.div>
          ))}

          {/* Submit button with sliding animation */}
          <motion.button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={slideInVariants('right')}
            transition={{ delay: 0.6 }}
          >
            Send
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
