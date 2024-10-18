"use client";

import NavLink from "./NavLink";
import { Home, History, User, LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] flex justify-center items-center fixed left-0 bottom-0 shadow-sm z-50 bg-white">
      <div className="w-full flex items-center justify-center">
        <div className="flex md:space-x-32 space-x-20">
          <NavLink href="/" icon={<Home size={30} absoluteStrokeWidth />} />
          <NavLink
            href="/history"
            icon={<History size={30} absoluteStrokeWidth />}
          />
          <NavLink
            href="/profile"
            icon={<User size={30} absoluteStrokeWidth />}
          />
          <NavLink
            href="/logout"
            icon={<LogOut size={30} absoluteStrokeWidth />}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
