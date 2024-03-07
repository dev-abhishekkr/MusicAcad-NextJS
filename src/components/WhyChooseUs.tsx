"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Collaborative Composition",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase musical productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Interactive Lessons",
    description:
      "Engage in immersive and interactive musical lessons designed to enhance your learning experience. Our platform offers a range of lessons led by experienced instructors, providing personalized guidance for students of all skill levels.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Interactive Lessons
      </div>
    ),
  },
  {
    title: "Virtual Studio Sessions",
    description:
      "Step into our virtual studio for real-time collaborative sessions. Connect with musicians worldwide, share ideas, and create music together seamlessly. Our platform brings the studio experience to your fingertips.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] flex items-center justify-center text-white">
        Virtual Studio Sessions
      </div>
    ),
  },
  {
    title: "Music Theory Mastery",
    description:
      "Delve into the fundamentals of music theory with our comprehensive courses. From basic concepts to advanced techniques, our platform offers a structured curriculum to help you master the theoretical aspects of music.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--teal-500))] flex items-center justify-center text-white">
        Music Theory Mastery
      </div>
    ),
  },
];

// You can continue adding more objects as needed.

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
