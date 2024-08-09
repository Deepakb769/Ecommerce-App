import React, { Component } from 'react'
import Logo from '../assets/Ecom_logo.jpg'
import './ProductList.css' 
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

export default class ProductList extends Component {
  render() {
    return (
      
      <div>
        <div className="nav">
          <div className="navLogo">
              <img src={Logo} alt="Ecom-logo" />
          </div>
          <div className="navMenu">
              <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
          </div>
          <div className='authenticBtn'>
            <button onClick={Login} className="login">Login</button>
            <button className="signup" onClick={Signup}>Signup</button>
          </div>
        </div>
      </div>
    )
  }
}
