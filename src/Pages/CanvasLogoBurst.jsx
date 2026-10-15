import React, { useEffect, useRef } from "react";

export function CanvasLogoBurst() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let animationFrameId;
        let width = (canvas.width = canvas.offsetWidth);
        let height = (canvas.height = canvas.offsetHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        window.addEventListener("resize", handleResize);

        const totalLines = 220; // লাইনের সংখ্যা কিছুটা কমানো হলো
        const lines = [];
        
        // 🔹 ছড়ানোর ব্যাসার্ধ কমানো হয়েছে (0.6 এর জায়গায় 0.38 করা হয়েছে)
        const maxRadius = Math.hypot(width, height) * 0.38;

        for (let i = 0; i < totalLines; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.4 + Math.random() * 1.1;
            const maxLength = (0.2 + Math.random() * 0.8) * maxRadius; 

            lines.push({
                angle,
                speed,
                maxLength,
                currentLength: Math.random() * maxLength,
                // 🔹 ডট সাইজ কিছুটা ছোট করা হলো
                dotSize: Math.random() * 2.5 + 1.8, 
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;

            lines.forEach((line) => {
                line.currentLength += line.speed;
                if (line.currentLength > line.maxLength) {
                    line.currentLength = 0;
                }

                const endX = centerX + Math.cos(line.angle) * line.currentLength;
                const endY = centerY + Math.sin(line.angle) * line.currentLength;

                // লাইন আঁকা
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = "rgba(148, 163, 184, 0.25)"; 
                ctx.lineWidth = 1.2; 
                ctx.stroke();

                // ডট আঁকা
                ctx.beginPath();
                ctx.arc(endX, endY, line.dotSize, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(45, 212, 191, 0.75)"; 
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full block" />;
}