import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

    const { products, currency, cartItems } = useContext(ShopContext);

    const [cartData, setCartData] = useState([]);

    return (
        <div>Cart</div>
    )
}

export default Cart