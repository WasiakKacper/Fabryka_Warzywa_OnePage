import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  const content = t.raw("content") as string[];

  return (
    <section className="w-full h-[120vh] lg:h-[90vh] bg-[#00C950] flex flex-col lg:flex-row justify-evenly items-center text-white font-sans">
      <div className="flex flex-col justify-center font-bold text-8xl lg:text-9xl">
        <h2>{t("title_part1")}</h2>
        <h2>{t("title_part2")}</h2>
      </div>
      <div className="text-start text-xl w-[80%] lg:w-[50%]">
        {content.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
