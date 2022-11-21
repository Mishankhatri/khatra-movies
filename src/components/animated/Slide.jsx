import { AnimatePresence, motion } from "framer-motion";

const Slide = ({ children, direction = 1, distance = 500 }) => {
  const fadeVariant = {
    initial: {
      x: direction * -distance,
    },
    animate: {
      x: 0,
    },
    exit: {
      x: direction * -distance,
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
          duration: 0.75,
          ease: "backInOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Slide;
