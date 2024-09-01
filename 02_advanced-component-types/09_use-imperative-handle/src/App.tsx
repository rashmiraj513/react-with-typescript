import { useRef } from 'react';

import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
import Form, { FormHandle } from './components/Form.tsx';

const App = () => {
  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  };

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type='text' label='Name' id='name' />
        <Input type='number' label='Age' id='age' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
};

export default App;
