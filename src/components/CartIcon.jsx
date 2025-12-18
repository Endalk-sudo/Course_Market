import React from 'react'
import { Link } from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';
import "./CartIcon.css"

const CartIcon = ({ cartList }) => {
    return (
        <Link className="cart-icon" to="/cart">
            <div className='cart-icon'>
                {cartList.length !== 0 && <span className='cart-icon-couter'>{cartList.length}</span>}
                <FaShoppingCart size={30} title="Cart" />
            </div>
        </Link>
    )
}

export default CartIcon