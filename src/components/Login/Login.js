import React from 'react';
import './Login.css';
import Background from '../../bannerbackground.png';
import { Link } from 'react-router-dom';

const Login = () => {
    var sectionStyle = {
        width: "100%",
        height:'400px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${Background})`
      };
    return (
        <div className="container">
            
           <div style={sectionStyle}>
           <form class="contact-form">
          <input type="text" className="contact-form-text" placeholder="Your name"/>
          <input type="email" className="contact-form-text" placeholder="Your email"/>
          <input type="password" className="contact-form-text" placeholder="Your Password"/>
          <input type="password" className="contact-form-text" placeholder="confirm password"/>
         <Link to={"/shipment"}> <input type="submit" className="contact-form-btn" value="Sign in"/></Link>
        </form>
           </div>
         </div>
    );
};

export default Login;