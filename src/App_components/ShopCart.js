import { useEffect, useState } from 'react';
import ListShopCartContent from './ShopCart_component/ListShopCartContent';

const ShopCart = ( {cartItems, setCartItems }) => {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cartItems.reduce((acc, cNum) => { return acc + cNum[2] * (cNum[1].price) }, 0))
  }, [cartItems])

  return (
    <div id="ShopCart">
      <h1>Shopping Cart</h1>
      <p>The games you have selected so far:</p>
      
      <ListShopCartContent cartItems={ cartItems } setCartItems = { setCartItems } />

      <p>Total: { total }$</p>
      <button>Check out!</button>
    </div>
  );
}
 
export default ShopCart;