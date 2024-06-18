import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledHeader = styled(motion.header)`
  position: fixed;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: end;
  right: 3rem;
  z-index: 20;
`;
