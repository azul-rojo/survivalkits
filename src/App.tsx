import React from 'react';
import './App.css';
import { foodKit } from './kits';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel {...foodKit} />
      </header>
    </div>
  );
}

export default App;
