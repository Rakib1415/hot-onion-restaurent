import React, { useEffect, useState } from 'react';
import './Shipment.css';
import { Link } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Cart from './Cart/Cart';

const Shipment = () => {
    const [cart, setCart] = useState([]);

   useEffect(()=>{
       const savedCart = getDatabaseCart();
       const productKeys = Object.keys(savedCart);
       const previousCart = productKeys.map(existingKey =>{
           const product = fakeData.find(pd => pd.key === existingKey);
           product.quantity = savedCart[existingKey];
           return product;
       });
       setCart(previousCart);

       

   },[]);
   
//    console.log(cart);
    return (
        <div className="container ship-area">
            <div>
                <h3 className="text-center">Edit Delivery Details</h3>
                <hr/>
            <form  class="contact-form">
            <input type="text" className="contact-form-text" defaultValue="Deliver to door"/>
            <input type="text" className="contact-form-text" defaultValue="107 Rd No 8"/>
            <input type="text" className="contact-form-text" placeholder="Flat, suite or floor"/>
            <input type="text" className="contact-form-text" placeholder="Business Name"/>
            <input type="text" className="contact-form-text" placeholder="Add delivery instructor"/>
            <Link><input type="submit" className="contact-form-btn" value="Save and continue"/></Link>
            </form>
            </div>
            <div className="place-order">
              <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shipment;