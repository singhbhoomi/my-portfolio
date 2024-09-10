import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg">Email: sengarbhumi0@gmail.com</p>
          <p className="text-lg">Phone: (+91) 8273863996</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/bhoomi-sengar/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://github.com/singhbhoomi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
              <FaGithub className="text-3xl" />
            </a>
            <a href="https://x.com/BhoomiS3026" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <FaTwitter className="text-3xl" />
            </a>
            
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4">
          <p className="text-sm">&copy; 2024 Bhoomi Sengar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
