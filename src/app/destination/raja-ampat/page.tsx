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

const RAJA_AMPAT_ACTIVITIES = [
    {
        id: "diving",
        title: "DIVING",
        description: "MENJELAJAHI DUNIA BAWAH LAUT",
        image: "/img/destination/raja-ampat/activity/1.png"
    },
    {
        id: "snorkeling",
        title: "SNORKELING",
        description: "MENIKMATI TERUMBU KARANG",
        image: "/img/destination/raja-ampat/activity/2.png"
    },
    {
        id: "photography",
        title: "PHOTOGRAPHY",
        description: "MENGABADIKAN SETIAP MOMEN",
        image: "/img/destination/raja-ampat/activity/3.png"
    },
    {
        id: "birdwatching",
        title: "BIRDWATCHING",
        description: "MENGAMATI BURUNG CENDRAWASIH",
        image: "/img/destination/raja-ampat/activity/4.png"
    },
    {
        id: "kayaking",
        title: "KAYAKING",
        description: "MENELUSURI LABIRIN KARST",
        image: "/img/destination/raja-ampat/activity/5.png"
    },
    {
        id: "island-hopping",
        title: "ISLAND HOPPING",
        description: "MENJELAJAHI PULAU-PULAU KECIL",
        image: "/img/destination/raja-ampat/activity/6.png"
    }
];

const RAJA_AMPAT_PRESERVATION_ITEMS = [
    {
        id: "coral",
        text: "Tidak merusak terumbu karang dan biota laut",
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
        text: "Mendukung ekonomi masyarakat lokal",
        icon: <ShoppingBag className="w-12 h-12 stroke-[1.5]" />
    }
];

const RAJA_AMPAT_EXPLORE_ITEMS = [
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
                    youtubeId="jJdrq4bLeQM"
                />

                <DestinationAccess 
                    title="Akses Menuju Raja Ampat"
                    steps={ACCESS_STEPS}
                />

                <DestinationActivities 
                    title="Aktivitas Seru di Raja Ampat"
                    description="Nikmati berbagai aktivitas seru di Raja Ampat, mulai dari menjelajahi keindahan bawah laut hingga mengabadikan momen di tengah panorama alam yang memukau."
                    activities={RAJA_AMPAT_ACTIVITIES}
                />

                <DestinationPreservation 
                    bgImage="/img/destination/raja-ampat/pelestarian.png"
                    title="Upaya Pelestarian"
                    description="Sebagai salah satu kawasan megabiodiversitas terpenting di dunia, menjaga kelestarian Raja Ampat adalah tanggung jawab kita bersama untuk masa depan generasi mendatang."
                    items={RAJA_AMPAT_PRESERVATION_ITEMS}
                />

                <DestinationExplore 
                    items={RAJA_AMPAT_EXPLORE_ITEMS}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
