import { FormEvent, useEffect, useRef } from 'react';

import Modal, { ModalHandle } from '../ui/Modal.tsx';
import Input from '../ui/Input.tsx';
import Button from '../ui/Button.tsx';
import { Session, useSessionsContext } from '../../store/SessionsContext.tsx';

type BookSessionProps = {
  session: Session;
  onDone: () => void; // onDone will "tell" the parent component that the BookSession component should be removed from the DOM
};

const BookSession = ({ session, onDone }: BookSessionProps) => {
  const modal = useRef<ModalHandle>(null);
  const sessionsCtx = useSessionsContext();

  // useEffect is used to open the Modal via its exposed `open` method when the component is mounted
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data); // would normally be sent to a server, together with session data
    sessionsCtx.bookSession(session);
    onDone();
  };

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label='Your name' id='name' name='name' type='text' />
        <Input label='Your email' id='email' name='email' type='email' />
        <p className='actions'>
          <Button type='button' textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
};

export default BookSession;
