import { Link } from 'gatsby';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <h1>Puffer Isle Inn</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/booking'>Book a Room!</Link>
      </div>
    </nav>
  );
};
export default Navbar;
