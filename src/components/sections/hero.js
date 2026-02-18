import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-40">
            {/* Background Subtle Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-100 blur-[100px] rounded-full mix-blend-multiply" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-50 blur-[100px] rounded-full mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-6 md:px-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-600 mb-8 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    v2.0 Now Available for Early Access
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-neutral-900 mb-8 leading-[1.1] animate-fade-in-up delay-100">
                    Intelligence for <br />
                    <span className="text-neutral-400">Modern Architecture</span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                    BAU AI empowers architects with generative design, structural optimization,
                    and sustainable analysis tools—all in one seamless platform.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                    <Link href="/demo" className="px-8 py-4 bg-neutral-900 hover:bg-black text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center group">
                        Request Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/about" className="px-8 py-4 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-lg font-semibold transition-all w-full sm:w-auto text-center hover:border-neutral-300">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}
