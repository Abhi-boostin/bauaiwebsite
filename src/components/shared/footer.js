import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-xl font-bold tracking-tighter">
                            BAU<span className="text-blue-500">AI</span>
                        </Link>
                        <p className="mt-4 text-gray-400 max-w-xs">
                            Next-generation AI solutions for building the future of architecture and construction.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                            <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-gray-400">hello@bauai.com</li>
                            <li className="text-sm text-gray-400">+1 (555) 000-0000</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} BAU AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
