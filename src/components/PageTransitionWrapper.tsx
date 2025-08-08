'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const PageTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const variants = {
        hidden: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <motion.div
                key={pathname}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                // This is the corrected line:
                transition={{ type: 'tween', ease: 'linear', duration: 0.3 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};