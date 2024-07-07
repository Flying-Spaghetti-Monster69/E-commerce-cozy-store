interface propsTypes {
  label?: string;
  name: string;
  type: string;
  defaultValue?: string;
  size?: string;
}

const FormInput = ({ label, name, type, defaultValue, size }: propsTypes) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        placeholder={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </label>
  );
};
export default FormInput;
