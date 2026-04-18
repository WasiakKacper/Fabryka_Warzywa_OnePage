import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center w-17 lg:w-[50%]">
      <Image
        src={"/logo.png"}
        alt={"Logo - Fabryka Warzyw"}
        width={100}
        height={100}
      />
    </div>
  );
};

export default Logo;
