import { Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='Navbar'>
      <h1>Shop ABoard</h1>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/shop'><li>Shop</li></Link>
        <Link to='shopcart'><li>Cart()</li></Link>
      </ul>
    </nav>
  );
}
 
export default Navbar;