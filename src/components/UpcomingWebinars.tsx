"use client";
import React from "react";
import { ClassValue } from "clsx";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Mastering Jazz Improvisation",
      description:
        "Join our webinar to learn advanced techniques and concepts for mastering jazz improvisation. Explore improvisational styles, chord progressions, and melodic structures.",
      slug: "jazz-improvisation",
      isFeatured: true,
    },
    {
      title: "Introduction to Music Production",
      description:
        "Discover the basics of music production in our webinar. Learn about recording, mixing, and producing your own music. Suitable for beginners and aspiring producers.",
      slug: "music-production-intro",
      isFeatured: true,
    },
    {
      title: "Guitar Techniques Workshop",
      description:
        "Enhance your guitar playing skills with our workshop. Dive into various guitar techniques, including fingerstyle, picking patterns, and solo improvisation.",
      slug: "guitar-techniques-workshop",
      isFeatured: true,
    },
    {
      title: "Songwriting Essentials",
      description:
        "Unleash your creativity in our songwriting essentials webinar. Explore lyric writing, melody creation, and song structure to craft compelling and memorable songs.",
      slug: "songwriting-essentials",
      isFeatured: true,
    },
    {
      title: "Piano Masterclass: Advanced Repertoire",
      description:
        "Take your piano skills to the next level with our advanced repertoire masterclass. Delve into challenging pieces, techniques, and expressive playing.",
      slug: "piano-masterclass-advanced",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="mx-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance your Musical journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white
             hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
