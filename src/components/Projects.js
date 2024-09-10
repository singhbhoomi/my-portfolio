import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const projects = [
    {
      title: "Chat Application",
      description: "ChatApp is a real-time chat application developed using the MERN stack (MongoDB, Express.js, React, and Node.js). It offers users a seamless and interactive messaging experience with features such as one-on-one and group chat functionality. The application supports real-time notifications, message history, and user authentication. Built with React for a dynamic front-end, Express.js and Node.js for robust server-side operations, and MongoDB for efficient data storage, ChatApp delivers a responsive and scalable chat solution suitable for personal and professional use.",
      link: "https://github.com/singhbhoomi/Chat_application", 
    },
    {
      title: "Image Matching Game",
      description: "Image Matching Game is an engaging and interactive browser-based game created with HTML, CSS, and JavaScript. Players are challenged to match pairs of images by flipping cards and remembering their positions. The game features a timer that starts when the first card is clicked and stops after a set number of moves, with an alert notifying players when they reach the goal. Designed with a clean and responsive interface using CSS, the game utilizes JavaScript to manage game logic, including move counters, card matching, and game reset functionality, providing a fun and visually appealing experience for users of all ages.",
      link: "https://github.com/singhbhoomi/Image_MatchingGame_WebD_EndTerm",
    },
    {
      title: "Mine Diamonds",
      description: "Mine Diamonds is a visually captivating website designed using Framer. This site offers an engaging and interactive experience, showcasing stunning animations and smooth transitions that bring the content to life. The website features a modern and intuitive design, with a focus on showcasing unique diamond products and providing an immersive browsing experience. Framer's powerful design tools enable rich, dynamic interactions, making Mine Diamonds a standout example of how creative design and advanced web technologies can come together to create a memorable user experience.",
      link: "https://framer.com/projects/Mine-Diamond--r2jgIerfycP4J7kAU909-bCmrL?node=augiA20Il",
    },
    {
      title: "Hospital Homepage",
      description: "The Hospital Homepage, designed with Figma, offers a clean, professional, and user-friendly interface for healthcare institutions. This homepage features a well-organized layout with key sections such as patient services, doctor profiles, appointment scheduling, and contact information. The design emphasizes easy navigation and accessibility, with a focus on providing essential information efficiently. The use of Figma's design tools ensures a modern aesthetic with a responsive layout, making it easy for patients to find what they need and access hospital resources seamlessly.",
      link: "https://www.figma.com/design/evTQlm7XEaHIA12Bw8IS5R/Hospital-page?node-id=0-1&t=WGDSopKScAwoEfED-1",
    },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-center">My Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="p-4">
              <div className="project-box bg-gray-700 p-6 rounded-lg shadow-lg relative transition-transform transform hover:scale-105">
                <div className="project-header bg-gray-900 mb-4 rounded-t-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 transition-transform transform hover:scale-110">{project.title}</h3>
                </div>
                <p className="text-white mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="view-code-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform transform hover:scale-110 absolute bottom-4 right-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
