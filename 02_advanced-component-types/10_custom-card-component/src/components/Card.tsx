// A custom Card component that has multiple slots for content
// Main slot -> children prop
// Actions slot -> actions prop

import { type ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
  // "actions" is like an extra "slot" of this component.
  // It's the same type as the children prop, since we expect JSX code as a prop value.
  actions: ReactNode;
};

const Card = ({ title, children, actions }: CardProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
      {actions}
    </section>
  );
};

export default Card;
