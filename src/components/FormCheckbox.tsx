interface Props {
  label: string;
  name: string;
  defaultValue?: boolean;
  size?: string;
}
const FormCheckbox = ({ label, name, defaultValue, size }: Props) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
