import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeTogle";

let tabs = [
  { id: "#home", label: "Home" },
  { id: "#proyects", label: "Proyects" },
  { id: "#experience", label: "Experience" },
  { id: "#about", label: "About" },
  { id: "#contact", label: "Contact" },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 640px)"
  );
  const y = isMediumDevice ? -100 : 100;
  const nav = {
    hidden: {
      y: y,
      scale: 0.8,
      opacity: 0.3
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1
    },
  }
  return (
    <motion.nav
      variants={nav}
      initial="hidden"
      animate="visible"
      className="p-2 flex gap-3 flex-wrap justify-center bg-black/20 backdrop-blur-lg backdrop-saturate-150 rounded-xl">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "text-white" : "hover:text-slate-100 dark:hover:text-slate-400"
          } relative rounded-xl px-3 py-1.5 text-sm font-medium text-black dark:text-white   transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-black dark:bg-white mix-blend-difference"
              style={{ borderRadius: 12 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </a>
      ))}
      <ThemeToggle />
    </motion.nav>
  );
}
