import Button from './components/Button.tsx';

const App = () => {
  return (
    <main>
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href='https://www.google.com'>A Link</Button>
      </p>
    </main>
  );
};

export default App;
