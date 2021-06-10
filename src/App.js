import React from 'react'
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Counter from './components/Counter'
import FunctionEvent from './components/FunctionEvent'
import ClassEvent from './components/ClassEvent'
import EventBind from './components/EventBind'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventBind/>
        <FunctionEvent/>
        <ClassEvent />
        {/* <Greet name="Hem">What up periscope</Greet> */}
        {/* <Greet name="Prem">I am good</Greet>
        <Greet name="Game">Your boy Jim here</Greet>
        <Welcome name="Hem">What up periscope</Welcome>
        <Welcome name="Prem">I am good</Welcome> */}
        {/* <Welcome name="Game">Your boy Jim here</Welcome>
        <Counter/>
        <Welcome /> */}
        {/* <Hello/> */}
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
