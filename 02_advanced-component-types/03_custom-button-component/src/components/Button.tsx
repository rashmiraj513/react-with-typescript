import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  type: 'button';
} & ComponentPropsWithoutRef<'button'>;

type LinkProps = {
  type: 'link';
} & ComponentPropsWithoutRef<'a'>;

const Button = (props: ButtonProps | LinkProps) => {
  if (props.type === 'link') {
    return <a className='button' {...props}></a>;
  }

  return <button className='button' {...props}></button>;
};

export default Button;
