import React, {useContext, useState} from 'react';
import {AppContext } from '../context/AppContext';

const Currency = () => {
    let {currency, dispatch} = useContext(AppContext);
    //const [setCurrency] = useState('');

    let setCurrency = () => {
        const money = {
            name: currency,
        }
        dispatch({
            type: 'CHG_CURRENCY',
            payload: money
        })
    }


return (
    <div className='alert alert-success'>
        <span>
            <select className="currency-select" id="currency"
            onChange={(event) => setCurrency(event.target.currency)}>
                <option defaultValue="dollar">$ Dollar</option>
                <option value="pound">£ Pound</option>
                <option value="dollar">€ Euro</option>
                <option value="dollar">₹ Ruppee</option>
            </select>
        </span>

    </div>
)

};


export default Currency;