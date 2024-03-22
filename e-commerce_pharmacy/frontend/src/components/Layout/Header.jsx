import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth.js'
import toast from 'react-hot-toast';
const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogOut = () => {
    setAuth({
      ...auth, user: null, token: ''
    });
    localStorage.removeItem('auth');
    toast.success("Logout successfully")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Medication</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">CATEGORY</Link>
              </li>
              {
                !auth.user? (<>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">LOGIN</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">REGISTER</Link>
                  </li>
              </>) : <>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {auth?.user?.name.toUpperCase()}
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? 'admin': 'user'}`}>Dashboard</Link></li>
                      <li><Link className="dropdown-item" to="/login" onClick={handleLogOut}>Log Out</Link></li>
                    </ul>
                  </li>

                </>
              }
              <li className="nav-item">
                <Link className="nav-link" to="/cart">CART(0)</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
