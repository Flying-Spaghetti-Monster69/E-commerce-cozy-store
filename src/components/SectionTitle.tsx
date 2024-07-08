const SectionTitle = ({
  text,
  textStyles,
}: {
  text: string;
  textStyles?: string;
}) => {
  return (
    <div className="border-b border-base-300 pb-5">
      <h2
        className={`text-3xl font-bold tracking-wider capitalize ${textStyles}`}
      >
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
