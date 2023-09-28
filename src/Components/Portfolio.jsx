import { useState } from "react";
import Close from "../assets/close.svg";
import { motion } from "framer-motion";

const Projects = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const ToggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="portfolio__item">
        <motion.div layoutId={title}>
          <motion.img
            layout            
            src={img}
            alt=""
            className="portfolio__img"
          />
          <div className="portfolio__hover" onClick={ToggleModal}>
            <h3 className="portfolio__title">{title}</h3>
          </div>
        </motion.div>

        {modal && (
          <div className="portfolio__modal">
            <motion.div layoutId={title} className="portfolio__modal-content">
              <img
                src={Close}
                alt=""
                onClick={ToggleModal}
                className="modal__close"
              />

              <h3 className="modal__title">{title}</h3>

              <ul className="modal__list grid">
                {details.map(({ icon, title, desc }, index) => {
                  return (
                    <li className="modal__item" key={index}>
                      <span className="item__icon">{icon}</span>

                      <div>
                        <span className="item__title">{title}</span>
                        <span className="item__details">{desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <img src={img} alt="" className="modal__img" />
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
