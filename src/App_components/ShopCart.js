import { useEffect, useState } from 'react';
import ListCartItems from './ShopCart_component/ListCartItems';

const ShopCart = ( {cartItems, changeQuantity, deleteItem, total }) => {

  return (
    <div id="ShopCart">
      <h1>Shopping Cart</h1>
      <p>The games you have selected so far:</p>
      <ListCartItems cartItems = { cartItems } changeQuantity = { changeQuantity } deleteItem = { deleteItem }/>
      <p>Total: { total }$</p>
      <button>Check out!</button>
    </div>
  );
}
 
export default ShopCart;