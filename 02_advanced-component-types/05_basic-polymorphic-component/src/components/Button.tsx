import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never };

type LinkProps = ComponentPropsWithoutRef<'a'> & { href?: string };

type ButtonAndLinkProps = ButtonProps | LinkProps;

// 'props is LinkProps' is Type Predicate which is used to provide more information about the function in TypeScript.
const isLink = (props: ButtonAndLinkProps): props is LinkProps => {
  return 'href' in props;
};

const Button = (props: ButtonAndLinkProps) => {
  if (isLink(props)) {
    return <a className='button' {...props}></a>;
  }

  return <button className='button' {...props}></button>;
};

export default Button;
