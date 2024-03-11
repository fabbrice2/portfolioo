import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Spotlight: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <img
            className="w-screen h-screen object-cover pt-32"
            src="./images/Spotlight.png"
            alt="ecom"
          />
        </div>
        <div className="py-12 px-32 flex flex-col gap-5">
          <h1 className="text-2xl font-bold cursor-pointer"><a target="_blank" className="text-2xl font-bold cursor-pointer hover:text-[#2767C9] duration-300" href="https://github.com/Aboubakar2004/Projet_Architecture">Music Concert App</a></h1>
          <p className="pb-10">
            An innovative application offering seamless access to concerts,
            allowing music enthusiasts to explore, discover, and attend live
            performances effortlessly.
          </p>
          <ul className="grid grid-cols-4 gap-10">
            <li className="flex flex-col">
              <span className="font-bold">Position</span>
              <span>Full-stack developer</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Project</span>
              <span>Music Concert App</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Timeline</span>
              <span>Nov, 2024 - Dec, 2024</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Tools Used</span>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Spotlight;
