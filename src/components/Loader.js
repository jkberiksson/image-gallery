import { motion } from "framer-motion";
import styled from "styled-components";
import { transition } from "../utils/transition";

const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Loader = ({ loaderAnimation }) => {
  return (
    <StyledLoader animate={loaderAnimation}>
      <motion.h1
        variants={variants}
        initial="initial"
        animate="animate"
        transition={transition}
      >
        Images
      </motion.h1>
    </StyledLoader>
  );
};

export default Loader;

const StyledLoader = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  pointer-events: none;

  h1 {
    font-size: 5rem;
    color: #eee;
  }
`;
