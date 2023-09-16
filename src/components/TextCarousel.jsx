import { AnimatePresence, motion } from 'framer-motion';

const text = 'Frontend Engineer - UX Engineer - UI Developer - ';


const textVariants = {
  initial: {
    x: '0%',
  },
  animate: {
    x: '-100%',
    transition: {
      x: {
        duration: 12,
        repeat: Infinity,
        repeatType: 'loop',
        ease: "linear"
      },
    },
  },
};

const TextCarousel = () => {
  return (
    <div className="w-full overflow-hidden flex">
      <AnimatePresence>
        <motion.span
          key={1}
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="inline-block whitespace-pre text-2xl sm:text-6xl font-bold"
        >
          {text.toUpperCase()} 
        </motion.span>
        {/*
        Depending on the font size for larger screens, there will be a need to implement 1 of the 2 options:
            - Bigger font sizes for easy redability in higher resolution and all the width be ocupied (container might help in larger screens)
            - Media queries to repeat span in case of not filling the block width
        */}
        <motion.span
            key={2}
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="inline-block whitespace-pre text-2xl sm:text-6xl  font-bold "
            >
            {text.toUpperCase()}
        </motion.span>
        
      </AnimatePresence>
    </div>
  );
};

export default TextCarousel;


