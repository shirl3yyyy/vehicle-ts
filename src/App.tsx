import React from 'react';
import './App.css';
import Car from './vehicle';

function App() {
   const myCar = new Car("Toyota", "Camry", 2023);

  const handleStart = () => {
    myCar.start();
    alert(`Started ${myCar.year} ${myCar.make} ${myCar.model}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Vehicle App</h1>
      <p>Make: {myCar.make}</p>
      <p>Model: {myCar.model}</p>
      <p>Year: {myCar.year}</p>
      <button onClick={handleStart}>Start Engine</button>
    </div>
  
  );
}

export default App;
