import React, { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props)=>{

    const [isItems, setIsItems] = useState([]);

    const addItemToCartHandler = (item)=>{
        setIsItems([...isItems, item]);
    };

    const removeItemFromCartHandler = (id)=>{};

    const cartContext = {
        items:isItems,
        amount:0,
        addItems: addItemToCartHandler,
        removeItems: removeItemFromCartHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    )
};

export default CartProvider;