import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid d-flex" style={{flexDirection: 'column'}}>
          <h1 className="navbar-brand" >Copyright</h1>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/policy">POLICY</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Footer
