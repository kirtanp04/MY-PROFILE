import { motion } from "framer-motion";

const Resume = ({ icon, year, title, desc }, index) => {
  return (
    <>
      <div className="resume__item">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          viewport={{ amount: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 * index }}
          className="resume__icon"
        >
          {icon}
        </motion.div>
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          viewport={{ amount: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 * index }}
          className="resume__date"
        >
          {year}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 * index }}
          className="resume__subtitle"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          viewport={{ amount: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 * index }}
          className="resume__description"
        >
          {desc}
        </motion.p>
        <br />
      </div>
    </>
  );
};

export default Resume;
