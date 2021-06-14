import React from 'react'
import ErrorBoundary from './components/ErrorBoundary';

import Villian from './components/Villian'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Villian name="Batman" />
        </ErrorBoundary>
      </header>
    </div>
  );
}
// class App extends React.Component{
//   render()
//   {
//     return <h1>
//       Hello from a class
//     </h1>
//   }
// }
export default App;
