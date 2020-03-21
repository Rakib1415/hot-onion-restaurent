import React from 'react';
import './FoodContainer.css';

const FoodContainer = (props) => {
    const {name, img, price} = props.product;
    return (
        <div className="foodItems w-100">
            <div className="card float-left p-3 m-2" style={{width: '22rem', height:'32rem'}}>
                <img src={img} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card.</p>
                <p>${price}</p>
            </div>
            </div>
        </div>
    );
};

export default FoodContainer;