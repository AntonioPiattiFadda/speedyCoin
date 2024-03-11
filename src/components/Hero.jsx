import './Hero.css';
import SpeedyGonzales from '../assets/Speedy_Gonzales.webp';
import CertikLogo from '../assets/certikLogo.jpg';
import SpeedyLogo from '../assets/logo.png';

const Hero = () => {
  return (
    <div className="heroContainer">
      <h1>
        The Happy <span>Speedy Coin</span> With BNB Rewards
      </h1>
      <p>Fastest way to get your food</p>
      <div className="buttonContainer">
        <button>Pistols</button>
        <button>WHITEPAPER</button>
      </div>
      <div className="imageContainer">
        <img
          className="centralImage"
          src={SpeedyGonzales}
          alt="Speedy grande"
        />
      </div>
      <div className="chainAdressContainer">
        <img src={SpeedyLogo} alt="" />
        <div className="chainAdressInfo">
          <span>BNB Chain Adress:</span>
          <span>
            Lorem ipsum dolor sit amet cfugit! Vel assumenda quia aspernatur.
          </span>
        </div>
        <span>Copy link</span>
      </div>
      <div className="sponsorBanner">
        <span>CONTRACT AUDITED BY</span>
        <img src={CertikLogo} alt="" />
      </div>
    </div>
  );
};

export default Hero;
