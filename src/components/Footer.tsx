import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gaming-dark border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Suffete</h3>
            <p className="text-white/60">
              Creating digital experiences that push the boundaries of what's possible.
            </p>
          </motion.div>
          
          
       
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© 2024 Suffete. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;