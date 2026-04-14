import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const artists = [
  {
    name: "Frank Ocean",
    songs: [
      { title: "Pink + White", link: "https://open.spotify.com/search/Pink%20%2B%20White%20Frank%20Ocean" },
      { title: "Ivy", link: "https://open.spotify.com/search/Ivy%20Frank%20Ocean" },
      { title: "Thinkin Bout You", link: "https://open.spotify.com/search/Thinkin%20Bout%20You%20Frank%20Ocean" },
    ],
    color: "from-neutral-800 to-black",
  },
  {
    name: "Sheila on 7",
    songs: [
      { title: "Dan", link: "https://open.spotify.com/search/Dan%20Sheila%20On%207" },
      { title: "Sephia", link: "https://open.spotify.com/search/Sephia%20Sheila%20On%207" },
      { title: "Hari Bersamanya", link: "https://open.spotify.com/search/Hari%20Bersamanya%20Sheila%20On%207" },
    ],
    color: "from-emerald-900 to-black",
  },
  {
    name: "Daniel Caesar",
    songs: [
      { title: "Best Part", link: "https://open.spotify.com/search/Best%20Part%20Daniel%20Caesar" },
      { title: "Get You", link: "https://open.spotify.com/search/Get%20You%20Daniel%20Caesar" },
      { title: "Japanese Denim", link: "https://open.spotify.com/search/Japanese%20Denim%20Daniel%20Caesar" },
    ],
    color: "from-purple-900 to-black",
  },
  {
    name: "Dewa 19",
    songs: [
      { title: "Kangen", link: "https://open.spotify.com/search/Kangen%20Dewa%2019" },
      { title: "Risalah Hati", link: "https://open.spotify.com/search/Risalah%20Hati%20Dewa%2019" },
      { title: "Separuh Nafas", link: "https://open.spotify.com/search/Separuh%20Nafas%20Dewa%2019" },
    ],
    color: "from-rose-900 to-black",
  },
];

export default function MusicSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [active, setActive] = useState<number | null>(null);

  const index = ((page % artists.length) + artists.length) % artists.length;

  const paginate = (dir: number) => {
    setPage([page + dir, dir]);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          My Playlist 🎧
        </h2>

        {/* CAROUSEL */}
        <div className="relative h-56 mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 100 : -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`absolute w-full h-full rounded-2xl p-6 bg-gradient-to-br ${artists[index].color} flex flex-col justify-end shadow-xl`}
            >
              <p className="text-sm text-gray-400">Now Playing</p>
              <h3 className="text-2xl font-bold">{artists[index].name}</h3>
            </motion.div>
          </AnimatePresence>

          {/* NAV */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {artists.map((artist, i) => (
            <div
              key={artist.name}
              className="bg-neutral-900 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex justify-between items-center p-4 hover:bg-neutral-800 transition"
              >
                <span className="font-semibold">{artist.name}</span>
                <ChevronDown
                  className={`transition-transform ${
                    active === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4"
                  >
                    {artist.songs.map((song, idx) => (
                      <a
                        key={idx}
                        href={song.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-white/10 hover:bg-white/5 px-2 rounded-lg transition"
                      >
                        <span className="text-sm text-gray-300">
                          {idx + 1}. {song.title}
                        </span>

                        <ExternalLink className="h-4 w-4 text-green-400" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}