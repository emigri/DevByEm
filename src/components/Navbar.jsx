import { Link } from "react-router-dom";

function Hero() {
  const navigation = [
    { name: "Home", href: "/home" },
    { name: "Projects", href: "/projects" },
    { name: "About Me", href: "/about" }
  ];

  return (
    <>
      {/* Navbar */}
      <header>
        <nav
          aria-label="Global"
          className="flex py-6 shadow-xl relative isolate bg-nav-background"
        >
          <div className="flex justify-center w-full flex-1">
            <div className="flex w-1/2 justify-between">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm leading-8 hover:scale-110 hover:duration-300 transition duration-1000 text-gray-900 md:text-lg lg:text-xl"
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
