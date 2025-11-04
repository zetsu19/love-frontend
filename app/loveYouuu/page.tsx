"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleNoClick = () => {
    router.push("/noButton");
  };
  const yesButton = () => {
    router.push("/pictures")
  }

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-center"
      style={{
        backgroundImage:
          "url('https://w0.peakpx.com/wallpaper/598/440/HD-wallpaper-love-is-in-the-air-love-theme.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-pink-200/40 backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 drop-shadow-lg mb-10">
          💖 Will you be my forever love? 💖
        </h1>
        <div className="flex gap-8">
          <button
            className="px-10 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 hover:scale-110 transition-all duration-300"
            onClick={yesButton}
          >
            Yes 💕
          </button>
          <button
            onClick={handleNoClick}
            className="px-10 py-3 bg-white/80 text-pink-600 border-2 border-pink-400 font-semibold rounded-full shadow-lg hover:bg-pink-100 hover:scale-110 transition-all duration-300"
          >
            No 🥲
          </button>
        </div>
      </div>
    </div>
  );
}
