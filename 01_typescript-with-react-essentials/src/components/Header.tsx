import { type ReactNode } from 'react';

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      {/* Since, we are using same name then we can just distribute the image object like the following */}
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
