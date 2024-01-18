import React, { useState } from 'react';
import '../style/AddGoal.css';

function AddGoal({ onAddGoal }) {
  const [newGoal, setNewGoal] = useState('');

  const handleSubmit = () => {
    onAddGoal(newGoal);
    setNewGoal('');
  };

  return (
    <div className="add-goal-container">
      <input
        className="add-goal-input"
        type="text"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        placeholder="Nueva meta...."
      />
      <button className="add-goal-button" onClick={handleSubmit}>Agregar</button>
    </div>
  );
}

export default AddGoal;
