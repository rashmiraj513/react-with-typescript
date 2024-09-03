import { Outlet } from 'react-router-dom';
import MainHeader from '../components/navigation/MainHeader';
import SessionsContextProvider from '../store/SessionsContext';

const Root = () => {
  return (
    <SessionsContextProvider>
      <MainHeader />
      <Outlet />
    </SessionsContextProvider>
  );
};

export default Root;
