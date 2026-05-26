"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { useAuth } from "@/context/AuthProvider";
import { apiClient } from "@/lib/apis-client";
import { LOGOUT, TOGGLE_AUTH_BOX } from "@/reducers/auth/actions";
import ProfileModal from "./ProfileModal";
import { navLinks } from "@/constants/navMenuItems";
import LineSpinnerLoader from "../components/LineSpinnerLoader";

const Navbar = () => {
  const pathname = usePathname();
  const { state, dispatch } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Track scroll state for navbar background
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if current page is homepage
  const isHome = pathname === "/";

  // Navbar becomes solid on scroll or non-home pages
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

  /**
   * Handle sign out
   * Keeps API logic isolated
   */
  const handleSignOut = async () => {
    await apiClient.signout();
    setIsMenuOpen(false);
    dispatch(LOGOUT());
  };

  return (
    <nav
      className={`${showSolidNav ? "sticky" : "fixed"} top-0 left-0 w-full z-30`}
    >
      <div
        className={`mx-auto max-w-350 px-4 flex items-center justify-between gap-4 transition-all duration-500 z-40 p-2 lg:p-4 ${
          showSolidNav
            ? "bg-primary shadow-md text-light backdrop-blur-lg"
            : "bg-none"
        }`}
      >
        {/* Logo */}
        <Logo />

        {/* ================= Desktop Navigation ================= */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map(({ name, path, role }) => {
            const isActive =
              pathname === path || pathname.startsWith(path + "/");

            if (role === "user") return null;

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
        {!state.isAuthReady ? (
          <LineSpinnerLoader size={30} className={"hidden md:block px-12"} />
        ) : state.user ? (
          <div className="hidden md:block">
            {/* Profile Trigger */}
            <button
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-light/10 transition-all border border-light/20"
            >
              <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-light/20">
                {state.user.name?.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium text-light">
                {state.user.name}
              </span>
            </button>

            <ProfileModal
              isOpen={isProfileOpen}
              onClose={() => setIsProfileOpen(false)}
              user={state.user}
              onSignOut={handleSignOut}
            />
          </div>
        ) : (
          <div
            className={`rainbow relative z-0 overflow-hidden p-0.5 hidden md:flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 `}
          >
            <Button
              className={`px-8 text-sm py-3  rounded-full font-medium backdrop-blur ${
                showSolidNav
                  ? "bg-light text-primary/90"
                  : "bg-primary/90 text-white"
              }`}
              onClick={() => dispatch(TOGGLE_AUTH_BOX())}
            >
              Sign In
            </Button>
          </div>
        )}

        {/* ================= Mobile Menu Button ================= */}
        {!state.isAuthReady ? (
          <LineSpinnerLoader size={26} className={"md:hidden"} />
        ) : (
          <div className="flex items-center gap-3 md:hidden">
            <Menu
              onClick={() => setIsMenuOpen(true)}
              className={`text-light`}
            />
          </div>
        )}

        {/* ================= Mobile Menu ================= */}
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={setIsMenuOpen}
          onSignOut={handleSignOut}
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

// Mobile sidebar
const MobileMenu = ({ isOpen, onClose, onSignOut, pathname }) => {
  const { state, dispatch } = useAuth();
  const user = state?.user;

  // 2. Prevent SSR (Server Side Rendering) errors
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
    }

    // Cleanup: Fixes the scroll if the user navigates away
    // while the menu is still open
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-60 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => onClose(false)}
      />
      <aside
        className={`fixed top-0 left-0 z-999 w-2/3 h-dvh border-r border-muted flex flex-col gap-4 items-start bg-light text-primary transition-all duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <X className="absolute top-2 right-2" onClick={() => onClose(false)} />

        {state?.user ? (
          <div className="py-4 px-2 bg-slate-50 border-b border-slate-100">
            <div className="flex items-center justify-start gap-1">
              <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-inner">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-slate-500 truncate italic">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Logo className={"text-primary p-2 m-0"} />
        )}

        <nav
          className={`flex w-full flex-col items-start px-4 gap-4 ${!user && "mt-0"}`}
        >
          {navLinks.map(({ name, path, role, icon }) => {
            const isActive =
              pathname === path || pathname.startsWith(path + "/");

            if (role === "user" && !user) return null;

            return (
              <Link
                key={path}
                href={path}
                onClick={() => onClose(false)}
                className={`flex items-center gap-2 p-2 w-full font-semibold 
                ${isActive && "border border-primary rounded-md"}`}
              >
                <span>{icon}</span>
                <span>{name}</span>
              </Link>
            );
          })}
        </nav>

        {state.user ? (
          <div className="w-full h-full flex items-end justify-center py-6 px-4">
            <Button
              onClick={() => {
                onSignOut();
                onClose();
              }}
              className="flex items-center justify-center gap-3 p-3 w-full text-highlight border border-highlight font-bold hover:bg-red-50 rounded-lg transition-all duration-200 group"
            >
              <LogOut
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
              <span className="text-lg font-semibold">Sign out</span>
            </Button>
          </div>
        ) : (
          <div className="w-full h-full flex items-end justify-center py-6 px-4">
            <div className="rainbow relative w-full z-0 bg-primary overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
              <Button
                onClick={() => {
                  onClose(false);
                  dispatch(TOGGLE_AUTH_BOX());
                }}
                className="px-8 text-sm py-3 text-light rounded-full font-medium bg-primary backdrop-blur w-full"
              >
                Sign In
              </Button>
            </div>
          </div>
        )}
      </aside>{" "}
    </>,
    document.body,
  );
};
