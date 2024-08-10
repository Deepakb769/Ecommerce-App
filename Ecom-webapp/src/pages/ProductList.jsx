import React, { Component } from 'react'
import Logo from '../assets/Ecom_logo.jpg'
import './ProductList.css' 
import { useNavigate } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Camera from '../assets/camera.webp'
import Mobile from '../assets/iphone.webp'
import Playstation from '../assets/41LrbwhFnoL.jpg'
import Chinos from '../assets/CHinos.webp'
import Perfume from '../assets/Perfume.webp'
import Shoe from '../assets/white-casual-shoes-for-men.jpg'

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
                <li>About</li>
                <li>Contact</li>
              </ul>
          </div>

          <div className='authenticBtn'>
            <button onClick={Login} className="login">Login</button>
            <button className="signup" onClick={Signup}>Signup</button>
          </div>
        </div>
        <div className="products">
          <div className="product-1">
            <img src={Camera} alt="" />
            <div className="product-desc">
              <h3>Nikon</h3>
            </div>
          </div>
          <div className="product-1">
            <img src={Mobile} alt="" />
            <div className="product-desc">
              <h3>Iphone 14 Pro Max</h3>
            </div>
          </div>
          <div className="product-1">
            <img src={Playstation} alt="" />
            <div className="product-desc">
              <h3>Playstation 5</h3>
            </div>
          </div>
          <div className="product-1">
            <img src={Chinos} alt="" />
            <div className="product-desc">
              <h3>Cobb Olive Slim Fit Chinos</h3>
            </div>
          </div>
          <div className="product-1">
            <img src={Perfume} alt="" />
            <div className="product-desc">
              <h3>Zudio Madrid Eau De Parfum</h3>
            </div>
          </div>
          <div className="product-1">
            <img src={Shoe} alt="" />
            <div className="product-desc">
              <h3>PVC Comfort Foam White Casual Shoes</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
