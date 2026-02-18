export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "AI-Powered Design", desc: "Generating optimized building layouts." },
                    { title: "Sustainable Analysis", desc: "Real-time energy efficiency simulations." },
                    { title: "BIM Integration", desc: "Seamless workflow with industry standard tools." }
                ].map((service, i) => (
                    <div key={i} className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
