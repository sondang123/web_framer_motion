import { motion } from "framer-motion";
export default function Animation() {
  return (
    <div className="">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      />
    </div>
  );
}
