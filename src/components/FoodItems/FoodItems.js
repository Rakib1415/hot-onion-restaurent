import React, { useState } from 'react';
import './FoodItems.css';
import FoodContainer from '../FoodContainer/FoodContainer';
import fakeData from '../../fakeData';

const FoodItems = () => {
    const foodItems = fakeData;
    const lunchItems = foodItems.filter(food => food.category ==='Lunch');
    const [products, setProduct] = useState(lunchItems);
    const handleClickCategory =(category)=>{
        const categoryName = category.target.innerText;
        const foodCategory = foodItems.filter(product => product.category ===categoryName);
        setProduct(foodCategory); 
        console.log(category.target)  
        if(category.target.className !=='active'){
            category.target.classList.add('active');
        }
        
    }
    
 
        
    
    return (
        <div className="container">
            <div className="food-time d-flex justify-content-center mt-4">
                <ul>
                    <li><a href="#"  onClick={handleClickCategory} className="category">Breakfast</a></li>
                    <li><a href="#"  onClick={handleClickCategory} className="active category">Lunch</a></li>
                    <li><a href="#"  onClick={handleClickCategory} className="category">Dinner</a></li>
                </ul>
            </div>
            <div className="food-items mt-4">
                {
                    products.map(product => <FoodContainer key={product.key} product={product}></FoodContainer>)
                }
            </div>
            
        </div>
    );
};

export default FoodItems;