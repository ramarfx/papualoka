import Navbar from "@/components/navbar";
import DestinationHero from "@/components/destination/destination-hero";
import DestinationStats from "@/components/destination/destination-stats";
import DestinationVideo from "@/components/destination/destination-video";
import DestinationAccess, { AccessStep } from "@/components/destination/destination-access";
import SmoothScroll from "@/components/smooth-scroll";
import Footer from "@/components/footer";

const RAJA_AMPAT_CAROUSEL = [
    { src: "/img/destination/raja-ampat/1.png", className: "" }, 
    { src: "/img/destination/raja-ampat/2.png", className: "" }, 
    { src: "/img/destination/raja-ampat/3.png", className: "" }, 
    { src: "/img/destination/raja-ampat/4.png", className: "" }, 
];

const RAJA_AMPAT_STATS = [
    { value: 1800, suffix: "+", description: "Pulau besar dan kecil yang tersebar di Raja Ampat." },
    { value: 540, suffix: "+", description: "Spesies karang yang hidup di lautan Raja Ampat." },
    { value: 1700, suffix: "+", description: "Jenis ikan di perairan jernih Raja Ampat." },
];

const ACCESS_STEPS: AccessStep[] = [
    {
        id: "step-1",
        title: "1. Menuju Sorong",
        description: "Perjalanan dimulai dengan penerbangan menuju Bandara Domine Eduard Osok, Sorong (Papua Barat Daya). Dari Jakarta, waktu tempuh sekitar 6–8 jam tergantung rute dan transit.",
        image: "/img/destination/plane.png",
        align: "left"
    },
    {
        id: "step-2",
        title: "2. Penyeberangan ke Waisai",
        description: "Dari Pelabuhan Rakyat Sorong, wisatawan dapat menggunakan kapal cepat atau ferry reguler menuju Waisai, ibu kota Kabupaten Raja Ampat.",
        image: "/img/destination/ship.png",
        align: "right"
    },
    {
        id: "step-3",
        title: "3. Tiba di Raja Ampat",
        description: "Setibanya di Waisai, perjalanan dilanjutkan menggunakan speedboat menuju berbagai pulau resor, homestay, atau spot wisata di kawasan Raja Ampat.",
        image: "/img/destination/ship.png",
        align: "left"
    }
];

export default function RajaAmpatPage() {
    return (
        <SmoothScroll>
            <main className="bg-papua-dark min-h-screen">
                <Navbar />
                <DestinationHero 
                    title="Raja Ampat"
                    description="Raja Ampat merupakan permata tersembunyi Indonesia yang terkenal akan keindahan alam dan kekayaan hayati lautnya. Keunikan tersebut menjadikannya salah satu destinasi wisata paling membanggakan Indonesia di mata dunia."
                    bgImage="/img/destination/rajaampat-bg.png"
                    carouselImages={RAJA_AMPAT_CAROUSEL}
                />
                
                <DestinationStats stats={RAJA_AMPAT_STATS} />

                <DestinationVideo 
                    title="Raja Ampat"
                    subtitle="Surga Timur Indonesia"
                    description="Gugusan pulau dan laut biru Raja Ampat menghadirkan panorama alam yang menjadikannya salah satu destinasi paling memukau di Indonesia."
                    youtubeId="fB8TyLTD7EE" // A placeholder beautiful nature video ID (or any suitable one)
                />

                <DestinationAccess 
                    title="Akses Menuju Raja Ampat"
                    steps={ACCESS_STEPS}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
