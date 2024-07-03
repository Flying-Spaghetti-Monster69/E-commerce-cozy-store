interface Props {
  text: string;
}
const SubmitBtn = ({ text }: Props) => {
  return (
    <button type="submit" className="btn btn-primary">
      {text}
    </button>
  );
};
export default SubmitBtn;
