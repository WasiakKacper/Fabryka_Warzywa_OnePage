import Image from "next/image";

type LangBtnProps = {
  visibility: string;
};

const LangBtn: React.FC<LangBtnProps> = ({ visibility }) => {
  return (
    <button
      className={`${visibility} justify-center items-center w-8 aspect-square rounded-md bg-gray-300/20 backdrop-blur-xs text-white border border-white cursor-pointer`}
    >
      <Image
        className="w-[90%]"
        src={"/language.svg"}
        alt={"Choose language"}
        width={30}
        height={30}
      />
    </button>
  );
};

export default LangBtn;
