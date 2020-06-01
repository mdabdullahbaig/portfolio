import React from "react";
import { motion } from "framer-motion";

function TransitionWraperCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition= {{duration: 1}}
    >
      {children}
    </motion.div>
  );
}

export default TransitionWraperCard;
