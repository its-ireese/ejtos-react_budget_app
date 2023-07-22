import React, {useContext} from 'react';
import {AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
  //  const [setCurrency] = useState('');

    const setCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };

    const currencies = () =>
    {
        switch(currency){
            case '$' :
                return '$ Dollar'
            case '£' :
                return '£ Pound'
            case '€' :
                return '€ Euro'
            case '₹' :
                return '₹ Ruppee'
            default:
                return ''
        }

    }

return (
    <div className='alert alert-info'>
        <label htmlFor="Currencies">Currencies: </label> 
        <span className="currency-dropdown" id="currency"> 
            <select className="currencies" id="currency" 
            onChange={(event) => setCurrency(event.target.value)}>
                <option value='$' name="dollar">$ Dollar</option>
                <option value='£' name="pound">£ Pound</option>
                <option value='€' name="euro">€ Euro</option>
                <option value='₹' name="ruppee">₹ Ruppee</option>
            </select>
        </span>

    </div>
)

};


export default Currency;