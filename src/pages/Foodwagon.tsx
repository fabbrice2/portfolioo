import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Foodwagon: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <img
            className="w-screen h-screen object-cover pt-32"
            src="./images/foodwagon.png"
            alt="ecom"
          />
        </div>
        <div className="py-12 px-32 flex flex-col gap-5">
          <h1 className="text-2xl font-bold cursor-pointer"><a target="_blank" className="text-2xl font-bold cursor-pointer hover:text-[#2767C9] duration-300" href="https://github.com/fabbrice2/foodwagon">Delivery platform</a></h1>
          <p className="pb-10">
            A comprehensive platform designed to streamline and optimize
            delivery processes.
          </p>
          <ul className="grid grid-cols-4 gap-10">
            <li className="flex flex-col">
              <span className="font-bold">Position</span>
              <span>Full-stack developer</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Project</span>
              <span>Delivery platform</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Timeline</span>
              <span>Jul, 2024 - Aug, 2024</span>
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

export default Foodwagon;
