
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    let { budget, currency, setBudget} = useContext(AppContext);
 //   const { dispatch }= useContext(AppContext);
    
//     const incBudget = () => {
//         if(budget < 20000){
//             const expense = {
//                 name: budget,
//                 cost: 10,
//             };
//             dispatch({
//                 type: 'ADD_EXPENSE',
//                 payload: expense
//             });
//     }
// }

//     const decBudget = () => {
//         if(budget > 10){
//             const expense = {
//                 name: budget,
//                 cost: 10,
//             };
//             dispatch({
//                 type: 'RED_EXPENSE',
//                 payload: expense
//         });
        
//     }
// }
    return (
        <div className='alert alert-secondary'>
            <span className="input-group-text" htmlFor="inputBudget">Budget: {currency}
            <input type='number' id='budget' style={{ marginLeft: '2rem' , size: 10}} value={budget}
            onRateChange={(event) => setBudget(event.target.budget)}>
            </input>
            {/* <button type="button" onClick={event => incBudget()}>+</button>
            <button type="button" onClick={event => decBudget()}>-</button> */}
            </span>
        </div>
   
    );
};

  
    
export default Budget;
