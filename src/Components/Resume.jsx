import React from 'react'


const Resume = ({icon,year,title,desc}) => {
  return (
    <>
        <div className="resume__item">
            <div className="resume__icon">{icon}</div>

            <span className="resume__date" >{year}</span>
            <h3 className="resume__subtitle">{title}</h3>
            <p className="resume__description" >{desc}</p><br />
        </div>
    </>
  )
}

export default Resume