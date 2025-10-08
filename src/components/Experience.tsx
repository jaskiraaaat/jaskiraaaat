import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Alchemilia Ventures',
    location: 'India | Remote',
    period: 'June 2025 - present',
    role: 'Software Dev Engineer',
    achievements: [
      'Built a full-stack fleet monitoring and driver alerting platform that processes real-time GPS and telematics data from trucks and vehicles.',
      'Designed and implemented Geo-based backend microservices for high-frequency data ingestion and event processing',
      'Developed an interactive Svelte front-end dashboard for live vehicle tracking, alerts, and analytics.',
      'Integrated OBD-II / GNSS telemetry, automated alerts for route deviations, speeding, and idling events.',
      'Designed a WebSocket-driven real-time communication layer for instant updates across clients.',
      'Focused on reliability, performance, and modular code structure to support large-scale fleet operations'
    ]
  },
  {
    company: 'Amazon',
    location: 'Vancouver, B.C, Canada',
    period: 'May 2022 - Dec 2024',
    role: 'Software Dev Engineer',
    achievements: [
      'Served as technical lead throughout the full development lifecycle, end-to-end, from scoping, design, implementing, testing, delivery, and maintenance of projects, handling 8M+ requests per day using Java, Spring and C++.',
      'Served as Scrum Master to improve sprint velocity by 25%; resolved blockers and facilitated agile ceremonies, ensuring smooth collaboration across the team.',
      'Mentored an SDE Intern for 5 months, identifying a key pain point, designing a scalable solution, and guiding the intern through the successful implementation and launch of the project via code reviews, weekly syncs, and design discussions, leading to a return offer for the intern.',
      'Contributed heavily to operational excellence initiatives, practicing extensive on-call ownership, and taking on Ops projects: setting up alarms and monitoring strategies across AWS infrastructure (EC2, S3, Lambda, SNS, SQS). My solutions often included advanced alerting techniques using mathematical indicators like rate of change and second-order derivatives resulting in a smoother on-call and customer experience.',
      'Led the migration of legacy Alexa Smart Home services to a modern, scalable architecture, integrating AI/LLM capabilities with Amazon Smart Home APIs to enhance voice-enabled user experiences and developer extensibility.'
    ]
  }
];

export function Experience() {
  return (
    <section className="py-20 relative overflow-hidden" id="experience">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 style={{ fontFamily: "'Rock Salt', cursive", color: '#ffffff' }}>Work Experience</h2>
          <p className="text-muted-foreground mt-2">
            Building scalable systems and leading technical initiatives
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="flex items-center gap-2" style={{ color: '#ffffff' }}>
                    <Briefcase className="w-5 h-5" />
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground mt-1">{exp.role}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span className="text-muted-foreground">{achievement}</span>
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
