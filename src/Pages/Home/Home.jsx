/* eslint-disable react/no-unescaped-entities */
import profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import Seo from "../../Seo";
import PageWrapper from "../../../GlobalMotion/Motion";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <Seo
          title={"Kirtan Patel | Home"}
          desc={"This is my awesome landing page of portfolio"}
        />
        <section className="home section grid">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
            exit={{ opacity: 0, scale: 0 }}
            src={profile}
            alt=""
            className="home__img"
          />

          <div className="home__content">
            <div className="home__data">
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", delay: 0.35 }}
                className="home__title"
              >
                <span>I'm Kirtan Patel.</span> <br />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Web Developer.",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Full Stack Developer.",
                    1000,
                  ]}
                  // wrapper="span"
                  speed={50}
                  style={{
                    display: "inline-block",
                    color: "var(--title-color)",
                  }}
                  className="animation"
                  repeat={Infinity}
                />
              </motion.h1>

              <motion.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", delay: 0.5 }}
                className="home__description"
              >
                I'm a Full stack developer with experience in JavaScript, and
                expertise in frameworks like React, Node.js, Express.js and
                MongoDb.
              </motion.p>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", delay: 0.7 }}
                className="home__button"
              >
                <Link to="/about" className="button">
                  More About Me{" "}
                  <span className="button__icon">
                    <FaArrowRight />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="color__block"></div>
        </section>
      </PageWrapper>
    </>
  );
};

export default Home;
