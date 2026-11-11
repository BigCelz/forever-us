import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/our-story", label: "Our Story" },
  { to: "/details", label: "Details" },
  { to: "/faq", label: "FAQ" },
  { to: "/photobook", label: "Photo Book" },
  { to: "/asoebi", label: "Asoebi" },
];

const linkBase =
  "text-sm tracking-wideish uppercase text-ink/60 hover:text-ink underline-offset-8 transition-colors duration-200";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-40 bg-cream border-b border-sage-light">
      <div className="h-20 flex items-center justify-between md:px-6 px-3">
        {/* Brand */}
        <NavLink to="/" end className="flex items-center gap-3">
          {/* Swap this span for <img src="/logo.png" ... /> once you have a real logo */}
          <span className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center font-display text-sm text-ink">
            A&E
          </span>
          <span className="font-display md:text-4xl text-2xl text-green-600">A + E</span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-green-600! underline" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden relative z-50 w-9 h-9 flex items-center justify-center text-ink"
        >
          {open ? <HiX size={30} /> : <RiMenu3Fill size={30} />}
        </button>
      </div>

      {/* Mobile menu — starts right below the nav */}
      {open && (
        <div className="md:hidden fixed top-20 left-0 right-0 bottom-0 z-50 bg-ink flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-2xl italic tracking-wideish transition-colors duration-200 ${
                  isActive ? "text-green-600" : "text-cream/70 hover:text-cream"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
