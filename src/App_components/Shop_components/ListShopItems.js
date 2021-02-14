import ShopItems from './ShopItems'

const ListShopItems = () => {
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
              <button type="button">Add to Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}
 
export default ListShopItems;