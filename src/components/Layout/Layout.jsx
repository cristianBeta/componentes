
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
     
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
