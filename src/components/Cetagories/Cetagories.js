import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import FoodItems from '../FoodItems/FoodItems';
import Banner from '../Banner/Banner';


const Cetagories = () => {
    const foodItems = fakeData;
    const lunchItems = foodItems.filter(food => food.category ==='Lunch');
    const [products, setProduct] = useState(lunchItems);
    const handleClickCategory =(category)=>{
        const categoryName = category.target.innerText;
        const foodCategory = foodItems.filter(product => product.category ===categoryName);
        setProduct(foodCategory); 
        const li = document.querySelectorAll('.category');
        li.forEach(ele =>{
            ele.classList.remove('active');
            category.target.classList.add('active');
        })
        
    }

    return (
        <div className="container">
            <Banner></Banner>
            <div className="food-time d-flex justify-content-center mt-4">
                <ul>
                    <li><a href="#"  onMouseOver={handleClickCategory} className="category">Breakfast</a></li>
                    <li><a href="#"  onMouseOver={handleClickCategory} className="active category">Lunch</a></li>
                    <li><a href="#"  onMouseOver={handleClickCategory} className="category">Dinner</a></li>
                </ul>
            </div>
            <FoodItems product={products}></FoodItems>
            
        </div>
    );
};

export default Cetagories;