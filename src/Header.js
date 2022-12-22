import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './auth/AuthButtons';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary" >
      
        <Navbar.Brand id="title">Global Explorer</Navbar.Brand>
        <NavItem id='link'><Link to="/" className="nav-link">Home</Link>
        </NavItem>
        <NavItem id='link'><Link to="/about" className="nav-link">About</Link>
        </NavItem>
        <AuthButtons />
        {this.props.auth0.isAuthenticated ? <button onClick={this.request}>Make request</button> : null}
      </Navbar>
    )
  }
}

export default withAuth0(Header);