
import './App.css';
import React from 'react';

import {MyDemo} from './components/MyDemo.js'
import { MyDemo2 } from './components/MyDemo.js';
import ParentCompo from './components/ParentCompo.js';
import UsingState from './components/UsingState.js';

function App() {
  return (
    <div className="App">
    <h1>Welcome to my app</h1>
    <MyDemo/>
    <MyDemo2/>
    <ParentCompo/>
    <UsingState/>
    </div>
  );
}

export default App;
