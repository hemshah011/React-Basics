import React from 'react'
//import ParentComp from './components/ParentComp'
//import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FocusInput/>
        {/* <RefsDemo/> */}
        {/* <ParentComp/> */}
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
