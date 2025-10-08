import { motion } from 'motion/react';
import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Physviz',
    technologies: ['JavaScript', 'React', 'Git', 'Netlify', 'Heroku', 'AWS', 'DynamoDB'],
    description: [
      'Designed and developed a tele-rehab website for physiotherapists to perform secure clinician access, remote patient management, and data analysis, which resulted in immediate acceptance for clinical research.',
      'Designed and developed a cross-platform mobile app for patients providing real-time biofeedback with the help of force sensors communicating via BLE.',
      'Developed and deployed CI/CD backend server and database using AWS, Heroku, and Netlify.'
    ]
  }
];

export function Projects() {
  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 style={{ fontFamily: "'Rock Salt', cursive", color: '#ffffff' }}>Technical Projects</h2>
          <p className="text-muted-foreground mt-2">
            Innovative solutions for real-world problems
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 style={{ color: '#ffffff' }}>{project.name}</h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-2">
                {project.description.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
