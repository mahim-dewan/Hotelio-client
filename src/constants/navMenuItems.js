import { Bed, Calendar, Home, Info, RadioTower, Settings } from "lucide-react";

// Navigation items
export const navLinks = [
  { icon: <Home />, name: "Home", path: "/", role: "guest" },
  { icon: <Bed />, name: "Rooms", path: "/rooms", role: "guest" },
  {
    icon: <Calendar />,
    name: "My Bookings",
    path: "/mybookings",
    role: "user",
  },
  {
    icon: <Settings />,
    name: "Account Settings",
    path: "/settings",
    role: "user",
  },
  { icon: <Info />, name: "About", path: "/about", role: "guest" },
  { icon: <RadioTower />, name: "Contact", path: "/contact", role: "guest" },
];

// Profile Modal navigation items
export const profileMenuItems = [
  { label: "My Bookings", icon: <Calendar />, path: "/mybookings" },
  { label: "Account Settings", icon: <Settings />, path: "/settings" },
];
