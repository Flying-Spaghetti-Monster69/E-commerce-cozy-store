interface Props {
  label: string;
  name: string;
  list: string[];
  defaultValue?: string;
  size?: string;
}
const FormSelect = ({ label, size, name, list, defaultValue }: Props) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        className={`select select-bordered ${size}`}
        name={name}
        id={name}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
