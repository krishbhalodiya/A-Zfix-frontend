import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function IndexPage() {
  const [problem, setProblem] = useState('');
  const navigate = useNavigate();

  const handleEnter = () => {
    if (problem) {
      // Save the problem to localStorage
      localStorage.setItem('problem', problem);
      // Navigate to the schedule page
      navigate('/schedule');
    } else {
      alert('Please enter your problem.');
    }
  };

  return (
    <div>
      <div className="header">
        <div className="logo">A-Zfix</div>
        <div className="auth-buttons">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
      <div className="input-container">
        <h1>We make your issue our problem</h1>
        <input 
          type="text" 
          placeholder="Enter your problem" 
          value={problem} 
          onChange={(e) => setProblem(e.target.value)} 
          required 
        />
        <button onClick={handleEnter}>Enter</button>
      </div>
    </div>
  );
}

export default IndexPage;
