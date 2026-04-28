"use client";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

type navLinksType = {
  key: string;
  to: string;
};

const Footer = () => {
  const t = useTranslations("Footer.navs");

  const navLinks: navLinksType[] = [
    { key: "home", to: "home" },
    { key: "offer", to: "offer" },
    { key: "about", to: "about" },
    { key: "contact", to: "contact" },
  ];

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
        {navLinks.map((link) => (
          <li key={link.key}>
            <Link to={link.to} smooth={true}>
              {t(link.key)}
            </Link>
          </li>
        ))}
        <li className="hover:text-blue-400 transition-colors ease">
          <NextLink href="privacy-policy">{t("privacyPolicy")}</NextLink>
        </li>
      </ul>
      <p>© 2026 Fabryka Warzyw</p>
    </footer>
  );
};

export default Footer;
