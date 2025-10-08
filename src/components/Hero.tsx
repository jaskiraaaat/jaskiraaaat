import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-6xl md:text-7xl"
            style={{ fontFamily: "'Rock Salt', cursive", color: '#ffffff' }}
          >
            Jaskirat Singh
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Software Development Engineer with expertise in full-stack development, cloud infrastructure, and scalable systems.
            Former Amazon engineer specializing in real-time systems and microservices architecture.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="mailto:jsinghm99@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            
            <a
              href="https://linkedin.com/in/jaskiratsinghmalhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            
            <a
              href="tel:+971522873622"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              +971 52 2873622
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-foreground/40 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
