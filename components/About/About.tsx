const About = () => {
  return (
    <section className="w-full h-[120vh] lg:h-[90vh] bg-[#00C950] flex flex-col lg:flex-row justify-evenly items-center text-white font-sans">
      <div className="flex flex-col justify-center font-bold text-8xl lg:text-9xl">
        <h2>O</h2>
        <h2>NAS</h2>
      </div>
      <p className="text-start text-xl w-[80%] lg:w-[50%]">
        Tworzymy miejsce, gdzie tradycja spotyka się z nowoczesnością –
        bezpośrednio z pola prosto do Twojego domu lub firmy.
        <br />
        <br />
        Naszym celem jest promowanie tego, co najlepsze z polskiej ziemi.
        Dlatego współpracujemy z lokalnymi rolnikami i producentami, którzy –
        podobnie jak my – stawiają na jakość, świeżość i naturalne metody upraw.
        Dzięki temu w naszym sklepie internetowym znajdziesz produkty, które
        mają smak prawdziwego ogrodu.
      </p>
    </section>
  );
};

export default About;
