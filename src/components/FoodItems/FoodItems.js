import React from 'react';
import {useEffect} from 'react';
import './FoodItems.css';
import FoodContainer from '../FoodContainer/FoodContainer';


const FoodItems = (props) => {
    const foodItems =props.product;
    //    console.log(foodItems);

    return (
        
            <div className="food-time m-4">
                {
                    foodItems.map(pd => <FoodContainer product={pd} key={pd.key}></FoodContainer>)
                }
            </div>
    );
};

export default FoodItems;