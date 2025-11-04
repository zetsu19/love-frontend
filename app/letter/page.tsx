"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-200 to-rose-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
            animate={{
              y: ["100vh", "-10vh"],
              opacity: [0, 1, 0],
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute text-rose-400 text-2xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 bg-white/40 backdrop-blur-lg border border-white/70 rounded-full px-8 py-3 shadow-lg z-50">
        <button
          onClick={() => router.push("/letter")}
          className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
          title="Love Letter 💌"
        >
          💌
        </button>
        <button
          onClick={() => router.push("/pictures")}
          className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
          title="Pictures 📸"
        >
          📸
        </button>
        <button
          onClick={() => router.push("/song")}
          className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
          title="Songs 🎵"
        >
          🎵
        </button>
        <button
          onClick={() => router.push("/something-special")}
          className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
          title="Something Special 🌈"
        >
          🌈
        </button>
      </div>
      <div className="relative z-10 mt-24 text-center px-6">
        {!opened ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpened(true)}
            className="bg-rose-500 text-white text-xl font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-rose-600 transition-colors"
          >
            💌 Open Letter
          </motion.button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="max-w-2xl bg-white/70 backdrop-blur-md p-8 mt-6 rounded-3xl shadow-2xl border border-white/60 text-gray-700 font-serif leading-relaxed text-lg overflow-y-auto max-h-[70vh]"
            >
              <p className="text-rose-600 text-2xl mb-4 font-semibold">
                To My Love 💕
              </p>
              <p>
                From the first moment I met you, my heart knew you were someone
                special. Every laugh, every message, every glance — they’ve all
                become my favorite memories. You’re not just someone I love;
                you’re the calm in my chaos, the spark in my dullest days.
              </p>
              <p className="mt-4">
                When I think of the future, I see us — walking hand in hand,
                chasing sunsets, sharing songs, and making dreams real. Thank
                you for being you — perfectly imperfect, beautifully real. 💖
              </p>
              <p className="mt-6 italic">
                Forever yours,  
                <br /> — your biggest admirer 💌
              </p>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="mt-8 text-3xl"
              >
                💞💫🌷
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Page;
