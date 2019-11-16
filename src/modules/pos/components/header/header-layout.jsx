import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../../assets/images/dexpress.png';

const HeaderLayout = () => (
  <header>
    <nav className='navbar justify-content-between navbar-expand-md fixed-top navbar-light bg-white p-0'>
      <a className='navbar-brand' href='#'>
        <img src={Logo} height='48' alt='Dexpress' />
      </a>
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
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              <i className='iconsminds-maximize' />
            </a>
          </li>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              <i className='iconsminds-wifi' />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <i className='iconsminds-cash-register-2' />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <i className='iconsminds-on-off-3' />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              <i className='simple-icon-lock' />
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link disabled'
              href='#'
              tabIndex='-1'
              aria-disabled='true'
            >
              <i className='iconsminds-gear-2' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default HeaderLayout;
