import React from 'react'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter name='Hem'/>
        <HoverCounter />
      </header>
    </div>
  );
}

export default App;
