import Logo from '../assets/logo.png';
import '../variables.css';
import './Nav.css';

const Nav = () => {
  return (
    <div className="navContainer">
      <div>
        <img src={Logo} alt="Logo Speedy" />
        <p>
          {' '}
          <span>Speedy</span> Coin
        </p>
      </div>
      <ul>
        <li>Home</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
      </ul>
      <button>Conectar</button>
    </div>
  );
};

export default Nav;
