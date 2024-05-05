import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = ()=>{
    setShowCart(true);
  }
  const hideCartHandler = ()=>{
    setShowCart(false);
  }
  return (
    <>
    {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
          <Meals/>
      </main>
    </>
  );
}

export default App;
