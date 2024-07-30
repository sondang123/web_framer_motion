import { Link } from "@remix-run/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { fadeIn } from "~/utils/motion";

export const SideBar: React.FC = () => {
  const { ref, inView } = useInView();
  const control = useAnimation();

  useEffect(() => {
    control.start("show");
  }, []);

  return (
    <div className={"w-[250px] py-4 md:py-10 px-3"}>
      <Link to="/">
        <motion.div
          variants={fadeIn("up", "tween", 0.05, 0.5)}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <div className="p-3 rounded-lg bg-slate-200 dark:bg-slate-500">
            Animation Animation
          </div>
        </motion.div>
      </Link>
      <Link to="/page-frame">
        <motion.div
          variants={fadeIn("left", "tween", 0.05, 0.5)}
          initial="hidden"
          animate={control}
          ref={ref}
          className="mt-3"
        >
          <div className="p-3 rounded-lg bg-slate-200 dark:bg-slate-500">
            Page frame
          </div>
        </motion.div>
      </Link>
      <Link to="/mighty">
        <motion.div
          variants={fadeIn("right", "tween", 0.05, 0.5)}
          initial="hidden"
          animate={control}
          ref={ref}
          className="mt-3"
        >
          <div className="p-3 rounded-lg bg-slate-200 dark:bg-slate-500">
            Mighty
          </div>
        </motion.div>
      </Link>
      <Link to="/abc">
        <motion.div
          variants={fadeIn("down", "tween", 0.05, 0.5)}
          initial="hidden"
          animate={control}
          ref={ref}
          className="mt-3"
        >
          <div className="p-3 rounded-lg bg-slate-200 dark:bg-slate-500">
            Animation Animation
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
