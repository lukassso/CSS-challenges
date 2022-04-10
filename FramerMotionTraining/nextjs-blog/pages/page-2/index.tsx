import { motion, AnimatePresence } from 'framer-motion';
import styled from './index.module.css';
import { FunctionComponent, useState, VoidFunctionComponent } from 'react';

const boxVariants = {
    initial: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotareZ: 360
    },
    leaving: {
        opacity: 0,
        scale: 0,
        rotateZ: 50
    }
};

const Index: VoidFunctionComponent = () => {
    const [showing, setShowing] = useState(false);

    const toggleShowing = () => {
        setShowing((prev) => !prev);
    };
    return (
        <div className={styled.wrapper}>
            <AnimatePresence>
                {showing && (
                    <motion.div
                        className={styled.box}
                        variants={boxVariants}
                        initial="initial"
                        animate="visible"
                        exit="leaving"
                    />
                )}
            </AnimatePresence>
            <button className={styled.button} onClick={toggleShowing}>
                Click
            </button>
        </div>
    );
};
export default Index;
