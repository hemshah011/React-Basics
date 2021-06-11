import React from 'react'
import ErrorBoundary from './components/ErrorBoundary';
//import ParentComp from './components/ParentComp'
//import RefsDemo from './components/RefsDemo'
// import FocusInput from './components/FocusInput'
// import PersonList from './components/PersonList'
// import PortalDemo from './components/PortalDemo'
import Villian from './components/Villian'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Villian name="Batman" />
        </ErrorBoundary>
        {/* <PersonList/>
        <PortalDemo/> */}
        {/* <FocusInput/> */}
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
