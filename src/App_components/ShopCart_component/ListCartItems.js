const ListCartItems = ( { cartItems, changeQuantity, deleteItem }) => {

  return(
    <div id="ListCartItems">
      { cartItems.map(cartItem => {
        return (
          <div className="cartItem" key={ cartItem[1].id }>
            <div className="namAndPrice">
              <h3>{ cartItem[0] }</h3>
              <p>Price: { cartItem[1].price }$</p>
            </div>
            <div className="quantity">
              <div className="plusMinus">
              <button type="button" className="down quantBtn" onClick={() => {
                if(cartItem[2] > 1){
                  changeQuantity('minus',cartItem)
                }else {
                  alert('Please, delete it if you don\'t want it anymore!')
                }
              }}>-</button>

              <p>{ cartItem[2] }</p>

              <button type="button" className="up quantBtn" onClick = {() => {
                changeQuantity('plus', cartItem)
              }}>+</button>
            </div>
            <div className="delete">
              <button type="button" className="del" onClick = { () => { deleteItem(cartItem)} }>Delete</button>
            </div>
            </div>
          </div>
        )
      })}

    </div>
    
  )
  

}
 
export default ListCartItems;