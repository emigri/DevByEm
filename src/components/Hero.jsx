import { ReactTyped } from "react-typed";

function Hero() {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Navbar */}
      <header>
        <nav aria-label="Global" className="flex p-6 lg:px-8">
          <div className="flex lg:flex-1 justify-center">
            <div className="flex gap-x-6 sm:duration-200 md:flex md:gap-x-12 md:duration-200 lg:flex lg:gap-x-20 lg:duration-200">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-8 text-gray-900 md:text-lg lg:text-xl"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <ReactTyped
                strings={["Hi, I'm Emily Grivot", "I'm a Web Developer"]}
                typeSpeed={40}
                backSpeed={40}
              />
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                id="button"
                href="#projects"
                className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check out my projects
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Let's start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
