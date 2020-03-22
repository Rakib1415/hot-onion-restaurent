import React from 'react';

const FoodDescription = (props) => {
    const {name, img, price, }=props.product;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>{name}</h1>
                </div>
                <div className="col-md-6">
                    <img src={img} alt=""/>
                </div>
            </div>
            
        </div>
    );
};

export default FoodDescription;