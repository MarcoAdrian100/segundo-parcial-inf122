import React, { useState } from 'react';
import Header from './componentes/Header';
import AddGoal from './componentes/AddGoal';
import GoalList from './componentes/goalList';
import GoalCounter from './componentes/GoalCounter';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (text) => {
    const newGoal = { id: Date.now(), text, completed: false };
    setGoals([...goals, newGoal]);
  };

  const completeGoal = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <body>
    <div className="app-container">
      <Header />
      <AddGoal onAddGoal={addGoal} />
      <GoalCounter
        completed={goals.filter((goal) => goal.completed).length}
        pending={goals.filter((goal) => !goal.completed).length}
      />
      <GoalList goals={goals} onComplete={completeGoal} onDelete={deleteGoal} />
    </div>
    </body>
  );
}

export default App;
