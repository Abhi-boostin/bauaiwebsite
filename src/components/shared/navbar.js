"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, ArrowRight, FileText, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Components ---

const NavLink = ({ href, children, onMouseEnter, className }) => (
    <Link
        href={href}
        onMouseEnter={onMouseEnter}
        className={cn(
            "text-[14px] font-normal text-neutral-900 hover:text-black transition-colors relative group py-4 tracking-wide",
            className
        )}
    >
        {children}
        <span className="absolute bottom-3 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
    </Link>
);

const AgentPreviewCard = ({ agent }) => {
    return (
        <div className="flex h-[380px] w-full rounded-2xl overflow-hidden bg-white border border-neutral-100 shadow-sm">
            {/* Left Half: Image/Video Area */}
            <motion.div
                key={agent.id + "-img"}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                }}
                className="w-1/2 relative bg-neutral-100 group overflow-hidden"
            >
                <Image
                    src={agent.image}
                    alt={agent.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-all duration-500">
                        <Play className="w-5 h-5 text-black ml-1" fill="currentColor" />
                    </div>
                </div>
            </motion.div>

            {/* Right Half: Refined Content Area */}
            <div className="w-1/2 p-12 flex flex-col justify-center bg-[#fdfcf8]">
                <motion.div
                    key={agent.id + "-content"}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                            }
                        }}
                        className="text-neutral-900 text-[26px] leading-[1.3] mb-12 max-w-[95%] font-light tracking-tight"
                    >
                        {agent.desc}
                    </motion.p>

                    <motion.div variants={{
                        hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
                        visible: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                        }
                    }}>
                        <button className="flex items-center text-[13px] font-bold uppercase tracking-widest text-neutral-900 group hover:text-black transition-colors self-start">
                            <span>Watch Demo</span>
                            <span className="ml-4 w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

