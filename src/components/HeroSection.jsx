
import { motion } from 'framer-motion';
import AnimatedTextCharacter from './AnimatedText';
import ProfileCard from './ProfileCard';

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

const slideTop = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
}

export const HeroSection = () => {
    
  return (
    <div>
        <motion.p 
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="tracking-widest">Hi there 👋
        </motion.p>
        <motion.p 
            variants={slideTop}
            initial="hidden"
            animate="visible"
            className="text-4xl">Bruno Torrabadella
        </motion.p>
		<AnimatedTextCharacter text={"Frontend Engineer"} />
        <ProfileCard />
    </div>
  )
}
