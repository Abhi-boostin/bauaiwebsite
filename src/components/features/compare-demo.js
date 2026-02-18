"use client";
import { useState } from "react";
import Image from "next/image"; // For Before/After static comparison
import { motion } from "framer-motion";
import { NumberTicker } from "@/components/magicui/number-ticker";

export default function CompareDemo() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (event) => {
        if (!isDragging) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <span className="text-[#E35307] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                        The Clara Difference
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
                        Before & After <span className="text-neutral-400 font-light italic">BAU AI</span>
                    </h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        See how Clara transforms chaotic tender documents into structured, actionable intelligence in seconds.
                    </p>
                </div>

                <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 select-none group"
                    onMouseMove={handleMove}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
                        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
                        setSliderPosition(percent);
                    }}
                >
                    {/* AFTER IMAGE (Background / Full Width) */}
                    <div className="absolute inset-0 bg-neutral-50 flex items-center justify-center">
                        {/* Placeholder for "After" - A clean dashboard UI */}
                        <div className="w-full h-full bg-[#fdfcf8] flex items-center justify-center relative">
                            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm z-10">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#0000EE]">With Clara</span>
                            </div>

                            {/* Simple UI Mockup for "After" */}
                            <div className="w-[85%] h-[75%] bg-white/95 backdrop-blur-3xl rounded-[32px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-neutral-100 p-10 flex flex-col gap-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0000EE] to-transparent opacity-50" />

                                <div className="flex items-center justify-between border-b border-neutral-50 pb-8">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0000EE] font-bold text-xl">
                                            <NumberTicker value={98} />%
                                        </div>
                                        <div>
                                            <div className="h-4 w-40 bg-neutral-900/5 rounded-full mb-2"></div>
                                            <div className="h-3 w-24 bg-neutral-900/10 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="h-10 px-4 bg-green-50 text-green-600 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Scan Complete
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="h-4 w-full bg-neutral-50 rounded-full" />
                                        <div className="h-4 w-[90%] bg-neutral-50 rounded-full" />
                                        <div className="h-4 w-[95%] bg-neutral-50 rounded-full" />
                                    </div>
                                    <div className="p-6 bg-[#0000EE]/5 rounded-3xl border border-[#0000EE]/10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-2 h-2 rounded-full bg-[#0000EE]" />
                                            <div className="h-3 w-20 bg-neutral-900/20 rounded-full" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-neutral-900/5 rounded-full" />
                                            <div className="h-2 w-3/4 bg-neutral-900/5 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 p-6 bg-orange-50/50 rounded-3xl border border-orange-100/50">
                                    <div className="h-4 w-1/4 bg-orange-200/50 rounded-full mb-4" />
                                    <div className="h-2 w-full bg-orange-100/50 rounded-full mb-2" />
                                    <div className="h-2 w-3/4 bg-orange-100/50 rounded-full" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* BEFORE IMAGE (Clipped on top) */}
                    <div
                        className="absolute inset-0 bg-neutral-200 overflow-hidden border-r-2 border-white/50"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        {/* Placeholder for "Before" - Chaotic spreadsheets/PDFs */}
                        <div className="w-full h-full bg-neutral-800 flex items-center justify-center relative grayscale contrast-125">
                            <div className="absolute top-10 right-10 bg-black/60 backdrop-blur-lg px-5 py-2.5 rounded-full shadow-2xl z-10 border border-white/10">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Manual Chaos</span>
                            </div>

                            {/* Pattern of "Messy" Documents */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                            <div className="relative w-full h-full flex items-center justify-center gap-12 rotate-[-5deg] scale-110 opacity-40">
                                <div className="w-72 h-96 bg-white/5 backdrop-blur shadow-2xl p-8 border border-white/10 rounded-lg">
                                    <div className="w-full h-4 bg-white/10 mb-6 rounded" />
                                    <div className="space-y-4">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className="h-2 w-full bg-white/5 rounded" />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-72 h-80 bg-white/5 backdrop-blur shadow-2xl p-8 border border-white/10 relative -top-20 rounded-lg">
                                    <div className="w-full h-4 bg-white/10 mb-6 rounded" />
                                    <div className="space-y-4">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="h-2 w-full bg-white/5 rounded" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-[#0000EE] cursor-ew-resize z-20 shadow-[0_0_40px_rgba(0,0,238,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        {/* Scanning Beam Effect */}
                        <div className="absolute inset-y-0 -left-64 w-64 bg-gradient-to-r from-transparent to-[#0000EE]/20 pointer-events-none" />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#0000EE] rounded-full shadow-[0_0_40px_rgba(0,0,238,0.4)] flex items-center justify-center text-white hover:scale-110 transition-transform border-4 border-white/20">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><path d="m9 18 6-6-6-6" /></svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
