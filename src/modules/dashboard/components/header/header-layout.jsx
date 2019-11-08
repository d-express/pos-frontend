import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import Logo from '../../../../assets/images/dexpress.png';
import ProfilePic from '../../../../assets/images/profile-pic.jpg';
import MenuIcon from '../svg/MenuIcon';
import MobileMenuIcon from '../svg/MobileMenuIcon';

import './header.scss';

const HeaderLayout = ({
  containerClassnames,
  menuClickCount,
  menuButtonClick,
  mobileMenuButtonClick,
  isInFullScreen,
  toggleFullScreen,
  handleLogout,
}) => (
  <nav className='navbar fixed-top'>
    <span>
      <NavLink
        to='#'
        className='menu-button d-none d-md-block'
        onClick={(e) => menuButtonClick(e, menuClickCount, containerClassnames)}
      >
        <MenuIcon />
      </NavLink>
      <NavLink
        to='#'
        className='menu-button-mobile d-xs-block d-sm-block d-md-none'
        onClick={(e) => mobileMenuButtonClick(e, containerClassnames)}
      >
        <MobileMenuIcon />
      </NavLink>
    </span>
    <span className='justify-content-center'>
      <Link to='/dashboard' className='navbar-logo'>
        <img className='logo' src={Logo} alt='Dexpress' />
      </Link>
    </span>
    <span>
      <div className='navbar-right'>
        <div className='header-icons d-inline-block align-middle'>
          <button
            className='header-icon btn btn-empty d-none d-sm-inline-block'
            type='button'
            id='fullScreenButton'
            onClick={toggleFullScreen}
          >
            {isInFullScreen ? (
              <i className='simple-icon-size-actual d-block' />
            ) : (
              <i className='simple-icon-size-fullscreen d-block' />
            )}
          </button>
        </div>
        <div className='user d-inline-block'>
          <UncontrolledDropdown className='dropdown-menu-right'>
            <DropdownToggle className='p-0' color='empty'>
              <span className='name mr-1'>Sarah Connor</span>
              <span>
                <img alt='Profile' src={ProfilePic} />
              </span>
            </DropdownToggle>
            <DropdownMenu className='mt-3' right>
              <DropdownItem>Mi cuenta</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => handleLogout()}>
                Cerrar sesión
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </span>
  </nav>
);

export default HeaderLayout;
