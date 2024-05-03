import React from "react";
import classes from "./Header.module.css"
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = ()=>{
    return(
        <>
            <div className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </div>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="meals"/>
            </div>
        </>
    )
}

export default Header;