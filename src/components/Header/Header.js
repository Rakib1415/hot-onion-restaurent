import React from 'react';
import logo from '../../logo2.png';
import icon from '../../Group 204.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header-area mt-2">
            <div className="container">
            <nav className="navbar navbar-expand-lg ">
            <a className="navbar-brand" href="/home"><img className="w-25" src={logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto justify-content-end w-100 text-danger">
                <li className="nav-item mr-4">
                  <a className="nav-link" href="/"><img className="w-100" src={icon} alt=""/></a>
                </li> 
                <li className="nav-item mr-4 mt-2">
                    <a className="nav-link font-weight-bold" href="/">Login</a>
                  </li> 
                  <li className="nav-item mt-2 font-weight-bold ">
                    <a className="nav-link sign-up text-white" href="/">Sign up</a>
                  </li> 
              </ul>
              <img src="" alt=""/>
            </div>
           </nav>
            </div>
        </div>
    );
};

export default Header;