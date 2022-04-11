import { motion } from 'framer-motion';

const Index = () => (
    <motion.svg width="845" height="840" viewBox="0 0 45 40" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            d="M9.3181 2.51L0.678093 17.48C0.578093 17.66 0.488092 17.84 0.408092 18.03L21.4881 5.86L11.8981 0.32C10.8181 0.72 9.9081 1.49 9.3181 2.51Z"
            fill="none"
            stroke="red"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.11}
            initial={{
                opacity: 0,
                pathLength: 0
            }}
            animate={{
                opacity: 1,
                pathLength: 1
            }}
            transition={{
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse'
            }}
        />
        <motion.path
            d="M13.6581 0C13.4481 0 13.2381 0.01 13.0381 0.04L22.4581 5.48C22.4581 5.48 22.4881 5.49 22.4981 5.5L34.1281 12.22V1.14C33.2281 0.4 32.1081 0 30.9381 0H13.6481H13.6581Z"
            fill="#42BA96"
        />
        <motion.path
            d="M35.2881 2.51C35.1881 2.33 35.0681 2.16 34.9481 1.99V26.34L44.5381 20.81C44.7281 19.66 44.5181 18.49 43.9381 17.48L35.2981 2.51H35.2881Z"
            fill="#42BA96"
        />
        <motion.path
            d="M32.7081 39.64C33.7881 39.24 34.6981 38.47 35.2881 37.45L43.9281 22.48C44.0281 22.3 44.1281 22.12 44.2081 21.93L23.1181 34.1L32.7081 39.63V39.64Z"
            fill="#42BA96"
        />
        <motion.path
            d="M0.678092 22.49L9.3181 37.46C9.4181 37.64 9.53809 37.81 9.65809 37.98V13.62L0.0680951 19.15C-0.121905 20.29 0.0880936 21.47 0.668094 22.49H0.678092Z"
            fill="#42BA96"
        />
        <motion.path
            d="M10.4781 38.82C11.3781 39.56 12.4981 39.96 13.6681 39.96H30.9581C31.1681 39.96 31.3781 39.95 31.5781 39.92L10.4781 27.74V38.82Z"
            fill="#42BA96"
        />
    </motion.svg>
);

export default Index;
