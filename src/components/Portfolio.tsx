import { motion } from 'framer-motion';
import { ExternalLink, Code, Palette, Cpu, Globe } from 'lucide-react';

const projects = [
  {
    title: "Neon Pulse Gaming",
    category: "Gaming Platform",
    image: "https://imgs.search.brave.com/dn00OEH4OT0HDVSzhIczgDXAONMiZtEJW_kPPrLuaig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by91/aS11eC1yZXByZXNl/bnRhdGlvbnMtd2l0/aC1sYXB0b3BfMjMt/MjE1MDIwMTg3MS5q/cGc_c2VtdD1haXNf/aHlicmlk",   
    description: "Next-gen gaming platform with immersive UI",
    tech: ["React", "Three.js", "WebGL"],
    icon: Code
  },

  {
    title: "Digital Nexus",
    category: "Web Application",
    image: "https://imgs.search.brave.com/L7tD1WTtj5QFSKINQK6ke7pkPeVtUNgwLwC9GcjX0es/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzkwLzcxLzI4/LzM2MF9GXzk5MDcx/Mjg2Ml92S0VJaFh5/Z25EbFdtOFFRUWds/TUJoRmNtNldRUEVi/Uy5qcGc",
    description: "Enterprise-grade web application platform",
    tech: ["Next.js", "GraphQL", "AWS"],
    icon: Globe
  },
 
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gaming-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-4"
            animate={{ 
              textShadow: [
                '0 0 7px #fff',
                '0 0 10px #fff',
                '0 0 21px #fff',
                '0 0 42px #9b87f5',
                '0 0 82px #9b87f5',
                '0 0 92px #9b87f5',
                '0 0 102px #9b87f5',
                '0 0 151px #9b87f5'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-white/60 text-lg">Explore our latest digital innovations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <motion.div
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(155, 135, 245, 0.2)', '0 0 20px 10px rgba(155, 135, 245, 0.2)', '0 0 0 0 rgba(155, 135, 245, 0.2)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative rounded-xl overflow-hidden aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <project.icon className="w-6 h-6 text-neon-purple" />
                    <span className="text-neon-purple">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.div 
                    className="flex items-center text-neon-purple"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.div>
                </motion.div>
              </motion.div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl opacity-0 group-hover:opacity-15 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;