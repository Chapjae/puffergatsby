import * as React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>
        {/* webpage content */}
        {children}
      </div>
      <footer>
        <p>Footer Example </p>
      </footer>
    </div>
  );
};

export default Layout;
