import { Mail, Linkedin, Phone, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden" style={{ color: '#ffffff' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h3 className="mb-4" style={{ color: '#ffffff' }}>Let's Connect</h3>
          
          <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">
            <a
              href="mailto:jsinghm99@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: '#ffffff' }}
            >
              <Mail className="w-5 h-5" />
              jsinghm99@gmail.com
            </a>
            
            <a
              href="tel:+971522873622"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: '#ffffff' }}
            >
              <Phone className="w-5 h-5" />
              +971 52 2873622
            </a>
            
            <a
              href="https://linkedin.com/in/jaskiratsinghmalhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: '#ffffff' }}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
          
          <div className="border-t pt-6" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <p style={{ color: '#ffffff' }}>
              © {new Date().getFullYear()} Jaskirat Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
