"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import KalenderBudaya from "@/components/kalender/kalender-budaya";

export default function KalenderPage() {
    return (
        <SmoothScroll>
            <main className="bg-papua-dark min-h-screen relative">
                <Navbar />
                <KalenderBudaya />
                <Footer className="bg-papua-dark" />
            </main>
        </SmoothScroll>
    );
}