type ParagraphProps = {
  heading: string;
  content: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ heading, content }) => {
  return (
    <article className="w-[90%] lg:w-[80%] text-left py-10">
      <h3 className="font-bold lg:text-3xl">{heading}</h3>
      <p>{content}</p>
    </article>
  );
};

export default Paragraph;
