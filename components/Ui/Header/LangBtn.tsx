import Image from "next/image";
import { usePathname, Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

type LangBtnProps = {
  visibility: string;
};

const LangBtn: React.FC<LangBtnProps> = ({ visibility }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const nextLocale = locale === "pl" ? "en" : "pl";

  return (
    <button
      className={`${visibility} justify-center items-center w-8 aspect-square rounded-md bg-gray-300/20 backdrop-blur-xs text-white border border-white cursor-pointer`}
    >
      <Link
        href={pathname}
        locale={nextLocale} // To jest klucz do "magii" next-intl
        className={`${visibility} flex justify-center items-center w-8 aspect-square rounded-md bg-gray-300/20 backdrop-blur-xs text-white border border-white cursor-pointer hover:bg-gray-300/40 transition-colors`}
        title={`Switch to ${nextLocale.toUpperCase()}`}
      >
        <Image
          className="w-[90%]"
          src={"/language.svg"}
          alt={"Choose language"}
          width={30}
          height={30}
        />
      </Link>
    </button>
  );
};

export default LangBtn;
