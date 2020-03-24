import React from 'react';
import Background from '../../bannerbackground.png';
import './Banner.css';
import Cetagories from '../Cetagories/Cetagories';


const Banner = () => {
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
                    <div className="subscribe mb-4">
                    <div><h1>Best Food Waiting For Your Belly</h1></div>
                    <div className="form mt-4">
                   <form>
                       <div className="sub-in">
                           <div className="input">
                               <input type="text" placeholder='Search Food Items'/>
                           </div>
                           <div className="submit">
                               <input type="submit" value="Search"/>
                           </div>
                       </div>
                   </form>
                    </div>
                </div>
                </div>
                
         </div>
    );
};

export default Banner;