import React from 'react';
import Navbar from './Home';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
