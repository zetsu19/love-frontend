"use client";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-400 via-rose-500 to-pink-600 text-center text-white">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg animate-bounce">
        😤 Bolihguyu tegeed mai🖕chi!!!
      </h1>

      <div className="mb-8">
        <Image
          src="/kaushi-maichi.jpg"
          alt="Love Theme"
          className="object-cover rounded-xl border-4 border-pink-200 shadow-[0_0_30px_rgba(255,192,203,0.6)] hover:scale-110 transition-transform duration-500"
        height={20}
        width={180}
        />
      </div>

      <p className="text-xl font-semibold mb-8 opacity-90">
        (Just kidding... but I’m still mad 😠)
      </p>

      <button
        onClick={() => history.back()}
        className="px-8 py-3 bg-white text-rose-600 font-bold rounded-full shadow-lg hover:bg-rose-100 hover:scale-110 transition-all duration-300"
      >
        Go back and choose “Yes” 😘
      </button>
    </div>
  );
};

export default Page;
