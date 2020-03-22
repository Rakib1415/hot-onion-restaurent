import React from 'react';
import {useParams} from 'react-router-dom';
import fakeData from '../../fakeData';
import FoodDescription from '../FoodDescription/FoodDescription';

const FoodDetails = () => {
    const {productKey} = useParams();
    
    const foodItem = fakeData.find(food => food.key === productKey);
    // console.log(foodItem);
     
    return (
        <div>
            <FoodDescription product={foodItem}></FoodDescription>
        </div>
    );
};

export default FoodDetails;