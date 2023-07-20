
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
//import EditBudget from "./EditBudget";
const Budget = () => {
    let { budget } = useContext(AppContext);
    const incBudget = () => {
        if(useState.Budget <20000){
            budget = budget + 10;
        }
    }
    const decBudget = () => {
        if(useState.Budget > 10){
            budget = budget - 10;
        }
        
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}
                <button type="button" onClick={incBudget}>+</button>
                <button type="button" onClick={decBudget}>-</button>
            </span>
            {/* <span>
                <button type="button" onClick={incBudget}>+</button>
                <button type="button" onClick={decBudget}>-</button>
            </span> */}
        </div>
   
    );
};
export default Budget;
