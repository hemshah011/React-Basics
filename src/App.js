import React from 'react'
import ClickCounter2 from './components/ClickCounter2';
import CounterRender from './components/CounterRender';
import HoverCounter2 from './components/HoverCounter2.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterRender render= {(count,incrementCount)=>(
          <ClickCounter2 count={count} incrementCount={incrementCount}/>
        )}/>
        <CounterRender render= {(count,incrementCount)=>(
          <HoverCounter2 count={count} incrementCount={incrementCount}/>
        )}/>
      </header>
    </div>
  );
}

export default App;
