import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './FoodDescription.css';

const FoodDescription = (props) => {
     const {name, img, price, key, quantity}=props.product;
    
   
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6 align-self-center">
                  <div>
                  <h1>{name}</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas beatae iste dolores! Perspiciatis, quasi dolores hic, velit accusantium laudantium est rem, nam praesentium pariatur saepe minus illum doloremque id cum.</p>
                  </div>
                    <div className="cart">
                    <span className="price">${price}</span>
                   <button className="cart-count">
                   <button onClick={props.handlePlusBtn} className="myBtn"><FontAwesomeIcon icon={faPlus}/></button>
                    <input type="text" value={quantity} />
                    <button onClick={props.handleMinusBtn} className="myBtn"><FontAwesomeIcon icon={faMinus}/></button>
                   </button>
                    
                    </div>
                    <div className="cart-btn">
                        <button onClick={()=>props.handleAddProduct(props.product)} className="add-btn">Add</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="w-100" src={img} alt=""/>
                </div>
            </div>
            
        </div>
    );
};

export default FoodDescription;