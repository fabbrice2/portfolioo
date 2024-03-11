import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#1E1E1E] text-[#A0A09F] px-32 py-10">
      <h1 className="mb-5 text-2xl font-bold bg-gradient-to-br from-[#093069] to-[#1d66d5a7] bg-clip-text text-transparent">
        Nice to see you here!
      </h1>
      <div className="flex items-end justify-between">
        <ul className="flex flex-col gap-1">
          <li><a href="">fabriceamenouglo@gmail.com</a></li>
          <li><a href="">y_amenouglo@hetic.eu</a></li>
          <li>Made with love © 2024 Amenouglo Yaovi Fabrice </li>
        </ul>
        <ul className="flex gap-2">
          <li>
            <a href="https://www.linkedin.com/in/fabriceamenouglo/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/fabbrice2">Github</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
