import { Link, useLocation } from "react-router-dom";

function Hero() {
  const navigation = [
    { name: "Home", href: "/home" },
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Navbar */}
      <header>
        <nav
          aria-label="Global"
          className="flex p-6 px-8 shadow-lg relative isolate bg-nav-background"
        >
          <div className="flex justify-center sm:flex-1 md:flex-1 lg:flex-1">
            <div className="flex sm:flex gap-x-6 sm:duration-200 md:flex md:gap-x-12 md:duration-200 lg:flex lg:gap-x-20 lg:duration-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold leading-8 hover:transition-all hover:text-rose-800 hover:scale-110 hover:duration-800 text-gray-900 md:text-lg lg:text-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Hero;
