import teaMakerThumbnail from "../assets/tea-maker-thumbnail.png";
import weatherDashboardThumbnail from "../assets/weather-dashboard-thumbnail.png";
import passwordGeneratorThumbnail from "../assets/password-generator-thumbnail.png";

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
        <div className="flex-col space-y-20 flex items-center mx-auto max-w-2xl sm:py-48 md:py-52 lg:py-56">
          {ProjectCards.map((Projects) => (
            <div className="border">
              <a
                key={Projects.id}
                href={Projects.href}
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-400 xl:aspect-h-8 xl:aspect-w-7 shadow-lg">
                  <img
                    alt={Projects.imageAlt}
                    src={Projects.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-20 duration-500 shadow-xl"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{Projects.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {Projects.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Projects;
