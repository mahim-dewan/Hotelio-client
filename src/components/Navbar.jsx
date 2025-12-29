"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

/**
 * Navigation configuration
 * Keeping links outside component prevents re-creation on re-render
 */
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const showSolidNav = isScrolled || !isHome;

  /**
   * Handle navbar background change on scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${showSolidNav ? "sticky" : "fixed"} top-0 left-0 w-full`}>
      <div
        className={`mx-auto max-w-350 px-4 flex items-center justify-between transition-all duration-500 z-40 p-2 lg:p-4 ${
          showSolidNav
            ? " bg-primary shadow-md text-light backdrop-blur-lg"
            : "bg-none"
        }`}
      >
        {/* Logo */}
        <Logo />

        {/* ================= Desktop Navigation ================= */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map(({ name, path }) => {
            const isActive = pathname === path;

            return (
              <Link
                key={path}
                href={path}
                className={`group flex flex-col gap-0.5 font-medium text-light`}
              >
                {name}
                <div
                  className={`
                h-0.5 transition-all duration-300 bg-light
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* ================= Desktop (Right) Login Button ================= */}
        <div
          className={`rainbow relative z-0 overflow-hidden p-0.5 hidden md:flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 `}
        >
          <button
            className={`px-8 text-sm py-3  rounded-full font-medium backdrop-blur ${
              showSolidNav
                ? "bg-light text-primary/90"
                : "bg-primary/90 text-white"
            }`}
          >
            Login
          </button>
        </div>

        {/* ================= Mobile Menu Button ================= */}
        <div className="flex items-center gap-3 md:hidden">
          <Menu onClick={() => setIsMenuOpen(true)} className={`text-light`} />
        </div>

        {/* ================= Mobile Menu ================= */}
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={setIsMenuOpen}
          pathname={pathname}
        />
      </div>
    </nav>
  );
};

export default Navbar;

/* -------------------------------------------------------------------------- */
/*                                Sub Components                               */
/* -------------------------------------------------------------------------- */

const MobileMenu = ({ isOpen, onClose, pathname }) => {
  return (
    <aside
      className={`fixed top-0 left-0 w-2/3 h-screen border-r border-muted flex flex-col gap-4 items-center bg-light text-primary transition-all duration-500 md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <X className="absolute top-4 right-4" onClick={() => onClose(false)} />

      <nav className="flex flex-col items-center gap-4 mt-20">
        {navLinks.map(({ name, path }) => {
          const isActive = pathname === path;

          return (
            <Link key={path} href={path} onClick={() => onClose(false)}>
              {name}
              <div
                className={`
                h-0.5 transition-all duration-300 bg-primary
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}
              `}
              />
            </Link>
          );
        })}
      </nav>

      <div className="rainbow relative z-0 bg-primary overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
        <button className="px-8 text-sm py-3 text-light rounded-full font-medium bg-primary backdrop-blur">
          Login
        </button>
      </div>
    </aside>
  );
};
