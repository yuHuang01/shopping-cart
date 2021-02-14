import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="Home">
      <img src="/imgs/background/home_back.png" alt="Board game logo"/>
      <div id="centerDiv">
        <h1>Welcomce on ABoard!</h1>
        <Link to='/shop'>
        <div id="shopHere">
          <h1>Visit our shop!</h1>
        </div>
        </Link>
      </div>
    </div>
  );
}
 
export default Home;