import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import UpcomingSessions from '../sessions/UpcomingSessions.tsx';
import Button from '../ui/Button.tsx';

const MainHeader = () => {
  const [upcomingSessionVisible, setUpcomingSessionVisible] = useState(false);

  const showUpcomingSessions = () => {
    setUpcomingSessionVisible(true);
  };

  const hideUpcomingSessions = () => {
    setUpcomingSessionVisible(false);
  };

  return (
    <>
      {upcomingSessionVisible && (
        <UpcomingSessions onClose={hideUpcomingSessions} />
      )}
      <header id='main-header'>
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : '')}
                end
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/sessions'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
