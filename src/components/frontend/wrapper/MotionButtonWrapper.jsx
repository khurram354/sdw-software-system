'use client';
import { motion } from 'framer-motion';

const MotionButtonWrapper = ({ children, className = "", ...props }) => {
  return (
    <motion.button className={className} {...props}>
      {children}
    </motion.button>
  );
};

export default MotionButtonWrapper;