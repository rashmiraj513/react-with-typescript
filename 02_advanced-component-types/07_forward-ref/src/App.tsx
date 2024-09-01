import { useRef } from 'react';

import Input from './components/Input.tsx';

const App = () => {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input id='test' label='Test' ref={input} />
    </main>
  );
};

export default App;
