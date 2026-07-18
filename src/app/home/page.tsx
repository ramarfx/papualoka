import About from "@/components/home/about";
import Explore from "@/components/home/explore";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import Info from "@/components/home/info";
import TopDestinations from "@/components/home/top-destinations";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";

export default async function Home() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return (
        <SmoothScroll>
            <main className="animate-fade-in-slow bg-papua-dark min-h-screen">
                <Navbar />
                <Hero />
                <Info />
                <TopDestinations />
                <Explore />
                <About/>
                <Gallery />
                <Footer />
            </main>
        </SmoothScroll>
    );
}
