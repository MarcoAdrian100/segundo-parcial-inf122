import React from 'react';
import '../style/GoalCounter.css';

function GoalCounter({ completed, pending }) {
  return (
    <div className="goal-counter">
      <span className="completed-count">Completadas: {completed}</span>
      <span className="pending-count">Pendientes: {pending}</span>
    </div>
  );
}

export default GoalCounter;
