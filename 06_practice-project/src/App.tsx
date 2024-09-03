import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Root from './pages/Root';
import SessionsPage from './pages/Sessions';
import SessionPage from './pages/Session';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'sessions', element: <SessionsPage /> },
      { path: 'sessions/:id', element: <SessionPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
