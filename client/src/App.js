import React from 'react';
import { Navbar } from './components';
import { Detail, Home } from './pages';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />  

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail" element={<Detail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
