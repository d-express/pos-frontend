import React from 'react';
import { Nav, NavItem, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import classnames from 'classnames';

import menuItems from '../../constants/menu';

import './sidebar.scss';

const Sidebar = ({
  selectedParentMenu,
  viewingParentMenu,
  collapsedMenus,
  openSubMenu,
  toggleMenuCollapse,
}) => (
  <div className='sidebar'>
    <div className='main-menu'>
      <div className='scroll'>
        <PerfectScrollbar
          options={{ suppressScrollX: true, wheelPropagation: false, }}
        >
          <Nav vertical className='list-unstyled'>
            {menuItems &&
              menuItems.map((item) => (
                <NavItem
                  key={item.id}
                  className={classnames({
                    active:
                      (selectedParentMenu === item.id &&
                        viewingParentMenu === '') ||
                      viewingParentMenu === item.id,
                  })}
                >
                  {item.newWindow ? (
                    <a href={item.to} rel='noopener noreferrer' target='_blank'>
                      <i className={item.icon} />
                      {`  ${item.label}`}
                    </a>
                  ) : (
                    <NavLink
                      to={item.to}
                      onClick={(e) => openSubMenu(e, item)}
                      data-flag={item.id}
                    >
                      <i className={item.icon} />
                      {`  ${item.label}`}
                    </NavLink>
                  )}
                </NavItem>
              ))}
          </Nav>
        </PerfectScrollbar>
      </div>
    </div>

    <div className='sub-menu'>
      <div className='scroll'>
        <PerfectScrollbar
          options={{ suppressScrollX: true, wheelPropagation: false, }}
        >
          {menuItems &&
            menuItems.map((item) => (
              <Nav
                key={item.id}
                className={classnames({
                  'd-block':
                    (selectedParentMenu === item.id &&
                      viewingParentMenu === '') ||
                    viewingParentMenu === item.id,
                })}
                data-parent={item.id}
              >
                {item.subs &&
                  item.subs.map((sub, index) => {
                    return (
                      <NavItem
                        key={`${item.id}_${index}`}
                        className={`${
                          sub.subs && sub.subs.length > 0 ? 'has-sub-item' : ''
                        }`}
                      >
                        {sub.newWindow ? (
                          <a
                            href={sub.to}
                            rel='noopener noreferrer'
                            target='_blank'
                          >
                            <i className={sub.icon} />
                            {` ${sub.label}`}
                          </a>
                        ) : sub.subs && sub.subs.length > 0 ? (
                          <>
                            <NavLink
                              className={`rotate-arrow-icon opacity-50 ${
                                collapsedMenus.indexOf(
                                  `${item.id}_${index}`
                                ) === -1 ?
                                  '' :
                                  'collapsed'
                              }`}
                              to={sub.to}
                              id={`${item.id}_${index}`}
                              onClick={(e) => toggleMenuCollapse(e, `${item.id}_${index}`)}
                            >
                              <i className='simple-icon-arrow-down' />
                              {` ${sub.label}`}
                            </NavLink>

                            <Collapse
                              isOpen={
                                collapsedMenus.indexOf(
                                  `${item.id}_${index}`
                                ) === -1
                              }
                            >
                              <Nav className='third-level-menu'>
                                {sub.subs.map((thirdSub, thirdIndex) => {
                                  return (
                                    <NavItem
                                      key={`${item.id}_${index}_${thirdIndex}`}
                                    >
                                      {thirdSub.newWindow ? (
                                        <a
                                          href={thirdSub.to}
                                          rel='noopener noreferrer'
                                          target='_blank'
                                        >
                                          <i className={thirdSub.icon} />
                                          {` ${thirdSub.label}`}
                                        </a>
                                      ) : (
                                        <NavLink to={thirdSub.to}>
                                          <i className={thirdSub.icon} />
                                          {` ${thirdSub.label}`}
                                        </NavLink>
                                      )}
                                    </NavItem>
                                  );
                                })}
                              </Nav>
                            </Collapse>
                          </>
                        ) : (
                          <NavLink to={sub.to}>
                            <i className={sub.icon} />
                            {` ${sub.label}`}
                          </NavLink>
                        )}
                      </NavItem>
                    );
                  })}
              </Nav>
            ))}
        </PerfectScrollbar>
      </div>
    </div>
  </div>
);

export default Sidebar;
