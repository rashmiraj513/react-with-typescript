import { type ComponentPropsWithoutRef } from 'react';

// Setting up InputProps that contain the default <input> props as well as some custom props (label, id)
type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <div className='control'>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export default Input;
