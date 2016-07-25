import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class HeadNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            Codechobo
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to={{ pathname: '/login' }}>
            <NavItem eventKey={1}>로그인</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
