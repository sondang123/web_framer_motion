import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { textVariant } from "~/utils/motion";

export const ShowText: React.FC = () => {
  const { ref, inView } = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("show");
    } else {
      control.start("hidden");
    }
  }, [inView, control]);
  return (
    <motion.div
      variants={textVariant(0)}
      ref={ref}
      initial="hidden"
      animate={control}
      className="text__container"
    >
      <h2>Features.</h2>
      <p>
        Discover all the tools you need to create stunning animations with ease.
      </p>
    </motion.div>
  );
};
