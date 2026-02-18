"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollImageSequence from "@/components/ui/scroll-image-sequence";
import { NumberTicker } from "@/components/magicui/number-ticker";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="relative min-h-[95vh] flex items-center bg-[#fdfcf8] overflow-hidden pt-24 pb-12">
            {/* Background Details */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-[#0000EE]/10 blur-[150px] rounded-full mix-blend-multiply" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[70%] bg-[#E35307]/10 blur-[150px] rounded-full mix-blend-multiply" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        className="lg:col-span-7 pr-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-10 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#E35307] animate-pulse" />
                            Meet Clara • Your AI Tender Agent
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl md:text-8xl lg:text-[100px] font-bold tracking-[-0.05em] leading-[0.9] text-neutral-900 mb-12"
                        >
                            Stop Chasing <br />
                            <span className="text-neutral-400 font-light italic">Wrong Tenders</span>
                        </motion.h1>

                        <motion.div variants={itemVariants} className="max-w-2xl mb-16">
                            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light mb-8">
                                BAU AI is the first intelligent operating system for construction business development.
                                We help teams find the right opportunities and make data-driven decisions.
                            </p>
                            <p className="text-base text-neutral-500 leading-relaxed font-normal opacity-70 border-l-2 border-neutral-200 pl-6 py-2 italic">
                                "The industry's most powerful AI agent that deep-scans documents and monitors 50+ portals 24/7 so you only bid where it counts."
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-8 mb-20">
                            <Link href="/signup" className="px-12 py-6 bg-[#0000EE] hover:bg-black text-white rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-[0_20px_40px_-10px_rgba(0,0,238,0.3)] hover:shadow-2xl flex items-center gap-3 group">
                                Try Clara Live <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/how-it-works" className="text-sm font-bold uppercase tracking-widest text-neutral-900 hover:text-[#E35307] transition-colors flex items-center gap-3 group">
                                <span>How it Works</span>
                                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-50 transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </motion.div>

                        {/* Content Heavy Stats Row */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-neutral-200/50">
                            <div>
                                <div className="text-3xl font-bold text-neutral-900 mb-1"><NumberTicker value={150} />+</div>
                                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Portals Monitored</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-neutral-900 mb-1">€<NumberTicker value={800} />M+</div>
                                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Tenders Scanned</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-neutral-900 mb-1"><NumberTicker value={94} />%</div>
                                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Match Accuracy</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-neutral-900 mb-1"><NumberTicker value={40} />%</div>
                                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Win Rate Increase</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Hero Sequence Container */}
                    <motion.div
                        className="lg:col-span-5 relative h-[600px] lg:h-[750px] w-full"
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    >
                        <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-[0_80px_160px_-30px_rgba(0,0,0,0.2)] ring-1 ring-black/5 bg-neutral-100 group">
                            <ScrollImageSequence
                                imagePath="/assets/model/frame_{i}.jpg"
                                startFrame={0}
                                endFrame={191}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay for glassmorphism effect on the image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
                        </div>

                        {/* Decorative floating element */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="absolute -bottom-12 -left-12 bg-white/90 backdrop-blur-2xl p-10 rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-white/50 max-w-[300px] hidden xl:block"
                        >
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0000EE] mb-4">Live Agent Activity</p>
                            <p className="text-lg font-medium text-neutral-900 leading-tight mb-6">Scanning 50+ tender portals... <br /><span className="text-[#E35307]">Found matching opportunity</span></p>
                            <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#0000EE] to-[#E35307]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
