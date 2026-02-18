import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    BAU<span className="text-blue-500">AI</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/services" className="text-sm font-medium hover:text-blue-500 transition-colors">Services</Link>
                    <Link href="/projects" className="text-sm font-medium hover:text-blue-500 transition-colors">Projects</Link>
                    <Link href="/about" className="text-sm font-medium hover:text-blue-500 transition-colors">About</Link>
                    <Link href="/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium transition-all">
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
