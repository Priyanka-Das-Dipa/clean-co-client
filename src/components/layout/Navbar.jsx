import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="menu menu-horizontal flex gap-5 font-bold">
      {/* Navbar menu content here */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
        }
      >
        LogIn
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
        }
      >
        Register
      </NavLink>
    </ul>
  );
};

export default Navbar;
