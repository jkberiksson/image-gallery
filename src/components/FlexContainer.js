import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { transition } from '../utils/transition';

const FlexContainer = ({ data }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const handleWheel = (e) => {
            if (container) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <Container ref={containerRef}>
            {data.map((item, index) => (
                <div key={index}>
                    <motion.img layoutId={`${index}`} src={item} transition={transition} />
                </div>
            ))}
        </Container>
    );
};

export default FlexContainer;

const Container = styled(motion.div)`
    height: 100vh;
    overflow-x: scroll;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(20, 1fr);

    div {
        width: 50vmin;
        height: 50vmin;
        margin: 0 3rem;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
`;
