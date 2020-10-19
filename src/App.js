
import React from 'react';
import {
  BrowserRouter
} from "react-router-dom";
import './App.scss';
import './assets/styles/general.scss';

import Countries from './assets/components/Countries';



function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">

          <Countries />

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;