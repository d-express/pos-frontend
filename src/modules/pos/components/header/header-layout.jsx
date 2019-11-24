import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../../assets/images/dexpress.png';
import Fullscreen from '../../../../utils/fullscreen';

const HeaderLayout = () => {
  const toggleFullScreen = () => {
    const fullscreen = new Fullscreen();
    fullscreen.toggleFullScreen();
  };
  return (
    <header>
      <nav className='navbar justify-content-between navbar-expand-md fixed-top navbar-light bg-white p-0'>
        <Link to='/' className='navbar-brand'>
          <img src={Logo} height='48' alt='Dexpress' />
        </Link>
        <h2 className='navbar-text'>Italian Pizza</h2>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='simple-icon-options-vertical' />
        </button>
        <div className='collapse navbar-collapse flex-grow-0' id='navbarNav'>
          <ul className='navbar-nav align-items-center'>
            <li className='nav-item active' onClick={() => toggleFullScreen()}>
              <i className='iconsminds-maximize' />
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                <i className='iconsminds-on-off-3' />
              </a>
            </li>
            <li className='nav-item'>
              <Link to='/lock-screen' className='nav-link'>
                <i className='simple-icon-lock' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dashboard'
                className='nav-link'
              >
                <i className='iconsminds-gear-2' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderLayout;
