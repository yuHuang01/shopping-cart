import ShopItems from './ShopItems'

const ListShopItems = ({ cartItems, setCartItem }) => {

  const checkIfAdded = (boardName) => {
    return ( cartItems.find((cartItem) => cartItem[0] === boardName) )
  };

  const makeCartArr = (itemArr) => {
    return [...itemArr, 1];
  }

  return (
    <div id="ListShopItems">
      {ShopItems.map(shopItem => {
        return(
          <div className="shop-items" key = { shopItem[1].id }>
            <img src={`/imgs/board_game_imgs/${shopItem[1].src}`} alt={shopItem[0]}/>
            <div className="infoContainer">
              <h3>{ shopItem[0] }</h3>
              <p>{ shopItem[1].description }</p>
              <p><strong>Price:</strong> { shopItem[1].price }$</p>
              <button type="button" onClick = {() => {
                const checkRes = checkIfAdded(shopItem[0]);
                if(checkRes === undefined){
                  const newCartArr = makeCartArr(shopItem);
                  setCartItem([...cartItems, newCartArr]);
                  console.log(cartItems)
                }else{
                  alert('That item is already added to your cart!')
                }
              }}>Add to Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}
 
export default ListShopItems;