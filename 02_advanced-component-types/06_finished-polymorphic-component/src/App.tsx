import Button from './components/Button.tsx';
import Container from './components/Container.tsx';

const App = () => {
  return (
    <main>
      <Container as={Button}>Click Me!</Container>
    </main>
  );
};

export default App;
