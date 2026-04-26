"use client";

type MenuBtnProps = {
  isOpen: boolean;
  toggle: () => void;
};

const MenuBtn: React.FC<MenuBtnProps> = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={() => {
        toggle();
      }}
      className="z-50 w-8 aspect-square flex flex-col justify-evenly items-center lg:hidden rounded-md bg-gray-300/20 backdrop-blur-xs text-white border border-white  cursor-pointer *:transition-all *:duration-300 *:ease-in-out"
    >
      <span
        className={`w-[75%] h-[1.8px] bg-white origin-center ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`w-[75%] h-[1.8px] bg-white ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`w-[75%] h-[1.8px] bg-white origin-center ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
};

export default MenuBtn;
