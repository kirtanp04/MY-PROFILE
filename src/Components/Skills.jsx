import { skills } from "../data"
import 'react-circular-progressbar/dist/styles.css';
import ReactRoundedImage from "react-rounded-image"

const Skills = () => {
  return (
    <>
        {
            skills.map(({title, percentage}, index)=>{
                return(
                    <div className="progress__box"  key={index}>
                        <div className="progress_circle" data-aos="zoom-out">
                        <ReactRoundedImage image={percentage}
                        roundedColor="none"
                        imageWidth="150"
                        imageHeight="150"
                        roundedSize="13"
                        borderRadius="70"
                        className='circle'
                         />
                        </div>

                        <h3 className="skills__title">{title}</h3>
                    </div>
                )
            })
        }
    </>
  )
}

export default Skills