import { type ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

const Container = ({ as: Component }: ContainerProps) => {
  return (
    <>
      <Component style={{ marginRight: '1rem' }} />
      <Component>A Button</Component>
    </>
  );
};

export default Container;
