import FlexContainer from './FlexContainer';
import GridContainer from './GridContainer';
import Loader from './Loader';

import jsonData from '../utils/data.json';
import { data } from '../utils/data.js';
import { useEffect } from 'react';
import { useAnimation, useMotionValue } from 'framer-motion';
import { transition } from '../utils/transition';
import { motion } from 'framer-motion';

const Home = ({ gridVisible, setGridVisible }) => {
    const loaderAnimation = useAnimation();
    const animation = useAnimation();
    const bgColor = useMotionValue('black');

    const utilsGrid = [600, 400, 600, 800, 600];

    const loader = () => {
        loaderAnimation.start({
            opacity: 0,
            transition: transition,
        });
    };

    const sequence = async () => {
        animation.set((index) => ({
            scale: 1.1,
            y: utilsGrid[index % 5],
        }));

        await animation.start({
            y: 0,
            transition: transition,
        });

        bgColor.set('#eee');

        await animation.start({
            scale: 1,
            transition: transition,
        });
        setGridVisible(false);
        bgColor.set('');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            loader();
            sequence();
        }, 2000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <motion.div
            style={{
                backgroundColor: bgColor,
                transition: 'background-color 1.25s ease-in-out',
                height: '100vh',
                width: '100vw',
            }}>
            <Loader loaderAnimation={loaderAnimation} />
            {!gridVisible && <FlexContainer data={data} />}
            {gridVisible && <GridContainer data={data} animation={animation} />}
        </motion.div>
    );
};

export default Home;
