"use client";
import { motion } from "framer-motion";

const features = [
    {
        id: "01",
        title: "Tender Scanning",
        desc: "Clara automatically monitors 50+ portals to find tenders matching your exact criteria.",
        icon: "magnifying-glass"
    },
    {
        id: "02",
        title: "Risk Analysis",
        desc: "AI deep-scans documents for hidden risks, compliance issues, and profitability blockers.",
        icon: "shield-check"
    },
    {
        id: "03",
        title: "Smart Decision",
        desc: "Get a simple Go/No-Go recommendation based on your company's historical success data.",
        icon: "light-bulb"
    }
];

export default function Features() {
    return (
        <section className="py-32 bg-[#fdfcf8] relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[#0000EE] font-bold uppercase tracking-[0.2em] text-xs mb-6 block"
                        >
                            Powerful Workflow
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[0.9]"
                        >
                            Designed for <br />
                            <span className="font-light italic text-neutral-400">Winning Teams</span>
                        </motion.h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-xl text-neutral-600 font-light leading-relaxed max-w-md">
                            Replace manual spreadsheets and hours of reading with one intelligent agent that works 24/7.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="p-8 group hover:bg-white border border-transparent hover:border-neutral-100 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-100/50"
                        >
                            <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center font-bold text-sm mb-8 group-hover:bg-[#0000EE] group-hover:text-white transition-colors duration-500">
                                {f.id}
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">{f.title}</h3>
                            <p className="text-neutral-500 leading-relaxed font-light group-hover:text-neutral-600 transition-colors">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
