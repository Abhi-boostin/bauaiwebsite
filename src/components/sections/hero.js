import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                    The Future of <br />
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Architectural AI
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Unlock your creative potential with BAU AI. Our suite of artificial intelligence tools
                    helps you design, optimize, and build the next generation of structures.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/services" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all shadow-xl shadow-blue-500/20 w-full sm:w-auto">
                        Explore Services
                    </Link>
                    <Link href="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all w-full sm:w-auto">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}
