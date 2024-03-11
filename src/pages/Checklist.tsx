import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Checklist: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <img
            className="w-screen h-screen object-cover pt-32"
            src="./images/Checklist.png"
            alt="ecom"
          />
        </div>
        <div className="py-12 px-32 flex flex-col gap-5">
          <h1 className="text-2xl font-bold cursor-pointer">
            <a className="text-2xl font-bold cursor-pointer hover:text-[#2767C9] duration-300" target="_blank" href="https://todolist-xi-liard.vercel.app/home">
              Task management web application
            </a>
          </h1>
          <p className="pb-10">
            Web application designed for managing tasks efficiently.
          </p>
          <ul className="grid grid-cols-4 gap-10">
            <li className="flex flex-col">
              <span className="font-bold">Position</span>
              <span>Full-stack developer</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Project</span>
              <span>Checklist</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Timeline</span>
              <span>Janv, 2024 - Feb, 2024</span>
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

export default Checklist;
