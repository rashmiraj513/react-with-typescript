type InputProps = {
  id: string;
  label: string;
};

const Input = ({ id, label }: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='text' />
    </p>
  );
};

export default Input;
