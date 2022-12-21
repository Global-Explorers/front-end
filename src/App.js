import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import BookFlight from './BookFlight';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import Profile from './About'
import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './auth/AuthButtons';
import axios from 'axios';
import React from 'react';



class App extends React.Component {

  request = async () => {
    let res = await this.props.auth0.getIdTokenClaims();
    let token = res.__raw;
    console.log(token);

    let request = {
      method: 'GET',
      url: 'http://localhost:3002/flight',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    let response = await axios(request);
    console.log(response.data);
  }
  
  render() {
    // let auth0 = this.props.auth0;
    // console.log(auth0);
    return (
    <>
      <BrowserRouter>
        <Header />
      <AuthButtons />
      {this.props.auth0.isAuthenticated ? <button onClick={this.request}>Make request</button> : null}
        <Routes>
          <Route
            exact path="/"
            element={<BookFlight />}
          >
          </Route>
          <Route exact path="/about" element={<Profile />}>


          </Route>
        </Routes>
        <Footer />
        </BrowserRouter>
    </>
    )
  };
}

export default withAuth0(App);
