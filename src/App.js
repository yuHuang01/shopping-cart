import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './App_components/Home';
import Navbar from './App_components/Navbar';
import Shop from './App_components/Shop';
import ShopCart from './App_components/ShopCart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [total, setTotal] = useState(0);
  
  const changeQuantity = (change, cartI) => {
    const index = cartItems.indexOf(cartI);
    
    const newCartI = cartI;
    if(change === 'plus'){
      newCartI[2] = newCartI[2] + 1;
      setNumOfCartItems(preNum => preNum + 1)
    }else if(change === 'minus'){
      newCartI[2] = newCartI[2] - 1;
      setNumOfCartItems(preNum => preNum + 1)
    }

    const newCartItems = cartItems;
    newCartItems.splice(index, 1, newCartI);

    setCartItems(newCartItems);
  };
  const deleteItem = (itemName) => {
    const newItems = cartItems.filter(cartItem => cartItem[0] !== itemName);
    setCartItems(newItems);
  };

  useEffect(() => {
    setCartItems(cartItems);
  }, [numOfCartItems]);

  useEffect(() => {
    setTotal(cartItems.reduce((acc, cNum) => { return acc + cNum[2] * (cNum[1].price) }, 0))
  }, [numOfCartItems]);

  return (
    <div className="App">
      <Router>
        <Navbar numOfCartItems = { numOfCartItems } />
        <div id="content">
          <Switch>
            <Route exact path='/' component = { Home }/>
            <Route path='/shop' render = {() => <Shop cartItems = { cartItems } setCartItems = { setCartItems } setNumOfCartItems = { setNumOfCartItems }/>}/>
            <Route path='/shopcart' render = { () => <ShopCart cartItems = { cartItems } changeQuantity = { changeQuantity } deleteItem = { deleteItem } total = { total }/>} />
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
