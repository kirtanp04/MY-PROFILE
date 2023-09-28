import React, { useEffect, useState } from 'react'
import {Helmet} from "react-helmet"
const Seo = ({title,desc}) => {
  

  
  return (
    <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name="twitter:title" content={title}/>
      <meta property='og:title' content={title}/>
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:description" content={desc}/>
      <meta name="author" content="Kirtan Patel"/>
      <meta name="keyword" content="portfolio, javascript, web developer, full stack developer,frontend developer, React , html, css, mern stack"/>
    </Helmet>
    </>
  )
}

export default Seo