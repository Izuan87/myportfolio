import React from 'react';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, Vue, and modern CSS frameworks."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Python, and database management."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications using React Native and Flutter."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment with modern tech stacks."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate fullstack developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Building Digital Solutions That Matter
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 3 years of experience in fullstack development, I specialize in creating 
              scalable web applications and mobile solutions. My passion lies in transforming 
              complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest technologies and best practices. When I'm not coding, you can find me 
              contributing to open-source projects or learning new technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Continuous Learner
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;