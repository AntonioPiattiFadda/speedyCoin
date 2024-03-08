import './Hero.css';
import SpeedyGonzales from '../assets/Speedy_Gonzales.webp';

const Hero = () => {
  return (
    <div className="heroContainer">
      <h1>
        The Happy <span>Speedy Coin</span> With BNB Rewards
      </h1>
      <p>Fastest way to get your food</p>
      <div>
        <button>Pistols</button>
        <button>WHITEPAPER</button>
      </div>
      <img src={SpeedyGonzales} alt="Speedy grande" />
      <div>Chain adress</div>
      <div className="sponsorBanner">Publicidad</div>
    </div>
  );
};

export default Hero;
