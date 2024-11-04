function Contact() {
  return (
    <>
      <div id="contact" className=" bg-rose-100">
        {/* Bottom Wave Divider (Rotated) */}
        <div className="z-30 relative">
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Little outro inviting user to contact
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto: emilygrivot@hotmail.co.uk"
                className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
