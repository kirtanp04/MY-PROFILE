
import {personalInfo} from "../data"

const Info = () => {
  return (
    <>
        {
            personalInfo.map(({title,description},index)=>{
                return(
                    <li className="info__item" key={index}>
                        <span className="info__title" style={{color:"hsl(0,0%,50%)"}}>
                            {title}
                        </span>
                        <span className="info__description" style={{color:"hsl(0,0%,50%)"}}>
                            {description}
                        </span>
                    </li>
                    
                )
            })
        }
    </>
  )
}

export default Info