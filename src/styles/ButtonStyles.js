import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Button = styled(motion.button)`
  margin: 0.5rem;
  background: none;
  border-radius: 0.5rem;
  border: 1px solid
    ${(props) =>
      props.mode === 'light' ? props.theme.color : props.theme.color};
  padding: 0.5rem;
  display: flex;
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.mode === 'light' ? props.theme.color : props.theme.color};
  }
`;
