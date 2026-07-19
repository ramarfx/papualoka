import About from "@/components/home/about";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import Info from "@/components/home/info";
import TopDestinations from "@/components/home/top-destinations";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";

import PageClientLoader from "@/components/page-client-loader";

export default function Home() {
    return (
        <SmoothScroll>
            <PageClientLoader />
            <main className="animate-fade-in-slow bg-papua-dark min-h-screen">
                <Navbar />
                <Hero />
                <Info />
                <TopDestinations />
                <About/>
                <Gallery />
                <Footer />
            </main>
        </SmoothScroll>
    );
}
