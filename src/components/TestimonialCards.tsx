"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

var musicalCourseReviews = [
  {
    quote:
      "I have learned so much from this online musical course! The lessons are well-structured, and the instructors are incredibly knowledgeable. The interactive exercises and practical examples have significantly improved my musical skills.",
    name: "John Doe",
    title: "Professional Musician",
  },
  {
    quote:
      "As a beginner in music, I found this course to be extremely helpful. The step-by-step approach made complex concepts easy to understand. The supportive community also added to the overall positive experience.",
    name: "Jane Smith",
    title: "Music Enthusiast",
  },
  {
    quote:
      "I highly recommend this online course for anyone passionate about music. The instructors are not only skilled but also passionate about teaching. The diverse range of topics covered caters to both beginners and experienced musicians.",
    name: "Alex Johnson",
    title: "Music Producer",
  },
  {
    quote:
      "The flexibility of this online musical course is perfect for my busy schedule. I can learn at my own pace, and the quality of the content is top-notch. I've seen a significant improvement in my musical abilities since I started.",
    name: "Emily Williams",
    title: "Freelance Composer",
  },
];

function TestimonialCards() {
  return (
    <div
      className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center
    justify-center overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicalCourseReviews}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
