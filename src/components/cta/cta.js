"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { NumberTicker } from "@/components/magicui/number-ticker";

export default function CTA() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

    return (
        <section ref={containerRef} className="py-40 bg-[#fdfcf8] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl"
                >
                    <span className="w-2 h-2 rounded-full bg-[#E35307] block mx-auto mb-10 animate-pulse" />

                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] text-neutral-900 mb-12 leading-[0.9]">
                        Ready to <span className="font-light italic text-neutral-400">Start?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-neutral-600 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
                        Join <span className="inline-flex items-center font-bold text-neutral-900"><NumberTicker value={500} />+</span> construction teams using Clara to win more tenders with less effort.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-12 py-6 bg-[#0000EE] hover:bg-blue-700 text-white rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            Get Early Access
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-blue-50/50 to-orange-50/50 blur-[150px] rounded-full mix-blend-multiply opacity-60" />
            </div>
        </section>
    );
}
