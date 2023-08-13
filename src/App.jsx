import "./styles/App.css";
import HeroIMG from "./assets/hero.webp";
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
      <section className="services">
        <span className="chip">Custom Web Design & Development Packages for Your Business</span>
        <h2 className="servicesh2">Choose the Perfect Website Solution for Your Business</h2>
        <p className="servicesp">At WebRizen, we understand that every business is unique, which is why we offer custom web design and development packages that are tailored to your specific needs. Our team of experienced designers and developers work closely with you to create a website that is not only visually stunning but also functional and user-friendly. From e-commerce sites to custom CMS builds, our packages are designed to meet your specific requirements and budget.</p>
        <div className="threecol">
          <div className="card">
            <h3>Web Applications Design & Development</h3>
            <p>Elevate your online presence with our expert Website Design & Development services. From visionary concepts to captivating user experiences, we craft websites that resonate. Discover innovation, creativity, and seamless functionality - all in one place. Let's shape your digital future together. Harness the power of Next.js, React.js, PHP, Python, Firebase, MongoDB, Node.js, and more to build dynamic, innovative online solutions. Transforming your vision into reality, one pixel at a time.</p>
          </div>
          <div className="card">
            <h3>Mobile Applications Design & Development</h3>
            <p>palm of your customers' hands with WebRizen's Mobile Application Design and Development services. Harness cutting-edge technology and creativity to transform your ideas into sleek, intuitive, and impactful mobile applications. Our expert team is dedicated to engineering seamless user journeys, stunning interfaces, and robust functionalities that captivate and engage your audience. Unlock the potential of mobile innovation with WebRizen. Let's shape the future of mobile together.</p>
          </div>
          <div className="card">
            <h3>Computer Applications Design & Development</h3>
            <p>At WebRizen, we specialize in turning your ideas into cutting-edge computer applications. Our dedicated team of experts is driven by innovation and creativity, working tirelessly to design and develop solutions that transcend expectations. Whether you need a sleek and intuitive user interface or a robust backend architecture, we've got you covered. Elevate your digital presence with WebRizen and experience the true artistry of computer application design and development.</p>
          </div>
        </div>
        <button>More Details</button>
      </section>
    </>
  );
}

export default App;
