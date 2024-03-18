import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/company_logo.png";

export const Header = () => {
  const activeClass = " shadow p-3 bg-zinc-800 text-lg rounded-lg text-white ";
  const inactiveClass = "p-3 text-lg bg-transparent";
  return (
    <header className="max-w-7xl flex m-auto justify-between items-center border-b border-zinc-800 ">
      <div className="flex p-4 items-center">
        <Link to={"/"}>
          <img className="max-w-12" src={Logo} alt="company logo" />
        </Link>
        <Link to="/">
          <h1 className="text-2xl font-semibold p-2">Shopping Cart</h1>
        </Link>
      </div>
      <nav className=" flex justify-between w-40 ">
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          to="/cart"
        >
          Cart
        </NavLink>
      </nav>
      <span className="flex">
        <p className="text-lg">Cart: </p>
        <p className="text-lg">{localStorage.getItem("itemCount")}</p>
      </span>
    </header>
  );
};
