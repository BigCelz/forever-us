import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../assets/img07.jpeg";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/our-story", label: "Our Story" },
  { to: "/details", label: "Details" },
  { to: "/faq", label: "FAQ" },
  { to: "/photobook", label: "Photo Book" },
  { to: "/asoebi", label: "Asoebi" },
];

const linkBase =
  "text-sm tracking-wideish uppercase text-[#4a3226]/60 hover:text-[#4a3226] underline-offset-8 transition-colors duration-200";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-40 bg-[#faf5ec] border-b border-[#e4e9d8]">
      <div className="h-20 flex items-center justify-between md:px-6 px-3">
        {/* Brand */}
        <NavLink to="/" end className="flex items-center gap-3">
          <img
            src={logo}
            alt="Faith & Isaac Logo"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-[#f2c9a9]"
          />

          <span className="font-display text-lg md:text-xl tracking-wideish text-[#4a3226]">
            Faith <span className="italic text-[#f2c9a9]">&</span> Isaac
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? "text-[#7a8b64]! hover:text-[#7a8b64]! font-semibold underline decoration-[#f2c9a9]"
                    : ""
                }`
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
          className="md:hidden relative z-50 w-9 h-9 flex items-center justify-center text-[#4a3226]"
        >
          {open ? <HiX size={30} /> : <RiMenu3Fill size={30} />}
        </button>
      </div>

      {/* Mobile menu — starts right below the nav */}
      {open && (
        <div className="md:hidden fixed top-20 left-0 right-0 bottom-0 z-50 bg-[#3a2a20] flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display text-2xl italic tracking-wideish transition-colors duration-200 ${
                  isActive
                    ? "text-[#f2c9a9]"
                    : "text-[#faf5ec]/70 hover:text-[#faf5ec]"
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
