"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
      <div>
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400  text-center font-sans font-bold">
              Join the Community
            </h1>
            <p></p>
            <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Embarking on a harmonious journey, I invite you to join the
              vibrant musical community flourishing within my dedicated
              platform. Whether you're a beginner, a seasoned musician, an
              aspiring artist, or an avid music enthusiast, this space is
              designed to foster creativity, collaboration, and appreciation for
              the diverse world of music.{" "}
            </p>
            <input
              type="text"
              placeholder="dev.abhishekkr@gmail.com"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
            />
          </div>
          <BackgroundBeams />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;
