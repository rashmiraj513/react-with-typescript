import AddTimer from './components/AddTimer.tsx';
import Timers from './components/Timers.tsx';
import Header from './components/Header.tsx';
import TimersContextProvider from './store/TimersContext.tsx';

const App = () => {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
};

export default App;
