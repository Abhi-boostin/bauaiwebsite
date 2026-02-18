export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Get in Touch</h1>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all h-32" placeholder="Tell us about your project..."></textarea>
                </div>
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20">
                    Send Message
                </button>
            </form>
        </div>
    );
}
