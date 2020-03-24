import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
     const cart = props.cart;

     let total = 0;
     for(let i = 0; i < cart.length; i++){
         const product = cart[i];
         total = total + product.quantity * product.price;
     }

     const grandTotal = total + (total/5) + 25;
     const totalPrice = grandTotal.toFixed(2);

    //  const total = 0;
    //  for(let i = 0; i<cart.length; i++){
    //      const product = cart[i];
    //      total = total + product.quantity * product.price;

    //  }
  
    
    return (
        <div>
          
                <h3>Subtotal : ${total}</h3>
                <h3>Tax : 5%</h3>
                 <h3>Delivery fee : $25.00</h3>
                 <h2>Total :${totalPrice}</h2>
                  <Link to={"/complete"}><button className="contact-form-btn color" >Place Order</button></Link>
        
            
        </div>
    );
};

export default Cart;