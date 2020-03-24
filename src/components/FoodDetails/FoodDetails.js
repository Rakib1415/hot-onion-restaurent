import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import fakeData from '../../fakeData';
import FoodDescription from '../FoodDescription/FoodDescription';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';


const FoodDetails = () => {
    const {productKey} = useParams();
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey =>{
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity= savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
        

    },[])

    
    const foodItem = fakeData.find(food => food.key === productKey);
    // console.log(foodItem);
    const handleAddProduct = (pd)=>{
        addToDatabaseCart(pd.key, count);
      
    } 
        let quantity = count;
    const handlePlusBtn = () =>{
        quantity = quantity +1;
        setCount(quantity);
        
    }
    const handleMinusBtn = () =>{
        quantity = quantity -1;
        if(quantity < 0){
            quantity = 1;
        }
        setCount(quantity);
    }
    foodItem.quantity = quantity;
    
    
     
    return (
        <div>
            <FoodDescription product={foodItem} handleMinusBtn={handleMinusBtn} handlePlusBtn={handlePlusBtn} handleAddProduct={handleAddProduct}></FoodDescription>
        </div>
    );
};


export default FoodDetails;