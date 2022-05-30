import React from 'react';

const Meal = (props) => {

const {strMeal,strMealThumb}=props.meal;
const {handleAddToOrder,meal}=props;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt=''></img>
            <h4>{strMeal}</h4>
            <button onClick={()=>handleAddToOrder(meal)}>Add this Food</button>
        </div>
    );
};

export default Meal;