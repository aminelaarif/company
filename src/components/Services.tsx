import { motion } from "framer-motion";
import { Code, Palette, Globe, Rocket, Shield, Cpu, Zap, Cloud } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Bespoke websites built with React, Next.js, and cutting-edge technologies. Performance-optimized and fully responsive.",
    price: "Starting at $5,000",
    features: ["Custom Design", "SEO Optimization", "Mobile-First Approach"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Immersive user interfaces with motion design and interactive elements. Focused on user engagement and conversion.",
    price: "Starting at $3,000",
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payment processing and inventory management. Built for scale.",
    price: "Starting at $7,000",
    features: ["Payment Integration", "Inventory System", "Analytics Dashboard"]
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Speed up your existing website with our advanced optimization techniques. Boost your Google rankings.",
    price: "Starting at $2,000",
    features: ["Load Time Analysis", "Code Optimization", "CDN Setup"]
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Protect your digital assets with enterprise-grade security measures and regular security audits.",
    price: "Starting at $1,500",
    features: ["SSL Setup", "Security Audit", "DDoS Protection"]
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Enhance your website with artificial intelligence and machine learning capabilities.",
    price: "Starting at $4,000",
    features: ["Chatbots", ]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure setup and management for your web applications.",
    price: "Starting at $3,500",
    features: ["AWS/Azure Setup", "Auto-scaling", "Backup Systems"]
  },
  {
    icon: Zap,
    title: "Maintenance & Support",
    description: "24/7 website maintenance and technical support to keep your site running smoothly.",
    price: "Starting at $500/month",
    features: ["Regular Updates", "24/7 Support", "Performance Monitoring"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20   bg-gaming-dark relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 "
      />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent animate-[glow_4s_ease-in-out_infinite]"
        >
          Our Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
              className="group relative p-6 rounded-lg border border-neon-blue/20 bg-black/50 backdrop-blur-sm hover:border-neon-blue/50 transition-colors duration-700"
              style={{
                animation: `float ${8 + index * 2}s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg animate-[pulse-scale_6s_ease-in-out_infinite]"
              />
              
              <motion.div
               
                className="relative"
              >
                <service.icon className="w-12 h-12 text-neon-blue mb-4 animate-[glow_4s_ease-in-out_infinite]" />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="text-xl font-semibold text-white mb-2 relative z-10"
              >
                {service.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="text-gray-400 mb-4 relative z-10"
              >
                {service.description}
              </motion.p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: featureIndex * 0.2 }}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 animate-[glow_4s_ease-in-out_infinite]"></span>
                    {feature}
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="mt-4 pt-4 border-t border-neon-blue/20"
              >
                <span className="text-neon-purple font-semibold animate-[glow_4s_ease-in-out_infinite]">
                  {service.price}
                </span>
              </motion.div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;