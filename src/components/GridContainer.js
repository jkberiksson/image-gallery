import { motion } from 'framer-motion';
import styled from 'styled-components';
import { transition } from '../utils/transition';

const GridContainer = ({ data, animation }) => {
  return (
    <Container>
      {data.map((item, index) => (
        <motion.div animate={animation} key={index} custom={index}>
          <motion.img
            layoutId={`${index}`}
            src={item.url}
            transition={transition}
          />
        </motion.div>
      ))}
    </Container>
  );
};

export default GridContainer;

const Container = styled(motion.div)`
  position: absolute;
  height: 110vh;
  width: 110vw;
  left: -10%;
  top: -10%;
  display: grid;
  grid-template-columns: repeat(5, 420px);
  overflow: hidden;

  div {
    width: 32rem;
    height: 30rem;
    padding: 32px 42px;
    place-self: center;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;
