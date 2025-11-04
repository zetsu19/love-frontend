"use client";
import { useRouter } from "next/navigation";

const songs = [
  {
    title: "Coldplay – Sparks",
    mood: "Calm, tender love 💫",
    url: "https://www.youtube.com/results?search_query=coldplay+sparks",
  },
  {
    title: "290-years",
    mood: "Eternal feeling ⏳",
    url: "https://www.youtube.com/results?search_query=290+years+song",
  },
  {
    title: "CAS – Heavenly, Sunsetz",
    mood: "You remind me of this 🌅",
    url: "https://www.youtube.com/results?search_query=CAS+Heavenly+Sunsetz",
  },
  {
    title: "Скриптонит – Любовь",
    mood: "Deep connection ❤️‍🔥",
    url: "https://www.youtube.com/results?search_query=Скриптонит+Любовь",
  },
  {
    title: "The Neighbourhood – Sweater Weather",
    mood: "Warmth & closeness ☁️",
    url: "https://www.youtube.com/watch?v=GCdwKhTtNNw",
  },
  {
    title: "МОТ – По душам",
    mood: "Talks from the heart 💭",
    url: "https://www.youtube.com/results?search_query=МОТ+По+душам",
  },
  {
    title: "The Lemons – Хүсэл",
    mood: "My favorite song 🎧",
    url: "https://www.youtube.com/results?search_query=The+Lemons+Хүсэл",
  },
];

const Page = () => {
  const router = useRouter();

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300 flex flex-col items-center py-16 px-6 relative">
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
      <h1 className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-10 mt-20 text-center drop-shadow-md">
        🎧 Our Songs Playlist 💞
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {songs.map((song, index) => (
          <div
            key={index}
            onClick={() => handleClick(song.url)}
            className="cursor-pointer bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="text-rose-600 text-3xl mb-2">🎶</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {song.title}
            </h2>
            <p className="text-gray-600 italic">{song.mood}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-gray-700 italic text-center">
        “Every song reminds me of you — every lyric feels like us. 💞”
      </p>
    </div>
  );
};

export default Page;
