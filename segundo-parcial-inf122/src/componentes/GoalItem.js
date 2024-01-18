import React from 'react';
import '../style/GoalItem.css';

function GoalItem({ goal, onComplete, onDelete }) {
  return (
    <div className="goal-item">
      <span className="goal-text">{goal.text}</span>
      <button className="delete-button" onClick={() => onDelete(goal.id)}>🗑</button>
      <button className="complete-button" onClick={() => onComplete(goal.id)}>✓</button>
    </div>
  );
}

export default GoalItem;
