import React from 'react'
import ClickCounter2 from './components/ClickCounter2';
import CounterRender from './components/CounterRender';
import HoverCounter2 from './components/HoverCounter2.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterRender>
          {(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
        </CounterRender>
        <CounterRender>
          {(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
        </CounterRender>
      </header>
    </div>
  );
}

export default App;
