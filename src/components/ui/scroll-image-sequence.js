"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * ImageSequence Component
 *
 * Renders a sequence of images that updates based on scroll position within the viewport.
 * If actual images are missing, shows a placeholder card to instruct the user.
 *
 * @param {string} imagePath - Path pattern for images, e.g., "/sequence/frame_{i}.jpg"
 * @param {number} startFrame - Starting frame index (e.g., 1)
 * @param {number} endFrame - Ending frame index (e.g., 60)
 * @param {string} className - Additional CSS classes
 */
export default function ScrollImageSequence({
    imagePath = "/sequence/frame_{i}.jpg",
    startFrame = 1,
    endFrame = 60,
    className = "",
    placeholderSrc = "/hero-image.png"
}) {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Scroll progress of the container (0 to 1)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Smooth scroll progress to prevent jitter
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    });

    // Transform scroll (0-1) to frame index (start-end)
    const frameIndex = useTransform(smoothProgress, [0, 1], [startFrame, endFrame]);

    // Preload images on mount
    useEffect(() => {
        let loadedCount = 0;
        const totalFrames = endFrame - startFrame + 1;
        const newImages = [];

        // Simple check if the user actually has these images.
        // If not, we might want to fallback gracefully after a timeout or error.

        for (let i = startFrame; i <= endFrame; i++) {
            const img = new Image();
            const src = imagePath.replace("{i}", i.toString().padStart(3, '0')); // detailed padding usually needed
            // Try simpler pattern if user provided one without padding instructions, 
            // but standard is usually frame_001.jpg etc. 
            // Let's assume user just puts numbers for now or handles the string externally.
            // Actually, let's keep it robust:
            // pattern: "/my-image-sequence/img-[i].jpg" -> replace [i] with i

            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) setLoaded(true);
            };
            img.onerror = () => {
                // If images fail, we might want to stop trying to render the canvas
                // handled by fallback below
            };
            newImages[i] = img;
        }
        setImages(newImages);
    }, [endFrame, imagePath, startFrame]);

    // Render logic
    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");

            // Get current frame index from the motion value
            const currentFrame = Math.round(frameIndex.get());

            // Clamp frame
            const safeFrame = Math.max(startFrame, Math.min(endFrame, currentFrame));
            const img = images[safeFrame];

            if (img && img.complete && img.naturalHeight !== 0) {
                // Draw image to cover canvas, preserving aspect ratio
                // basic implementation: drawImage(img, 0, 0, canvas.width, canvas.height)
                // Better implementation: 'object-cover' emulation

                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const ratio = Math.max(hRatio, vRatio);

                const centerShift_x = (canvas.width - img.width * ratio) / 2;
                const centerShift_y = (canvas.height - img.height * ratio) / 2;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(
                    img,
                    0, 0, img.width, img.height,
                    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
                );
            }
        };

        const unsubscribe = frameIndex.on("change", render);
        // Also render once initially directly
        // requestAnimationFrame(render);

        return () => unsubscribe();
    }, [frameIndex, images, startFrame, endFrame, loaded]);


    // Fallback if no images are loaded yet or path is invalid:
    // We can show a single static image if loaded is false.
    // However, to keep it simple for the user, we render the Canvas AND 
    // a potential fallback "Instruction Card" if specific condition met?
    // No, just render canvas.

    return (
        <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
                className="w-full h-full object-cover"
            />
            {/* Fallback / Placeholder if user hasn't uploaded sequence yet */}
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 text-neutral-400 p-8 text-center border-2 border-dashed border-neutral-200">
                    <div>
                        <p className="font-bold mb-2">Image Sequence Placeholder</p>
                        <p className="text-xs">
                            Upload frames to <code>public/sequence/frame_*.jpg</code> <br />
                            to see the animation. <br />
                            (001 to 060)
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
