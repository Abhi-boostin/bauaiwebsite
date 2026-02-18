"use client";
import { motion } from "framer-motion";

export default function DeepSearch() {
    return (
        <section className="py-32 bg-[#fdfcf8] border-y border-neutral-100">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative aspect-square rounded-[40px] bg-white shadow-2xl overflow-hidden p-8 border border-neutral-100 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-orange-50/20" />

                            {/* Content Heavy Mockup */}
                            <div className="relative z-10 space-y-6">
                                <div className="h-6 w-1/3 bg-neutral-100 rounded-lg animate-pulse" />
                                <div className="space-y-3">
                                    <div className="h-4 w-full bg-neutral-50 rounded" />
                                    <div className="h-4 w-[90%] bg-neutral-50 rounded" />
                                    <div className="h-4 w-[95%] bg-neutral-50 rounded" />
                                    <div className="h-4 w-[40%] bg-neutral-50 rounded" />
                                </div>
                                <div className="grid grid-cols-3 gap-4 pt-12">
                                    <div className="h-20 bg-blue-50/50 rounded-2xl" />
                                    <div className="h-20 bg-green-50/50 rounded-2xl" />
                                    <div className="h-20 bg-orange-50/50 rounded-2xl" />
                                </div>
                                <div className="space-y-3 pt-12">
                                    <div className="h-32 w-full bg-neutral-50 rounded-3xl" />
                                </div>
                            </div>

                            <div className="absolute bottom-8 right-8 w-24 h-24 bg-[#0000EE] rounded-full flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                                <span className="font-bold text-xs uppercase tracking-tighter">OS Core</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-[#0000EE] font-bold uppercase tracking-[0.25em] text-xs mb-8 block">
                            Deep Search Technology
                        </span>
                        <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-10 leading-[0.95]">
                            We scan what <br />
                            <span className="text-neutral-400 font-light italic">others skip.</span>
                        </h2>

                        <div className="space-y-8">
                            <p className="text-xl text-neutral-600 leading-relaxed font-light">
                                BAU AI doesn't just look at keywords. Our agent deep-scans every PDF, technical drawing,
                                and specification sheet within a tender to identify hidden requirements that traditional
                                tools miss.
                            </p>

                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    "Semantic analysis of unstructured documentation",
                                    "Automatic extraction of quantitative take-offs",
                                    "Risk profiling based on historical claim data",
                                    "Real-time monitoring of 150+ European portals"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#0000EE]" />
                                        </div>
                                        <span className="text-neutral-800 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-neutral-500 leading-relaxed font-light italic opacity-80 pt-8 border-t border-neutral-100">
                                Our proprietary Large Language Models (LLMs) are specifically trained on 10+ years
                                of construction tender data, ensuring unparalleled accuracy in requirement extraction
                                and risk assessment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
