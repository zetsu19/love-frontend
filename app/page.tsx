"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!word) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (word.toLowerCase() === "zazu") {
        toast.success("Correct! ❤️");
        router.push("/pictures");
      } else {
        toast.error("Wrong word 😢 Try again!");
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300 overflow-hidden">
      <Toaster position="top-right" />
      <div className="absolute w-72 h-72 bg-pink-300/30 rounded-full blur-3xl top-10 left-10 animate-pulse" />
      <div className="absolute w-96 h-96 bg-rose-400/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl flex flex-col items-center gap-6 z-10 border border-white/40">
        <h1 className="text-3xl font-semibold text-rose-600 drop-shadow-sm">
          💌 𝓔𝓷𝓽𝓮𝓻 𝓽𝓱𝓮 𝓼𝓮𝓬𝓻𝓮𝓽 𝔀𝓸𝓻𝓭
        </h1>
        <p className="text-gray-600 text-center text-sm">
          Hint: my name 💖
        </p>

        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Type your secret word..."
          className="px-5 py-3 rounded-full w-72 text-center text-gray-700 font-medium border border-rose-200 focus:outline-none focus:ring-4 focus:ring-rose-300 transition-all duration-300 bg-white/90"
          disabled={isLoading}
        />

        <button
          onClick={handleSubmit}
          className={`px-8 py-3 bg-rose-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-rose-400 hover:scale-105 ${
            isLoading ? "opacity-60 cursor-not-allowed hover:scale-100" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Checking..." : "Enter"}
        </button>
      </div>

      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-pink-300 to-rose-400 flex items-center justify-center z-20 backdrop-blur-sm">
          <h1 className="text-5xl sm:text-6xl font-semibold text-white drop-shadow-xl animate-pulse text-center">
            𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓶𝔂 𝓵𝓸𝓿𝓮, 𝓮𝓷𝓳𝓸𝔂 𝔂𝓸𝓾𝓻 𝓼𝓽𝓪𝔂 ❤️
          </h1>
        </div>
      )}
    </div>
  );
};

export default Page;
