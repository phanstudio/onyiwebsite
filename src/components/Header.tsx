// export function Header() {
//   return (
//     <nav className="flex items-center justify-start px-10 py-6">
//       {/* Logo */}
//       <a href="/">
//         <h2 className="m-0 text-2xl font-semibold uppercase">Dee</h2>
//       </a>

//       {/* Desktop Navigation */}
//       <ul className="items-center justify-end flex-grow hidden p-0 m-0 mb-2 ml-8 md:flex">
//         <li className="inline-block p-2 mx-2 my-0">
//           <a 
//             className="p-1 mr-2 text-sm font-bold no-underline cursor-pointer hover:underline hover:text-[#D97706]" 
//             href="/projects"
//           >
//             <span>Dev Projects</span>
//           </a>
//         </li>
//         <li className="inline-block p-2 mx-2 my-0">
//           <a 
//             className="p-1 mr-2 text-sm font-bold no-underline cursor-pointer hover:underline hover:text-[#D97706]" 
//             href="/notes"
//           >
//             <span>Notes</span>
//           </a>
//         </li>
//         <li className="inline-block p-2 mx-2 my-0">
//           <a 
//             className="p-1 mr-2 text-sm font-bold no-underline cursor-pointer hover:underline hover:text-[#D97706]" 
//             href="/art"
//           >
//             <span>Art</span>
//           </a>
//         </li>
//       </ul>

//       {/* Mobile Menu Button */}
//       <article className="relative flex-grow block pt-3 text-right md:hidden">
//         <button className="inline-block w-6 bg-transparent border-none outline-none cursor-pointer md:hidden focus:outline-none">
//           <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg"></span>
//           <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg"></span>
//           <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg"></span>
//         </button>
//       </article>
//     </nav>
//   );
// }

// Header.jsx
import { useMemo, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = useMemo(
    () => [
      { to: "/projects", label: "Dev Projects" },
      { to: "/notes", label: "Notes" },
      { to: "/art", label: "Art" },
    ],
    []
  );

  const baseLink =
    "relative inline-flex items-center p-1 mr-2 text-sm font-bold no-underline cursor-pointer transition-colors hover:text-[#D97706]";

  return (
    <header className="w-full">
      <nav className="flex items-center justify-start px-6 py-6 sm:px-10">
        {/* Logo */}
        <NavLink to="/" className="shrink-0">
          <h2 className="m-0 text-2xl font-semibold uppercase">Dee</h2>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="items-center justify-end flex-grow hidden p-0 m-0 mb-2 ml-8 md:flex">
          {links.map((link) => (
            <li key={link.to} className="inline-block p-2 mx-2 my-0">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? "text-[#D97706]" : "text-gray-800"}`
                }
              >
                <span>{link.label}</span>

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-[#D97706] transition-transform duration-200 group-hover:scale-x-100" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="relative flex-grow block pt-3 text-right md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center w-10 h-10 bg-transparent border-none outline-none cursor-pointer focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            <span className="block w-6">
              <span
                className={[
                  "block w-full mb-1.5 border-t-2 border-solid border-gray-700 rounded-lg transition-transform duration-200",
                  open ? "translate-y-2 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block w-full mb-1.5 border-t-2 border-solid border-gray-700 rounded-lg transition-opacity duration-200",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "block w-full mb-1.5 border-t-2 border-solid border-gray-700 rounded-lg transition-transform duration-200",
                  open ? "-translate-y-2 -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={[
          "md:hidden px-6 sm:px-10",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="rounded-xl border border-gray-200 bg-white shadow-[0_2px_11px_2px_rgba(0,0,0,.1)] p-4">
          <ul className="m-0 p-0 space-y-2">
            {links.map((link) => (
              <li key={link.to} className="list-none">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    [
                      "block rounded-lg px-3 py-2 text-sm font-bold transition-colors",
                      isActive ? "text-[#D97706]" : "text-gray-800",
                      "hover:text-[#D97706] hover:bg-gray-50",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}