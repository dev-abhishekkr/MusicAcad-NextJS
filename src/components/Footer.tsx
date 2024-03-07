import React from "react";

function Footer() {
  return (
    <footer>
      <div className="bg-black text-gray-400 py-12 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              MusicAcad is a premiere institution dedicated to teaching the art
              and science and music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <div className="flex flex-col gap-2 ">
              <a href="/" className="hover:text-blue-300">
                Home
              </a>
              <a href="/courses" className="hover:text-white">
                Courses
              </a>
              <a href="/" className="hover:text-white">
                About
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4 ">
              <a href="" className="hover:text-white">
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-kumar-0b6b1a211/"
                className="hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/firstofmirage"
                className="hover:text-white"
              >
                Twitter|X
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <ul className="flex flex-col space-y-3">
              <li>Kolkata, India</li>
              <li>Kolkata</li>
              <li>Email: dev.abhishekkr@gmail.com</li>
              <li>Phone: +91-6207277XXX</li>
            </ul>
          </div>
        </div>

        <p className="text-center pt-8 text-sm">
          © 2024 MusicAcad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
