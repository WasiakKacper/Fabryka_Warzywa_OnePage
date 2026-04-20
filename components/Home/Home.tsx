"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Link } from "react-scroll";

const Home = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 z-0 h-[110%] w-full"
      >
        <Image
          src="/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content*/}
      <div className="relative z-10  w-full text-center text-white flex flex-col justify-center items-center gap-10">
        <h2 className="text-2xl lg:text-6xl font-bold w-[80%] md:w-[60%] font-serif">
          Świeże warzywa i owoce od lokalnych rolników
        </h2>

        <Link to="offer" smooth={true} className="w-[50%] lg:w-[12%]">
          <button className="w-full text-0.5xl px-2 py-3 rounded-md bg-white/20 backdrop-blur-xs border border-white cursor-pointer font-sans hover:bg-white transition-colors ease-in-out duration-300 hover:text-black">
            Dowiedz się więcej
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
