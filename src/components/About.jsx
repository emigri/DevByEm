// NOTES //
// ClassName is alt for HTML class //

function About() {
  return (
    <>
      <div
        id="about"
        className="relative bg-hero-image bg-cover bg-center bg-body-background"
      >
        <div>
          Overlay
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Content */}
          <div className="relative mx-auto z-20 max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
                About Me
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Section introducing myself and an illustration of my work
                experience and skills
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Wave Divider (Rotated) */}
        <div className="z-30 bottom-0 relative rotate-180">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default About;
