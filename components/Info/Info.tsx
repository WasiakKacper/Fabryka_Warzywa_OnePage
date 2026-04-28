"use client";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Info = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "15%"]);

  //Setup translation using next-intl
  const t = useTranslations("Retail");

  return (
    <section
      ref={ref}
      className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center"
    >
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 z-0 h-[110%] w-full"
      >
        <Image
          src="/background2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content*/}
      <div className="relative z-10  w-full text-center text-white flex flex-col justify-center items-center gap-10">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold w-[90%] md:w-full font-sans">
          {t("title")}
        </h2>
        <p className="text-0.5xl lg:text-2xl w-[80%] md:w-[65%] font-sans text-start">
          {t("content")}
        </p>
      </div>
    </section>
  );
};

export default Info;
