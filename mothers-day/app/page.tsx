"use client";

import MouseImageTrail from "@/components/MouseImageTrail";

export default function Home() {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/imgs/active/1.jpg",
        "/imgs/active/2.jpg",
        "/imgs/active/3.jpg",
        "/imgs/active/4.jpg",
        "/imgs/active/5.jpg",
        "/imgs/active/6.jpg",
        "/imgs/active/7.jpg",
        "/imgs/active/8.jpg",
        "/imgs/active/9.jpg",
        "/imgs/active/10.jpg",
        "/imgs/active/11.jpg",
        "/imgs/active/12.jpg",
        "/imgs/active/13.jpg",
        "/imgs/active/14.jpg",
        "/imgs/active/15.jpg",
        "/imgs/active/16.jpg",
      ]}
    >
      <main className="relative z-10 flex h-screen flex-col items-center justify-center bg-pink-50 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-700 drop-shadow-lg">
          Happy Mother&apos;s Day ❤️
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-pink-500 max-w-xl">
          To my dearest Mom, Thank you for everything you do. Your strength, love, and sacrifices, even though it looks like it does, never goes unnoticed. As a wife, mom, and daughter, you have given so much of yourself to us, never you, always putting others first. Your hard work and selflessness inspire us everyday.
          Happy Mother&apos;s Day Mom. You are a truly amazing human being. I&apos;m so grateful that you are my mom. I Love You.
          With all my love, Alan.
        </p>
      </main>
    </MouseImageTrail>
  );
}
