// import * as framer from "https://cdn.skypack.dev/framer-motion@6.3.2";
// import * as React from "https://cdn.skypack.dev/react@17.0.1";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Header = () => {
  const [activeElem, setActiveElem] = React.useState(-1);

  return (
    <header>
      <motion.div className="logo" whileHover={{ scale: 1.2 }} />
      <nav>
        {[0, 1, 2, 3].map((i) => (
          <a key={i} onClick={() => setActiveElem(i)}>
            <AnimatePresence>
              {activeElem === i && (
                <motion.span
                  layoutId="navlink"
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
          </a>
        ))}
      </nav>
    </header>
  );
};

const Sidebar = ({ onFilter }: { onFilter: any }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const listVariants = {
    collapse: { width: 0 },
    expand: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    collapse: { opacity: 0 },
    expand: { opacity: 1 },
  };

  return (
    <div className="sidebar">
      <motion.button
        initial={{ background: "var(--color-primary)" }}
        whileHover={{ background: "var(--color-active)" }}
        onClick={() => setIsCollapsed(!isCollapsed)}
        title="Toggle"
      >
        {isCollapsed ? ">" : "<"}
      </motion.button>
      <motion.ul
        variants={listVariants}
        animate={isCollapsed ? "collapse" : "expand"}
      >
        {[...Array(10).keys()].map((i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            onClick={() => onFilter(i)}
          />
        ))}
      </motion.ul>
    </div>
  );
};

const Body = () => {
  const items = [...Array(22).keys()];
  const [filteredItems, setFilteredItems] = React.useState([...items]);
  const handleFilter = (i: any) => {
    setFilteredItems(items.filter((index) => index % i === 0));
  };

  return (
    <main>
      <Sidebar onFilter={handleFilter} />
      <ul className="items">
        {filteredItems.map((i) => (
          <React.Fragment key={i}>
            <motion.li
              layout
              // className={[5, 17].includes(i) && "highlighted"}
              whileHover={{ y: -5 }}
            >
              {i}
            </motion.li>
            {i === 11 && <li className="promo" />}
          </React.Fragment>
        ))}
      </ul>
    </main>
  );
};

export const KhangPen = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
