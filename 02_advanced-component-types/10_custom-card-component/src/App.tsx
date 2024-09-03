import Card from './components/Card.tsx';

const App = () => {
  return (
    <main>
      <Card
        title='My Card'
        actions={
          <button onClick={() => console.log('Button clicked!')}>
            Click Me!
          </button>
        }
      >
        <p>Some Content</p>
      </Card>
    </main>
  );
};

export default App;
