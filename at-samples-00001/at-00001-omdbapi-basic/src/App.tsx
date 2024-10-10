import React from 'react';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ButtonUsage from './Components/ButtonUsage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonUsage ></ButtonUsage>
        <p>
          Edit <code>src/App.tsx</code> and save to reload. <br />
          
        </p>
      </header>
    </div>
  );
}

export default App;
