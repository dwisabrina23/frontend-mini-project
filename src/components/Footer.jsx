import React from 'react';
import Phone from '../assets/phone.png';
import Mail from '../assets/mail.png';
import CircleSosmed from './CircleSosmed';
import './footer.css';

function Footer(props) {
  return (
    <div>
      <footer className="text-center text-lg-start">
        {/* Grid container */}
        <div className="container-fluid p-3 pt-5 px-5 footer-content">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 p-3">
              <ul className="list-unstyled mb-0">
                <li className="py-3 text-footer">
                  <a href="/" className="text-white">
                    Home
                  </a>
                </li>
                <li className="py-3 text-footer">
                  <a href="#!" className="text-white">
                    Art Gallery
                  </a>
                </li>
                <li className="py-3 text-footer">
                  <a href="#!" className="text-white">
                    <span className="footer-icon" style={{paddingRight:"10px"}}>
                      <img src={Phone} alt="phone" />
                    </span>
                    +621-1234-567
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 p-3">
              <ul className="list-unstyled">
                <li className="py-3 text-footer">
                  <a href="#!" className="text-white">
                    About Us
                  </a>
                </li>
                <li className="py-3 text-footer">
                  <a href="#!" className="text-white">
                    Pricing
                  </a>
                </li>
                <li className="py-3 text-footer">
                  <a href="#!" className="text-white">
                    <span className="footer-icon" style={{paddingRight:"10px"}}>
                      <img src={Mail} alt="phone" />
                    </span>
                    sabrina@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-6 col-md-12 mb-8 mb-md-0 p-3">
              <h5 className="text-uppercase mb-0">Subscribe to our weekly newslater</h5>
              <ul className="list-unstyled">
                <li className="py-2 text-footer">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="mail@example.com" aria-label="user's email" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                      <button className="btn btn-warning" type="button">Subscribe</button>
                    </div>
                  </div>
                </li>
                <li className="py-2 text-footer">
                  <a href="#!" className="text-white">
                    Follow us:
                    <span className="h-25">
                      <CircleSosmed/>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2021 Copyright:
          <a className="text-white" href="/">
            Dwi Sabrina
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

export default Footer;
