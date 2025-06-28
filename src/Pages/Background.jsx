import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bitCount = 20;

const generateBits = () =>
    Array.from({ length: bitCount }).map(() => ({
        id: crypto.randomUUID(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 10,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 5,
    }));

export default function AnimatedBackground() {
    const [bits, setBits] = useState(generateBits);

    useEffect(() => {
        const interval = setInterval(() => {
            setBits(generateBits());
        }, 15000); // Refresh animation every 15 sec
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gray-900">
            {bits.map((bit) => (
                <motion.div
                    key={bit.id}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: [0, -100],
                        x: bit.x, // ✅ use value directly, no string
                    }}
                    transition={{
                        duration: bit.duration,
                        delay: bit.delay,
                        repeat: Infinity,
                    }}
                    className="absolute rounded-full blur-sm"
                    style={{
                        width: `${bit.size}px`,           // ✅ wrapped in backticks
                        height: `${bit.size}px`,
                        left: `${bit.x}%`,
                        top: `${bit.y}%`,
                        backgroundColor: "rgba(0, 213, 255, 0.2)", // React blue glow
                    }}
                />
            ))}
        </div>
    );
}
