import Button from './components/Button.tsx';

const App = () => {
  return (
    <main>
      <p>
        <Button type='button'>A Button</Button>
      </p>
      <p>
        <Button type='link' href='https://www.google.com'>
          A Link
        </Button>
      </p>
    </main>
  );
};

export default App;
