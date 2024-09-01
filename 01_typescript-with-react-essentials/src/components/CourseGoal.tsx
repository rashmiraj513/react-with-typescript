// In the following import, 'type' denotes that ReactNode is just a type used for children prop.
// import { type FC, type PropsWithChildren, type ReactNode } from 'react';
import { type ReactNode } from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';

type CourseGoalProps = {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  children: ReactNode;
};

// Alternative way to define the props type where PropsWithChildren is a type.
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// Alternative way to define the props type where FC is a type.
// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {

const CourseGoal = ({ id, title, onDelete, children }: CourseGoalProps) => {
  return (
    <article>
      <h2>{title}</h2>
      <button
        onClick={() => onDelete(id)}
        style={{ fontSize: '1.8rem' }}
        className='delete-btn'
      >
        <HiOutlineTrash />
      </button>
      {children}
    </article>
  );
};

export default CourseGoal;
