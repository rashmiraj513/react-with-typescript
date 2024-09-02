import { useTimersContext } from '../store/TimersContext.tsx';
import Button from './ui/Button.tsx';

const Header = () => {
  const timersContext = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>
      <Button
        onClick={
          timersContext.isRunning
            ? timersContext.stopTimers
            : timersContext.startTimers
        }
      >
        {timersContext.isRunning ? 'Stop' : 'Start'} Timers
      </Button>
    </header>
  );
};

export default Header;
