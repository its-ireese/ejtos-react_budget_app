
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    let { budget } = useContext(AppContext);
    const incBudget = () => {
        if(budget <20000){
           budget = budget + 10;
        }
        return budget;
    }
    const decBudget = () => {
        if(budget > 10){
            budget = budget - 10;
        }
        dispatchEvent({
            type: 'SET_BUDGET'
        });
        
    }
    return (
        <div className='alert alert-secondary'>
            <span>
                <div className= "input-group"> 
                Budget: £{budget}
                <button type="button" onClick={event => incBudget()}>+</button>
                <button type="button" onClick={event => decBudget()}>-</button>
                </div>
            </span>
        </div>
   
    );
};
export default Budget;
