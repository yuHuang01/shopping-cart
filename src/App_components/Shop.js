import ListShopItems from "./Shop_components/ListShopItems"

const Shop = ({ cartItems, setCartItems }) => {
  return (
    <div id="Shop">
      <div id="top-div">
        <img src="/imgs/background/shop_bg.jpg" alt="game board"/>
        <h1>Looking for some good board game?</h1>
      <p><i>Then, there is no better place to be!</i></p>
      </div>
      <ListShopItems cartItems = { cartItems } setCartItems = { setCartItems }/>
    </div>
  );
}
 
export default Shop;