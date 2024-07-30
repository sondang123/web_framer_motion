import type { MetaFunction } from "@remix-run/node";
import { motion, useAnimation } from "framer-motion";
import { Box } from "~/feature/Box";
import { fadeIn, slideIn } from "~/utils/motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { ShowText } from "~/feature/Text";
import { Link } from "@remix-run/react";
import { Card } from "~/feature/Card";
import { features } from "~/const/AppData";

import { initialTabs as tabs } from "~/feature/ingredients";

import MotionText from "~/feature/motion/motion-text";
import MotionDiv from "~/feature/motion/motion-div";

export const meta: MetaFunction = () => {
  return [
    { title: "Sơn Đặng Tool" },
    { name: "description", content: "Welcome to Tool" },
  ];
};

export default function Index() {
  const { ref, inView } = useInView();
  const control = useAnimation();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  useEffect(() => {
    if (inView) {
      control.start("show");
    } else {
      control.start("hidden");
    }
  }, [inView, control]);

  return (
    <div className="mb-10">
      <MotionText delayOffset={0}>
        Hi, I'm Sơn Đặng Hi, I'm Sơn Đặng! ! 👋
      </MotionText>
      <MotionDiv delayOffset={0.8}>Developer 🧑🏻‍💻</MotionDiv>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-6">
          <motion.div
            variants={fadeIn("down", "tween", 0.05, 0.5)}
            initial="hidden"
            animate="show"
          >
            <Box />
          </motion.div>
        </div>
        <div className="col-span-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Box />
          </motion.div>
        </div>
      </div>
      <ShowText />

      <ul>
        {features.map((feature, index) => (
          <motion.div
            ref={ref}
            variants={fadeIn("rigth", "tween", index * 0.2, 0.3)}
            className={`feature feature${index}`}
            initial="hidden"
            animate={control}
            key={index}
          >
            <div className="feature__icon">alo</div>
            <p> {feature.text}</p>
          </motion.div>
        ))}
      </ul>

      <motion.div
        variants={fadeIn("up", "tween", 0.7, 0.5)}
        initial="hidden"
        animate={control}
        className="landing__hero"
        id="home"
        ref={ref}
      >
        <h1>
          Create Stunning Animations <br /> with Framer Motion
        </h1>
        <p>
          MotionGround is an online playground for Framer Motion that lets you{" "}
          <br />
          visually create and customize animations and transitions with ease.
        </p>
        <motion.button whileHover="hover" className="cta-btn">
          <Link to="/signup">Get Started for Free</Link>
        </motion.button>
      </motion.div>

      <motion.div id="contact" className="landing__contact">
        <div className="contact__container">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 0.5)}
            ref={ref}
            initial="hidden"
            animate={control}
          >
            <h2 className="typo-s32-w400">Contribute Today</h2>
            <p className="typo-s26-w800">
              Are you a developer wanting to take this project to next level?
              Contribute on the <br />
              <a
                href="https://github.com/zenith-noble01/MotionGround"
                rel="norefere"
                target="_black"
              >
                Github repo Here.
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
      <Card />
      <div className="py-10">
        <nav>
          <ul className="flex justify-around">
            {tabs.map((item) => (
              <li
                key={item.label}
                className={
                  item === selectedTab
                    ? "selected  cursor-pointer"
                    : " cursor-pointer"
                }
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div
                    className="border-b-2 cursor-pointer border-slate-700 dark:border-slate-200"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        {/* <div className="h-36">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </div> */}
      </div>
      <div className="grid grid-cols-12 gap-10 mt-5">
        <div className="col-span-4">
          <motion.div whileHover={{ scale: 1.052 }} whileTap={{ scale: 1.04 }}>
            <Box />
          </motion.div>
        </div>
        <div className="col-span-4">
          <motion.div whileHover={{ scale: 1.052 }} whileTap={{ rotate: 100 }}>
            <Box />
          </motion.div>
        </div>

        <div className="col-span-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ rotate: 100, opacity: 1 }}
          >
            <Box />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
