import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About: React.FC = () => {
  const [text, setText] = useState<string>("Click this text");

  const handleTextClick = () => {
    if (text === "Click this text") {
      setText("I like web development");
    } else if (text === "I like web development") {
      setText("I like football");
    } else {
      setText("Click this text");
    }
  };

  return (
    <div>
      <Header />
      {/* <Footer /> */}
      <div className=" pt-40 px-32 flex flex-col gap-20">
        <div className="grid grid-cols-2 gap-10">
          <div className="h-full flex flex-col gap-10">
            <h1 className="text-2xl font-bold">
              Get to know more about{" "}
              <span className="bg-gradient-to-br from-[#093069] to-[#1d66d5a7] bg-clip-text text-transparent mx-1">
                Fabrice
              </span>
            </h1>
            <p className="flex flex-1 flex-col justify-between">
              <span>
                I recently obtained my Baccalaureate in science at Lycée Saint
                Joseph and I joined HETIC as a Bachelor in developer and
                application designer.
              </span>
              <span>
                I am a highly motivated and enthusiastic web developer with a
                strong passion for web design and UI/UX. I like to combine my
                background with my technical skills to create innovative and
                creative websites.
              </span>
              <span>
                I have experience in front-end as well as back-end development.
                Possessing a positive attitude and growth mindset, I am
                constantly looking for opportunities to expand my knowledge and
                skills as a fulstack developer.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span
              onClick={handleTextClick}
              className="cursor-pointer bg-[#f3f3ef] text-sm rounded-full py-1 px-3"
            >
              {text}
            </span>
            <img src="./images/developer.png" alt="dev" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 pb-20">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">🌐 Technical skills:</h1>
            <ul>
              <li>HTML</li>
              <li>BOOTSTRAP</li>
              <li>TAILWIND CSS</li>
              <li>Javascript</li>
              <li>REACT JS</li>
              <li>NODE JS</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">👩‍💻 Currently learning</h1>
            <ul>
              <li>Typescript</li>
              <li>Next Js</li>
              <li>Three Js</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">⚽ Personal interests</h1>
            <ul>
              <li>Football</li>
              <li>Music</li>
              <li>Traveling</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">💡Current projects</h1>
            <ul>
              <li>
                IAGuard: A defense against sub-
                <br />
                optimal use of ChatGPT for developers.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
