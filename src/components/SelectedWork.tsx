import React from "react";

interface Project {
  id: string;
  img: string;
  name: string;
  stacks: string;
  description: string;
}

const SelectedWork: React.FC = () => {
  const projects: Project[] = [
    {
      id: "ecommerce",
      img: "images/ecom2.png",
      name: "Plant sales website",
      stacks: "React Js, Tailwind css",
      description:
        "Online plant sales website with a user-friendly interface for purchasing plants.",
    },
    {
      id: "consisto",
      img: "images/consisto2.png",
      name: "Apartment rental platform",
      stacks: "PHP, Javascript, MySQL",
      description:
        "Platform for apartment rentals facilitating search and ad posting.",
    },
    {
      id: "netflix",
      img: "images/Netflix2.png",
      name: "Video streaming app",
      stacks: "React Js, TMDB API",
      description:
        "Video streaming application offering a wide selection of movies and series, integrating the TMDB API.",
    },
    {
      id: "checklist",
      img: "images/checklist2.png",
      name: "Checklist: The art of the list",
      stacks: "Node Js, MySQL, React Js, Tailwind css",
      description: "Task list application for organizing daily tasks.",
    },
    {
      id: "foodwagon",
      img: "images/foodwagon2.png",
      name: "Food delivery website",
      stacks: "PHP, Javascript",
      description:
        "A website for food delivery services, enabling users to browse menus and place orders.",
    },
    {
      id: "spotlight",
      img: "images/Spotlight2.png",
      name: "Music event platform",
      stacks: "PHP, Javascript",
      description:
        "Platform for music events discovery including concerts and festivals.",
    },
  ];

  return (
    <div className="py-40 px-32 flex flex-col gap-6">
      <h1 className="text-[26px] font-bold">Selected Work</h1>
      <div className="grid grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-2">
            <a href={`/${project.id}`} className="flex flex-col gap-2">
              <img
                className="cursor-pointer w-full"
                src={project.img}
                alt={project.name}
              />
              <h2 className="text-2xl font-bold cursor-pointer hover:text-[#2767C9] duration-300">
                {project.name}
              </h2>
            </a>
            <span className="text-[#A0A09F] text-xl">{project.stacks}</span>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedWork;
