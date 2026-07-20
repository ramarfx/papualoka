"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";

const CREDITS = [
  {
    id: "01",
    title: "KPU Papua Pegunungan",
    subtitle: "Data pemerintahan & informasi daerah",
    url: "https://papuapegunungan.kpu.go.id",
  },
  {
    id: "02",
    title: "Liputan6",
    subtitle: "Referensi kuliner Papua",
    url: "https://www.liputan6.com/hot/read/5850096/intip-11-makanan-khas-papua-selatan-kekayaan-kuliner-indonesia-timur",
  },
  {
    id: "03",
    title: "Pariwisata Indonesia",
    subtitle: "Informasi budaya & destinasi",
    url: "https://pariwisataindonesia.id",
  },
  {
    id: "04",
    title: "Indonesia Travel",
    subtitle: "Portal resmi pariwisata Indonesia",
    url: "https://indonesia.travel",
  },
  {
    id: "05",
    title: "Suara Papua",
    subtitle: "Media berita Papua",
    url: "https://suarapapua.com",
  },
  {
    id: "06",
    title: "Dimensi Indonesia",
    subtitle: "Artikel budaya Indonesia",
    url: "https://dimensiindonesia.com",
  },
  {
    id: "07",
    title: "YKAN",
    subtitle: "Konservasi alam Papua",
    url: "https://ykan.or.id",
  },
  {
    id: "08",
    title: "Detik",
    subtitle: "Berita & budaya Indonesia",
    url: "https://detik.com",
  },
  {
    id: "09",
    title: "Antara Foto",
    subtitle: "Dokumentasi visual",
    url: "https://antarafoto.com",
  },
  {
    id: "10",
    title: "Daily Sports",
    subtitle: "Artikel budaya & kuliner Papua",
    url: "https://www.dailysports.id/umum/19001/makanan-khas-papua-pegunungan",
  },
  {
    id: "11",
    title: "Indonesia Kaya",
    subtitle: "Budaya Nusantara",
    url: "https://indonesiakaya.com",
  },
  {
    id: "12",
    title: "Kompas",
    subtitle: "Berita & referensi nasional",
    url: "https://kompas.com",
  },
  {
    id: "13",
    title: "The Asian Parent",
    subtitle: "Tradisi Tanam Sasi",
    url: "https://id.theasianparent.com/tanam-sasi",
  },
  {
    id: "14",
    title: "ANTARA News",
    subtitle: "Pakaian adat Suku Asmat",
    url: "https://www.antaranews.com/berita/4290011/pakaian-adat-suku-asmat-sebagai-simbol-kekayaan-alam-papua",
  },
  {
    id: "15",
    title: "Wahana Visi Indonesia",
    subtitle: "Upacara adat Suku Asmat",
    url: "https://wahanavisi.org/id/media-materi/cerita/detail/mengenal-3-upacara-adat-suku-asmat-di-papua",
  },
  {
    id: "16",
    title: "EcoNusa",
    subtitle: "Taman Nasional Wasur",
    url: "https://econusa.id/id/ecoblog/taman-nasional-wasur-surga-burung-migran-di-timur-indonesia/",
  },
  {
    id: "17",
    title: "Indonesia Juara",
    subtitle: "Kuliner Papua",
    url: "https://indonesiajuara.asia/blog/makanan-khas-papua/",
  },
  {
    id: "18",
    title: "Traveloka Explore",
    subtitle: "Kuliner Papua Barat Daya",
    url: "https://www.traveloka.com/id-id/explore/destination/daftar-makanan-khas-papua-barat-daya-paling-enak/1007098",
  },
  {
    id: "19",
    title: "Jurnal JIANA",
    subtitle: "Publikasi ilmiah",
    url: "https://jurnal.asian.or.id/index.php/JIANA/article/download/305/114/",
  },
  {
    id: "20",
    title: "KPU Yahukimo",
    subtitle: "Warisan leluhur Papua Pegunungan",
    url: "https://kab-yahukimo.kpu.go.id/blog/read/8504_warisan-leluhur-papua-pegunungan-makna-di-balik-koteka-sali-dan-taring-babi",
  },
  {
    id: "21",
    title: "Budaya Indonesia",
    subtitle: "Aunu Kerang",
    url: "https://budaya-indonesia.org/Aunu-Kerang",
  },
  {
    id: "22",
    title: "Tempo",
    subtitle: "Festival Danau Sentani",
    url: "https://www.tempo.co/hiburan/festival-danau-sentani-dibuka-bagaimana-ke-sana-dan-fakta-menariknya-169353",
  },
  {
    id: "23",
    title: "Keluyuran",
    subtitle: "Tarian adat Papua",
    url: "https://keluyuran.com/tarian-adat-papua/",
  },
  {
    id: "24",
    title: "Sastra Papua",
    subtitle: "Keberagaman suku Papua",
    url: "https://sastrapapua.com/suku-di-papua-barat-keberagaman-budaya-tanah-cenderawasih/",
  },
  {
    id: "25",
    title: "Kumparan",
    subtitle: "Budaya & wisata Papua",
    url: "https://kumparan.com/bumi-papua/menyusuri-kampung-di-danau-sentani-tempat-penyelenggaraan-kman-vi-1yvb26ebBYb",
  },
  {
    id: "26",
    title: "Wisataka",
    subtitle: "Festival Danau Sentani",
    url: "https://wisataka.com/festival-danau-sentani-di-papua/",
  },
  {
    id: "27",
    title: "Pagar Alam Pos",
    subtitle: "Suku Kamoro",
    url: "https://pagaralampos.disway.id/sejarah-dan-misteri/read/737965/sejarah-suku-kamoro-jejak-budaya-pesisir-papua-yang-bertahan-di-tengah-arus-modernisasi/15",
  },
  {
    id: "28",
    title: "DPRD Paniai",
    subtitle: "Tradisi budaya Paniai",
    url: "https://www.dprdpaniai.id/10-tradisi-budaya-menarik-di-paniai-papua-yang-harus-diketahui/",
  },
  {
    id: "29",
    title: "Viral Food Travel",
    subtitle: "Tarian Tumbu Tanah",
    url: "https://kumparan.com/viral-food-travel/tarian-daerah-papua-mengenal-kesenian-tumbu-tanah-masyarakat-arfak-1w2BUGhcmaZ",
  },
  {
    id: "30",
    title: "Salam Papua",
    subtitle: "Tarian adat Papua",
    url: "https://salampapua.com/2024/06/10-tarian-adat-papua-yang-menarik-untuk-dipelajari.html",
  },
  {
    id: "31",
    title: "Hotelier Indonesia",
    subtitle: "Tari tradisional Papua",
    url: "https://hotelier.id/studi/tari-tradisional-papua/",
  },
  {
    id: "32",
    title: "Sering Jalan",
    subtitle: "Tari adat Papua Barat",
    url: "https://seringjalan.com/tari-adat-tradisional-papua-barat/",
  },
  {
    id: "33",
    title: "Pemerintah Kabupaten Raja Ampat",
    subtitle: "Potensi daerah Raja Ampat",
    url: "https://rajaampatkab.go.id/potensi-daerah/",
  },
  {
    id: "34",
    title: "Mongabay Indonesia",
    subtitle: "Konservasi Raja Ampat",
    url: "https://mongabay.co.id/2025/06/06/dari-dasar-laut-hingga-puncak-bukit-raja-ampat-adalah-laboratorium-evolusi-kehidupan/",
  },
  {
    id: "35",
    title: "ICCTF",
    subtitle: "Desa wisata & konservasi Raja Ampat",
    url: "https://www.icctf.or.id/penantian-endemi-desa-wisata-spesies-raja-ampat/",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 20 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  },
};

