import Navbar from "@/components/navbar";
import DestinationHero from "@/components/destination/destination-hero";
import DestinationStats from "@/components/destination/destination-stats";
import DestinationVideo from "@/components/destination/destination-video";
import DestinationAccess, { AccessStep } from "@/components/destination/destination-access";
import SmoothScroll from "@/components/smooth-scroll";
import Footer from "@/components/footer";

const CAROUSEL_IMAGES = [
    { src: "/img/destination/jayawijaya-card.png", className: "" }, 
    { src: "/img/destination/paniai-card.png", className: "" }, 
    { src: "/img/destination/rajaampat-card.png", className: "" }, 
    { src: "/img/destination/sentani-card.png", className: "" }, 
];

const STATS = [
    { value: 4884, suffix: "m", description: "Ketinggian Puncak Carstensz (Gunung Jayawijaya)." },
    { value: 1, suffix: "", description: "Satu-satunya tempat yang tertutup salju abadi di Indonesia." },
    { value: 7, suffix: "", description: "Termasuk ke dalam jajaran Seven Summits puncak dunia." },
];

const ACCESS_STEPS: AccessStep[] = [
    {
        id: "step-1",
        title: "1. Penerbangan ke Timika",
        description: "Langkah awal adalah penerbangan menuju Bandara Mozes Kilangin di Timika. Dari sini perjalanan ekspedisi biasanya direncanakan.",
        image: "/img/destination/plane.png",
        align: "left"
    },
    {
        id: "step-2",
        title: "2. Helikopter ke Basecamp",
        description: "Banyak ekspedisi kini menggunakan jalur helikopter dari Timika langsung menuju Yellow Valley (Basecamp Carstensz) untuk memangkas waktu trekking.",
        image: "/img/destination/plane.png",
        align: "right"
    },
    {
        id: "step-3",
        title: "3. Ekspedisi Pendakian",
        description: "Dari basecamp, dibutuhkan keahlian teknis rock climbing dan pendampingan pemandu bersertifikat untuk menaklukkan puncak bersalju abadi ini.",
        image: "/img/destination/plane.png", // I used plane since ship makes no sense for a mountain, or I can use another generic icon if existed. Plane fits helikopter.
        align: "left"
    }
];

export default function PuncakJayawijayaPage() {
    return (
        <SmoothScroll>
            <main className="bg-papua-dark min-h-screen">
                <Navbar />
                <DestinationHero 
                    title="Puncak Jayawijaya"
                    description="Berdiri megah sebagai puncak tertinggi Indonesia dan salah satu dari Seven Summits dunia, Jayawijaya menyimpan es abadi yang langka di kawasan tropis. Sebuah tantangan dan keajaiban alam yang tiada duanya."
                    bgImage="/img/destination/jayawijaya-bg.png"
                    carouselImages={CAROUSEL_IMAGES}
                />
                
                <DestinationStats stats={STATS} />

                <DestinationVideo 
                    title="Puncak Jayawijaya"
                    subtitle="Atap Salju Nusantara"
                    description="Pemandangan bersalju eksotis yang menghiasi langit tropis Papua, menguji setiap jiwa petualang yang berani mendakinya."
                    youtubeId="dQw4w9WgXcQ" 
                />

                <DestinationAccess 
                    title="Akses Menuju Puncak Jayawijaya"
                    steps={ACCESS_STEPS}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
