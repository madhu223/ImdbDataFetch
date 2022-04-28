import './App.css';

import React from 'react';
import Getjph from './getjph';
import Imdbfetch from './Imdbfetch';

import Imdbmovies from './Imdbmovies';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <div>
      {/* <Getjph /> */}

      {/* <Imdbmovies /> */}
      {/* <Imdbfetch /> */}
      {/* <Imdbfetch>
        <Imdbmovies />
      </Imdbfetch> */}

      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Imdbfetch />}></Route>
        {/* <Route path='/Movies' element={<Imdbmovies />}></Route> */}
        <Route path='/Movies/:id' element={<Imdbmovies />}></Route>
      </Routes>
      {/* <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
