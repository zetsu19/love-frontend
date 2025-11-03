"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!word) return; // prevent empty submission

    setIsLoading(true);

    // Show loading overlay immediately
    setTimeout(() => {
      setIsLoading(false);

      if (word.toLowerCase() === "love") {
        toast.success("Correct! ❤️");
        router.push("/loveYouuu");
      } else {
        toast.error("Wrong word 😢 Try again!");
      }
    }, 2000); // 2-second delay
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-r from-pink-400 via-rose-500 to-red-500">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Main input card */}
      <div className="bg-white/50 backdrop-blur-md rounded-2xl p-10 shadow-xl flex flex-col items-center gap-6 z-10">
        <h1 className="text-2xl font-bold text-white drop-shadow-lg">
          🔒 Enter the secret word
        </h1>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Type here..."
          className="px-5 py-3 rounded-full w-72 text-center text-gray-700 font-semibold focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300"
          disabled={isLoading}
        />
        <button
          onClick={handleSubmit}
          className={`px-8 py-3 bg-white text-rose-600 font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            isLoading ? "opacity-50 cursor-not-allowed hover:scale-100" : "hover:bg-rose-100"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Checking..." : "Enter"}
        </button>
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-rose-400 to-red-500 flex items-center justify-center z-20">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg animate-pulse text-center">
            Welcome my love ❤️
          </h1>
        </div>
      )}
    </div>
  );
};

export default Page;
