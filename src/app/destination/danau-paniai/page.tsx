import Navbar from "@/components/navbar";
import DestinationHero from "@/components/destination/destination-hero";
import DestinationStats from "@/components/destination/destination-stats";
import DestinationVideo from "@/components/destination/destination-video";
import DestinationAccess, { AccessStep } from "@/components/destination/destination-access";
import SmoothScroll from "@/components/smooth-scroll";
import Footer from "@/components/footer";

const CAROUSEL_IMAGES = [
    { src: "/img/destination/paniai-card.png", className: "" }, 
    { src: "/img/destination/rajaampat-card.png", className: "" }, 
    { src: "/img/destination/sentani-card.png", className: "" }, 
    { src: "/img/destination/baliem-card.png", className: "" }, 
];

const STATS = [
    { value: 1700, suffix: "m", description: "Ketinggian letak danau di atas permukaan laut." },
    { value: 157, suffix: " Negara", description: "Mengakui Paniai sebagai danau terindah pada Konferensi Danau Dunia 2007." },
    { value: 14, suffix: " Kampung", description: "Tersebar di wilayah sekitar danau yang melestarikan budaya suku Mee." },
];

const ACCESS_STEPS: AccessStep[] = [
    {
        id: "step-1",
        title: "1. Penerbangan ke Enarotali",
        description: "Dari Nabire atau Timika, wisatawan dapat menggunakan penerbangan perintis (pesawat kecil) yang langsung menuju Bandara Enarotali di dekat danau.",
        image: "/img/destination/plane.png",
        align: "left"
    },
    {
        id: "step-2",
        title: "2. Akses Jalur Darat",
        description: "Alternatif lain adalah perjalanan darat melintasi pegunungan dan hutan dari kota Nabire, yang memakan waktu sekitar 8 hingga 10 jam.",
        image: "/img/destination/plane.png", 
        align: "right"
    }
];

export default function DanauPaniaiPage() {
    return (
        <SmoothScroll>
            <main className="bg-papua-dark min-h-screen">
                <Navbar />
                <DestinationHero 
                    title="Danau Paniai"
                    description="Tersembunyi di dataran tinggi Papua, Danau Paniai adalah permata biru yang dikelilingi pegunungan hijau. Airnya yang jernih dan suasana yang tenang menjadikannya salah satu danau terindah di Indonesia."
                    bgImage="/img/destination/paniai-bg.png"
                    carouselImages={CAROUSEL_IMAGES}
                />
                
                <DestinationStats stats={STATS} />

                <DestinationVideo 
                    title="Danau Paniai"
                    subtitle="Keindahan Biru di Dataran Tinggi"
                    description="Pesona senja dan keramahan penduduk lokal yang membuat siapa saja jatuh cinta pada keindahan tersembunyi ini."
                    youtubeId="dQw4w9WgXcQ" 
                />

                <DestinationAccess 
                    title="Akses Menuju Danau Paniai"
                    steps={ACCESS_STEPS}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
