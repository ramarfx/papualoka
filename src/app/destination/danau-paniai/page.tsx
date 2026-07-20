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
    { src: "/img/destination/danau-paniai/1.png", className: "" }, 
    { src: "/img/destination/danau-paniai/2.png", className: "" }, 
    { src: "/img/destination/danau-paniai/3.png", className: "" }, 
    { src: "/img/destination/danau-paniai/4.png", className: "" }, 
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

const ACTIVITIES = [
    {
        id: "kayaking",
        title: "KAYAKING",
        description: "MENGARUNGI TENANGNYA DANAU",
        image: "/img/destination/danau-paniai/activity/1.png"
    },
    {
        id: "camping",
        title: "CAMPING",
        description: "BERMALAM DI ALAM TERBUKA",
        image: "/img/destination/danau-paniai/activity/2.png"
    },
    {
        id: "photography",
        title: "PHOTOGRAPHY",
        description: "MENGABADIKAN SETIAP MOMEN",
        image: "/img/destination/danau-paniai/activity/3.png"
    },
    {
        id: "sunrise-view",
        title: "SUNRISE VIEW",
        description: "MENIKMATI PANORAMA FAJAR",
        image: "/img/destination/danau-paniai/activity/4.png"
    },
    {
        id: "fishing",
        title: "FISHING",
        description: "MENIKMATI SENSASI MEMANCING",
        image: "/img/destination/danau-paniai/activity/5.png"
    },
    {
        id: "birdwatching",
        title: "BIRDWATCHING",
        description: "MENYAKSIKAN SATWA ENDEMIK",
        image: "/img/destination/danau-paniai/activity/6.png"
    }
];

const PRESERVATION_ITEMS = [
    {
        id: "coral",
        text: "Tidak merusak tumbuhan maupun kawasan sekitar danau.",
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
        text: "Tidak membuang sampah atau limbah ke perairan.",
        icon: <Trash2 className="w-12 h-12 stroke-[1.5]" />
    },
    {
        id: "culture",
        text: "Menggunakan perahu dan fasilitas secara bertanggung jawab.",
        icon: <Handshake className="w-12 h-12 stroke-[1.5]" />
    },
    {
        id: "economy",
        text: "Membeli hasil kerajinan dan produk masyarakat setempat.",
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
                    youtubeId="-yKFExhS9Mk" 
                />

                <DestinationAccess 
                    title="Akses Menuju Danau Paniai"
                    steps={ACCESS_STEPS}
                />

                <DestinationActivities 
                    title="Aktivitas Seru di Danau Paniai"
                    description="Nikmati ketenangan Danau Paniai melalui panorama alam yang memukau, udara pegunungan yang sejuk, dan aktivitas yang menyatu dengan alam."
                    activities={ACTIVITIES}
                />

                <DestinationPreservation 
                    bgImage="/img/destination/danau-paniai/pelestarian.png"
                    title="Upaya Pelestarian"
                    description="Danau Paniai menghadirkan panorama alam yang menenangkan. Mari menjaga kebersihan dan kelestarian lingkungannya agar tetap indah dinikmati bersama."
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
