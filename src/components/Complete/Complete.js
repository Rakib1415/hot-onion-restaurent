import React from 'react';
import Background from '../../ordercomplete.png';

const Complete = () => {
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

            </div>
            
        </div>
    );
};

export default Complete;