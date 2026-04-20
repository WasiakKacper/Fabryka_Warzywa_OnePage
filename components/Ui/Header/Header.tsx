"use client";
import { useState } from "react";
import Logo from "../Logo/Logo";
import LangBtn from "./LangBtn";
import MenuBtn from "./MenuBtn";
import Menu from "./Menu";
import { Link } from "react-scroll";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <header className="top-0 left-0 w-full z-50 p-4 flex justify-between items-center fixed font-sans">
      <div className="flex flex-1 justify-start items-center">
        <Logo />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <nav className="hidden lg:block p-0.75 w-[70%] rounded-xl bg-gray-300/20 backdrop-blur-xs text-white border border-white">
          <ul className="w-full flex justify-evenly *:cursor-pointer *:text-center">
            <li>
              <Link to="home" smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="offer" smooth={true}>
                Oferta
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true}>
                O nas
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true}>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <LangBtn visibility="flex lg:hidden" />
      </div>
      <div className="flex flex-1 justify-end items-center">
        <LangBtn visibility="hidden lg:flex" />
        <MenuBtn toggle={handleToggle} />
      </div>
      <Menu state={isActive} close={handleClose} />
    </header>
  );
};

export default Header;
