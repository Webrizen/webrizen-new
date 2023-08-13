import "./styles/App.css";
import HeroIMG from "./assets/hero.webp";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
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
      <motion.section
        className="hero"
      >
        <motion.div
          className="leftHero"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <BsFillBuildingsFill /> Elevating Your Digital Presence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Crafting Dynamic Web Applications That Inspire.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Embark on a digital journey where innovation meets functionality. At WebRizen, we're more than developers; we're architects of exceptional online experiences. With unwavering passion and cutting-edge expertise, we transform your visionary concepts into tangible web solutions.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AiOutlineDoubleRight />
            Discover the Possibilities
          </motion.button>
        </motion.div>
        <motion.div
          className="rightHero"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src={HeroIMG}
            alt="Hero Image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </motion.div>
      </motion.section>
      <section className="services" ref={ref}>
        <motion.span
          className="chip"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Custom Web Design & Development Packages for Your Business
        </motion.span>
        <motion.h2
          className="servicesh2"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Choose the Perfect Website Solution for Your Business
        </motion.h2>
        <motion.p
          className="servicesp"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          At WebRizen, we understand that every business is unique, which is why we offer custom web design and development packages that are tailored to your specific needs. Our team of experienced designers and developers work closely with you to create a website that is not only visually stunning but also functional and user-friendly. From e-commerce sites to custom CMS builds, our packages are designed to meet your specific requirements and budget.
        </motion.p>
        <motion.div
          className="threecol"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="card"
          >
            <h3>Web Applications Design & Development</h3>
            <p>Elevate your online presence with our expert Website Design & Development services. From visionary concepts to captivating user experiences, we craft websites that resonate. Discover innovation, creativity, and seamless functionality - all in one place. Let's shape your digital future together. Harness the power of Next.js, React.js, PHP, Python, Firebase, MongoDB, Node.js, and more to build dynamic, innovative online solutions. Transforming your vision into reality, one pixel at a time.</p>
          </motion.div>
          <motion.div
            className="card"
          >
            <h3>Mobile Applications Design & Development</h3>
            <p>palm of your customers' hands with WebRizen's Mobile Application Design and Development services. Harness cutting-edge technology and creativity to transform your ideas into sleek, intuitive, and impactful mobile applications. Our expert team is dedicated to engineering seamless user journeys, stunning interfaces, and robust functionalities that captivate and engage your audience. Unlock the potential of mobile innovation with WebRizen. Let's shape the future of mobile together.</p>
          </motion.div>
          <motion.div
            className="card"
          >
            <h3>Computer Applications Design & Development</h3>
            <p>At WebRizen, we specialize in turning your ideas into cutting-edge computer applications. Our dedicated team of experts is driven by innovation and creativity, working tirelessly to design and develop solutions that transcend expectations. Whether you need a sleek and intuitive user interface or a robust backend architecture, we've got you covered. Elevate your digital presence with WebRizen and experience the true artistry of computer application design and development.</p>
          </motion.div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          More Details
        </motion.button>
      </section>
    </>
  );
}

export default App;