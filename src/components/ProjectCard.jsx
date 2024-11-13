
export function ProjectCard(props) {
  const Projects = props.ProjectCard;

  return (
    <>
      <div className="w-2/3 p-10 mx-auto bg-gray-300 rounded-lg drop-shadow-lg hover:scale-105 hover:duration-700 transition duration-1000">
        <a
          key={Projects.id}
          href={Projects.href}
          target="_blank"
          rel="noreferrer"
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
    </>
  );
}

export default ProjectCard;
