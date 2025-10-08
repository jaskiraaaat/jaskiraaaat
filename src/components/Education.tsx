import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const educationData = [
  {
    institution: 'University of British Columbia',
    city: 'Vancouver',
    degree: 'B.A.S.C Computer Engineering',
    period: 'Dec, 2021',
    location: 'Vancouver, B.C., Canada',
  },
  {
    institution: 'College of New Caledonia',
    city: 'Prince George',
    degree: 'Certificate of Engineering',
    period: 'Sep 2017 - Apr 2018',
    location: 'Prince George, B.C., Canada',
  },
  {
    institution: 'Sharjah Indian School',
    city: 'Sharjah, UAE',
    degree: 'High School Diploma',
    period: '2005 - 2017',
    location: 'Sharjah, UAE',
  },
];

export function Education() {
  return (
    <section className="py-20 relative overflow-hidden" id="education">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 style={{ fontFamily: "'Rock Salt', cursive", color: '#ffffff' }}>Education</h2>
          <p className="text-muted-foreground mt-2">
            Academic foundation in computer engineering
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 style={{ color: '#ffffff' }}>{edu.institution}, {edu.city}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-1">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
