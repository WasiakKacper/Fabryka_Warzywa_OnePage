import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-black flex flex-col justify-center items-center p-4 *:p-2 text-white">
      <div className="w-full flex justify-center">
        <Logo />
      </div>

      <article className="w-[90%] lg:w-[35%] border-y border-white text-center flex gap-10 justify-center">
        <a
          className="hover:-translate-y-1  hover:text-[#3b5998] transition duration-300 p-2"
          href="https://www.facebook.com/profile.php?id=100068391292702"
        >
          Facebook
        </a>
        <a
          className=" text-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888]
              hover:-translate-y-1 transition duration-300 p-2"
          href="https://www.instagram.com/fabrykawarzyw/"
        >
          Instagram<span className="icon-instagram"></span>
        </a>
      </article>
      <ul className="w-full flex gap-5 justify-center text-[10px] lg:text-0.9xl">
        <li>Home</li>
        <li>Oferta</li>
        <li>O nas</li>
        <li>Kontakt</li>
        <li>Polityka prywatności</li>
      </ul>
      <p>© 2026 Fabryka Warzyw</p>
    </footer>
  );
};

export default Footer;
