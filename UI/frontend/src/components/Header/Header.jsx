import React from 'react'
import './Header.css'
import image from './image.jpg'
import logo from './Vector.svg'
import cart from './cart.svg'
import love from './love.svg'
import reload from './refresh.svg'
import search from './search.jpg'
const Header = () => {
  return (
    <div>
      <header>
        {/* <div className="container-fluid header-top d-flex" style={{justifyContent: "space-evenly"}}>
          <div className='header-top-left d-flex'>
            <img src="" alt="location" />
            <p>MTU Campus, Takyelpat</p>
          </div>
          <div className='header-top-middle d-flex'>
            <img src="" alt="phone" />
            <p>Sales & Services Support/999-456-6782</p>
          </div>
          <div className='header-top-right d-flex'>
            <p>EN</p>
            <p>$ INR</p>
            <img src="" alt="account" />
            <p>My Acoount</p>
          </div>
        </div> */}
        <div className="header-middle">
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid" style={{width: "80%"}}>
                <div className="navbar-left">
                  <img src={logo} alt="Logo" />
                  <a className="navbar-brand" href="#">ADOMGI HIDAK</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav- mx-2">
                      <a style={{color: "#184363"}} className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav- mx-2">
                      <a style={{color: "#184363"}} className="nav-link" href="#">Shop by Brand</a>
                    </li>
                    <li className="nav- mx-2">
                      <a style={{color: "#184363"}} className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav- mx-2">
                      <a style={{color: "#184363"}} className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav- mx-2">
                      <a style={{color: "#184363"}} className="nav-link" href="#">Offers</a>
                    </li>
                    <li className="nav- mx-2">
                      <a style={{color: "#184363"}} className="nav-link" href="#">Features</a>
                    </li>
                  </ul>
                  <div className="heder-middle-right">
                    <img className='mx-2' src={reload} alt="reload" />
                    <img className='mx-2' src={love} alt="love" />
                    <img className='mx-2' src={cart} alt="card" />
                  </div>
                </div>
              </div>
            </nav>
        </div>
        <div style={{background: "#EDF4F6", marginTop: '60px'}}>
          <div className="search-part d-flex mx-auto" style={{width:"80%",height: "80px", alignItems: 'center', justifyContent: 'space-around'}}>
            <div>
              <p style={{margin: '0', background: "#FFFFFF", padding: "10px 20px", borderRadius: '15px', color: "#184363"}}>All Category</p>
            </div>
            <div style={{width: "80%", display: 'flex'}}>
              <input type="text" name="" id="" style={{width: "100%", borderRadius: '15px', border: "none"}}/>
              <div className='d-flex' style={{alignItems:"center", marginLeft: '-15px', background:"orange", width:"50px", height: '40px',  borderTopRightRadius: '15px', borderBottomRightRadius: '12px'}}>
              <svg style={{width:'90%', height: "50%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
