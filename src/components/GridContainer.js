import { motion } from 'framer-motion';
import styled from 'styled-components';
import { transition } from '../utils/transition';

const GridContainer = ({ data, animation }) => {
    return (
        <Container>
            {data.map((item, index) => (
                <motion.div animate={animation} key={index} custom={index}>
                    <motion.img layoutId={`${index}`} src={item} transition={transition} />
                </motion.div>
            ))}
        </Container>
    );
};

export default GridContainer;

const Container = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
    overflow: hidden;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(50vw, 1fr));
        overflow-y: scroll;
    }

    div {
        width: 32rem;
        height: 30rem;
        padding: 32px 42px;
        place-self: center;

        @media (max-width: 768px) {
            width: 22rem;
            height: 20rem;
            padding: 22px 32px;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
`;
