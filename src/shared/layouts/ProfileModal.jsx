import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";
import { profileMenuItems } from "@/constants/navMenuItems";
import Button from "../components/Button";

const ProfileModal = ({ isOpen, onClose, user, onSignOut }) => {
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark/5 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative mt-20 mr-4 h-fit w-72 bg-light rounded-2xl shadow-2xl border border-muted overflow-hidden animate-in slide-in-from-top-2 duration-200"
      >
        {/* User Header */}
        <div className="p-4 bg-light border-b border-muted">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-light font-bold shadow-inner">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-dark truncate">
                {user?.name}
              </p>
              <p className="text-xs text-dark/70 truncate italic">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-2 space-y-1">
          {profileMenuItems.map((item) => (
            <MenuLink
              key={item.label}
              path={item.path}
              icon={item.icon}
              label={item.label}
              onClose={onClose}
            />
          ))}

          <div className="my-2 border-t border-muted" />

          <Button
            onClick={() => {
              onSignOut();
              onClose();
            }}
            className="flex items-center gap-3 w-full p-3 text-highlight hover:bg-highlight/20 rounded-lg transition-all duration-200 group"
          >
            <LogOut
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
            <span className="text-sm font-semibold">Sign out</span>
          </Button>
        </nav>
      </div>
    </div>,
    document.body,
  );
};

// Sub-component for cleaner mapping
const MenuLink = ({ path, icon, label, onClose }) => (
  <Link
    href={path}
    onClick={onClose}
    className="flex items-center justify-between w-full p-3 hover:bg-slate-50 rounded-lg transition-colors group"
  >
    <div className="flex items-center gap-3 text-dark/60 group-hover:text-secondary">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
    <ChevronRight
      size={14}
      className="text-dark/40 group-hover:text-secondary transition-transform group-hover:translate-x-1"
    />
  </Link>
);

export default ProfileModal;
