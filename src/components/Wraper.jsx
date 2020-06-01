import React from 'react';
import { motion } from "framer-motion";

function Wraper({children}) {
    return (
        <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition= {{duration: 1}}
      >
        {children}
      </motion.div>
    );
}

export default Wraper;
