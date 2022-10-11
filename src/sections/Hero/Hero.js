import "./Hero.css";
import {PrimaryButton} from "../../components/index";

function Hero() {
  return (
    <div className="hero-main">
        <div className="hero-text">
            <h6 className="hero-subtitle">Welcome to cybrog </h6>
            <h4 className="hero-title"><em>Browse</em>Our popular Games Here </h4>
            
            <PrimaryButton> Browse Now</PrimaryButton>

            {/* <div className="main-button"> 
            <a href="browse.html">Browse Now</a>

            </div> */}
        </div>
    </div>
  )
}

export default Hero