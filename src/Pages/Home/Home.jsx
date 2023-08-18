
import profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import "./home.css"
import { TypeAnimation } from 'react-type-animation';
import Seo from '../../Seo'

 
const Home = () => {
  return (
    <>
    <Seo title={'Kirtan Patel | Home'} desc={'This is my awesome landing page of portfolio'}/>
      <section className="home section grid">
        <img src={profile} alt="" className='home__img' />

        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Kirtan Patel.</span> <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Web Developer.',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Full Stack Developer.',
                  1000,
                  
                ]}
                // wrapper="span"
                speed={50}
                style={{  display: 'inline-block',color:"var(--title-color)" }}
                className='animation'
                repeat={Infinity}
              />
            </h1>

            <p className="home__description">
            I'm a Full stack developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDb.
            </p>

            <Link to='/about' className='button'>
              More About Me{' '}
              <span className='button__icon'>
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="color__block"></div>
      </section>
    </>
  )
}

export default Home