import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import logo from "../assets/logo-no-background-no-slogan.png";
import { useStoreTheme } from "../stores";

const themes = {
  light: "nord",
  dark: "night",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.light;
};

const NavBar = () => {
  const { theme: storeTheme, setStoreTheme } = useStoreTheme();
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  console.log(storeTheme);

  const handleTheme = () => {
    const { light, dark } = themes;
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  };

  useEffect(() => {
    setStoreTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start ">
          <NavLink
            to="/"
            className="hidden lg:flex h-14 text-3xl btn btn-ghost items-center"
          >
            <img src={logo} alt="C" className="h-full w-full" />
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="rounded-box w-52 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks styles="mx-1" />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink to="/cart" className="btn btn-ghost btn-circle ml-4 btn-md">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
