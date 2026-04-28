import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  const contactOptions = ["options.phone", "options.email", "options.address"];

  return (
    <section className="w-full h-screen flex flex-col  font-bold p-10 bg-[#f1f1f1]">
      <ul className="w-full h-[90%] text-center flex flex-col justify-center items-center text-0.8xl lg:text-3xl">
        {contactOptions.map((item) => (
          <li key={item}>{t(item)}</li>
        ))}
      </ul>
      <h2 className="w-full h-[10%] text-5xl lg:text-8xl text-end">
        {t("title")}
      </h2>
    </section>
  );
};

export default Contact;
