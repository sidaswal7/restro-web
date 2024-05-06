import React, { useContext } from "react";

import classes from "./MealItemsForm.module.css"
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";

const MealItemsForm= (props)=>{
    const cartCtx = useContext(CartContext)
    const addItemstoCart= (event)=>{
        event.preventDefault();
        const quantity = document.getElementById('amount' + props.id).value;
        cartCtx.addItems({...props.item, quantity: quantity})
        console.log('after update', cartCtx)
    }
    return(
        <form className={classes.form}>
            {console.log(cartCtx.items)}
            <Input label="Amount" input={{
                id:'amount' +props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button onClick={addItemstoCart}>Add</button>
        </form>
    )
}

export default MealItemsForm;