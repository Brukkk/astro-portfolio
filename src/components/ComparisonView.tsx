import {
  motion,
  useDragControls,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ComparisonView() {
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef(null);
  const controls = useDragControls();
  const positionX = useMotionValue(50);

  useEffect(() => {
    if (containerRef.current) {
      console.log(containerRef);
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);
  console.log("rerender");
  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-clip aspect-[5/3] max-w-3xl rounded-md mx-auto bg-gray-50"
    >
      <div className="absolute inset-0 bg-blue-200"></div>
      <motion.div
        className="absolute inset-0 bg-red-200"
        style={{ clipPath: useMotionTemplate`inset(0 ${positionX}% 0 0)` }}
      />
      <motion.div
        className="w-2 bg-white/20 hover:bg-white/50 transition-colors h-full relative hover:cursor-grab"
        style={{ left: "50%" }}
        drag="x"
        dragControls={controls}
        dragConstraints={containerRef}
        dragMomentum={false}
        onDrag={(event, info) => {
          if (!containerRef) return;
          const { x } = info.point;
          // console.log(
          //   "x",
          //   x,
          //   "contenedor:",
          //   containerWidth,
          //   "off:",
          //   containerRef.current.offsetLeft
          // );
          const percentage =
            (1 - (x - containerRef.current.offsetLeft) / containerWidth) * 100;
          // console.log("%", percentage);
          positionX.set(percentage);
        }}
      ></motion.div>
    </motion.div>
  );
}
