import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
  ];

  const accordionData = [
    {
      title: "A Glimpse of Me",
      content: "I’m someone who becomes naturally extroverted around people I’m comfortable with. I enjoy meaningful conversations and building genuine connections.",
      content2: "I love exploring new places, baking to unwind, and having music on almost 24/7 when I’m by myself — it’s part of my everyday rhythm.",
      content3: "These little things shape me into someone curious, expressive, and always looking for new experiences."
    },
    {
      title: "Creative Energy & Growth",
      content: "I bring that same curiosity and energy into everything I do. I love creating, collaborating, and growing through new projects and meaningful experiences."
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#3b0d0d] via-[#5a1a1a] to-[#2b0a0a] text-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#ffb3b3] font-medium mb-2 block uppercase tracking-widest text-sm">
            Tentang Saya
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            A Little Story of Me
          </h2>
          <div className="w-20 h-1 bg-[#ff4d4d] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* FOTO + PHOTOBOX */}
          <div className="relative flex justify-center">

            {/* SLOT (TEMPAT KELUAR FOTO) */}
            <div className="absolute top-0 w-40 h-6 bg-[#2b0a0a] rounded-full shadow-inner z-10 border border-[#ff4d4d]/20" />

            {/* BODY PHOTOBOX */}
            <div className="w-64 h-80 bg-[#4a1414] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#ff4d4d]/20 flex items-end justify-center relative overflow-hidden">

              {/* FOTO KELUAR */}
              <motion.img
                src="/foto akun1.jpg"
                alt="photo"
                initial={{ y: 200, rotate: -10, opacity: 0 }}
                whileInView={{ y: -20, rotate: -2, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: 0.3
                }}
                className="w-52 h-64 object-cover rounded-xl shadow-2xl border-4 border-white"
              />

              {/* GLOW */}
              <div className="absolute inset-0 bg-[#ff4d4d]/10 blur-2xl opacity-30" />
            </div>

            {/* SHADOW DEPTH */}
            <div className="absolute bottom-0 w-40 h-10 bg-black/40 blur-xl rounded-full" />
          </div>

          {/* TEXT */}
          <div className="space-y-8">
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="border border-[#ff4d4d]/20 rounded-xl overflow-hidden bg-[#3b0d0d]/60"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-[#ff4d4d]/10"
                  >
                    <span className="font-display font-bold text-lg text-[#ffd6d6]">
                      {item.title}
                    </span>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="p-4 pt-0 text-[#ffcccc]">
                          {item.content}
                        </div>
                        <div className="p-4 pt-0 text-[#ffcccc]">
                          {item.content2}
                        </div>
                        <div className="p-4 pt-0 text-[#ffcccc]">
                          {item.content3}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl text-center bg-[#4a1414] border border-[#ff4d4d]/20"
                >
                  <stat.icon className="h-6 w-6 text-[#ff8080] mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-[#ffcccc]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}