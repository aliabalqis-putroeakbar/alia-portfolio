import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Traveling & Exploring New Places',
    issuer: 'One of my favorite things to do',
    date: 'Ongoing',
    credentialId: 'I really enjoy discovering new places and experiences',
    image: '✈️',
    color: 'from-rose-400/20 to-red-500/20',
    link: '#',
  },
  {
    title: 'Baking & Recipe Development',
    issuer: 'My way to relax',
    date: 'Ongoing',
    credentialId: 'I love experimenting with cupcakes, brownies, and cookies',
    image: '🧁',
    color: 'from-yellow-400/20 to-orange-400/20',
    link: '#',
  },
  {
    title: 'Music & Daily Listening',
    issuer: 'A big part of my daily life',
    date: '24/7',
    credentialId: 'Music is always playing whenever I’m by myself',
    image: '🎧',
    color: 'from-purple-400/20 to-pink-500/20',
    link: '#',
  },
  {
    title: 'Playlist Curation',
    issuer: 'My personal music taste',
    date: 'Always',
    credentialId: 'I enjoy listening to Frank Ocean, Sheila on 7, Daniel Caesar, and Dewa 19',
    image: '🎶',
    color: 'from-indigo-400/20 to-blue-500/20',
    link: '#',
  },
  {
    title: 'Mini Trips & Memories',
    issuer: 'Places I’ve been to',
    date: 'Recent years',
    credentialId: 'I’ve explored places like Sabang, Meulaboh, Medan, and Jakarta',
    image: '🌍',
    color: 'from-pink-400/20 to-rose-500/20',
    link: '#',
  },
  {
    title: 'Creative Growth & Exploration',
    issuer: 'How I see myself',
    date: 'Ongoing',
    credentialId: 'I love trying new things, meeting people, and growing through experiences',
    image: '✨',
    color: 'from-purple-400/20 to-pink-400/20',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">About Me</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Alia’s World & Interests
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mt-4">
            I’m <span className="font-semibold text-foreground">Alia Balqis Putroe Akbar</span> — Alia for short.  
            I’m 16, and I’m an extrovert with people I know well. I love exploring new places, 
            baking to unwind, and I basically have music on 24/7 when I’m by myself.  
            <br /><br />
            I bring that same curiosity and energy into everything I do. I’m always excited 
            to create, collaborate, and grow through new experiences and little moments in life ✨
          </p>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${cert.color}`}>
                  <span className="text-3xl">{cert.image}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground/70">
                    {cert.credentialId}
                  </p>
                  
                  <Button variant="outline" size="sm" className="rounded-full mt-2" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Explore
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}