"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-white pt-32 pb-16 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="text-3xl font-black tracking-tighter mb-8 block">
                            BAU<span className="text-[#0000EE]">AI</span>
                        </Link>
                        <p className="text-neutral-400 text-lg leading-relaxed max-w-sm mb-12 font-light">
                            The intelligent operating system for construction business development.
                            Built for the next decade of architecture.
                        </p>

                        <div className="flex gap-6">
                            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                                <Link
                                    key={social}
                                    href="#"
                                    className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                                >
                                    {social}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2 col-span-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-8">Platform</h4>
                        <ul className="space-y-4">
                            <li><Link href="/agents" className="text-neutral-400 hover:text-white transition-colors font-light">AI Agents</Link></li>
                            <li><Link href="/deep-search" className="text-neutral-400 hover:text-white transition-colors font-light">Deep Search</Link></li>
                            <li><Link href="/pricing" className="text-neutral-400 hover:text-white transition-colors font-light">Pricing</Link></li>
                            <li><Link href="/demo" className="text-neutral-400 hover:text-white transition-colors font-light">Book Demo</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 col-span-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-8">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors font-light">About Us</Link></li>
                            <li><Link href="/careers" className="text-neutral-400 hover:text-white transition-colors font-light">Careers</Link></li>
                            <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors font-light">Contact</Link></li>
                            <li><Link href="/legal" className="text-neutral-400 hover:text-white transition-colors font-light">Legal</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-8">Stay Updated</h4>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-neutral-900 border border-neutral-800 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-[#0000EE] transition-colors"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-neutral-800 hover:bg-[#0000EE] text-white text-[10px] font-bold uppercase px-6 rounded-full transition-all">
                                Join
                            </button>
                        </div>
                        <p className="mt-6 text-[11px] text-neutral-600 leading-relaxed font-light">
                            Join 2,000+ professionals receiving our monthly insights on AI in construction.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-neutral-900 flex flex-col md:row items-center justify-between gap-8">
                    <p className="text-[11px] font-bold text-neutral-600 uppercase tracking-widest">
                        © {new Date().getFullYear()} BAU AI Technology Group.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-[11px] font-bold text-neutral-600 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-[11px] font-bold text-neutral-600 uppercase tracking-widest hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
