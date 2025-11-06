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
  // New songs added
  {
    title: "Passenger – Let Her Go",
    mood: "Bittersweet nostalgia 🍂",
    url: "https://www.youtube.com/results?search_query=Passenger+Let+Her+Go",
  },
  {
    title: "The Weeknd – After Hours",
    mood: "Late-night longing 🌙",
    url: "https://www.youtube.com/results?search_query=The+Weeknd+After+Hours",
  },
  {
    title: "The Fray – Look After You",
    mood: "Tender care 💌",
    url: "https://www.youtube.com/results?search_query=The+Fray+Look+After+You",
  },
  {
    title: "No. 1 Party Anthem",
    mood: "Fun & nostalgia 🎉",
    url: "https://www.youtube.com/results?search_query=No+1+Party+Anthem",
  },
  {
    title: "Selena Gomez – Good For You",
    mood: "Smooth & sexy vibe 😎",
    url: "https://www.youtube.com/results?search_query=Selena+Gomez+Good+For+You",
  },
  {
    title: "Chihriin Baglaa",
    mood: "Sweet Mongolian melody 🎵",
    url: "https://www.youtube.com/results?search_query=Chihriin+Baglaa",
  },
  {
    title: "Adele – Hometown Glory",
    mood: "Heartfelt tribute 🏡",
    url: "https://www.youtube.com/results?search_query=Adele+Hometown+Glory",
  },
  {
    title: "Naagii – Chamaig Huleene",
    mood: "Deep love 💖",
    url: "https://www.youtube.com/results?search_query=Naagii+Chamaig+Huleene",
  },
  {
    title: "A Sound – Чин зүрхний хайр",
    mood: "Pure heart 💞",
    url: "https://www.youtube.com/results?search_query=A+Sound+Чин+зүрхний+хайр",
  },
  {
    title: "OG Buda, Mayot – Молчание",
    mood: "Silent emotions 🤫",
    url: "https://www.youtube.com/results?search_query=OG+Buda+Mayot+Молчание",
  },
  {
    title: "OG Buda – Для Тебя (Пусто)",
    mood: "Empty heart 💔",
    url: "https://www.youtube.com/results?search_query=OG+Buda+Для+Тебя+Пусто",
  },
  {
    title: "Maroon 5 – Payphone",
    mood: "Longing for connection 📞",
    url: "https://www.youtube.com/results?search_query=Maroon+5+Payphone",
  },
  {
    title: "MAYOT – Ночь",
    mood: "Night thoughts 🌌",
    url: "https://www.youtube.com/results?search_query=MAYOT+Ночь",
  },
  {
    title: "Скриптонит – Это любовь",
    mood: "It’s love ❤️",
    url: "https://www.youtube.com/results?search_query=Скриптонит+Это+любовь",
  },
  {
    title: "LIL PEEP – The Way I See Things",
    mood: "Emotional vibes 😢",
    url: "https://www.youtube.com/results?search_query=LIL+PEEP+The+Way+I+See+Things",
  },
  {
    title: "Sting – Shape of My Heart",
    mood: "Classical reflection 🎼",
    url: "https://www.youtube.com/results?search_query=Sting+Shape+of+My+Heart",
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
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{song.title}</h2>
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
