import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './auth/AuthButtons';
import airplane from './img/airplane.png'
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" /* variant="primary"*/ id='headerBack'>
        <img id='airplane' src={airplane} alt="airplane" height='100px' />
        <Navbar.Brand id="title">Global Explorer</Navbar.Brand>
        <NavItem id='link'><Link to="/" className="nav-link">Home</Link>
        </NavItem>
        <NavItem id='link'><Link to="/about" className="nav-link">About</Link>
        </NavItem>
        <AuthButtons />
        {this.props.auth0.isAuthenticated ? <button  onClick={this.request}></button> : null}
      </Navbar>
    )
  }
}

export default withAuth0(Header);