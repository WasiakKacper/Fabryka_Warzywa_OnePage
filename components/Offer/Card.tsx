import Image from "next/image";

type CardProps = {
  url: string;
};

const Card: React.FC<CardProps> = ({ url }) => {
  return (
    <div className="min-w-70 lg:min-w-120 h-100 lg:h-140 relative">
      <Image
        src={url}
        alt="Offer card"
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  );
};

export default Card;
