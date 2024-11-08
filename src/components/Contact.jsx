function Contact() {
  return (
    <>
      <div id="contact" className=" bg-body-background">
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
