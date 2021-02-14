import ListShopCartContent from './ShopCart_component/ListShopCartContent';

const ShopCart = () => {
  return (
    <div id="ShopCart">
      <h1>Shopping Cart</h1>
      <p>The games you have selected so far:</p>
      <ListShopCartContent />

      <button>Check out!</button>
    </div>
  );
}
 
export default ShopCart;