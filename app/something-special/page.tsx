"use client";
import { useRouter } from "next/navigation";

const phrases = [
  { lang: "English", text: "I love you" },
  { lang: "Afrikaans", text: "Ek het jou lief" },
  { lang: "Albanian", text: "Të dua" },
  { lang: "Arabic (male)", text: "أنا بحبك (ana baḥibbak)" },
  { lang: "Arabic (female)", text: "أنا بحبكِ (ana baḥibbik)" },
  { lang: "Armenian", text: "Ես քեզ սիրում եմ (Yes k’ez sirum em)" },
  { lang: "Bambara", text: "M’bi fe" },
  { lang: "Bengali", text: "আমি তোমাকে ভালোবাসি (Ami tomake bhalobashi)" },
  { lang: "Belarusian", text: "Я цябе кахаю (Ja ciabie kahaju)" },
  { lang: "Bisaya", text: "Nahigugma ako kanimo" },
  { lang: "Bulgarian", text: "Обичам те (Obicham te)" },
  { lang: "Catalan", text: "T’estimo" },
  { lang: "Cherokee", text: "ᏣᎳᎩ ᏙᎯᏧᏣᏛ (Tsin la gi to‑hi‑tsu‑tsai‑dv)" },
  { lang: "Croatian", text: "Volim te" },
  { lang: "Czech", text: "Miluji tě" },
  { lang: "Danish", text: "Jeg elsker dig" },
  { lang: "Dutch", text: "Ik hou van jou" },
  { lang: "Esperanto", text: "Mi amas vin" },
  { lang: "Estonian", text: "Ma armastan sind" },
  { lang: "Fijian", text: "Au domoni iko" },
  { lang: "Finnish", text: "Minä rakastan sinua" },
  { lang: "French", text: "Je t’aime" },
  { lang: "Galician", text: "Amo‑te" },
  { lang: "Georgian", text: "მე შენ მიყვარხარ (Me shen miq’varxar)" },
  { lang: "German", text: "Ich liebe dich" },
  { lang: "Greek", text: "Σ’ αγαπώ (S’agapó)" },
  { lang: "Hausa", text: "Ina son ki" },
  { lang: "Hebrew (male)", text: "אני אוהב אותך (Ani ohev otach)" },
  { lang: "Hebrew (female)", text: "אני אוהבת אותך (Ani ohevet otcha)" },
  { lang: "Hindi (male)", text: "मैं तुमसे प्यार करता हूँ (Main tumse pyaar karta hoon)" },
  { lang: "Hindi (female)", text: "मैं तुमसे प्यार करती हूँ (Main tumse pyaar karti hoon)" },
  { lang: "Hungarian", text: "Szeretlek téged" },
  { lang: "Indonesian", text: "Aku cinta kamu" },
  { lang: "Irish", text: "Tá grá agam ort" },
  { lang: "Italian", text: "Ti amo" },
  { lang: "Japanese", text: "愛してる (Ai shiteru)" },
  { lang: "Javanese", text: "Aku tresno karo kowe" },
  { lang: "Korean", text: "사랑해 (Saranghae)" },
  { lang: "Latvian", text: "Es tevi mīlu" },
  { lang: "Lithuanian", text: "Aš tave myliu" },
  { lang: "Luxembourgish", text: "Ech hu Dich gaer" },
  { lang: "Macedonian", text: "Те сакам (Te sakam)" },
  { lang: "Malay", text: "Saya sayang awak" },
  { lang: "Maltese", text: "Inħobbok" },
  { lang: "Maori", text: "Aroha ahau ki a koe" },
  { lang: "Norwegian", text: "Jeg elsker deg" },
  { lang: "Persian (Farsi)", text: "دوستت دارم (Dooset daram)" },
  { lang: "Polish", text: "Kocham cię" },
  { lang: "Portuguese (Brazil)", text: "Eu te amo" },
  { lang: "Portuguese (Portugal)", text: "Amo‑te" },
  { lang: "Romanian", text: "Te iubesc" },
  { lang: "Russian", text: "Я люблю тебя (Ya lyublyu tebya)" },
  { lang: "Serbian", text: "Волим те (Volim te)" },
  { lang: "Slovak", text: "Ľúbim ťa" },
  { lang: "Slovenian", text: "Ljubim te" },
  { lang: "Spanish", text: "Te amo" },
  { lang: "Swahili", text: "Ninakupenda" },
  { lang: "Swedish", text: "Jag älskar dig" },
  { lang: "Tagalog (Filipino)", text: "Mahal kita" },
  { lang: "Tamil", text: "நான் உன்னை காதலிக்கிறேன் (Naan unnai kaadhalikkiren)" },
  { lang: "Telugu", text: "నేను నిన్ను ప్రేమిస్తున్నాను (Nēnu ninnu prēmistunnānu)" },
  { lang: "Thai", text: "ฉันรักคุณ (Chan rak khun)" },
  { lang: "Turkish", text: "Seni seviyorum" },
  { lang: "Ukrainian", text: "Я тебе люблю (Ja tebe lyublyu)" },
  { lang: "Urdu", text: "میں تم سے پیار کرتا ہوں/کرتی ہوں (Main tum se pyaar karta hoon)" },
  { lang: "Vietnamese", text: "Anh yêu em / Em yêu anh" },
  { lang: "Welsh", text: "Rwy’n dy garu di" },
];

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-rose-300 flex flex-col items-center p-6 font-serif">
      {/* Navbar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/40 backdrop-blur-lg border border-white/70 rounded-full px-8 py-3 shadow-lg z-50">
        <button onClick={() => router.push("/letter")} className="text-2xl hover:scale-125 hover:text-rose-600 transition">💌</button>
        <button onClick={() => router.push("/pictures")} className="text-2xl hover:scale-125 hover:text-rose-600 transition">📸</button>
        <button onClick={() => router.push("/song")} className="text-2xl hover:scale-125 hover:text-rose-600 transition">🎵</button>
        <button onClick={() => router.push("/something-special")} className="text-2xl hover:scale-125 hover:text-rose-600 transition">🌈</button>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-rose-600 mt-20 mb-6 text-center drop-shadow-md font-cursive">
        💖 “I Love You” in 100 Languages 💖
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl w-full">
        {phrases.map((p, idx) => (
          <div
            key={idx}
            className="bg-white/60 backdrop-blur-md rounded-2xl p-4 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 font-handwriting"
          >
            <span className="text-lg font-semibold text-rose-600">{p.lang}</span>
            <span className="mt-1 text-xl">{p.text} ❤️</span>
          </div>
        ))}
      </div>
      <p className="mt-10 text-gray-700 italic text-center max-w-xl">
        Love speaks every language — and so does my heart. 💞
      </p>
    </div>
  );
};

export default Page;
