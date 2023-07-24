import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Import useHistory from react-router-dom

export default function CountDown() {
    const count = useMotionValue(100);
    const rounded = useTransform(count, Math.round);

    const navigate = useNavigate(); // Create history object for navigation

    useEffect(() => {
        const animation = animate(count, 0, { duration: 6 });

        return () => {
            animation.stop();
            navigate("/Quizz")
        }
    }, [count]);

    useEffect(() => {
        console.log(1)
        if (rounded === 0) {
            // Check if countdown reaches 0
            // Navigate to the "quizz" page
        }
    }, [rounded, history]);

    return (
        <>
            <div>
                <h1>Your test will start in</h1>
                <motion.h1>{rounded}</motion.h1>
            </div>
        </>
    );
}