// --- Main Navbar ---

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [language, setLanguage] = useState("EN");
    const [hoveredAgent, setHoveredAgent] = useState(0);
    const [menuTimer, setMenuTimer] = useState(null);

    const handleMouseEnter = (menu) => {
        if (menuTimer) clearTimeout(menuTimer);
        const timer = setTimeout(() => {
            setActiveMenu(menu);
        }, 200); // 200ms delay for premium feel
        setMenuTimer(timer);
    };

    const handleMouseLeave = () => {
        if (menuTimer) clearTimeout(menuTimer);
        setActiveMenu(null);
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const agents = [
        { id: 0, title: "Tender Analyst", desc: "Automated analysis of complex tender documents, extracting key requirements and compliance risks in seconds.", color: "blue", image: "https://picsum.photos/id/4/600/400" },
        { id: 1, title: "Cost Estimator", desc: "AI-driven quantity take-offs and cost estimation based on historical data and current market rates.", color: "green", image: "https://picsum.photos/id/5/600/400" },
        { id: 2, title: "Compliance Officer", desc: "Ensures every proposal meets regulatory standards and checks against local building codes automatically.", color: "orange", image: "https://picsum.photos/id/6/600/400" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                isScrolled || activeMenu
                    ? "bg-[#fdfcf8]/95 backdrop-blur-md border-neutral-200/50 py-2 shadow-sm"
                    : "bg-[#fdfcf8] border-transparent py-4"
            )}
            onMouseLeave={handleMouseLeave}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-14">

                    {/* LEFT: Logo */}
                    <Link href="/" className="flex items-center gap-3 z-50 relative group">
                        {/* Logo Icon */}
                        <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold text-xs tracking-tighter group-hover:scale-105 transition-transform">
                            BAU
                        </div>
                        <span className="text-lg font-bold tracking-tight text-neutral-900">
                            BAU AI
                        </span>
                    </Link>

                    {/* CENTER: Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Agents Dropdown Trigger */}
                        <div
                            className="h-full flex items-center"
                            onMouseEnter={() => handleMouseEnter("agents")}
                        >
                            <button className={cn(
                                "text-[14px] font-normal transition-colors flex items-center gap-1.5 py-4 outline-none tracking-wide",
                                activeMenu === "agents" ? "text-black font-medium" : "text-neutral-900 hover:text-black"
                            )}>
                                Agents
                                <ChevronDown className={cn("w-3 h-3 transition-transform duration-300 opacity-60", activeMenu === "agents" ? "-rotate-180" : "")} />
                            </button>
                        </div>

                        <NavLink href="/prices" onMouseEnter={() => handleMouseEnter(null)}>Prices</NavLink>
                        <NavLink href="/resources" onMouseEnter={() => handleMouseEnter(null)}>Resources</NavLink>
                        <NavLink href="/contact" onMouseEnter={() => handleMouseEnter(null)}>Contact Us</NavLink>
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="hidden md:flex items-center gap-4">

                        {/* Language Switcher */}
                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center gap-1.5 text-[13px] font-medium text-neutral-600 hover:text-black transition-colors">
                                <Globe className="w-3.5 h-3.5" />
                                <span>{language}</span>
                                <ChevronDown className="w-3 h-3 opacity-50" />
                            </button>
                            {/* Simple Dropdown for Lang */}
                            <div className="absolute top-8 left-0 w-24 bg-white border border-neutral-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-1">
                                <button onClick={() => setLanguage("EN")} className="w-full text-left px-3 py-1.5 text-xs hover:bg-neutral-50 rounded text-neutral-700">English</button>
                                <button onClick={() => setLanguage("DE")} className="w-full text-left px-3 py-1.5 text-xs hover:bg-neutral-50 rounded text-neutral-700">German</button>
                            </div>
                        </div>

                        {/* Links */}
                        <Link href="/test" className="text-[13px] font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                            Test Now
                        </Link>

                        {/* Request Demo (Yucca 'Credit App' style) */}
                        <Link href="/demo" className="hidden lg:flex items-center gap-2 text-[13px] font-medium text-neutral-500 hover:text-black transition-colors mr-2">
                            <FileText className="w-4 h-4" />
                            <span>Request Demo</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* MEGA MENU: AGENTS */}
            <AnimatePresence mode="wait">
                {activeMenu === "agents" && (
                    <motion.div
                        initial={{ opacity: 0, y: -40, clipPath: "inset(0% 0% 100% 0%)" }}
                        animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
                        exit={{ opacity: 0, y: -20, clipPath: "inset(0% 0% 100% 0%)" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="absolute top-full left-0 w-full overflow-hidden bg-[#fdfcf8] border-b border-neutral-200/50 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] origin-top"
                    >
                        <div className="container mx-auto px-6 lg:px-12 py-12">
                            <div className="grid grid-cols-12 gap-16">

                                {/* Navigation Side (Left) */}
                                <div className="col-span-4 space-y-2 border-r border-neutral-100 pr-10">
                                    <motion.h3
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-8"
                                    >
                                        Our Specialised Agents
                                    </motion.h3>

                                    <div className="space-y-1">
                                        {agents.map((agent, idx) => (
                                            <motion.div
                                                key={agent.id}
                                                initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: 0.15 + (idx * 0.05),
                                                    ease: [0.16, 1, 0.3, 1]
                                                }}
                                                onMouseEnter={() => setHoveredAgent(idx)}
                                                className={cn(
                                                    "p-5 rounded-xl cursor-pointer transition-all duration-500 group relative overflow-hidden",
                                                    hoveredAgent === idx ? "bg-white shadow-sm ring-1 ring-neutral-200/50" : "hover:bg-neutral-50/50"
                                                )}
                                            >
                                                <div className="flex items-center justify-between mb-1.5 z-10 relative">
                                                    <h4 className={cn(
                                                        "text-lg font-medium transition-all duration-300",
                                                        hoveredAgent === idx ? "text-black translate-x-1" : "text-neutral-500"
                                                    )}>
                                                        {agent.title}
                                                    </h4>
                                                    <div className={cn(
                                                        "transition-all duration-500 transform",
                                                        hoveredAgent === idx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                                                    )}>
                                                        <ArrowRight className="w-4 h-4 text-black" />
                                                    </div>
                                                </div>
                                                <p className={cn(
                                                    "text-sm transition-colors duration-300 line-clamp-1",
                                                    hoveredAgent === idx ? "text-neutral-600 translate-x-1" : "text-neutral-400"
                                                )}>
                                                    {agent.desc}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="pt-8 mt-6 border-t border-neutral-100"
                                    >
                                        <Link href="/agents" className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-900 hover:text-black flex items-center gap-3 group">
                                            <span>Explore All Capabilities</span>
                                            <div className="w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                                                <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Preview Card Side (Right) */}
                                <div className="col-span-8 flex items-center">
                                    <div className="w-full">
                                        <AgentPreviewCard agent={agents[hoveredAgent]} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
