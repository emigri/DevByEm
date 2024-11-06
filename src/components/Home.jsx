import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div className="bg-rose-100 h-screen px-6 pt-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-30 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <ReactTyped
                strings={[
                  "Hi, I'm Emily Grivot",
                  "I'm a Web Developer",
                  "Welcome!"
                ]}
                typeSpeed={40}
                backSpeed={40}
              />
            </h1>
            <p className="font-sans mt-6 text-lg leading-8 text-gray-600">
              I’m a Bristol-based, english, spanish and portuguese speaking web
              developer with a keen eye for detail and a passion for learning.
              With a drive to take on new challenges, I thrive in dynamic
              environments where I can apply my skills to create innovative,
              user-centered solutions.
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

export default Home;
