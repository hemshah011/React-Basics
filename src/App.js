import React from 'react'
import ParentComp from './components/ParentComp'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComp/>
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
