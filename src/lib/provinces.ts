import { ProvinceData } from "@/components/province/types";

export const PROVINCES_DATA: Record<string, ProvinceData> = {
    "papua-barat-daya": {
        id: "papua-barat-daya",
        name: "Papua Barat Daya",
        heroTitle: ["Papua", "Barat Daya"],
        heroDesc: "Papua Barat Daya punya banyak cerita, mulai dari alamnya yang indah sampai orang-orang yang menjaga budayanya tetap hidup.",
        heroImage: "/img/province/papua-barat-daya/hero.png",
        ragamDesc: "Papua Barat Daya punya banyak cerita, mulai dari alamnya yang indah sampai orang-orang yang menjaga budayanya tetap hidup.",
        ragamItems: [
            { id: 1, image: "/img/province/papua-barat-daya/carousel/1.png", title: "Suku Moi (Malamoi)" },
            { id: 2, image: "/img/province/papua-barat-daya/carousel/2.png", title: "Suku Ma'ya" },
            { id: 3, image: "/img/province/papua-barat-daya/carousel/3.png", title: "Suku Tehit" },
            { id: 4, image: "/img/province/papua-barat-daya/carousel/4.png", title: "Suku Ayamaru / Maybrat" },
            { id: 5, image: "/img/province/papua-barat-daya/carousel/5.png", title: "Suku Abun" },
        ],
        tradisiDesc: "Temukan keberagaman Papua melalui suku, tradisi, kuliner khas, dan cerita rakyat yang diwariskan dari generasi ke generasi.",
        tradisiItems: [
            { id: "yospan", image: "/img/province/papua-barat-daya/tradition/1-1.png", image2: "/img/province/papua-barat-daya/tradition/1-2.png", title: "Tari Yospan", desc: "Tarian pergaulan anak muda Papua. Penari menari sambil membentuk lingkaran sebagai simbol persahabatan." },
            { id: "kafuk", image: "/img/province/papua-barat-daya/tradition/2-1.png", image2: "/img/province/papua-barat-daya/tradition/2-2.png", title: "Tari Kafuk", desc: "Berasal dari Tambrauw, tarian ini digunakan untuk menyambut tamu yang datang berkunjung." },
            { id: "wutukala", image: "/img/province/papua-barat-daya/tradition/3-1.png", image2: "/img/province/papua-barat-daya/tradition/3-2.png", title: "Tari Wutukala", desc: "Tarian khas suku Moi di Sorong. Menggambarkan kegiatan menangkap ikan sebagai rasa syukur." }
        ],
        makananDesc: "Temukan keberagaman Papua melalui suku, tradisi, kuliner khas, dan cerita rakyat yang diwariskan dari generasi ke generasi.",
        makananItems: [
            { id: "ikan", image: "/img/province/papua-barat-daya/food/1.png", title: "Ikan Bakar Sorong", desc: "Ikan bakar merupakan hidangan khas Papua yang diolah dengan bumbu sederhana. Ikan direndam dalam santan dan air jeruk nipis sebelum dibakar, lalu diolesi mentega dan bumbu bakar agar cita rasanya semakin gurih." },
            { id: "aunu", image: "/img/province/papua-barat-daya/food/2.png", title: "Aunu Senebre", desc: "Aunu Senebre merupakan salah satu hidangan khas Papua yang banyak dijumpai di wilayah Papua Tengah dan Papua Timur. Makanan ini terbuat dari ikan teri, daun talas, dan kelapa parut yang dibumbui lalu dikukus hingga matang." },
            { id: "sate", image: "/img/province/papua-barat-daya/food/3.png", title: "Sate Kerang", desc: "Aunu Kerang atau sate kerang merupakan kuliner seafood khas Papua yang menggunakan daging kerang laut sebagai bahan utama. Kerang direbus bersama santan dan bumbu halus hingga meresap, kemudian ditusuk menggunakan lidi dan dipanggang seperti sate." },
            { id: "sagu", image: "/img/province/papua-barat-daya/food/4.png", title: "Sagu Lempeng", desc: "Sagu Lempeng adalah roti kuno masyarakat Papua Barat Daya. Ini adalah makanan yang sangat fungsional bagi para pemburu dan pengumpul di hutan karena daya tahannya yang luar biasa. Terbuat dari tepung Sagu yang dibakar dalam cetakan tanah liat yang dipanaskan." }
        ],
        storiesDesc: "Temukan keberagaman Papua melalui suku, tradisi, kuliner khas, dan cerita rakyat yang diwariskan dari generasi ke generasi."
    },
    "papua-barat": {
        id: "papua-barat",
        name: "Papua Barat",
        heroTitle: ["Papua", "Barat"],
        heroDesc: "Temukan keindahan tersembunyi di semenanjung kepala burung, mulai dari pegunungan Arfak hingga pesisir Fakfak yang mempesona.",
        heroImage: "/img/province/papua-barat/hero.png",
        ragamDesc: "Jelajahi keragaman alam dan budaya yang menjadi identitas kebanggaan masyarakat Papua Barat.",
        ragamItems: [
            { id: 1, image: "/img/province/papua-barat/carousel/1.png", title: "Suku Arfak" },
            { id: 2, image: "/img/province/papua-barat/carousel/2.png", title: "Suku Dani" },
            { id: 3, image: "/img/province/papua-barat/carousel/3.png", title: "Suku Biak" },
            { id: 4, image: "/img/province/papua-barat/carousel/4.png", title: "Suku Kokoda / Suku Kuri" },
            { id: 5, image: "/img/province/papua-barat/carousel/5.png", title: "Suku Kaimana" },
        ],
        tradisiDesc: "Warisan leluhur yang masih dijaga kelestariannya oleh suku-suku asli Papua Barat.",
        tradisiItems: [
            { id: "tumbuk", image: "/img/province/papua-barat/tradition/1-1.png", image2: "/img/province/papua-barat/tradition/1-2.png", title: "Tari Tumbuk Tanah", desc: "Tarian tradisional suku Arfak yang melambangkan kebersamaan dan rasa syukur atas hasil panen." },
            { id: "magasa", image: "/img/province/papua-barat/tradition/2-1.png", image2: "/img/province/papua-barat/tradition/2-2.png", title: "Tari Magasa", desc: "Tarian unik asal Fakfak yang dibawakan secara berkelompok dengan formasi melingkar." },
            { id: "ukiran", image: "/img/province/papua-barat/tradition/3-1.png", image2: "/img/province/papua-barat/tradition/3-2.png", title: "Ukiran Kayu", desc: "Seni memahat kayu yang memiliki nilai spiritual dan filosofis bagi masyarakat pesisir." }
        ],
        makananDesc: "Cicipi cita rasa autentik rempah dan kekayaan alam Papua Barat dalam setiap hidangan.",
        makananItems: [
            { id: "sate-ulat", image: "/img/province/papua-barat/food/1.png", title: "Sate Ulat Sagu", desc: "Sate ulat sagu merupakan salah satu kuliner khas Papua yang populer di kalangan masyarakat. Hidangan ini terbuat dari ulat sagu yang ditemukan pada batang pohon sagu yang telah lapuk." },
            { id: "kue-lontar", image: "/img/province/papua-barat/food/2.png", title: "Kue Lontar", desc: "Kue yang terbuat dari bahan dasar tepung terigu dan susu ini merupakan salah satu khas dari Papua. Kue Lontar akan mengingatkanmu dengan kue mangkuk atau pie susu." },
            { id: "udang-selingkuh", image: "/img/province/papua-barat/food/3.png", title: "Udang Selingkuh", desc: "Udah Selingkuh habitatnya berada di Sungai Baliem. Nama udang selingkuh diberikan karena capitnya mirip seperti kepiting. Udang Selingkuh sebenarnya tidak tergolong dalam kategori udang, namun termasuk jenis lobster air tawar, seperti crayfish atau udang karang." },
            { id: "papeda", image: "/img/province/papua-barat/food/4.png", title: "Papeda", desc: "Siapa yang tidak tahu soal Papeda. Makanan khas papua yang paling ikonik ini merupakan makanan pokok yang kaya dengan karbohidrat. Papeda memiliki tekstur yang lengket dan kental dengan rasa tawar." }
        ],
        storiesDesc: "Selami lebih dalam mitos, legenda, dan cerita rakyat yang lahir dari tanah Papua Barat."
    },
    "papua-tengah": {
        id: "papua-tengah",
        name: "Papua Tengah",
        heroTitle: ["Papua", "Tengah"],
        heroDesc: "Berada di jantung pegunungan, Papua Tengah menyimpan pesona puncak bersalju abadi dan lembah-lembah megah.",
        heroImage: "/img/province/papua-tengah/hero.png",
        ragamDesc: "Menyaksikan kehidupan masyarakat adat di dataran tinggi yang berpadu dengan keagungan bentang alam.",
        ragamItems: [
            { id: 1, image: "/img/province/papua-tengah/carousel/1.png", title: "Suku Mee" },
            { id: 2, image: "/img/province/papua-tengah/carousel/2.png", title: "Suku Kamoro" },
            { id: 3, image: "/img/province/papua-tengah/carousel/3.png", title: "Busana Adat" },
            { id: 4, image: "/img/province/papua-tengah/carousel/4.png", title: "Suku Moni / Suku Damal" },
            { id: 5, image: "/img/province/papua-tengah/carousel/5.png", title: "Suku Mee" },
        ],
        tradisiDesc: "Kehidupan tradisional masyarakat pegunungan yang masih memegang teguh adat istiadat.",
        tradisiItems: [
            { id: "tari-sasi", image: "/img/province/papua-tengah/tradition/1-1.png", image2: "/img/province/papua-tengah/tradition/1-2.png", title: "Tari Sasi", desc: "Tarian sakral milik suku Kamoro di wilayah Mimika yang sarat akan nilai spiritual. Seni tari ini dipentaskan sebagai bentuk rasa syukur atas melimpahnya hasil panen bumi dan laut, sekaligus menjadi bagian inti dalam rangkaian ritual adat untuk menjaga kelestarian alam sekitar." },
            { id: "tari-suku-mee", image: "/img/province/papua-tengah/tradition/2-1.png", image2: "/img/province/papua-tengah/tradition/2-2.png", title: "Tari Suku Mee", desc: "Tarian penuh kegembiraan yang dibawakan oleh masyarakat suku Mee di kawasan Paniai. Gerakan ritmis yang khas ini kerap menjadi pusat perhatian dalam Festival Danau Paniai serta berbagai upacara adat besar lainnya sebagai simbol persatuan dan kebersamaan." },
            { id: "ukiran-kamoro", image: "/img/province/papua-tengah/tradition/3-1.png", image2: "/img/province/papua-tengah/tradition/3-2.png", title: "Ukiran Kamoro", desc: "Seni ukir kayu legendaris yang mahsyur dari suku Kamoro di Mimika. Setiap karya seni ini menyimpan nilai filosofis yang mendalam, di mana setiap marga atau klan memiliki motif khas tersendiri yang bersifat sakral dan tidak boleh ditiru atau diaplikasikan oleh marga lainnya." }
        ],
        makananDesc: "Olahan makanan khas hasil bumi dataran tinggi yang hangat dan mengenyangkan.",
        makananItems: [
            { id: "kue-sagu", image: "/img/province/papua-tengah/food/1.png", title: "Kue Sagu", desc: "Kue sagu khas Papua Tengah dikenal dengan nama Bagea. Selain tepung sagu sebagai bahan utama, ada juga bahan tambahan lain untuk membuat bagea, yaitu kelapa sangrai, telur, gula, kacang mete, soda kue, garam, dan kayu manis." },
            { id: "sinole", image: "/img/province/papua-tengah/food/2.png", title: "Sinole", desc: "Sama seperti bagea, sinole juga berbahan dasar tepung sagu tapi dengan tambahan kelapa parut dan gula merah sebagai isiannya. Rasanya manis dan gurih, cocok jadi cemilan pengganjal perut." },
            { id: "norohombi", image: "/img/province/papua-tengah/food/3.png", title: "Norohombi", desc: "Norohombi berbahan dasar sagu. Tapi uniknya, hidangan ini dicampur dengan kelapa parut dan kerang kering atau yang biasa disebut bia. Masyarakat Nabire biasa menyantapnya dengan sayur tumis, kuah kuning, sambal, atau sate ikan." },
            { id: "eurimoo", image: "/img/province/papua-tengah/food/4.png", title: "Eurimoo", desc: "Ini dia klepon versi Papua Tengah yang dibuat dari sagu, bukan tepung ketan. Isiannya sama-sama gula merah, tetapi ditambah pisang ambon atau kapok yang ditumbuk kasar sebagai campuran sagu. Adonan kemudian dibentuk bulat, direbus hingga mengapung, lalu disajikan dengan taburan kelapa parut dan garam sehingga terasa gurih dan lezat!" }
        ],
        storiesDesc: "Kumpulan cerita yang menggambarkan kedekatan spiritual suku-suku pegunungan dengan alam sekitar."
    },
    "papua-pegunungan": {
        id: "papua-pegunungan",
        name: "Papua Pegunungan",
        heroTitle: ["Papua", "Pegunungan"],
        heroDesc: "Papua Pegunungan adalah atap Indonesia — rumah Puncak Jaya setinggi 4.884 mdpl, lembah Baliem yang megah, dan suku Dani yang menjaga tradisi ribuan tahun tanpa henti.",
        heroImage: "/img/province/papua-pegunungan/hero.png",
        ragamDesc: "Pesona budaya dan panorama menakjubkan dari wilayah dataran tinggi Papua.",
        ragamItems: [
            { id: 1, image: "/img/province/papua-pegunungan/carousel/1.png", title: "Suku Dani / Hubula" },
            { id: 2, image: "/img/province/papua-pegunungan/carousel/2.png", title: "Suku Dani / Suku Lanny" },
            { id: 3, image: "/img/province/papua-pegunungan/carousel/3.png", title: "Suku Yali" },
            { id: 4, image: "/img/province/papua-pegunungan/carousel/4.png", title: "Suku Dani / Hubula" },
            { id: 5, image: "/img/province/papua-pegunungan/carousel/5.png", title: "Suku Lanny" },
        ],
        tradisiDesc: "Adat istiadat Suku Dani, Lani, dan Yali yang unik dan kaya nilai kebersamaan.",
        tradisiItems: [
            { id: "tari-perang", image: "/img/province/papua-pegunungan/tradition/1-1.png", image2: "/img/province/papua-pegunungan/tradition/1-2.png", title: "Tari Perang", desc: "Sebuah tarian tradisional suku Dani yang sarat akan nilai historis dan semangat kepahlawanan. Gerakannya yang dinamis menirukan taktik pertempuran kuno, kini dikemas menjadi pertunjukan seni budaya yang memukau para wisatawan lokal maupun mancanegara di Festival Lembah Baliem." },
            { id: "bakar-batu", image: "/img/province/papua-pegunungan/tradition/2-1.png", image2: "/img/province/papua-pegunungan/tradition/2-2.png", title: "Bakar Batu", desc: "Merupakan salah satu tradisi tertua dan paling sakral di pegunungan tengah Papua berupa metode memasak bersama dengan media batu panas. Lebih dari sekadar makan bersama, pesta Bakar Batu adalah wujud nyata dari nilai kebersamaan, toleransi, dan simbol perdamaian masyarakat adat." },
            { id: "koteka-sali", image: "/img/province/papua-pegunungan/tradition/3-1.png", image2: "/img/province/papua-pegunungan/tradition/3-2.png", title: "Koteka dan Sali", desc: "Pakaian adat tradisional yang dikenakan oleh suku-suku besar di wilayah pegunungan seperti suku Dani, Lani, dan Yali. Koteka digunakan sebagai penutup kemaluan untuk pria, sementara Sali merupakan rok rumbai dari serat tumbuhan untuk wanita, di mana keduanya menjadi simbol kehormatan dan harga diri." }
        ],
        makananDesc: "Olahan hasil panen dari iklim dingin pegunungan tinggi.",
        makananItems: [
            { id: "ikan-bakar-batu", image: "/img/province/papua-pegunungan/food/1.png", title: "Ikan Bakar Batu", desc: "Ikan bakar bumbu kuning menjadi salah satu makanan khas padang yang paling populer di negeri ini. Tak kalah lezat, di Papua Pegunungan ada hidangan ikan bakar yang dimasak dengan cara tradisional." },
            { id: "sarang-semut", image: "/img/province/papua-pegunungan/food/2.png", title: "Sarang Semut", desc: "Di Papua Pegunungan, sarang semut bukan sejenis bolu atau pun sarang semut asli, melainkan nama tumbuhan. Disebut demikian karena tanaman liar ini punya ronga-ronga labirin yang mirip seperti rumah semut." },
            { id: "cacing-laut", image: "/img/province/papua-pegunungan/food/3.png", title: "Cacing Laut", desc: "Makanan khas Pegunungan ini terbilang agak ekstrim sekaligus menawarkan cita rasa yang unik. Meski sekilas terdengar aneh, tapi pasalnya cacing tanah mengandung banyak gizi. Cacing laut diklaim tinggi protein yang baik untuk menambah stamina pria." },
            { id: "martabak-sagu", image: "/img/province/papua-pegunungan/food/4.png", title: "Martabak Sagu", desc: "Kalau butuh hidangan penutup atau pencuci mulut, ada da'dak (martabak sagu) yang rasanya tak kalah lezat dengan martabak makanan khas bangka belitung. Da'dak terasa manis dan gurih dari bahan utama tepung sagu yang dicampur gula aren atau gula merah." }
        ],
        storiesDesc: "Kisah mitologi Suku Dani tentang penciptaan dan kehidupan di sekitar pegunungan es."
    },
    "papua-selatan": {
        id: "papua-selatan",
        name: "Papua Selatan",
        heroTitle: ["Papua", "Selatan"],
        heroDesc: "Papua Selatan adalah tanah savana luas dan rawa-rawa khas Merauke — kota paling timur Indonesia. Wilayah ini kaya budaya suku Marind dan berbatasan langsung dengan Papua Nugini.",
        heroImage: "/img/province/papua-selatan/hero.png",
        ragamDesc: "Menjelajahi keindahan savana yang membentang luas hingga pesisir pantai berlumpur Arafura.",
        ragamItems: [
            { id: 1, image: "/img/province/papua-selatan/carousel/1.png", title: "Suku Asmat" },
            { id: 2, image: "/img/province/papua-selatan/carousel/2.png", title: "Suku Marind" },
            { id: 3, image: "/img/province/papua-selatan/carousel/3.png", title: "Suku Asmat" },
            { id: 4, image: "/img/province/papua-selatan/carousel/4.png", title: "Suku Asmat" },
            { id: 5, image: "/img/province/papua-selatan/carousel/5.png", title: "Suku Mandobo / Suku Muyu" },
        ],
        tradisiDesc: "Budaya Marind Anim dan keahlian seni rupa yang lahir dari kedekatan dengan rawa dan sungai.",
        tradisiItems: [
            { id: "tari-gatzi", image: "/img/province/papua-selatan/tradition/1-1.png", image2: "/img/province/papua-selatan/tradition/1-2.png", title: "Tari Gatzi", desc: "Tarian sakral milik suku Marind yang menjadi bagian penting dalam upacara adat Tanam Sasi. Gerakan dan lantunan dalam tarian ini dibawakan sebagai ungkapan rasa duka yang mendalam serta penghormatan terakhir atas kepergian salah satu anggota suku yang telah meninggal dunia." },
            { id: "upacara-mbis", image: "/img/province/papua-selatan/tradition/2-1.png", image2: "/img/province/papua-selatan/tradition/2-2.png", title: "Upacara Mbis", desc: "Sebuah upacara adat sakral dari suku Asmat yang bertujuan untuk menjaga hubungan harmonis dengan roh nenek moyang. Puncak dari ritual ini ditandai dengan pemahatan tiang Bisj, sebatang kayu utuh berukuran besar yang diukir dengan detail rumit penuh makna religius." },
            { id: "ukiran-asmat", image: "/img/province/papua-selatan/tradition/3-1.png", image2: "/img/province/papua-selatan/tradition/3-2.png", title: "Ukiran Asmat", desc: "Seni pahat kayu legendaris mahakarya suku Asmat yang telah diakui secara internasional oleh dunia. Setiap guratan ukirannya bukan sekadar hiasan visual, melainkan torehan kisah hidup para leluhur, identitas klan, serta wujud kedekatan spiritual mereka yang mendalam dengan alam." }
        ],
        makananDesc: "Bahan pangan lokal dari hutan sagu dan hasil perikanan melimpah di sungai.",
        makananItems: [
            { id: "keripik-keladi", image: "/img/province/papua-selatan/food/1.png", title: "Keripik Keladi", desc: "Keripik keladi adalah camilan khas Papua Selatan yang terbuat dari irisan ubi keladi yang digoreng hingga renyah. Rasanya bervariasi mulai dari pedas, manis, gurih, hingga asin. Keladi sendiri punya banyak nama lain seperti talas, kimpul, atau suweg." },
            { id: "kue-bagea", image: "/img/province/papua-selatan/food/2.png", title: "Kue Bagea", desc: "Kue bagea adalah camilan khas Papua Selatan yang cocok dijadikan oleh-oleh. Terbuat dari campuran tepung sagu dan kenari, kue ini memiliki tekstur yang sedikit keras dengan rasa manis." },
            { id: "ikan-bungkus", image: "/img/province/papua-selatan/food/3.png", title: "Ikan Bungkus", desc: "Ikan bungkus merupakan salah satu hidangan khas Papua Selatan yang diolah dari ikan segar berbumbu. Ikan dibungkus menggunakan daun pisang, kemudian dikukus hingga matang sehingga menghasilkan aroma yang harum dan daging yang lembut." },
            { id: "keladi-tumbuk", image: "/img/province/papua-selatan/food/4.png", title: "Keladi Tumbuk", desc: "Keladi tumbuk merupakan salah satu makanan khas Papua Selatan yang terbuat dari talas rebus yang dihaluskan. Hidangan ini memiliki tekstur lembut menyerupai bubur dengan cita rasa yang cenderung tawar. Keladi tumbuk biasanya disajikan bersama sayur, sambal, atau ikan sebagai lauk pendamping. Selain lezat, makanan ini juga dikenal rendah gula dan karbohidrat." }
        ],
        storiesDesc: "Cerita tentang kekuatan alam dan legenda hewan eksotis dari perbatasan ujung timur Nusantara."
    },
    "papua": {
        id: "papua",
        name: "Papua",
        heroTitle: ["Provinsi", "Papua"],
        heroDesc: "Provinsi Papua adalah jantung dari Tanah Cenderawasih — rumah bagi Jayapura sebagai pusat pemerintahan, hutan tropis yang lebat, dan ragam etnis yang hidup harmonis di pesisir serta pedalaman.",
        heroImage: "/img/province/papua/hero.png",
        ragamDesc: "Harmoni alam yang luar biasa antara pesisir pantai utara, danau purba, dan pegunungan Siklop.",
        ragamItems: [
            { id: 1, image: "/img/province/papua/carousel/1.png", title: "Suku Sentani" },
            { id: 2, image: "/img/province/papua/carousel/2.png", title: "Suku Marind" },
            { id: 3, image: "/img/province/papua/carousel/3.png", title: "Suku Biak / Suku Doreri" },
            { id: 4, image: "/img/province/papua/carousel/4.png", title: "Suku Dani / Hubula" },
            { id: 5, image: "/img/province/papua/carousel/5.png", title: "Suku Korowai" },
        ],
        tradisiDesc: "Kekayaan budaya pesisir utara dengan kerajinan kulit kayu dan lukisan alam yang tiada duanya.",
        tradisiItems: [
            { id: "tari-isosolo", image: "/img/province/papua/tradition/1-1.png", image2: "/img/province/papua/tradition/1-2.png", title: "Tari Isosolo", desc: "Sebuah tradisi seni pertunjukan unik berupa tarian di atas perahu yang dibawakan dengan penuh semangat oleh warga Sentani. Tarian ini dipentaskan secara kolosal dalam Festival Danau Sentani sebagai simbol penghormatan, persatuan, serta lambang kokohnya semangat gotong royong warisan leluhur." },
            { id: "tari-yospan", image: "/img/province/papua/tradition/2-1.png", image2: "/img/province/papua/tradition/2-2.png", title: "Tari Yospan", desc: "Merupakan tarian pergaulan populer yang mengombinasikan dua tarian dinamis, yaitu Tari Yosim dari Sarmi dan Tari Pancar dari Biak Numfor. Para penari bergerak secara energik, lincah, dan penuh keceriaan dalam formasi lingkaran yang melambangkan keakraban serta persahabatan anak muda Papua." },
            { id: "tari-wor", image: "/img/province/papua/tradition/3-1.png", image2: "/img/province/papua/tradition/3-2.png", title: "Tari Wor", desc: "Tarian tradisional sakral khas suku Biak yang sarat akan makna filosofis dan spiritual. Seni pertunjukan ini dipentaskan sebagai bentuk ungkapan syukur yang mendalam atas kelimpahan hasil panen bumi, ritual pernikahan adat, hingga berbagai upacara penting kemasyarakatan." }
        ],
        makananDesc: "Kelezatan hidangan boga bahari dan umbi-umbian dengan sentuhan bumbu khas pesisir.",
        makananItems: [
            { id: "sambal-colo-colo", image: "/img/province/papua/food/1.png", title: "Sambal Colo-Colo", desc: "Buat yang nggak bisa makan tanpa sambal, coba deh sambal colo-colo yang sering disajikan bareng ikan bakar. Dibuat dari campuran cabai, tomat, bawang, dan perasan jeruk nipis, rasanya segar dengan sedikit rasa asam yang khas." },
            { id: "es-buah-matoa", image: "/img/province/papua/food/2.png", title: "Es Buah Matoa", desc: "Kalau haus, cobain minuman khas Papua yang segar ini! Es ini menggunakan buah matoa, yang rasanya mirip kombinasi antara kelengkeng dan rambutan." },
            { id: "petatas", image: "/img/province/papua/food/3.png", title: "Petatas", desc: "Petatas merupakan makanan pokok masyarakat pegunungan Papua. Jenis ubi ini memiliki rasa manis alami dan menjadi sumber energi utama masyarakat. Petatas juga sering digunakan dalam tradisi bakar batu sebagai simbol kebersamaan dan gotong royong." },
            { id: "bakar-batu", image: "/img/province/papua/food/4.png", title: "Bakar Batu", desc: "Lebih dari sekadar hidangan, Bakar Batu merupakan tradisi adat yang mencerminkan rasa syukur, kebersamaan, dan persatuan masyarakat Papua. Daging, sayur, serta umbi-umbian dimasak bersama menggunakan batu panas dalam lubang tanah, kemudian dinikmati secara bersama-sama sebagai simbol kebersamaan." }
        ],
        storiesDesc: "Mitos Naga Sentani dan kisah kepahlawanan kuno yang menjaga daratan utara."
    }
};
