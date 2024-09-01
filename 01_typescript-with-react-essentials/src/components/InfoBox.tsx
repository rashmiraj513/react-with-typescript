import { type ReactNode } from 'react';

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};

type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;
  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p className='display-2'>{children}</p>
      </aside>
    );
  }

  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning-${severity}`}>
      <h2 className='display-1'>Warning</h2>
      <p className='display-2'>{children}</p>
    </aside>
  );
};

export default InfoBox;
