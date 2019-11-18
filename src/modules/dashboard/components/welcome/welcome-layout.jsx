import React from 'react';
import { Row, Card, CardBody, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx, Separator } from '../common/custom-bootstrap';
import Breadcrumb from '../breadcrumb';

import './welcome.scss';

const WelcomeLayout = ({ match, menuItems, }) => (
  <div className='welcome'>
    <Row>
      <Colxx xxs='12'>
        <Breadcrumb heading='Inicio' match={match} />
        <Separator className='mb-5' />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs='12' className='mb-4'>
        <Card>
          <CardBody>
            <Jumbotron>
              <h1 className='display-4 text-center w-100'>Bienvenido!</h1>
              <p className='lead text-center'>
                A su área administrativa Dexpress
              </p>
              <hr className='my-4' />
              <Row className='d-flex align-items-center justify-content-center'>
                {menuItems &&
                  menuItems.map((item) => (
                    <Colxx
                      xxs='4'
                      md='3'
                      lg='2'
                      key={item.id}
                      className='d-flex flex-column align-items-center my-3'
                    >
                      <NavLink
                        to={item.to}
                        className='btn btn-secondary icon-button large m-1'
                      >
                        <i className={item.icon} />
                      </NavLink>
                      <span className='label text-center'>{`  ${item.label}`}</span>
                    </Colxx>
                  ))}
              </Row>
            </Jumbotron>
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  </div>
);

export default WelcomeLayout;
