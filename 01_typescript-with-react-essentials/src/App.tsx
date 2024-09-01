import { useState } from 'react';

import CourseGoalList from './components/CourseGoalList.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

const App = () => {
  // Pass the type of useState as generics.
  // useState<CourseGoal[]> denotes that the type of useState is an array of CourseGoal.
  // CourseGoal[] can also be written as Array<CourseGoal>
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (title: string, description: string) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title,
      description,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
};

export default App;
