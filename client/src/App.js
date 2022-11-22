import React from 'react';
import { Navbar, PostForm } from './components';
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
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/detail/:id" element={<Detail/>}/>
          <Route path='/addproduct' element={<PostForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;