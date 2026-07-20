import Navbar from "@/components/navbar";
import DestinationHero from "@/components/destination/destination-hero";
import DestinationStats from "@/components/destination/destination-stats";
import DestinationVideo from "@/components/destination/destination-video";
import DestinationAccess, { AccessStep } from "@/components/destination/destination-access";
import DestinationActivities from "@/components/destination/destination-activities";
import DestinationPreservation from "@/components/destination/destination-preservation";
import DestinationExplore from "@/components/destination/destination-explore";
import SmoothScroll from "@/components/smooth-scroll";
import Footer from "@/components/footer";
import { Trash2, Handshake, ShoppingBag } from "lucide-react";

const CAROUSEL_IMAGES = [
    { src: "/img/destination/danau-sentani/1.png", className: "" }, 
    { src: "/img/destination/danau-sentani/2.png", className: "" }, 
    { src: "/img/destination/danau-sentani/3.png", className: "" }, 
    { src: "/img/destination/danau-sentani/4.png", className: "" }, 
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

const ACTIVITIES = [
    {
        id: "heritage-village",
        title: "HERITAGE VILLAGE",
        description: "MENYUSURI KAMPUNG ADAT",
        image: "/img/destination/danau-sentani/activity/1.png"
    },
    {
        id: "festival",
        title: "FESTIVAL",
        description: "MENYAKSIKAN KEMERIAHAN FESTIVAL",
        image: "/img/destination/danau-sentani/activity/2.png"
    },
    {
        id: "sunrise-view",
        title: "SUNRISE VIEW",
        description: "MENIKMATI PANORAMA FAJAR",
        image: "/img/destination/danau-sentani/activity/3.png"
    },
    {
        id: "local-crafts",
        title: "LOCAL CRAFTS",
        description: "MENGENAL KARYA PENGRAJIN",
        image: "/img/destination/danau-sentani/activity/4.png"
    },
    {
        id: "kayaking",
        title: "KAYAKING",
        description: "MENGARUNGI TENANGNYA DANAU",
        image: "/img/destination/danau-sentani/activity/5.png"
    },
    {
        id: "trekking",
        title: "TREKKING",
        description: "MENJELAJAH BUKIT SENTANI",
        image: "/img/destination/danau-sentani/activity/6.png"
    }
];

const PRESERVATION_ITEMS = [
    {
        id: "coral",
        text: "Tidak merusak habitat ikan dan tumbuhan air.",
        icon: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                <path d="M12 22v-5" />
                <path d="M12 17c-2.5-1-4-3-4-6V8" />
                <path d="M8 11c-2-0.5-3-2-3-4V5" />
                <path d="M12 17c2.5-1 4-3 4-6V8" />
                <path d="M16 11c2-0.5 3-2 3-4V5" />
                <path d="M12 17V11" />
                <circle cx="12" cy="10" r="1.5" fill="currentColor" />
                <circle cx="8" cy="7" r="1.5" fill="currentColor" />
                <circle cx="5" cy="4" r="1.5" fill="currentColor" />
                <circle cx="16" cy="7" r="1.5" fill="currentColor" />
                <circle cx="19" cy="4" r="1.5" fill="currentColor" />
            </svg>
        )
    },
    {
        id: "trash",
        text: "Membawa kembali sampah pribadi",
        icon: <Trash2 className="w-12 h-12 stroke-[1.5]" />
    },
    {
        id: "culture",
        text: "Menghormati budaya dan adat istiadat lokal",
        icon: <Handshake className="w-12 h-12 stroke-[1.5]" />
    },
    {
        id: "economy",
        text: "Membeli kerajinan dan produk buatan masyarakat Sentani.",
        icon: <ShoppingBag className="w-12 h-12 stroke-[1.5]" />
    }
];

const EXPLORE_ITEMS = [
    {
        id: "raja-ampat",
        title: "Temukan Keindahan Papua Lainnya",
        description: "Papua menyimpan banyak destinasi luar biasa yang tak kalah menakjubkan. Mulai petualanganmu ke tempat-tempat menakjubkan lainnya",
        image: "/img/destination/explore/1.png",
        destinationName: "Raja Ampat",
        location: "Sorong, Papua Barat Daya",
        href: "/destination/raja-ampat"
    },
    {
        id: "danau-sentani",
        title: "Temukan Keindahan Papua Lainnya",
        description: "Papua menyimpan banyak destinasi luar biasa yang tak kalah menakjubkan. Mulai petualanganmu ke tempat-tempat menakjubkan lainnya",
        image: "/img/destination/explore/2.png",
        destinationName: "Danau sentani",
        location: "Jayapura, Papua",
        href: "/destination/danau-sentani"
    },
    {
        id: "lembah-baliem",
        title: "Temukan Keindahan Papua Lainnya",
        description: "Papua menyimpan banyak destinasi luar biasa yang tak kalah menakjubkan. Mulai petualanganmu ke tempat-tempat menakjubkan lainnya",
        image: "/img/destination/explore/3.png",
        destinationName: "Lembah Baliem",
        location: "Wamena, Papua Pegunungan",
        href: "/destination/lembah-baliem"
    },
    {
        id: "puncak-jayawijaya",
        title: "Temukan Keindahan Papua Lainnya",
        description: "Papua menyimpan banyak destinasi luar biasa yang tak kalah menakjubkan. Mulai petualanganmu ke tempat-tempat menakjubkan lainnya",
        image: "/img/destination/explore/4.png",
        destinationName: "Puncak Jayawijaya",
        location: "Mimika, Papua Tengah",
        href: "/destination/puncak-jayawijaya"
    },
    {
        id: "danau-paniai",
        title: "Temukan Keindahan Papua Lainnya",
        description: "Papua menyimpan banyak destinasi luar biasa yang tak kalah menakjubkan. Mulai petualanganmu ke tempat-tempat menakjubkan lainnya",
        image: "/img/destination/explore/5.png",
        destinationName: "Danau Paniai",
        location: "Paniai, Papua Tengah",
        href: "/destination/danau-paniai"
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
                    youtubeId="x21y3Ylw_lk" 
                />

                <DestinationAccess 
                    title="Akses Menuju Danau Sentani"
                    steps={ACCESS_STEPS}
                />

                <DestinationActivities 
                    title="Aktivitas Seru di Danau Sentani"
                    description="Nikmati beragam aktivitas seru di Danau Sentani, mulai dari menjelajahi kampung adat, berburu kerajinan lokal, hingga menikmati panorama alam yang memukau."
                    activities={ACTIVITIES}
                />

                <DestinationPreservation 
                    bgImage="/img/destination/danau-sentani/pelestarian.png"
                    title="Upaya Pelestarian"
                    description="Danau Sentani memadukan keindahan alam dan budaya yang kaya. Mari menjaga kebersihan serta menghormati tradisi masyarakat setempat."
                    items={PRESERVATION_ITEMS}
                />

                <DestinationExplore 
                    items={EXPLORE_ITEMS}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
