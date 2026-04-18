import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-black flex flex-col justify-center items-center p-4 *:p-2 text-white">
      <div className="w-full flex justify-center">
        <Logo />
      </div>

      <article className="w-[90%] lg:w-[35%] border-y border-white text-center flex gap-10 justify-center">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
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
