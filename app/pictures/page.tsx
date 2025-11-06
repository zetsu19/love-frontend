"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const photos = [
  { src: "/KAUSAR.jpg", caption: "My Love 💕" },
  { src: "/neg.PNG", caption: "Her Smile That Melts My Heart 😍" },
  { src: "/duruv.PNG", caption: "My Sunshine on Cloudy Days ☀️" },
  { src: "/arvanneg.JPG", caption: "Her Soul Shines Brighter Than Stars ✨" },
  { src: "/gurav.PNG", caption: "Those Eyes… My Forever Weakness 👀" },
  { src: "/zurgaa.PNG", caption: "Forever Mine, Always Yours ❤️" },
  { src: "/doloo.PNG", caption: "That Look That Stops Time 😘" },
  { src: "/naim.PNG", caption: "Her Laugh = My Favorite Sound 🌸" },
  { src: "/yes.PNG", caption: "She Owns My Heart 💖" },
  { src: "/arav.JPG", caption: "My Everything, Always 🌍" },
  { src: "/arvanhoyr.JPG", caption: "My Beautiful Princess 👑" },
  { src: "/arvangurav.JPG", caption: "Us — A Love Story That Never Ends 💞" },
  { src: "/q.PNG", caption: "Her Eyes Speak a Thousand Words 💫" },
  { src: "/w.png", caption: "When She Smiles, the World Glows 🌷" },
  { src: "/E.PNG", caption: "Every Moment With Her Feels Like Magic ✨" },
  { src: "/R.PNG", caption: "Her Voice Is My Favorite Song 🎶" },
  { src: "/T.PNG", caption: "Her Touch Calms My Soul 🌙" },
  { src: "/Y.PNG", caption: "She’s My Reason to Smile Every Day 😊" },
  { src: "/U.PNG", caption: "My Heart Beats Only for Her 💓" },
  { src: "/I.PNG", caption: "Her Laughter Is My Home 🏡" },
  { src: "/O.PNG", caption: "She’s My Dream Come True 💍" },
  { src: "/P.PNG", caption: "Every Look Says 'I Love You' 💌" },
  { src: "/A.PNG", caption: "She’s My Favorite Chapter in Life 📖" },
  { src: "/S.PNG", caption: "My Angel in Human Form 👼" },
  { src: "/D.PNG", caption: "Loving Her Is My Greatest Blessing 🌹" },
];


const Page = () => {
  const router = useRouter();
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);

  const handleNavClick = (type: string) => {
    if (type === "letter") router.push("/letter");
    if (type === "pictures") router.push("/pictures");
    if (type === "song") router.push("/song");
    if (type === "extra") router.push("/something-special");
  };
const picture = () => {
  router.push("picture")
}
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-rose-100 to-pink-300 flex flex-col items-center py-16 px-6 relative">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 bg-white/40 backdrop-blur-lg border border-white/70 rounded-full px-8 py-3 shadow-lg z-50">
        <button
          onClick={() => handleNavClick("letter")}
          className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
          title="Love Letter 💌"
        >
          💌
        </button>
        <button
          onClick={() => handleNavClick("pictures")}
          className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
          title="Pictures 📸"
        >
          📸
        </button>
        <button
          onClick={() => handleNavClick("song")}
          className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
          title="Song 🎵"
        >
          🎵
        </button>
        <button
          onClick={() => handleNavClick("extra")}
          className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
          title="Something Special 🌈"
        >
          🌈
        </button>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-10 text-center drop-shadow-md mt-20 animate-pulse">
        💕 My Beautiful Love Gallery 💕
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => setSelectedPhoto(photo)}
            className="cursor-pointer bg-white/60 backdrop-blur-md border border-white/50 rounded-3xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative w-full h-72">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover rounded-t-3xl"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold text-rose-700">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-600 italic">
        “Every photo reminds me how lucky I am to have you. ❤️”
      </p>
{selectedPhoto && (
  <div
    onClick={() => setSelectedPhoto(null)}
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative max-w-3xl w-full bg-white/20 rounded-3xl p-4 shadow-2xl"
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedPhoto(null)}
        className="absolute top-3 right-3 text-white text-3xl hover:scale-110 transition z-50"
        style={{ pointerEvents: "auto" }}
      >
        ✖
      </button>

      {/* Image */}
      <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
        <Image
          src={selectedPhoto.src}
          alt={selectedPhoto.caption}
          fill
          className="object-contain rounded-2xl"
        />
      </div>

      {/* Caption */}
      <p className="text-center text-white mt-4 text-xl font-semibold">
        {selectedPhoto.caption}
      </p>
    </div>
  </div>
)}

    </div>
  );
};

export default Page;
