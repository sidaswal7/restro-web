import React from "react";

const CartContext = React.createContext({
    items:[],
    amount:0,
    addItems:(item)=>{},
    removeItems:(id)=>{},
});

export default CartContext;