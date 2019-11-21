import React from 'react';

import './main.scss';

const MainLayout = ({ children, }) => (
  <main>
    <div className='container-fluid'>
      {children}
    </div>
  </main>
);

export default MainLayout;
