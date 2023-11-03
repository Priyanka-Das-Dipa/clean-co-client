
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user, logOut} = useAuth()
  return (
    <div className="w-full navbar bg-base-300">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2 font-bold">Clean_Co_Service</div>
        <div className="flex-none hidden lg:block">
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
              to="/register"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Register
            </NavLink>
            {user?.email ? <NavLink
            onClick={logOut}
              to="/login"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Log Out
            </NavLink>  :<NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              LogIn
            </NavLink>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
