"use client";
import { motion } from "framer-motion";

const partners = [
    "Skanska", "Hochtief", "Vinci", "Bouygues", "Strabag", "Balfour Beatty", "Ferrovial", "Acciona"
];

export default function Partners() {
    return (
        <section className="py-24 bg-white overflow-hidden relative border-b border-neutral-100">
            <div className="container mx-auto px-6 text-center mb-16">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
                    Trusted by industry leaders worldwide
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex gap-24 py-4 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-24 items-center">
                            {partners.map((name, idx) => (
                                <div
                                    key={idx}
                                    className="text-3xl md:text-5xl font-black text-neutral-200 hover:text-[#0000EE] transition-all duration-700 cursor-default flex items-center gap-4 grayscale group-hover:grayscale-0"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#0000EE]/5 flex items-center justify-center transition-all duration-700">
                                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-[#0000EE] transition-all" />
                                    </div>
                                    <span className="tracking-tighter uppercase italic">{name}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
