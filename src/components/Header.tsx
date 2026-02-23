export function Header() {
  return (
    <nav className="flex items-center justify-start px-10 py-6">
      {/* Logo */}
      <a href="/">
        <h2 className="m-0 text-2xl font-semibold uppercase">Dee</h2>
      </a>

      {/* Desktop Navigation */}
      <ul className="items-center justify-end flex-grow hidden p-0 m-0 mb-2 ml-8 md:flex">
        <li className="inline-block p-2 mx-2 my-0">
          <a 
            className="p-1 mr-2 text-sm font-bold no-underline cursor-pointer hover:underline hover:text-[#D97706]" 
            href="/projects"
          >
            <span>Dev Projects</span>
          </a>
        </li>
        <li className="inline-block p-2 mx-2 my-0">
          <a 
            className="p-1 mr-2 text-sm font-bold no-underline cursor-pointer hover:underline hover:text-[#D97706]" 
            href="/notes"
          >
            <span>Notes</span>
          </a>
        </li>
        <li className="inline-block p-2 mx-2 my-0">
          <a 
            className="p-1 mr-2 text-sm font-bold no-underline cursor-pointer hover:underline hover:text-[#D97706]" 
            href="/art"
          >
            <span>Art</span>
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <article className="relative flex-grow block pt-3 text-right md:hidden">
        <button className="inline-block w-6 bg-transparent border-none outline-none cursor-pointer md:hidden focus:outline-none">
          <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg"></span>
          <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg"></span>
          <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg"></span>
        </button>
      </article>
    </nav>
  );
}