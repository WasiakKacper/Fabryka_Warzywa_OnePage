"use client";
import { useState } from "react";

type MenuBtnProps = {
  toggle: () => void;
};

const MenuBtn: React.FC<MenuBtnProps> = ({ toggle }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={() => {
        toggle();
        handleToggle();
      }}
      className="z-50 w-8 aspect-square flex flex-col justify-evenly items-center lg:hidden rounded-md bg-gray-300/20 backdrop-blur-xs text-white border border-white  cursor-pointer *:transition-all *:duration-300 *:ease-in-out"
    >
      <span
        className={`w-[75%] h-[1.8px] bg-white origin-center ${isActive ? "rotate-45 translate-y-2" : ""}`}
      ></span>
      <span
        className={`w-[75%] h-[1.8px] bg-white ${isActive ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        className={`w-[75%] h-[1.8px] bg-white origin-center ${isActive ? "-rotate-45 -translate-y-2" : ""}`}
      ></span>
    </button>
  );
};

export default MenuBtn;
