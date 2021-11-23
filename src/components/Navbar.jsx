import React from 'react';
import './navbar.css';
import { NavLink, useHistory } from 'react-router-dom';
import logoPaintastic from '../assets/logo.png';
function Navbar() {
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
    history.push('/services');
    history.push('/gallery');
    history.push('/catalog');
    history.push('/about-us');
    history.push('/contact');
    history.push('/login');
    history.push('/articles');
  };
  return (
    <div>
      <div className="container-fluid mb-4 px-0" style={{ whiteSpace: 'nowrap', margin: '0px' }}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid" style={{width:"100%"}}>
            <a className="navbar-brand" href="/">
              <img className="logo-brand" src={logoPaintastic} alt="logo-paintastic" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo01">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item ">
                  <NavLink className="hoverable nav-link" onClick={handleClick} to="/">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="hoverable nav-link" onClick={handleClick} to="/catalog">
                    CATALOG
                  </NavLink>
                </li>
                <li className="nav-item dropdown hoverable">
                  <span className="dropdown-toggle" data-bs-toggle="dropdown">
                    MORE
                  </span>
                  <div className="dropdown-menu mb-3">
                    <NavLink
                      className="hoverable dropdown-item"
                      onClick={handleClick}
                      to="/gallery">
                      GALLERY
                    </NavLink>
                    <NavLink
                      className="hoverable dropdown-item"
                      onClick={handleClick}
                      to="/about-us">
                      ABOUT PAINTASTIC
                    </NavLink>
                    <NavLink
                      className="hoverable dropdown-item"
                      onClick={handleClick}
                      to="/contact">
                      CONTACT
                    </NavLink>
                    <NavLink
                      className="hoverable dropdown-item"
                      onClick={handleClick}
                      to="/articles">
                      Artcile
                    </NavLink>
                  </div>
                </li>
                <li className="b-login">
                  <button
                    class="btn btn-outline-success"
                    type="button"
                    onClick={handleClick}
                    to="/login">
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
