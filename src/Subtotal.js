import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBaskteTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';


function Subtotal() {
    const[{basket}]=useStateValue();
  return (
    <div className='subtotal'>

        <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal({basket.length} items):<strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type="checkbox"/> This order contains a gift
                </small>
                </>
            )}

            decimalScale={2}
            value={getBaskteTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
        />

        <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;