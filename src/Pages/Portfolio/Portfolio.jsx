import React, { useEffect, useState } from 'react'
import { portfolio } from "../../data"
import Projects from "../../Components/Portfolio"
import './portfolio.css'
import Seo from '../../Seo'
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrumbs from '@mui/material/Breadcrumbs';



const Portfolio = () => {
  const [types,setType] = useState("all")
  useEffect(() => {
    window.scrollTo({top:0,behavior:"smooth"})
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Seo title={'Kirtan Patel | Projects'} desc={'This is all my projects that I have done so far.'} />
      <section className="portfolio section">
        <h2 className="section__title">My <span>Portfolio</span></h2>

        <div role="presentation" className="breadcrumb">
          <Breadcrumbs maxItems={5} aria-label="breadcrumb">
            <span onClick={()=>setType("all")}>
              All
            </span>
            <span onClick={()=>setType("Frontend")}>
              Frontend + API Applications
            </span>
            <span onClick={()=>setType("Full Stack")}>
              Full Stact Applications
            </span>
            <span onClick={()=>setType("Mobile app")}>
              Mobile Applications
            </span>
          </Breadcrumbs>
        </div><br />

        <div className="portfolio__container container grid">
        {
          types === "all" ? 
          <>
          {
            portfolio.map((item) => {
              return <Projects key={item.id} {...item} />
            })
          }
          </>:<>
          {
            portfolio.filter((val)=>{
              if(val.type.includes(types)){
                return val;
              }
            }).map((item) => {
              return <Projects key={item.id} {...item} />
            })
          }
          </>
        }

        </div>
      </section>
    </>
  )
}

export default Portfolio