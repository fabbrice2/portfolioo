import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Consisto: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <img
            className="w-screen h-screen object-cover pt-32"
            src="./images/Consisto.png"
            alt="ecom"
          />
        </div>
        <div className="py-12 px-32 flex flex-col gap-5">
          <h1 className="text-2xl font-bold cursor-pointer">
            <a className="text-2xl font-bold cursor-pointer hover:text-[#2767C9] duration-300" target="_blank" href="https://github.com/Aboubakar2004/Projet_Site_Location">
              Apartment rental platform
            </a>
          </h1>
          <p className="pb-10">
            Online platform designed to streamline the process of renting
            apartments. Users can search, compare, and lease apartments based on
            their preferences.
          </p>
          <ul className="grid grid-cols-4 gap-10">
            <li className="flex flex-col">
              <span className="font-bold">Position</span>
              <span>Full-stack developer</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Project</span>
              <span>Apartment rental platform</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">Timeline</span>
              <span>Mai, 2023 - Jun, 2023</span>
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

export default Consisto;
