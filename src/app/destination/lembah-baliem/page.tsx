import Navbar from "@/components/navbar";
import DestinationHero from "@/components/destination/destination-hero";
import DestinationStats from "@/components/destination/destination-stats";
import DestinationVideo from "@/components/destination/destination-video";
import DestinationAccess, { AccessStep } from "@/components/destination/destination-access";
import SmoothScroll from "@/components/smooth-scroll";
import Footer from "@/components/footer";

const CAROUSEL_IMAGES = [
    { src: "/img/destination/baliem-card.png", className: "" }, 
    { src: "/img/destination/jayawijaya-card.png", className: "" }, 
    { src: "/img/destination/paniai-card.png", className: "" }, 
    { src: "/img/destination/rajaampat-card.png", className: "" }, 
];

const STATS = [
    { value: 1600, suffix: "m", description: "Di atas permukaan laut, menawarkan kesejukan udara pegunungan." },
    { value: 3, suffix: "", description: "Suku utama yang mendiami kawasan ini (Dani, Yali, Lani)." },
    { value: 72, suffix: " km", description: "Panjang lembah yang membelah Pegunungan Jayawijaya." },
];

const ACCESS_STEPS: AccessStep[] = [
    {
        id: "step-1",
        title: "1. Penerbangan ke Wamena",
        description: "Akses utama adalah menggunakan pesawat perintis atau komersial dari Jayapura atau Timika menuju Bandara Wamena.",
        image: "/img/destination/plane.png",
        align: "left"
    },
    {
        id: "step-2",
        title: "2. Eksplorasi Darat",
        description: "Dari Wamena, perjalanan dilanjutkan menggunakan kendaraan roda empat atau trekking untuk mencapai desa-desa adat yang menawan.",
        image: "/img/destination/ship.png",
        align: "right"
    }
];

export default function LembahBaliemPage() {
    return (
        <SmoothScroll>
            <main className="bg-papua-dark min-h-screen">
                <Navbar />
                <DestinationHero 
                    title="Lembah Baliem"
                    description="Di tengah Pegunungan Papua, Lembah Baliem menghadirkan hamparan alam yang hijau serta tradisi masyarakat adat yang masih terjaga. Destinasi ini menjadi jendela untuk mengenal kehidupan khas Papua."
                    bgImage="/img/destination/baliem-bg.png"
                    carouselImages={CAROUSEL_IMAGES}
                />
                
                <DestinationStats stats={STATS} />

                <DestinationVideo 
                    title="Lembah Baliem"
                    subtitle="Jantung Budaya Papua"
                    description="Hamparan padang rumput dan bukit-bukit yang menjadi saksi bisu kekayaan tradisi yang tak lekang oleh waktu."
                    youtubeId="dQw4w9WgXcQ" 
                />

                <DestinationAccess 
                    title="Akses Menuju Lembah Baliem"
                    steps={ACCESS_STEPS}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
