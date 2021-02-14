import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './App_components/Home';
import Navbar from './App_components/Navbar';
import Shop from './App_components/Shop';
import ShopCart from './App_components/ShopCart';

function App() {
  const [cartItems, setCartItem] = useState([]);
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  
  useEffect(() => {
    setNumOfCartItems(cartItems.length)
  }, [cartItems])
  return (
    <div className="App">
      <Router>
        <Navbar numOfCartItems = { numOfCartItems } />
        <div id="content">
          <Switch>
            <Route exact path='/' component = { Home }/>
            <Route path='/shop' component = { Shop }/>
            <Route path='/shopcart' component = { ShopCart } />
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
