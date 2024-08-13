import React, { Component } from 'react'
import Logo from '../assets/Ecom_logo.jpg'
import './ProductList.css' 
import Login from '../pages/Login'
import { CiShoppingCart } from "react-icons/ci";

export default class ProductList extends Component {

  constructor(){
    super();
    this.state = {
      // state for cart
      cart : 0,
      // state for wishlist
      wishList : 0,
      // state for products list
      products : [
        {
          name : "Nikon",
          description : "Fresh view",
          price : "Rs.75000",
          image : "src/assets/camera.webp"
        },
        {
          name : "Iphone 14 Pro Max",
          description : "Pro. Beyond",
          price : "Rs.102000",
          image : "src/assets/iphone.webp"
        },
        {
          name : "Playstation 5",
          description : "Play has no limit",
          price : "Rs.23700",
          image : "src/assets/41LrbwhFnoL.jpg"
        },
        {
          name : "Cobb Olive Slim Fit Chinos",
          description : "Olive green solid mid-rise chinos, has a button closure, four pockets",
          price : "Rs.2700",
          image : "src/assets/CHinos.webp"
        },
        {
          name : "Zudio Madrid Eau De Parfum",
          description : "Spread fragnence",
          price : "Rs.1300",
          image : "src/assets/Perfume.webp"
        },
        {
          name : "PVC Comfort Foam White Casual Shoes",
          description : "Fly while walk",
          price : "Rs.870",
          image : "src/assets/white-casual-shoes-for-men.jpg"
        },
      ],
    }
  }

  getProducts(){
    console.log("")
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
  }
  addToCart(productIndex){
    const cart = this.state.cart;
  }

  render() {
    return (
      <>
        <div className="nav">
          <div className="navLogo">
              <img src={Logo} alt="Ecom-logo" />
          </div>
          <div className="navMenu">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li className="cart-icon">
                  <CiShoppingCart />
                </li>
                <button>Add to Wishlist</button>
              </ul>
          </div>
          <div className='authenticBtn'>
            <button onClick={Login} className="login">Login</button>
            {/* <button className="signup" onClick={Signup}>Signup</button> */}
          </div>
        </div>
        <div className='products'>
          {this.state.products.map((product, index) => {
            return (
                <div key={index} className="product-1">
                  <img src={product.image} alt="" />
                  <div className="product-desc">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <h3>{product.price}</h3>
                    <button onClick={() => this.addToCart(index)}>Add To Cart</button>
                  </div>
                  {/* <button onClick={() => this.addToCart(index)}>Add To Cart</button> */}
                </div>
            );
          })}
          {/* {this.state.products.map((product,index) => {
            return (
              <div className="product-1">
                <img src={Camera} alt="" />
                <div className="product-desc">
                  <h3>{product.name}</h3>
                  <h5>{product.description}</h5>
                  <p>{product.price}</p>
              </div>
            )
          })} */}
        </div>
      </>
    );
  }
}
