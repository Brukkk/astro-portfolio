import Bruk from "@assets/bruk-transparente.webp";
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const ProfileCard = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    
    function handleMouseMove({clientX , clientY, currentTarget }) {
        let { left, top } = currentTarget.getBoundingClientRect()
        
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }
    return (
        <figure
            onMouseMove={handleMouseMove}
            className="group w-56 h-auto mx-auto relative rounded-xl border border-white/10 shadow-2xl" >    
                <motion.div 
                    style={{
                        background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px,#0ea5e966, transparent 80%)`
                    }}
                    className="pointer-events-none absolute -inset-px rounded-xl transition duration-300 opacity-0 group-hover:opacity-100 " 
                />
                <img src={Bruk.src} alt="Bruno Torrabadella picture" className="relative w-full h-full rounded-xl " />
        </figure>
    )
}

export default ProfileCard