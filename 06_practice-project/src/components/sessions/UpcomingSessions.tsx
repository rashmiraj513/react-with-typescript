import { useEffect, useRef } from 'react';

import Modal, { type ModalHandle } from '../ui/Modal.tsx';
import Button from '../ui/Button.tsx';
import UpcomingSession from './UpcomingSession.tsx';
import { useSessionsContext } from '../../store/SessionsContext.tsx';

type UpcomingSessionsProps = {
  onClose: () => void; // onClose is accepted to "tell" the parent component that the UpcomingSessions component should be removed from the DOM
};

const UpcomingSessions = ({ onClose }: UpcomingSessionsProps) => {
  const modal = useRef<ModalHandle>(null);
  const sessionsCtx = useSessionsContext();

  console.log(sessionsCtx);

  // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const handleCancelSession = (sessionId: string) => {
    sessionsCtx.cancelSession(sessionId);
  };

  const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessionsCtx.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <p className='actions'>
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
};

export default UpcomingSessions;
