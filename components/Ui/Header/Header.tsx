"use client";
import { useState } from "react";
import Logo from "../Logo/Logo";
import LangBtn from "./LangBtn";
import MenuBtn from "./MenuBtn";
import Menu from "./Menu";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { useTranslations } from "next-intl";

type navLinksType = {
  key: string;
  to: string;
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  const t = useTranslations("Header.navs");

  const navLinks: navLinksType[] = [
    { key: "home", to: "home" },
    { key: "offer", to: "offer" },
    { key: "about", to: "about" },
    { key: "contact", to: "contact" },
  ];

  return (
    <header className="top-0 left-0 w-full z-50 p-4 flex justify-between items-center fixed font-sans">
      <div className="flex flex-1 justify-start items-center">
        <NextLink href="/">
          <Logo />
        </NextLink>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <nav className="hidden lg:block p-0.75 w-[70%] rounded-xl bg-gray-300/20 backdrop-blur-xs text-white border border-white">
          <ul className="w-full flex justify-evenly *:cursor-pointer *:text-center">
            {navLinks.map((link) => (
              <li key={link.key}>
                <Link to={link.to} smooth={true}>
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LangBtn visibility="flex lg:hidden" />
      </div>
      <div className="flex flex-1 justify-end items-center">
        <LangBtn visibility="hidden lg:flex" />
        <MenuBtn isOpen={isActive} toggle={handleToggle} />
      </div>
      <Menu state={isActive} close={handleClose} />
    </header>
  );
};

export default Header;
