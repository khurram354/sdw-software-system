'use client';
import { motion } from "framer-motion";

const MotionWrapper = ({as = 'div', children, className = "", ...props }) => {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} {...props}>
      {children}
    </MotionTag>
  );
};

export default MotionWrapper;