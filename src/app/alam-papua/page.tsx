import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AlamPapuaShowcase from "@/components/alam-papua/alam-papua-showcase";
import SmoothScroll from "@/components/smooth-scroll";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Alam Papua | PapuaLoka",
    description:
        "Jelajahi kekayaan alam tanah Papua — dari hutan hujan tropis, keindahan laut, fauna endemik, hingga tambang emas Grasberg.",
};

export default function AlamPapuaPage() {
    return (
        <SmoothScroll>
            <main className="bg-papua-dark min-h-screen relative">
                <Navbar />
                
                {/* ── Back button ── */}
                <div className="absolute top-20 md:top-29 left-5 sm:left-8 md:left-12 lg:left-16 z-50 pointer-events-auto">
                    <Link
                        href="/home"
                        className="group flex gap-4 items-center"
                    >
                        <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-white/30 group-hover:border-papua-yellow bg-black/10 backdrop-blur-xs transition-all cursor-pointer">
                            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-white/70 transition-colors group-hover:-translate-x-0.5 group-hover:text-papua-yellow" />
                        </div>
                        <p className="text-white uppercase group-hover:text-papua-yellow font-semibold tracking-wide text-xs sm:text-sm md:text-base lg:text-lg">Kembali</p>
                    </Link>
                </div>

                <AlamPapuaShowcase />
                <Footer className="bg-papua-dark" />
            </main>
        </SmoothScroll>
    );
}
