import { motion } from 'framer-motion';
import AnimatedTextCharacter from './AnimatedText';

export const HeroSection = () => {
    const slideLeft = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    }
  return (
    <div>
        <motion.p 
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="tracking-widest">Hi there 👋
        </motion.p>
		<AnimatedTextCharacter text={"Frontend Engineer"} />
		
    </div>
  )
}
