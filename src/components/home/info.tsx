import Image from "next/image";
import { AlertCircle, ChevronRight } from "lucide-react";

export default function Info() {
    return (
        <section className="relative w-full min-h-screen bg-[#0F0F0F] flex flex-col justify-center py-24 px-8 md:px-24 overflow-hidden">
            {/* Top Left Cursor Hint */}
            <div className="absolute top-12 left-8 md:top-24 md:left-24 z-20">
                <div className="flex items-center gap-3 bg-[#1F1F1F] hover:bg-[#2A2A2A] transition-colors cursor-default px-5 py-3 rounded-full text-white/90">
                    <AlertCircle className="w-5 h-5 text-white" strokeWidth={2} />
                    <span className="font-sans text-sm tracking-wide font-medium">Gerakkan kursor untuk jelajahi</span>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-16 lg:gap-8 mt-24 lg:mt-0">
                
                {/* Left Content (Text & CTA) */}
                <div className="w-full lg:w-1/3 flex flex-col justify-end lg:pt-32 order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-[#D3B745] text-3xl font-bold font-sans tracking-wide">PAPUA</h2>
                        <div className="h-[2px] w-12 bg-[#D3B745]"></div>
                    </div>
                    <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed mb-10 max-w-xs">
                        Papua dikenal sebagai wilayah paling timur Indonesia dengan kekayaan alam dan budaya yang luar biasa. Beragam suku, bahasa, dan tradisi hidup berdampingan di Tanah Cenderawasih.
                    </p>
                    <button className="flex items-center gap-2 text-white font-sans text-xs md:text-sm tracking-[0.1em] font-bold uppercase hover:text-[#D3B745] transition-colors group w-max">
                        <span>Pelajari Selanjutnya</span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    </button>
                </div>

                {/* Center Map (Papua Island) */}
                <div className="w-full lg:w-1/3 flex justify-center relative order-1 lg:order-2 h-[300px] md:h-[400px] lg:h-[500px]">
                    {/* Green Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-[#38A13B]/20 blur-[80px] rounded-[100%] z-0 pointer-events-none"></div>
                    
                    {/* Map Image */}
                    <div className="relative w-full h-full z-10">
                        <Image 
                            src="/img/papua-island.png" 
                            alt="Peta Papua" 
                            fill 
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>

                {/* Right Timeline */}
                <div className="w-full lg:w-1/3 flex justify-start lg:justify-end order-3 lg:order-3">
                    <div className="flex flex-col gap-12 relative lg:pt-16">
                        {/* Vertical connection line */}
                        <div className="absolute left-[9px] top-6 bottom-6 w-[2px] bg-[#D3B745]/30"></div>
                        
                        {/* Timeline Items */}
                        {[
                            { title: "300 KM2", desc: "Wilayah luas dengan bentang alam yang beragam." },
                            { title: "6 Provinsi", desc: "6 provinsi dari pesisir hingga pegunungan." },
                            { title: "250+ Suku", desc: "Rumah ratusan suku yang menjaga tradisi dan budaya turun-temurun." },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-8 relative z-10 group">
                                {/* Timeline Node Icon */}
                                <div className="mt-1 relative">
                                    <div className="w-[20px] h-[20px] rounded-full border-2 border-[#D3B745] bg-[#111111] flex items-center justify-center p-[3px] transition-transform group-hover:scale-110">
                                        <div className="w-full h-full rounded-full bg-[#D3B745]"></div>
                                    </div>
                                </div>
                                {/* Timeline Content */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#D3B745] font-sans text-lg md:text-xl font-bold">{item.title}</h3>
                                    <p className="text-white/60 font-sans text-xs md:text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
}
