import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeTogle";

let tabs = [
  { id: "#home", label: "Home" },
  { id: "#about", label: "About" },
  { id: "#proyects", label: "Proyects" },
  { id: "#experience", label: "Experience" },
  { id: "#contact", label: "Contact" },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <nav className="flex gap-3 pr-3 bg-black/20 backdrop-blur-lg backdrop-saturate-150 rounded-full">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "text-white" : "hover:text-slate-100 dark:hover:text-slate-900"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-black dark:text-white   transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-black dark:bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </a>
      ))}
      <ThemeToggle />
    </nav>
  );
}
