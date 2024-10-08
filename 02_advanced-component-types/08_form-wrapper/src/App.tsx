import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
import Form from './components/Form.tsx';

const App = () => {
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  };

  return (
    <main>
      <Form onSave={handleSave}>
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
