import * as React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>
        {/* webpage content */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
