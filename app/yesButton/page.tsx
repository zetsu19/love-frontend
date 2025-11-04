// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const photos = [
//   { src: "/KAUSAR.jpg", caption: "My Love 💕" },
//   { src: "/neg.PNG", caption: "Her Smile 😍" },
//   { src: "/duruv.PNG", caption: "My Sunshine ☀️" },
//   { src: "/arvanneg.JPG", caption: "Adorable Soul ✨" },
//   { src: "/gurav.PNG", caption: "Cutest Eyes 👀" },
//   { src: "/zurgaa.PNG", caption: "Forever Mine ❤️" },
//   { src: "/doloo.PNG", caption: "That Look 😘" },
//   { src: "/naim.PNG", caption: "Pure Happiness 🌸" },
//   { src: "/yes.PNG", caption: "My Heart 💖" },
//   { src: "/arav.JPG", caption: "My Everything 🌍" },
//   { src: "/arvanhoyr.JPG", caption: "My Princess 👑" },
//   { src: "/arvangurav.JPG", caption: "Us, Always 💞" },
// ];

// const Page = () => {
//   const router = useRouter();
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   const handleNavClick = (type) => {
//     if (type === "letter") router.push("/letter");
//     if (type === "pictures") router.push("/pictures");
//     if (type === "song") router.push("/song");
//     if (type === "extra") router.push("/something-special");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-200 via-rose-100 to-pink-300 flex flex-col items-center py-16 px-6 relative">
//       {/* 💖 Floating Emoji Navigation Bar */}
//       <div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 bg-white/40 backdrop-blur-lg border border-white/70 rounded-full px-8 py-3 shadow-lg z-50">
//         <button
//           onClick={() => handleNavClick("letter")}
//           className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
//           title="Love Letter 💌"
//         >
//           💌
//         </button>
//         <button
//           onClick={() => handleNavClick("pictures")}
//           className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
//           title="Pictures 📸"
//         >
//           📸
//         </button>
//         <button
//           onClick={() => handleNavClick("song")}
//           className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
//           title="Song 🎵"
//         >
//           🎵
//         </button>
//         <button
//           onClick={() => handleNavClick("extra")}
//           className="text-2xl hover:scale-125 transition-transform duration-200 hover:text-rose-600"
//           title="Something Special 🌈"
//         >
//           🌈
//         </button>
//       </div>

//       {/* 💕 Title */}
//       <h1 className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-10 text-center drop-shadow-md mt-20 animate-pulse">
//         💕 My Beautiful Love Gallery 💕
//       </h1>

//       {/* 📸 Photo Gallery */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
//         {photos.map((photo, index) => (
//           <div
//             key={index}
//             onClick={() => setSelectedPhoto(photo)}
//             className="cursor-pointer bg-white/60 backdrop-blur-md border border-white/50 rounded-3xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
//           >
//             <div className="relative w-full h-72">
//               <Image
//                 src={photo.src}
//                 alt={photo.caption}
//                 fill
//                 className="object-cover rounded-t-3xl"
//               />
//             </div>
//             <div className="p-4 text-center">
//               <p className="text-lg font-semibold text-rose-700">
//                 {photo.caption}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 💬 Footer */}
//       <p className="mt-12 text-center text-gray-600 italic">
//         “Every photo reminds me how lucky I am to have you. ❤️”
//       </p>

//       {/* 🌸 Modal (Lightbox) */}
//       {selectedPhoto && (
//         <div
//           onClick={() => setSelectedPhoto(null)}
//           className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//         >
//           <div
//             className="relative max-w-3xl w-full bg-white/20 rounded-3xl p-4 shadow-2xl"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
//           >
//             <button
//               onClick={() => setSelectedPhoto(null)}
//               className="absolute top-3 right-3 text-white text-3xl hover:scale-110 transition"
//             >
//               ✖
//             </button>
//             <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
//               <Image
//                 src={selectedPhoto.src}
//                 alt={selectedPhoto.caption}
//                 fill
//                 className="object-contain rounded-2xl"
//               />
//             </div>
//             <p className="text-center text-white mt-4 text-xl font-semibold">
//               {selectedPhoto.caption}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;
