import React from 'react';
import Calc from './components/Calc/Calc';
import './App.css';


function App() {


    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      e.returnValue = 'Hey';
    });


  return (
    <div className="App">
      <h2 id='Header'>Calculator because fun!</h2>
      <Calc />
    </div>
  );
}

export default App;
