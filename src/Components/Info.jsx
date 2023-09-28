import {motion} from "framer-motion"
import {personalInfo} from "../data"

const Info = () => {
  return (
    <>
        {
            personalInfo.map(({title,description},index)=>{
                return(
                    <motion.li initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1,type:"spring",delay:0.2*index}} className="info__item" key={index}>
                        <span className="info__title" style={{color:"hsl(0,0%,50%)"}}>
                            {title}
                        </span>
                        <span className="info__description" style={{color:"hsl(0,0%,50%)"}}>
                            {description}
                        </span>
                    </motion.li>
                    
                )
            })
        }
    </>
  )
}

export default Info