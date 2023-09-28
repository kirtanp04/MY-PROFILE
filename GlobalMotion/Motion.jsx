import { motion, AnimatePresence } from "framer-motion";


const PageWrapper = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{x:-100, opacity:0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -100 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
