import { motion } from 'motion/react';
import { Code, Database, Cloud, Wrench, Layout, MessageSquare } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Go', 'Svelte', 'Java', 'C++', 'JavaScript', 'Python', 'Verilog', 'VHDL']
  },
  {
    title: 'Backend Frameworks',
    icon: Database,
    skills: ['Spring Boot', 'Express.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'SQLite']
  },
  {
    title: 'Cloud/DevOps',
    icon: Cloud,
    skills: ['AWS (EC2, Lambda, DynamoDB)', 'Azure', 'Git']
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['ModelSim', 'Figma', 'Android Studio', 'IntelliJ', 'VScode', 'Cursor']
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'HTML', 'CSS']
  },
  {
    title: 'Soft Skills',
    icon: MessageSquare,
    skills: ['SCRUM Master', 'Mentorship', 'Agile delivery', 'Trilingual – English, Hindi, Punjabi']
  }
];

export function Skills() {
  return (
    <section className="py-20 relative overflow-hidden" id="skills">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 style={{ fontFamily: "'Rock Salt', cursive", color: '#ffffff' }}>Skills & Expertise</h2>
          <p className="text-muted-foreground mt-2">
            A comprehensive toolkit for building scalable software solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 style={{ color: '#ffffff' }}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
