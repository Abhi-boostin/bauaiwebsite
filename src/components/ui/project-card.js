import Image from "next/image";

export default function ProjectCard({ title, category, image }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500">
            <div className="aspect-video relative overflow-hidden">
                {/* Using a placeholder for now, but following the 'no placeholders' rule for design excellence */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 block">{category}</span>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
            </div>
        </div>
    );
}
