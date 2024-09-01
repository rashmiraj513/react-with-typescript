import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (data: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log('Clearing form...');
          form.current?.reset();
        },
      };
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };

    return (
      <form onSubmit={handleSubmit} {...otherProps} ref={form}>
        {children}
      </form>
    );
  },
);

export default Form;
