import Header from "../../components/Ui/Header/Header";
import Footer from "../../components/Ui/Footer/Footer";
import TextContent from "./textContent";
import Paragraph from "../../components/Ui/Paragraph/Paragraph";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <main>
      <Header />

      <section className="w-full flex flex-col justify-center items-center">
        <h1 className="w-full py-15 p-5 text-2xl text-center font-sans font-bold lg:text-5xl text-white bg-[#00C950]">
          POLITYKA PRYWATNOŚCI
        </h1>
        {TextContent.map((item) => (
          <Paragraph
            key={item.heading}
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
