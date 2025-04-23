const Navbar = () => {
  const navItems = [
    'Home', 'Pages', 'Shop By Categories', 'Audio Devices', 'Turntables & Accessories', 'Blogs', 'Sale',
  ];

  return (
    <nav className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ul className="flex flex-wrap justify-start space-x-4 sm:space-x-8 lg:space-x-12">
          {navItems.map((item, index) => (
            <li key={index} className="relative mb-4 sm:mb-0">
              <a
                href="#"
                className="text-text-dark group text-sm sm:text-base lg:text-lg transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-800 group-hover:w-full group-active:w-full transition-all duration-500"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
