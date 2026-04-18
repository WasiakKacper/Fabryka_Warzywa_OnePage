"use client";
import Card from "./Card";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Offer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-90%"]);

  return (
    <section
      ref={ref}
      className="h-screen lg:h-[150vh] bg-[#f1f1f1] overflow-hidden"
    >
      <h2 className="w-full text-center text-black font-bold font-sans lg:text-4xl py-15">
        Warzywa, Owoce, Soki, Przetwory...
      </h2>
      <motion.div className="relative h-[400vh]">
        <motion.article
          className="flex gap-5 justify-around py-5"
          style={{ x }}
        >
          <Card url="/vegetables.png" />
          <Card url="/juice.png" />
          <Card url="/jars.png" />
          <Card url="/fruits.png" />
          <Card url="/juice.png" />
        </motion.article>
      </motion.div>
    </section>
  );
};

export default Offer;
