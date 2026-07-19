export interface Story {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    readTime: string;
    origin: string;
    href: string;
    accentColor: string;
    content: StoryContent;
}

export interface StoryContent {
    openingQuote: string;
    youtubeId?: string;
    videoTitle?: string;
    videoDescription?: string;
    paragraphs: StoryBlock[];
}

export type StoryBlock =
    | { type: "paragraph"; text: string }
    | { type: "dialogue"; speaker: string; text: string }
    | { type: "heading"; text: string }
    | { type: "divider" };

export const STORIES: Story[] = [
    {
        id: "towjatuwa-buaya-sakti",
        slug: "towjatuwa-buaya-sakti",
        title: "Towjatuwa dan Buaya Sakti",
        excerpt:
            "Kisah seorang pemuda pemberani dari tepi Danau Sentani yang bersahabat dengan seekor buaya sakti penguasa danau, mengajarkan makna kesetiaan dan perjanjian leluhur.",
        image: "/img/stories/1.png",
        readTime: "8 menit",
        origin: "Sentani",
        href: "/cerita-rakyat/towjatuwa-buaya-sakti",
        accentColor: "#6EE7B7",
        content: {
            openingQuote:
                "Persahabatan yang tulus tidak mengenal batas antara manusia dan alam. Ia hidup dalam janji yang dijaga, dan abadi dalam kenangan yang diwariskan.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Towjatuwa dan Buaya Sakti",
            videoDescription:
                "Saksikan kisah legendaris persahabatan antara Towjatuwa, pemuda Sentani, dan Walowue si buaya sakti dalam animasi penuh warna ini.",
            paragraphs: [
                {
                    type: "paragraph",
                    text: "Di tepi Danau Sentani yang airnya biru jernih, hiduplah seorang pemuda bernama Towjatuwa. Ia dikenal sebagai anak yang baik hati dan suka membantu, meskipun hidupnya sederhana. Setiap pagi ia pergi ke danau untuk mencari ikan, dan setiap sore ia kembali dengan senyum meski tangkapannya tidak banyak.",
                },
                {
                    type: "paragraph",
                    text: "Suatu hari, ketika fajar baru menyingsing, Towjatuwa menemukan seekor buaya besar tergeletak di tepian danau. Tubuhnya penuh luka, napasnya berat, dan matanya yang kuning pucat menatap langit dengan lemah.",
                },
                {
                    type: "dialogue",
                    speaker: "Towjatuwa",
                    text: "Nenek, nenek, tolong! Jika saja hendak melindungi bayi tidak sampai terluka! Towjatuwa memangil nenek dukun!",
                },
                {
                    type: "paragraph",
                    text: "Nenek dukun menyarankan agar peralatan penyembuhan dibawakan ke rumah buaya Sungai Tami. Towjatuwa kemudian menemukan Walowue di dalam rumah tersebut. Ia mendapati titik kelemahan buaya itu di dalam keadaan sakit. Kemudian Towjatuwa berhasil meringankan beban dan menyembuhkan luka-luka Walowue. Towjatuwa pun terasa sangat gelisah menyaksikan hal itu.",
                },
                {
                    type: "dialogue",
                    speaker: "Nenek dukun",
                    text: "Towjatuwa, bagi dalam kandungan istirmu terlalu besar biar membantu. Lebih baik kamu pergi ke tepian danau.",
                },
                {
                    type: "dialogue",
                    speaker: "Towjatuwa",
                    text: "Jadi aku harus bagaimana nini? tanya Towjatuwa gelisah.",
                },
                {
                    type: "paragraph",
                    text: "Untuk membantu istrimu, aku memintamu untuk berlari di sungai Tami dan jangan pernah berhenti. Kemudian jalan Sungai Tami bergerak maju mempercepat aliran airnya untuk membantu kelahiran sang bayi buaya. Towjatuwa pun berlari sepanjang sungai itu, kakinya memercikkan air ke segala penjuru. Setelah sekian lama berhasil, buaya Walowue melahirkan seekor bayi buaya dengan selamat.",
                },
                {
                    type: "dialogue",
                    speaker: "Walowue",
                    text: "Tunggu anak mudaku! si buaya besar berkata. Kau lah hai buaya, yang berterima kasih padamu!",
                },
                {
                    type: "paragraph",
                    text: "Buaya Walowue memandang Towjatuwa dengan mata berkaca-kaca. Towjatuwa, anakku. Namaku Walowue, buaya penguasa Sungai Tami. Aku berterima kasih karena kamu telah menolong bayiku yang baru lahir dan membantuku melewati proses kelahiran yang berat ini. Kamu adalah manusia pertama yang berani membantu dan memperlakukan kami dengan baik.",
                },
                {
                    type: "dialogue",
                    speaker: "Walowue",
                    text: "Baiklah aku akan menolongmu! Towjatuwa pun mengangkat tubuh besar yang menggelembung penuh buaya yang hendak bergolak, bergerak bergulir.",
                },
                {
                    type: "dialogue",
                    speaker: "Walowue",
                    text: "Tunggu dulu mudaku, kau hendak menikahi lagi terburu-buru!",
                },
                { type: "divider" },
                {
                    type: "paragraph",
                    text: "Kemudian Walowue memandang kepada yang menjaring menitip berharap-harap. Ia mendorong Towjatuwa bahwa ia tunggu di sana dan membantu mendirikan istri Towjatuwa. Walowue di buaya pun bergarak membantunya membawa serang lalat mencari ramput baru. Mencari serang ramput di di sungai baru maka, Towjatuwa ikut membawa serang buaya itu menghembuskan buaya kepada ramputnya buaya ini pun bergolak barong-barong bergelung.",
                },
                {
                    type: "dialogue",
                    speaker: "Walowue",
                    text: "Engkau pujiansh dahulu Towjatuwa, jangan kamu lalai atas masalahmu. Aku berjanji akan kemuliamu nanti makan untuk membantu istrimu.",
                },
                {
                    type: "paragraph",
                    text: "Terimakasiih Walowue telah melahirkan bayimu. Towjatuwa pun segera pulang setelah ia tahu ia memang harus harus pulang ke keluarganya dengan hati lega.",
                },
                {
                    type: "heading",
                    text: "Warisan Persahabatan yang Abadi",
                },
                {
                    type: "paragraph",
                    text: "Malam harinya Walowue mendapat jantungnya menjadi angin di rumah tamu. Di dalam mimpinya ia bertemu dengan roh Towjatuwa yang jauh pergi. Towjatuwa pun membantu lagi. Walowue membantu Towjatuwa menemukan istri baru yang mencari ramput. Ia berjanji untuk membantu Towjatuwa mencari dan membantu proses kelahiran.",
                },
                {
                    type: "paragraph",
                    text: "Towjatuwa, sebagai bentuk terima kasihnya kepada Walowue, telah menjadi pembawa bayi. Aku berjanji kepada kamu, keliling membantu dan berburu. Dan aku nanti sudah sudah sudah mulai sudah cukup panjang. Ia kemudian mencoba bekerja diam menjaga buah buaya Sungai Tami hingga sekarang. Towjatuwa berhasil menaruh serang anak lalat bagi laki-laki itu. Towjatuwa memberi nama anak laki-lakinya itu sebagai Walowue, atas jasanya buaya sakti Walowue.",
                },
                {
                    type: "paragraph",
                    text: "Towjatuwa, aku berterima kasih. Aku memang harus pulang. Namun, sebelum pergi ke kalian, tolong jangan membantu dan berburu lagi. Aku nanti sudah sudah sudah pasti sudah mati satu satu. Ia memberi nasihat baik diri sendiri semua pasti namun akan terus mau pergi.",
                },
                {
                    type: "paragraph",
                    text: "Sejak saat itu Towjatuwa beserta keturunannya selalu menjaga buaya-buaya Sungai Tami hingga sekarang.",
                },
            ],
        },
    },
    {
        id: "legenda-batu-keramat",
        slug: "legenda-batu-keramat",
        title: "Legenda Batu Keramat",
        excerpt:
            "Di balik batu-batu besar yang tersebar di pegunungan Papua, tersimpan legenda tentang roh leluhur yang menjaga keseimbangan alam dan kehidupan suku-suku di sekitarnya.",
        image: "/img/stories/2.png",
        readTime: "6 menit",
        origin: "Lembah Baliem",
        href: "/cerita-rakyat/legenda-batu-keramat",
        accentColor: "#CFC154",
        content: {
            openingQuote:
                "Batu-batu itu bukan sekadar bebatuan. Di dalamnya tinggal roh para leluhur yang terus menjaga lembah ini dari generasi ke generasi.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Legenda Batu Keramat",
            videoDescription:
                "Jelajahi misteri batu-batu keramat yang tersebar di Lembah Baliem, Papua — simbol penjagaan para leluhur yang masih dipercaya hingga kini.",
            paragraphs: [
                {
                    type: "paragraph",
                    text: "Di jantung Pegunungan Tengah Papua, di antara lembah yang dipeluk kabut dan sungai-sungai yang menyanyi di antara batu, berdiri kelompok batu-batu raksasa yang tak seorang pun berani menyentuhnya sembarangan. Masyarakat Dani menyebutnya Wam Hubi, batu penjaga.",
                },
                {
                    type: "paragraph",
                    text: "Menurut cerita tertua yang disampaikan oleh para ondoafi, batu-batu itu dulunya adalah para tetua suku yang merelakan diri berubah wujud demi menjaga lembah dari segala ancaman. Mereka berubah pada malam ketika bintang-bintang jatuh dan langit menjadi merah darah.",
                },
                {
                    type: "dialogue",
                    speaker: "Tetua Suku",
                    text: "Kami tidak pergi. Kami hanya berubah rupa. Selama batu ini berdiri, lembah ini akan aman.",
                },
                {
                    type: "paragraph",
                    text: "Dikisahkan bahwa seorang pemburu bernama Ilaga pernah mencoba mengambil salah satu batu untuk dijadikan fondasi rumahnya. Malam itu juga ia bermimpi buruk — kawanan roh tua mengerumuninya dan berkata dengan suara seperti guntur.",
                },
                {
                    type: "paragraph",
                    text: "Ilaga terbangun dalam keringat dingin. Ia menaruh kembali batu itu tepat di tempatnya. Sejak saat itu, ia menjadi penjaga batu keramat dan mengajarkan anak cucunya untuk melakukan hal yang sama setiap musim panen.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Tradisi yang Terus Hidup",
                },
                {
                    type: "paragraph",
                    text: "Hingga kini, masyarakat di sekitar Lembah Baliem masih melakukan ritual tahunan di dekat batu-batu itu. Mereka membawa persembahan berupa buah-buahan, daun sirih, dan kadang-kadang bulu burung cendrawasih, sambil menyanyikan lagu-lagu kuno yang konon dapat dimengerti oleh roh di dalam batu.",
                },
                {
                    type: "paragraph",
                    text: "Para antropolog yang mengunjungi daerah ini sering terpesona oleh betapa kuatnya kepercayaan ini bertahan di tengah modernisasi. Bagi masyarakat setempat, batu-batu itu bukan takhayul — mereka adalah sejarah yang berdiri tegak, mengingatkan bahwa ada sesuatu yang lebih besar dari sekadar kehidupan manusia.",
                },
            ],
        },
    },
    {
        id: "asal-mula-burung-cendrawasih",
        slug: "asal-mula-burung-cendrawasih",
        title: "Asal Mula Burung Cendrawasih",
        excerpt:
            "Mengapa burung surga Papua memiliki bulu yang demikian memukau? Sebuah mitos tentang seorang putri dewa yang turun ke bumi dan berubah menjadi burung paling cantik di dunia.",
        image: "/img/stories/3.png",
        readTime: "10 menit",
        origin: "Raja Ampat",
        href: "/cerita-rakyat/asal-mula-burung-cendrawasih",
        accentColor: "#F59E0B",
        content: {
            openingQuote:
                "Tidak ada yang kebetulan di alam Papua. Setiap warna, setiap bunyi, setiap gerakan adalah cerita yang belum selesai ditulis oleh para dewa.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Cendrawasih: Burung Surga Papua",
            videoDescription:
                "Kisah ajaib tentang asal-usul burung cendrawasih, sang burung surga Papua yang bulu-bulunya menjadi kebanggaan dan simbol keindahan tanah Papua.",
            paragraphs: [
                {
                    type: "paragraph",
                    text: "Jauh sebelum Raja Ampat dikenal oleh dunia, ketika lautan masih berbicara dengan bahasa para dewa dan hutan masih menyimpan rahasia yang belum pernah terjamah manusia, hiduplah seorang putri kahyangan bernama Cenderawasi. Ia adalah anak bungsu dari Dewa Penjaga Timur, makhluk agung yang bertahta di balik awan keemasan.",
                },
                {
                    type: "paragraph",
                    text: "Suatu hari, Cenderawasi melanggar larangan ayahnya. Ia turun ke bumi untuk melihat keindahan yang selalu ia impikan. Bumi itu begitu indah — lautan biru, karang warna-warni, dan manusia yang menari di tepi pantai sambil menyanyikan lagu-lagu gembira.",
                },
                {
                    type: "dialogue",
                    speaker: "Dewa Penjaga Timur",
                    text: "Anakku, kamu telah melanggar batas antara langit dan bumi. Kamu harus menerima konsekuensinya.",
                },
                {
                    type: "dialogue",
                    speaker: "Cenderawasi",
                    text: "Ayah, izinkan aku tinggal di sini. Bumi ini begitu indah dan aku ingin menjaganya seperti ayah menjaga langit.",
                },
                {
                    type: "paragraph",
                    text: "Sang Dewa terdiam lama. Akhirnya, dengan hati yang berat namun penuh kasih, ia berkata: 'Baiklah. Tapi kamu tidak bisa tetap menjadi manusia. Kamu akan menjadi penjaga bumi dalam wujud yang berbeda.'",
                },
                {
                    type: "paragraph",
                    text: "Maka dalam sekejap, Cenderawasi berubah menjadi seekor burung. Tubuhnya dibalut bulu-bulu yang memancarkan warna-warna langit — merah saga, kuning keemasan, hijau zamrud, dan biru laut dalam. Setiap bulu adalah warna dari kenangan langit yang ia bawa serta.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Simbol Keindahan Tanah Papua",
                },
                {
                    type: "paragraph",
                    text: "Sejak hari itu, burung cendrawasih menjadi simbol Papua. Ketika melihat burung itu menari di antara pepohonan, masyarakat Papua percaya bahwa mereka sedang menyaksikan sebuah tarian persembahan kepada dewa-dewa langit — sebuah pengingat bahwa kecantikan sejati adalah bentuk kasih sayang yang tak pernah pupus.",
                },
                {
                    type: "paragraph",
                    text: "Itulah mengapa hingga hari ini, bulu cendrawasih dipakai dalam upacara adat yang paling sakral. Bukan sebagai hiasan semata, melainkan sebagai penghormatan kepada Cenderawasi, putri yang memilih bumi daripada langit — dan mengabadikan kedua keindahan itu dalam setiap helai bulunya.",
                },
            ],
        },
    },
    {
        id: "biwar-sang-penakluk-naga",
        slug: "biwar-sang-penakluk-naga",
        title: "Biwar Sang Penakluk Naga",
        excerpt:
            "Epik keberanian Biwar, pahlawan muda dari pesisir selatan Papua, yang menantang naga laut raksasa demi menyelamatkan ibunya dan mengembalikan kedamaian bagi desanya.",
        image: "/img/stories/4.png",
        readTime: "12 menit",
        origin: "Papua Selatan",
        href: "/cerita-rakyat/biwar-sang-penakluk-naga",
        accentColor: "#60A5FA",
        content: {
            openingQuote:
                "Keberanian bukan berarti tidak takut. Keberanian adalah melangkah maju meskipun lutut gemetar dan dada berdegup kencang.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Biwar: Pahlawan Papua",
            videoDescription:
                "Epik keberanian Biwar dalam menghadapi naga laut raksasa — kisah seorang putra yang berjuang demi ibu dan desanya.",
            paragraphs: [
                {
                    type: "paragraph",
                    text: "Di pesisir selatan Papua, di mana ombak Laut Arafura menghantam batu karang dengan garang dan angin selatan membawa bau garam yang asin, lahirlah seorang bayi yang diberi nama Biwar. Ayahnya adalah nelayan pemberani yang hilang di laut ketika Biwar masih dalam kandungan. Ibunya, Nakari, membesarkan Biwar seorang diri.",
                },
                {
                    type: "paragraph",
                    text: "Ketika Biwar beranjak remaja, musibah besar melanda desa mereka. Seekor naga laut raksasa bernama Dawur muncul dari kedalaman samudra dan mulai meneror pesisir. Ia membakar perahu nelayan, menghancurkan rumah-rumah di tepian pantai, dan menculik siapa saja yang ia temui.",
                },
                {
                    type: "paragraph",
                    text: "Ibunya, Nakari, adalah salah satu yang diculik.",
                },
                {
                    type: "dialogue",
                    speaker: "Biwar",
                    text: "Aku akan pergi mencari ibu. Tidak ada yang bisa menghentikanku.",
                },
                {
                    type: "dialogue",
                    speaker: "Tetua Desa",
                    text: "Anak muda, Dawur adalah naga tertua di lautan ini. Kamu hanya akan sia-sia.",
                },
                {
                    type: "dialogue",
                    speaker: "Biwar",
                    text: "Maka biarlah aku mati sia-sia dalam usaha. Lebih baik itu daripada hidup dalam kepengecutan.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Pertempuran di Ujung Samudra",
                },
                {
                    type: "paragraph",
                    text: "Biwar berlayar selama tujuh hari tujuh malam, dipandu oleh bintang-bintang yang bercahaya dan seekor lumba-lumba putih yang konon adalah utusan roh laut baik. Di hari kedelapan, ia menemukan gua bawah laut tempat Dawur tinggal.",
                },
                {
                    type: "paragraph",
                    text: "Pertempuran berlangsung sengit. Dawur menyemburkan api, namun Biwar berlindung di balik perisai karang. Biwar menyerang dengan tombak sakti yang ia warisi dari ayahnya — tombak yang terbuat dari tulang paus purba dan dihiasi bulu cendrawasih.",
                },
                {
                    type: "paragraph",
                    text: "Pada akhirnya, keberanian dan kecerdikan mengalahkan kekuatan brute. Biwar berhasil menancapkan tombaknya tepat di jantung Dawur. Naga itu jatuh ke dasar samudra, dan gelombang besar melanda seluruh pesisir sebagai pertanda kematiannya.",
                },
                {
                    type: "paragraph",
                    text: "Biwar menemukan ibunya selamat di sudut terdalam gua itu. Mereka kembali ke desa sebagai pahlawan, dan nama Biwar pun diukir dalam ingatan masyarakat Papua Selatan hingga selamanya.",
                },
            ],
        },
    },
    {
        id: "legenda-cabo-pui-dan-batu-ajaib",
        slug: "legenda-cabo-pui-dan-batu-ajaib",
        title: "Legenda Cabo Pui dan Batu Ajaib",
        excerpt:
            "Seorang dukun tua bernama Cabo Pui menemukan batu yang memiliki kekuatan magis. Batu itu mampu menyembuhkan penyakit, namun juga membawa bencana bila disalahgunakan.",
        image: "/img/stories/5.png",
        readTime: "7 menit",
        origin: "Paniai",
        href: "/cerita-rakyat/legenda-cabo-pui-dan-batu-ajaib",
        accentColor: "#A78BFA",
        content: {
            openingQuote:
                "Kekuatan sejati bukan terletak pada apa yang kamu miliki, melainkan pada kebijaksanaan dalam menggunakannya.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Cabo Pui dan Batu Ajaib",
            videoDescription:
                "Kisah kebijaksanaan dan konsekuensi dari dukun tua Paniai yang menemukan batu sakti — pelajaran tentang tanggung jawab dan keseimbangan.",
            paragraphs: [
                {
                    type: "paragraph",
                    text: "Di tepi Danau Paniai yang tenang dan dingin, di mana kabut pagi selalu menyelimuti permukaan air seperti selendang sutra putih, tinggallah seorang dukun tua bernama Cabo Pui. Ia adalah orang paling dihormati di sekitar danau itu — bukan karena kekayaan atau kekuasaan, melainkan karena kebijaksanaannya yang telah terbukti melewati banyak musim.",
                },
                {
                    type: "paragraph",
                    text: "Suatu pagi yang dingin, ketika Cabo Pui sedang berjalan di tepi danau mencari tanaman obat, kakinya tersandung sebuah batu kecil yang berkilau kemerahan. Batu itu terasa hangat di tangannya, padahal udara pagi itu sangat dingin.",
                },
                {
                    type: "dialogue",
                    speaker: "Cabo Pui",
                    text: "Batu apa ini? Mengapa terasa seperti memiliki nyawa sendiri?",
                },
                {
                    type: "paragraph",
                    text: "Malam itu, dalam mimpinya, roh danau berbicara kepadanya: 'Batu itu adalah Wagem, batu penyeimbang. Ia bisa menyembuhkan penyakit yang tidak bisa disembuhkan obat biasa. Tapi ingat — kekuatannya hanya akan bekerja untuk kebaikan bersama, bukan untuk kepentingan pribadi.'",
                },
                {
                    type: "paragraph",
                    text: "Cabo Pui menggunakan Wagem dengan bijak selama bertahun-tahun. Ia menyembuhkan anak-anak yang sakit keras, membantu perempuan yang sulit melahirkan, dan menenangkan jiwa-jiwa yang resah. Nama Danau Paniai makin dikenal sebagai tempat yang diberkati.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Ketika Keserakahan Datang",
                },
                {
                    type: "paragraph",
                    text: "Namun suatu hari, seorang saudagar kaya dari jauh mendengar tentang Wagem. Ia menawarkan harta berlimpah kepada Cabo Pui dengan syarat batu itu diberikan kepadanya untuk memperkaya diri sendiri.",
                },
                {
                    type: "dialogue",
                    speaker: "Saudagar",
                    text: "Aku akan memberikanmu emas sebanyak yang bisa kamu angkut. Berikan batu itu padaku.",
                },
                {
                    type: "dialogue",
                    speaker: "Cabo Pui",
                    text: "Batu ini bukan milikku untuk dijual. Ia adalah titipan alam untuk semua orang, bukan untuk satu orang yang serakah.",
                },
                {
                    type: "paragraph",
                    text: "Saudagar itu kemudian mencuri Wagem di malam hari. Namun esok paginya, ia ditemukan pingsan di tepi danau. Batu itu kembali ke tempat Cabo Pui menyimpannya, seolah-olah ia berjalan sendiri. Dan sejak hari itu, tak ada lagi yang berani mencoba mengambilnya secara paksa.",
                },
                {
                    type: "paragraph",
                    text: "Cabo Pui mewariskan Wagem kepada murid-muridnya dengan satu pesan: 'Jaga ia bukan sebagai kekuatan, melainkan sebagai tanggung jawab.' Dan hingga hari ini, generasi demi generasi dukun Paniai terus memegang pesan itu.",
                },
            ],
        },
    },
    {
        id: "empat-raja",
        slug: "empat-raja",
        title: "Empat Raja",
        excerpt:
            "Dongeng tentang empat raja yang memerintah empat penjuru tanah Papua — masing-masing menguasai lautan, gunung, hutan, dan langit — dan bagaimana persatuan mereka membentuk tanah ini.",
        image: "/img/stories/6.png",
        readTime: "9 menit",
        origin: "Raja Ampat",
        href: "/cerita-rakyat/empat-raja",
        accentColor: "#F87171",
        content: {
            openingQuote:
                "Empat arah, empat kekuatan, satu jiwa. Itulah rahasia Papua — sebuah tanah yang agung karena dibentuk oleh persatuan yang tidak pernah goyah.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Empat Raja Papua",
            videoDescription:
                "Legenda tentang empat penguasa legendaris Papua yang bersatu membentuk kepulauan Raja Ampat — kisah tentang kekuatan persatuan.",
            paragraphs: [
                {
                    type: "paragraph",
                    text: "Pada masa ketika bumi masih muda dan lautan belum menemukan batasnya, Papua belum berbentuk seperti yang kita kenal sekarang. Ia adalah kekacauan yang indah — gunung-gunung yang baru tumbuh, sungai yang tidak tahu harus mengalir ke mana, dan hutan yang begitu lebat hingga matahari pun enggan menembusnya.",
                },
                {
                    type: "paragraph",
                    text: "Di tengah kekacauan itu, muncullah empat makhluk agung yang kemudian dikenal sebagai Empat Raja: Uryu penguasa lautan, Betew penguasa gunung, Dorang penguasa hutan, dan Mansar penguasa langit.",
                },
                {
                    type: "paragraph",
                    text: "Keempatnya hidup dalam persaingan. Masing-masing merasa kekuatannya yang paling penting. Uryu menciptakan ombak yang menenggelamkan daratan. Betew menaikkan gunung-gunung sehingga menghalangi awan. Dorang menebalkan hutan hingga tidak ada makhluk yang bisa melintas. Dan Mansar menarik angin sehingga hujan tidak pernah turun.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Pelajaran tentang Keseimbangan",
                },
                {
                    type: "dialogue",
                    speaker: "Uryu",
                    text: "Lihat! Tanpa lautanku, tidak ada kehidupan di tanah ini!",
                },
                {
                    type: "dialogue",
                    speaker: "Betew",
                    text: "Dan tanpa gunung, tidak ada hujan untuk mengisi lautanmu!",
                },
                {
                    type: "paragraph",
                    text: "Argumen itu berlangsung selama seratus tahun. Sementara mereka berselisih, Papua menjadi padang yang tandus dan tak bernyawa. Makhluk-makhluk kecil mulai menghilang. Pohon-pohon layu. Lautan menjadi keruh.",
                },
                {
                    type: "paragraph",
                    text: "Akhirnya, seorang nenek bijak bernama Owi turun dari kahyangan. Ia membawa sebuah biji yang kecil dan sederhana.",
                },
                {
                    type: "dialogue",
                    speaker: "Owi",
                    text: "Biji ini hanya bisa tumbuh jika keempat dari kalian bekerja bersama. Lautan menyiraminya. Gunung memberi mineralnya. Hutan menaunginya. Langit memberi cahayanya. Tidak ada satu pun yang bisa melakukannya sendiri.",
                },
                {
                    type: "paragraph",
                    text: "Para raja saling memandang. Untuk pertama kalinya dalam seratus tahun, mereka melihat satu sama lain bukan sebagai pesaing, melainkan sebagai bagian dari keseluruhan yang sama.",
                },
                {
                    type: "paragraph",
                    text: "Mereka bekerja bersama. Biji itu tumbuh menjadi pohon raksasa yang akarnya menghunjam lautan dan pucuknya menyentuh langit. Dari pohon itulah tanah Papua terbentuk — kepulauan yang bermacam-macam namun menjadi satu, yang dikenal hingga kini sebagai Raja Empat — Raja Ampat.",
                },
            ],
        },
    },
];

export function getStoryBySlug(slug: string): Story | undefined {
    return STORIES.find((s) => s.slug === slug);
}
