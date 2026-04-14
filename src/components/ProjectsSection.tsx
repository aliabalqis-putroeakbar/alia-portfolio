import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// DATA PROJECT BARU (ALIA VIBES)
const projects = [
  {
    title: 'Baking Journey',
    description: 'Exploring recipes and creating sweet treats as a way to relax and express creativity.',
    tags: ['Baking', 'Lifestyle', 'Creative'],
    icon: '🧁',
    color: 'from-yellow-400/20 to-orange-400/20',
    demo: '#',
  },
  {
    title: 'Music & Playlist Curation',
    description: 'Curating playlists that match moods, moments, and feelings throughout my day.',
    tags: ['Music', 'Mood', 'Playlist'],
    icon: '🎧',
    color: 'from-purple-400/20 to-pink-400/20',
    demo: '#',
  },
  {
    title: 'Mini Trips & Memories',
    description: 'Documenting little trips and capturing moments from places I’ve explored.',
    tags: ['Travel', 'Memories', 'Lifestyle'],
    icon: '✈️',
    color: 'from-rose-400/20 to-red-500/20',
    demo: '#',
  },
  {
    title: 'Creative Exploration',
    description: 'Trying new things, meeting new people, and growing through different experiences.',
    tags: ['Growth', 'Creative', 'Life'],
    icon: '✨',
    color: 'from-pink-400/20 to-purple-400/20',
    demo: '#',
  },
  {
    title: 'Daily Moments & Stories',
    description: 'Capturing simple everyday moments that feel meaningful and personal.',
    tags: ['Story', 'Daily Life', 'Moments'],
    icon: '💌',
    color: 'from-indigo-400/20 to-blue-400/20',
    demo: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">My World</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Things I Love & Create
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 flex flex-col">

                {/* VISUAL (GANTI IMAGE) */}
                <div className={`aspect-video rounded-xl mb-4 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  
                  {/* ICON */}
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl z-10"
                  >
                    {project.icon}
                  </motion.span>

                  {/* FLOATING EFFECT */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute w-20 h-20 bg-white/10 rounded-full blur-2xl"
                  />

                </div>

                {/* TEXT */}
                <div className="space-y-3 flex-grow">
                  <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUTTON */}
                <div className="pt-5 mt-auto">
                  <Button size="sm" className="rounded-full w-full" asChild>
                    <a href={project.demo}>
                      <Sparkles className="h-4 w-4 mr-2" />
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