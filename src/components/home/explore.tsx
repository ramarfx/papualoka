import { ChevronRight } from "lucide-react";

const CATEGORIES = [
    {
        id: "suku",
        title: "Suku",
        subtitle: "Kenali suku-suku asli Papua",
        color: "bg-[#2A3B2C]", // Dark Green
    },
    {
        id: "tradisi",
        title: "Tradisi",
        subtitle: "Warisan budaya yang tetap lestari",
        color: "bg-[#4A3B2C]", // Brown
    },
    {
        id: "makanan",
        title: "Makanan Khas",
        subtitle: "Cita rasa dari Tanah Papua",
        color: "bg-[#3A4B5C]", // Blueish
    },
    {
        id: "cerita",
        title: "Cerita Rakyat",
        subtitle: "Legenda turun-temurun",
        color: "bg-[#5C3A3A]", // Reddish
    },
];

export default function Explore() {
    return (
        <section className="w-full min-h-screen bg-[url('/img/explore-bg.png')] bg-cover bg-center bg-no-repeat relative py-24 flex flex-col items-center">
            {/* Header Content */}
            <div className="flex flex-col items-center justify-center text-center px-6 max-w-3xl mb-16">
                <h5 className="text-papua-yellow font-semibold text-lg md:text-xl font-sans tracking-[0.2em] uppercase mb-4">
                    JELAJAHI PAPUA
                </h5>
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
                    <span className="text-papua-yellow">Jelajahi Berdasarkan </span>
                    <span className="text-papua-green">Kategori</span>
                </h1>
                <p className="text-gray-500 text-sm md:text-base font-sans leading-relaxed">
                    Temukan keberagaman Papua melalui suku, tradisi, kuliner khas, dan cerita rakyat yang diwariskan dari generasi ke generasi.
                </p>
            </div>

            {/* Cards Accordion */}
            <div className="w-full max-w-7xl px-8 flex flex-col md:flex-row gap-4 h-[600px]">
                {CATEGORIES.map((cat) => (
                    <div
                        key={cat.id}
                        className="group relative rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-1 hover:flex-[3] h-full cursor-pointer shadow-xl"
                    >
                        {/* Background Color (Placeholder for images later) */}
                        <div className={`absolute inset-0 ${cat.color} transition-transform duration-700 group-hover:scale-105`} />
                        
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                        
                        {/* Non-hovered state (Vertical Title) */}
                        <div className="absolute bottom-10 left-6 md:left-8 transition-all duration-500 ease-out opacity-100 group-hover:opacity-0 group-hover:-translate-x-4">
                            <div className="flex flex-col items-center gap-1" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                <h3 className="text-white font-bold text-2xl md:text-3xl whitespace-nowrap font-heading tracking-wide">
                                    {cat.title}
                                </h3>
                                <p className="text-white/70 text-xs md:text-sm whitespace-nowrap font-sans">
                                    {cat.subtitle}
                                </p>
                            </div>
                        </div>
                        
                        {/* Hovered state (Horizontal Content) */}
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col md:flex-row md:items-end justify-between gap-4 transition-all duration-500 ease-out opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white font-bold text-3xl md:text-4xl font-heading tracking-wide">
                                    {cat.title}
                                </h3>
                                <p className="text-white/80 text-sm font-sans">
                                    {cat.subtitle}
                                </p>
                            </div>
                            
                            {/* Explore Button */}
                            <button className="flex-shrink-0 flex items-center justify-center gap-2 border border-white/50 hover:border-white rounded-full px-6 py-3 text-white text-xs font-bold tracking-widest uppercase transition-colors hover:bg-white/10 w-max">
                                <span>Explore</span>
                                <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}