export default function CreditsSection() {
  return (
    <section className="bg-[#1F1F1F] w-full py-24 md:py-32 lg:py-[120px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16 xl:gap-20"
      >
        {/* Left Column */}
        <motion.div variants={fadeUpVariants} className="flex-1 w-full">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-bold text-white uppercase leading-[1.05] tracking-tight mb-6 md:mb-7">
            Kredit &amp; Sumber Isi / Konten
          </h2>
          <p className="text-[#A9A9A9] text-sm sm:text-base leading-[170%] max-w-[340px]">
            Semua konten, data, dan materi visual yang ditampilkan di situs ini
            bersumber dari berbagai referensi terpercaya dan kontributor yang
            telah memberikan izin.
          </p>
        </motion.div>

        {/* Right Column - Scrollable Card */}
        <motion.div
          variants={fadeUpVariants}
          className="flex-1 w-full max-w-[620px]"
        >
          <div data-lenis-prevent className="bg-white/[0.02] border border-white/[0.08] rounded-l-2xl backdrop-blur-md p-6 sm:p-8 h-[360px] sm:h-[400px] md:h-[430px] overflow-y-auto credits-scrollbar">
            <ul className="flex flex-col">
              {CREDITS.map((credit) => (
                <motion.li key={credit.id} variants={itemVariants}>
                  <a
                    href={credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 sm:gap-5 p-3 sm:p-4 rounded-xl border border-transparent transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:border-[#CFC154] hover:bg-[rgba(207,193,84,.05)] hover:shadow-[0_0_18px_rgba(207,193,84,.18)] hover:-translate-y-1"
                  >
                    {/* Timeline */}
                    <div className="flex flex-col items-center pt-1 shrink-0">
                      <span className="text-[#F3F3F3] font-bold text-xs sm:text-sm font-sans">
                        {credit.id}
                      </span>
                      <div className="w-[2px] flex-1 min-h-[36px] mt-2 relative">
                        <div className="absolute inset-0 bg-white/10 rounded-full" />
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#CFC154] rounded-full transition-all duration-300 group-hover:scale-y-[1.5] group-hover:origin-top group-hover:shadow-[0_0_6px_rgba(207,193,84,.4)]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <p className="text-white font-semibold text-sm sm:text-[15px] leading-snug mb-1 transition-colors duration-300">
                        {credit.title}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[#A5A5A5] text-xs sm:text-sm transition-colors duration-300 group-hover:text-[#CFC154]">
                          {credit.subtitle}
                        </span>
                        <span className="text-[#CFC154] text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                          Lihat Sumber
                        </span>
                        <ExternalLink
                          size={12}
                          className="text-[#CFC154] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1.5 shrink-0"
                        />
                      </div>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
