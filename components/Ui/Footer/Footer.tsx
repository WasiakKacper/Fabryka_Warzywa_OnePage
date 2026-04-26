"use client";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black flex flex-col justify-center items-center p-4 *:p-2 text-white">
      <div className="w-full flex justify-center">
        <Logo />
      </div>

      <article className="w-[90%] lg:w-[35%] border-y border-white text-center flex gap-10 justify-center py-4">
        <a
          className="hover:text-[#3b5998] transition duration-300 gap-2 flex items-center"
          href="https://www.facebook.com/profile.php?id=100068391292702"
        >
          Facebook <FaFacebookSquare className="mb-0.5 text-xl" />
        </a>
        <a
          className="group flex items-center gap-2 text-white transition duration-300"
          href="https://www.instagram.com/fabrykawarzyw/"
        >
          <span className="leading-none transition duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888]">
            Instagram
          </span>

          <FaInstagram className="text-xl transition duration-300 group-hover:text-[#bc1888]" />
        </a>
      </article>
      <ul className="w-full flex gap-5 justify-center text-[10px] lg:text-0.9xl *:cursor-pointer">
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
        <li className="hover:text-blue-400 transition-colors ease">
          <NextLink href="privacy-policy">Polityka prywatności</NextLink>
        </li>
      </ul>
      <p>© 2026 Fabryka Warzyw</p>
    </footer>
  );
};

export default Footer;
