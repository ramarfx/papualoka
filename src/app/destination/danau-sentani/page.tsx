import Navbar from "@/components/navbar";
import DestinationHero from "@/components/destination/destination-hero";
import DestinationStats from "@/components/destination/destination-stats";
import DestinationVideo from "@/components/destination/destination-video";
import DestinationAccess, { AccessStep } from "@/components/destination/destination-access";
import SmoothScroll from "@/components/smooth-scroll";
import Footer from "@/components/footer";

const CAROUSEL_IMAGES = [
    { src: "/img/destination/sentani-card.png", className: "" }, 
    { src: "/img/destination/baliem-card.png", className: "" }, 
    { src: "/img/destination/jayawijaya-card.png", className: "" }, 
    { src: "/img/destination/paniai-card.png", className: "" }, 
];

const STATS = [
    { value: 21, suffix: "", description: "Pulau-pulau kecil menghiasi tenangnya permukaan danau." },
    { value: 30, suffix: "+", description: "Spesies ikan air tawar, termasuk hiu gergaji endemik." },
    { value: 9360, suffix: " Ha", description: "Luas hamparan permukaan air yang menawan." },
];

const ACCESS_STEPS: AccessStep[] = [
    {
        id: "step-1",
        title: "1. Menuju Sentani",
        description: "Dari pusat kota Jayapura, perjalanan darat memakan waktu sekitar 30-45 menit menuju kawasan Danau Sentani yang terletak di Kabupaten Jayapura.",
        image: "/img/destination/plane.png",
        align: "left"
    },
    {
        id: "step-2",
        title: "2. Eksplorasi Danau",
        description: "Wisatawan dapat menyewa perahu motor dari dermaga Kalkote untuk mengelilingi dan menjelajahi pulau-pulau kecil di tengah danau.",
        image: "/img/destination/ship.png",
        align: "right"
    }
];

export default function DanauSentaniPage() {
    return (
        <SmoothScroll>
            <main className="bg-papua-dark min-h-screen">
                <Navbar />
                <DestinationHero 
                    title="Danau Sentani"
                    description="Terletak di kaki Pegunungan Cyclops, Danau Sentani menyuguhkan panorama alam yang tenang dengan puluhan pulau kecil di sekitarnya. Kawasan ini juga terkenal akan kekayaan budaya masyarakat setempat."
                    bgImage="/img/destination/sentani-bg.png"
                    carouselImages={CAROUSEL_IMAGES}
                />
                
                <DestinationStats stats={STATS} />

                <DestinationVideo 
                    title="Danau Sentani"
                    subtitle="Keindahan di Bawah Pegunungan Cyclops"
                    description="Permukaan air yang tenang berpadu dengan bukit-bukit hijau menciptakan suasana damai yang tak terlupakan di Danau Sentani."
                    youtubeId="dQw4w9WgXcQ" 
                />

                <DestinationAccess 
                    title="Akses Menuju Danau Sentani"
                    steps={ACCESS_STEPS}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
