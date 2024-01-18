import React from 'react';
import GoalItem from './GoalItem';
import '../style/GoalList.css';

function goalList({ goals, onComplete, onDelete }) {
  return (
    <div className="goal-list">
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default goalList;
