import IconButton from './components/IconButton.tsx';

const App = () => {
  const HeartIcon = () => <span>❤️</span>;

  return (
    <IconButton icon={HeartIcon} onClick={() => console.log('Button Clicked!')}>
      Like
    </IconButton>
  );
};

export default App;
