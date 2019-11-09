import React from 'react';

const HomeLayout = ({handleRegister,handleLogin}) => (
  <div>
    <div>Carousel</div>
    <h1>IMAGEN1</h1>
    <div>
      <button type='button' onClick={handleRegister}>Comienza ahora</button>
      <button type='button' onClick={handleLogin}>Inicia sesión</button>
    </div>
  </div>
);

export default HomeLayout;
