import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      Navbar
      <nav>
        <Link to='/'>IMDB</Link> &nbsp;
        <Link to='/Movies'>Movies</Link>
      </nav>
    </div>
  );
}
