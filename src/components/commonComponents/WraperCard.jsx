import React from "react";
import { motion } from "framer-motion";

function WraperCard({ children }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.4 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default WraperCard;
