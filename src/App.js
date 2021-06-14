import React from 'react'
import Grandparent from './components/Grandparent'
import {UserProvider} from './components/UserContext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider value="Hem">
          <Grandparent />
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
