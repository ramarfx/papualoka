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
        image: "/img/destination/plane.png", 
        align: "left"
    }
];

const ACTIVITIES = [
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

const PRESERVATION_ITEMS = [
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

const EXPLORE_ITEMS = [
    {
        id: "danau-sentani",
        title: "Temukan Keindahan Papua Lainnya",
        description: "Papua menyimpan banyak destinasi luar biasa yang tak kalah menakjubkan. Mulai petualanganmu ke tempat-tempat menakjubkan lainnya",
        image: "/img/destination/raja-ampat/explore/1.png",
        destinationName: "Danau sentani",
        location: "Jayapura, Papua",
        href: "/destination/danau-sentani"
    },
    {
        id: "lembah-baliem",
        title: "Temukan Keindahan Papua Lainnya",
        description: "Papua menyimpan banyak destinasi luar biasa yang tak kalah menakjubkan. Mulai petualanganmu ke tempat-tempat menakjubkan lainnya",
        image: "/img/destination/raja-ampat/explore/2.png",
        destinationName: "Lembah Baliem",
        location: "Wamena, Papua Pegunungan",
        href: "/destination/lembah-baliem"
    },
    {
        id: "puncak-jayawijaya",
        title: "Temukan Keindahan Papua Lainnya",
        description: "Papua menyimpan banyak destinasi luar biasa yang tak kalah menakjubkan. Mulai petualanganmu ke tempat-tempat menakjubkan lainnya",
        image: "/img/destination/raja-ampat/explore/3.png",
        destinationName: "Puncak Jayawijaya",
        location: "Mimika, Papua Tengah",
        href: "/destination/puncak-jayawijaya"
    },
    {
        id: "danau-paniai",
        title: "Temukan Keindahan Papua Lainnya",
        description: "Papua menyimpan banyak destinasi luar biasa yang tak kalah menakjubkan. Mulai petualanganmu ke tempat-tempat menakjubkan lainnya",
        image: "/img/destination/raja-ampat/explore/4.png",
        destinationName: "Danau Paniai",
        location: "Paniai, Papua Tengah",
        href: "/destination/danau-paniai"
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

                <DestinationActivities 
                    title="Aktivitas Seru di Puncak Jayawijaya"
                    description="Nikmati berbagai aktivitas seru di Puncak Jayawijaya, mulai dari menjelajahi keindahan bawah laut hingga mengabadikan momen di tengah panorama alam yang memukau."
                    activities={ACTIVITIES}
                />

                <DestinationPreservation 
                    bgImage="/img/destination/raja-ampat/pelestarian.png"
                    title="Upaya Pelestarian"
                    description="Sebagai salah satu kawasan megabiodiversitas terpenting di dunia, menjaga kelestarian Puncak Jayawijaya adalah tanggung jawab kita bersama untuk masa depan generasi mendatang."
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
