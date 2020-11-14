import React from "react";
import {ReactComponent as ShoppingIcon} from "../../images/shopping-bag.svg";
import './CartIcon.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>
            {itemCount}
        </span>
    </div>
)

export default  CartIcon
