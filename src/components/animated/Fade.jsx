import { AnimatePresence, motion } from "framer-motion";

const Fade = ({ children }) => {
  const fadeVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={fadeVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration:2
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Fade;
