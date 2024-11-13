import ProjectCard from "./ProjectCard.jsx";
import teaMakerThumbnail from "../assets/tea-maker-thumbnail.png";
import weatherDashboardThumbnail from "../assets/weather-dashboard-thumbnail.png";
import passwordGeneratorThumbnail from "../assets/password-generator-thumbnail.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Projects() {
  const ProjectCards = [
    {
      id: 1,
      name: "Tea Round Maker",
      href: "https://platform-tea-round-maker.netlify.app/",
      description: "HTML, Tailwind CSS, JS, Vue",
      imageSrc: teaMakerThumbnail,
      imageAlt: "Tea round maker"
    },
    {
      id: 2,
      name: "Weather Dashboard",
      href: "https://js-weather-dashboard.netlify.app/",
      description: "HTML, Bootstrap CSS, JS",
      imageSrc: weatherDashboardThumbnail,
      imageAlt: "Describe image for project two"
    },
    {
      id: 3,
      name: "React Improved Weather Dashboard",
      href: "https://github.com/emigri/react-weather-dashboard",
      description: "HTML, Tailwind CSS, JS, React",
      imageSrc: "https://placehold.co/600x600",
      imageAlt: "Describe image for Project Eight"
    },
    {
      id: 4,
      name: "CodeKrafters - Final Group Project",
      href: "https://codekrafters.netlify.app/",
      description: "HTML, Tailwind CSS, JS, React",
      imageSrc: "https://placehold.co/600x600",
      imageAlt: "Describe image for Project Four"
    },
    {
      id: 5,
      name: "Coding Quiz",
      href: "https://eg-coding-quiz.netlify.app/",
      description: "HTML, CSS, JS",
      imageSrc: "https://placehold.co/600x600",
      imageAlt: "Describe image for Project Five"
    },
    {
      id: 6,
      name: "Task Planner",
      href: "https://eg-task-planner.netlify.app/",
      description: "HTML, CSS, JS",
      imageSrc: "https://placehold.co/600x600",
      imageAlt: "Describe image for Project Six"
    },
    {
      id: 7,
      name: "ReadMe Generator",
      href: "https://github.com/emigri/Ems-readme-generator",
      description: "JS",
      imageSrc: "https://placehold.co/600x600",
      imageAlt: "Describe image for Project Seven"
    },
    {
      id: 8,
      name: "Password Generator",
      href: "https://eg-password-generator.netlify.app/",
      description: "HTML, CSS, JS",
      imageSrc: passwordGeneratorThumbnail,
      imageAlt: "Description of image for Project Three"
    }
  ];

  return (
    <>
      <div className="bg-body-background">
        <h1 className="text-balance p-28 text-center text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
          Projects
        </h1>
        {/* Project cards */}
        <div className="grid gap-6 grid-cols-2">
          {ProjectCards.map((Projects) => (
            <ProjectCard ProjectCard={Projects} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Projects;
