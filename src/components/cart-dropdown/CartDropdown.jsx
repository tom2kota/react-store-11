import React from "react";
import {CustomButton} from "../custom-button/CustomButton";
import {CartItem} from "../cart-item/CartItem";
import {withRouter} from "react-router-dom";
import './CartDropdown.scss'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <CustomButton
            onClick={() => {
                history.push('/checkout');
                toggleCartHidden();
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

export default withRouter(CartDropdown)

