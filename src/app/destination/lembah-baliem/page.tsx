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
    { src: "/img/destination/lembah-baliem/1.png", className: "" },
    { src: "/img/destination/lembah-baliem/2.png", className: "" },
    { src: "/img/destination/lembah-baliem/3.png", className: "" },
    { src: "/img/destination/lembah-baliem/4.png", className: "" },
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

const ACTIVITIES = [
    {
        id: "trekking",
        title: "TREKKING",
        description: "MENJELAJAHI LEMBAH PEGUNUNGAN",
        image: "/img/destination/lembah-baliem/activity/1.png"
    },
    {
        id: "honai-village",
        title: "HONAI VILLAGE",
        description: "MENYUSURI KEHIDUPAN ADAT",
        image: "/img/destination/lembah-baliem/activity/2.png"
    },
    {
        id: "bakar-batu",
        title: "BAKAR BATU",
        description: "MERASAKAN TRADISI BAKAR BATU",
        image: "/img/destination/lembah-baliem/activity/3.png"
    },
    {
        id: "baliem-festival",
        title: "BALIEM FESTIVAL",
        description: "MENYAKSIKAN SEMARAK FESTIVAL",
        image: "/img/destination/lembah-baliem/activity/4.png"
    },
    {
        id: "viewpoint",
        title: "VIEWPOINT",
        description: "MENIKMATI PANORAMA PEGUNUNGAN",
        image: "/img/destination/lembah-baliem/activity/5.png"
    },
    {
        id: "photography",
        title: "PHOTOGRAPHY",
        description: "MENGABADIKAN SETIAP MOMEN",
        image: "/img/destination/lembah-baliem/activity/6.png"
    }
];

const PRESERVATION_ITEMS = [
    {
        id: "coral",
        text: "Tidak merusak tanaman maupun habitat satwa liar.",
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
        text: "Membawa kembali seluruh sampah selama perjalanan.",
        icon: <Trash2 className="w-12 h-12 stroke-[1.5]" />
    },
    {
        id: "culture",
        text: "Mengikuti aturan dan menghargai budaya suku setempat.",
        icon: <Handshake className="w-12 h-12 stroke-[1.5]" />
    },
    {
        id: "economy",
        text: "Membeli kerajinan asli sebagai bentuk dukungan ekonomi.",
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
                    youtubeId="xcrSDMJB7k8"
                />

                <DestinationAccess
                    title="Akses Menuju Lembah Baliem"
                    steps={ACCESS_STEPS}
                />

                <DestinationActivities
                    title="Aktivitas Seru di Lembah Baliem"
                    description="Jelajahi Lembah Baliem melalui perpaduan budaya suku asli, panorama pegunungan, dan aktivitas yang memperlihatkan kehidupan Papua yang sesungguhnya."
                    activities={ACTIVITIES}
                />

                <DestinationPreservation
                    bgImage="/img/destination/lembah-baliem/pelestarian.png"
                    title="Upaya Pelestarian"
                    description="Lembah Baliem menyimpan budaya dan panorama alam yang luar biasa. Hormati tradisi serta jaga kelestarian lingkungannya di setiap perjalanan."
                    items={PRESERVATION_ITEMS}
                />

                <DestinationExplore
                    items={EXPLORE_ITEMS}
                    currentSlug="lembah-baliem"
                />

                <Footer className="bg-papua-dark" />
            </main>
        </SmoothScroll>
    );
}
