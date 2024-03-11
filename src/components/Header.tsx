import React, { useState } from "react";

type Color = "light" | "dark";

const Header: React.FC = () => {
  const [color, setColor] = useState<Color>("light");

  const handleClick = (): void => {
    setColor(color === "light" ? "dark" : "light");
  };

  return (
    <div>
      <header className="flex justify-between px-20 py-12 fixed w-full ">
        <div className="text-2xl font-bold cursor-pointer">
          <a href="/">Fabrice</a>
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <li
              
              className={`cursor-pointer ${color === "dark" ? "text-black" : "text-[#A0A09F]"} hover:text-black duration-300`}
            >
              <a
              onClick={handleClick} href="/">Work</a>
            </li>
            <li
              
              className={`cursor-pointer ${color === "dark" ? "text-black" : "text-[#A0A09F]"} hover:text-black duration-300`}
            >
              <a
              onClick={handleClick} href="/about">About</a>
            </li>
            <li
              
              className={`cursor-pointer ${color === "dark" ? "text-black" : "text-[#A0A09F]"} hover:text-black duration-300`}
            >
              <a
              onClick={handleClick}
                href="https://drive.google.com/file/d/1npHyOZcQyMEyYKlI2JTIT5WW51BZ6QZi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;