
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    let { budget, currency, expenses, dispatch} = useContext(AppContext);
    const budgetMax = 20000; 
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const changeBudget = (event) => {

        const newBudget = Number(event.target.value);

        if((Number.isNaN(newBudget)) && (!Number.isInteger(newBudget))) {
            alert('Enter a valid budget');
            return;
        }

        if(newBudget < totalExpenses){
            alert("The expenses shouldn't be greater then the budget." + currency + totalExpenses);
        }

       else {if (newBudget > budgetMax){
        alert("Enter a budget under " + budgetMax);
        return;
    }
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
};

    return (
        <div className='alert alert-secondary' style={{ display: 'flex', alignItems: 'center'}}>
            <div>
                <label htmlFor="inputBudget">Budget: </label> 
            </div>
            <span>{currency}</span>
            <input type='number' id='budget' value={budget}
            onChange={changeBudget} step="10">
            </input>
        </div>
   
    );
};

  
    
export default Budget;
