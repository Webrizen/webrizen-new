import "./styles/App.css";
import HeroIMG from "./assets/hero.png";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <section className="hero">
        <div className="leftHero">
          <span>
            <BsFillBuildingsFill /> Elevating Your Digital Presence
          </span>
          <h1>Crafting Dynamic Web Applications That Inspire.</h1>
          <p>
            Embark on a digital journey where innovation meets functionality. At
            WebRizen, we're more than developers; we're architects of
            exceptional online experiences. With unwavering passion and
            cutting-edge expertise, we transform your visionary concepts into
            tangible web solutions.
          </p>
          <button>
            <AiOutlineDoubleRight />
            Discover the Possibilities
          </button>
        </div>
        <div className="rightHero">
          <img src={HeroIMG} alt="Hero Image" />
        </div>
      </section>
    </>
  );
}

export default App;
