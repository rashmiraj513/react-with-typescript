import { useTimersContext } from '../store/TimersContext.tsx';
import Timer from './Timer.tsx';

const Timers = () => {
  const { timers } = useTimersContext();

  return (
    <ul>
      {timers.map((timer, index) => (
        <li key={index}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
};

export default Timers;
