import Info from '../../Components/Info'
import {FaDownload} from "react-icons/fa"
import CV from "../../assets/CV.pdf"
import './about.css'
import Skills from '../../Components/Skills'
import { resume } from '../../data'
import Resume from '../../Components/Resume'
import Seo from '../../Seo'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'


const About = () => {
  useEffect(() => {
    window.scrollTo({top:0,behavior:"smooth"})
    AOS.init();
  }, [])
  return (
    <>
    <Seo title={'Kirtan Patel | About'} desc={'This is my about page, it depicts complete academic details and my skills'}/>
      <main className="section container">
        <section className="about">
          <h2 className="section__title">
            About <span>Me</span>
          </h2>

          <div className="about__container grid">
            <div className="about__info">
              <h3 className="section__subtitle">Personal Infos
              </h3>

              <ul className="info__list grid">
                <Info/>
                
              </ul>

              <a href={CV} className='button' download=''>
              Download CV <span className="button__icon"><FaDownload/></span></a>
            </div>
          </div>
        </section>

        <div className="separator"></div>
          <section className="skills">
            <h3 className="section__subtitle subtitle__center">Technologies and Frameworks</h3>

            <div className="skills__container grid">
              <Skills/>
            </div>
          </section>

          <div className="separator"></div>
          <section className="resume">
            <h3 className="section__subtitle subtitle__center">
              Experience & Education
            </h3>

            <div className="resume__container grid">
              <div className="resume__data">
                {
                  resume.map((val)=>{
                    if(val.category === 'experience'){
                      return <Resume key={val.id} {...val}/>
                    }
                  })
                }
              </div>
              <div className="resume__data">
                {
                  resume.map((val)=>{
                    if(val.category === 'education'){
                      return <Resume key={val.id} {...val}/>
                    }
                  })
                }
              </div>
            </div>
          </section>
      </main>
    </>
  )
}

export default About