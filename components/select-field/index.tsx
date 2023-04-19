interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<object | number>;
  selectedValue: number | string;
}

interface OptionProps {
  name: number;
  value: number;
}

function SelectField(props: SelectFieldProps) {
  const { options, selectedValue, ...restProps } = props;
  return (
    <select defaultValue={selectedValue} {...restProps}>
      {options.map((option: OptionProps, index) => {
        const { name, value } = option;
        return (
          <option key={index} value={value}>
            {name}
          </option>
        );
      })}
    </select>
  );
}

export default SelectField;
