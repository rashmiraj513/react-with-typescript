import { type FormEvent, useRef } from 'react';

type NewGoalProps = {
  onAddGoal: (title: string, description: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  // By default, useRef returns undefined value which causes error when used with ref.
  // That's why assign initial value to null.
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newGoalTitle = title.current!.value;
    const newGoalDescription = description.current!.value;

    // This if condition will never run.
    if (!newGoalTitle || !newGoalDescription) {
      return;
    }
    e.currentTarget.reset();
    onAddGoal(newGoalTitle, newGoalDescription);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input type='text' id='goal' ref={title} />
      </p>
      <br />
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input type='text' id='summary' ref={description} />
      </p>
      <p>
        <button className='display-1'>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
