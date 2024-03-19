import React from 'react';
import {Link} from "react-router-dom";

const Navbar=()=>{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Mohalle wali Aunty
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Taza Khabar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Khel Kuud
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Dawa daaru
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Dalali
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Elon aur Mark bhaay 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Mirch masala
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
