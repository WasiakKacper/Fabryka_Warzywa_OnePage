import Header from "../../../components/Ui/Header/Header";
import Footer from "../../../components/Ui/Footer/Footer";
import Paragraph from "../../../components/Ui/Paragraph/Paragraph";
import { useTranslations } from "next-intl";

type PolicySections = {
  heading: string,
  content: string,
}

const PrivacyPolicy = () => {

  const t = useTranslations('PrivacyPolicy');
  const sections = t.raw('sections') as PolicySections[]

  return (
    <main>
      <Header />

      <section className="w-full flex flex-col justify-center items-center">
        <h1 className="w-full py-15 p-5 text-2xl text-center font-sans font-bold lg:text-5xl text-white bg-[#00C950]">
          {t('title')}
        </h1>
        {sections.map((item, index) => (
          <Paragraph
            key={index}
            heading={item.heading}
            content={item.content}
          />
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
