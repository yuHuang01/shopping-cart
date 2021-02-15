const ListShopCartContent = ( { cartItems, setCartItems }) => {

  const changeQuantity = (change, cartI) => {
    const index = cartItems.indexOf(cartI);
    
    const newCartI = cartI;
    if(change === 'plus'){
      newCartI[2] = newCartI[2] + 1;
    }else if(change === 'minus'){
      newCartI[2] = newCartI[2] - 1;
    }

    const newCartItems = cartItems;
    newCartItems.splice(index, 1, newCartI);

    setCartItems(newCartItems);
    console.log(cartItems)
  };

  

  return (
    <div id="ListShopCartContent">
    { cartItems.map(cartItem => {
      return(
        <div className="cartItem" key = { cartItem[1].id }>
          <div className="namAndPrice">
            <h3>{ cartItem[0] }</h3>
            <p>Price: { cartItem[1].price }$</p>
          </div>
          <div className="quantity">
            <div className="plusMinus">
              <button type="button" className="down quantBtn" onClick={() => {
                changeQuantity('minus',cartItem)
              }}>-</button>

              <p>{ cartItem[2] }</p>
              <button type="button" className="up quantBtn" onClick = {() => {
                changeQuantity('plus', cartItem)
              }}>+</button>
            </div>
            <div className="delete">
              <button type="button" className="del quantBtn">D</button>
            </div>
          </div>
        </div>
      )
    })}
    </div>
  );
}
 
export default ListShopCartContent;