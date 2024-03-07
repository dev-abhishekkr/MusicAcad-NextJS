"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

function Instructors() {
  const instructors = [
    {
      id: 1,
      name: "John Walker",
      designation: "songwriter",
      image:
        "https://img.freepik.com/free-photo/man-wearing-waistcoat-with-his-arms-crossed_1368-2888.jpg?w=360&t=st=1709805403~exp=1709806003~hmac=3e7342945faf93ef8a03930b86b55129665afbb1f3a8d4f20904b1bf22481b2d",
    },
    {
      id: 2,
      name: "Suhani Walker",
      designation: "Violinist",
      image:
        "https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?w=826&t=st=1709805472~exp=1709806072~hmac=740defd4690c53a7f1b36846849ad36c36a4d0231389ef97ca6d236f442bd949",
    },
    {
      id: 3,
      name: "Vicky Bansal",
      designation: "Song Performer",
      image:
        "https://img.freepik.com/free-photo/calm-teenager-with-crossed-arms_1149-943.jpg?w=360&t=st=1709805313~exp=1709805913~hmac=c681b0f1517100a7c3de645c7e23fd7c40a7b8ab98162e1ee0159c3ad086bed4",
    },
    {
      id: 4,
      name: "Mirage Sharma",
      designation: "Pianoist",
      image:
        "https://img.freepik.com/free-photo/artist-white_1368-3546.jpg?w=360&t=st=1709805073~exp=1709805673~hmac=f2fe9b495983cd9bd131aef518c91cd6a3e43b5aeb53ba7c82eaba82e9b835f1",
    },
  ];

  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col item-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-10 w-full">
          Discover the talented professionals who will lead forward your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
