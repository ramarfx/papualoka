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
    provinceId?: string;
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
            "Kisah Towjatuwa dan buaya sakti Watuwe dari Sungai Tami, Jayapura, yang mengajarkan balasan kebaikan dan kehormatan pada janji leluhur.",
        image: "/img/stories/1.png",
        readTime: "7 menit",
        origin: "Jayapura",
        href: "/cerita-rakyat/towjatuwa-buaya-sakti",
        accentColor: "#6EE7B7",
        provinceId: "papua",
        content: {
            openingQuote:
                "Kebaikan yang tulus kepada siapa pun—bahkan kepada makhluk yang tampak menakutkan sekalipun—akan berbuah pertolongan saat kita paling membutuhkannya.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Towjatuwa dan Buaya Sakti",
            videoDescription:
                "Saksikan kisah legendaris persahabatan antara Towjatuwa dan Watuwe si buaya sakti penguasa Sungai Tami dalam animasi ini.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Dukun dan Rumput Air Sungai Tami",
                },
                {
                    type: "paragraph",
                    text: "Di Kampung Sawjatami, Jayapura, hiduplah sepasang suami istri. Sang suami bernama Towjatuwa. Suatu hari, istrinya yang tengah hamil tua mengalami kesulitan besar saat hendak melahirkan. Tubuhnya menggigil dan mengalami pendarahan, sementara sang bayi tak kunjung lahir. Panik dan ketakutan, Towjatuwa segera berlari menemui seorang nenek dukun di kampungnya untuk meminta pertolongan.",
                },
                {
                    type: "paragraph",
                    text: "Nenek dukun itu bergegas menyiapkan peralatan persalinan dan menyusul ke rumah Towjatuwa. Setelah memeriksa keadaan sang istri, ia menyimpulkan bahwa bayi dalam kandungan terlalu besar sehingga sulit keluar. Untuk membantu proses persalinan, nenek dukun meminta Towjatuwa mencari rumput air di Sungai Tami yang letaknya tak jauh dari rumah mereka.",
                },
                {
                    type: "heading",
                    text: "Pertemuan dengan Buaya Sakti",
                },
                {
                    type: "paragraph",
                    text: "Di tengah pencariannya di tepi Sungai Tami, Towjatuwa dikejutkan oleh kemunculan seekor buaya raksasa yang tubuhnya ditumbuhi bulu menyerupai bulu burung kasuari. Ketakutan, ia pun berlari. Namun buaya itu memanggilnya dan berbicara layaknya manusia. Buaya itu memperkenalkan diri sebagai Watuwe, penguasa Sungai Tami, yang tengah terhimpit sebongkah batu besar di ekornya dan meminta bantuan Towjatuwa untuk mengangkatnya.",
                },
                {
                    type: "dialogue",
                    speaker: "Watuwe",
                    text: "Tolong aku, wahai manusia! Angkatlah batu besar yang menindih ekorku ini.",
                },
                {
                    type: "paragraph",
                    text: "Tanpa ragu, Towjatuwa menolong Watuwe mengangkat batu tersebut. Ketika hendak buru-buru pergi, Watuwe menahannya dan bertanya alasan ketergesaannya. Setelah mendengar cerita tentang istri Towjatuwa yang kesulitan melahirkan, Watuwe berjanji akan membalas kebaikan itu. Ia meminta Towjatuwa pulang lebih dulu dan berjanji akan datang ke rumahnya malam itu juga.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Pertolongan dan Perjanjian Leluhur",
                },
                {
                    type: "paragraph",
                    text: "Malam harinya, Watuwe benar-benar datang menepati janjinya. Dengan kekuatan saktinya, ia membantu proses kelahiran hingga akhirnya bayi laki-laki yang sehat lahir dengan selamat. Bayi itu diberi nama Narrowra. Towjatuwa dan istrinya mengucapkan terima kasih atas jasa besar Watuwe.",
                },
                {
                    type: "dialogue",
                    speaker: "Watuwe",
                    text: "Jangan pernah memburu maupun memakan buaya-buaya di Sungai Tami. Jika pesan ini dilanggar, keturunanmu akan binasa satu demi satu. Dan jika suatu saat aku mati, bawalah kantung air seniku ke Gunung Sankria.",
                },
                {
                    type: "paragraph",
                    text: "Sejak peristiwa itu, Towjatuwa beserta seluruh keturunannya senantiasa menjaga dan menghormati buaya-buaya penghuni Sungai Tami hingga sekarang, sebagai wujud bakti atas balas budi yang pernah diberikan Watuwe.",
                },
            ],
        },
    },
    {
        id: "legenda-batu-keramat",
        slug: "legenda-batu-keramat",
        title: "Legenda Batu Keramat",
        excerpt:
            "Kisah ajaib penemuan batu keramat penghasil api di Kepulauan Yapen oleh Irimiami dan Isoray yang menjadi awal mula tradisi bersyukur tahunan.",
        image: "/img/stories/2.png",
        readTime: "6 menit",
        origin: "Kepulauan Yapen",
        href: "/cerita-rakyat/legenda-batu-keramat",
        accentColor: "#CFC154",
        provinceId: "papua",
        content: {
            openingQuote:
                "Alam menyimpan keajaiban yang patut dijaga dan dihormati, bukan dieksploitasi. Kebersamaan dalam melestarikan warisan leluhur adalah wujud rasa syukur tertinggi.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Legenda Batu Keramat",
            videoDescription:
                "Saksikan legenda batu keramat Kepulauan Yapen yang menjadi warisan spiritual dan tradisi kebersamaan masyarakat Papua.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Amarah Sang Dewa Iriwonawani",
                },
                {
                    type: "paragraph",
                    text: "Di Gunung Kamboi Rama, Kepulauan Yapen, Papua, terdapat dua desa kecil yang bertetangga: Desa Kamboi Rama, tempat manusia bermukim, dan Desa Aroempi, yang dipenuhi tanaman sagu milik tuan tanah bergelar Iriwonawani. Setiap hari, kaum lelaki Desa Kamboi Rama pergi berburu, sementara para wanitanya mencari sagu di Desa Aroempi—tak lupa melakukan pemujaan kepada Dewa Iriwonawani sebelum mengambil hasil buminya.",
                },
                {
                    type: "paragraph",
                    text: "Karena sagu di Desa Aroempi terus-menerus diambil tanpa henti, persediaannya kian menipis. Dewa Iriwonawani murka dan memindahkan seluruh tanaman sagunya ke tempat lain. Ketakutan, penduduk Desa Kamboi Rama pun mengungsi ke daerah pantai atas perintah kepala suku dan mendirikan permukiman baru bernama Desa Randuayaivi. Namun, ada satu pasangan yang memilih bertahan: Irimiami dan istrinya, Isoray.",
                },
                {
                    type: "heading",
                    text: "Batu yang Mengeluarkan Api",
                },
                {
                    type: "paragraph",
                    text: "Suatu hari sepulang dari ladang, Isoray duduk beristirahat di atas sebuah batu besar dan tiba-tiba menjerit kepanasan. Irimiami yang penasaran ikut menyentuh batu itu dan merasakan panas yang sama. Untuk membuktikannya, ia meletakkan sepotong daging rusa di atas batu tersebut—dan tak lama kemudian, daging itu matang dengan sendirinya.",
                },
                {
                    type: "dialogue",
                    speaker: "Isoray",
                    text: "Aduh, panas sekali! Batu ini mengeluarkan energi panas yang luar biasa!",
                },
                {
                    type: "paragraph",
                    text: "Keesokan harinya, mereka mencoba lagi dengan meletakkan rumput dan dedaunan kering di atas batu. Kali ini, dedaunan tersebut justru terbakar hingga apinya membesar dan terlihat jelas dari Desa Randuayaivi di tepi pantai. Warga pun berbondong-bondong naik untuk memadamkan kebakaran itu bersama-sama.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Batu Keramat yang Dihormati",
                },
                {
                    type: "paragraph",
                    text: "Setelah api berhasil dipadamkan, Irimiami dan Isoray menceritakan keajaiban batu tersebut kepada seluruh warga. Ketika dicoba kembali, batu itu benar-benar mampu memasak daging tanpa api dari luar. Melihat keajaiban ini, Irimiami dan Isoray mengusulkan agar diadakan pesta adat setahun sekali di sekitar batu tersebut—usul yang disetujui oleh ketua adat Desa Randuayaivi.",
                },
                {
                    type: "paragraph",
                    text: "Sejak saat itu, batu tersebut dianggap sebagai Batu Keramat oleh masyarakat Kepulauan Yapen. Setiap tahun, warga berkumpul membawa aneka makanan untuk dimasak bersama di sekitar batu itu sembari mempererat tali persaudaraan—sebuah tradisi yang masih lestari hingga kini.",
                },
            ],
        },
    },
    {
        id: "asal-mula-burung-cendrawasih",
        slug: "asal-mula-burung-cendrawasih",
        title: "Asal Mula Burung Cendrawasih",
        excerpt:
            "Kisah Kweiya dari Fak-Fak yang berubah menjadi burung indah Cenderawasih akibat iri hati saudara-saudaranya, melahirkan burung surga kebanggaan Papua.",
        image: "/img/stories/odesa-oufa.jpeg",
        readTime: "8 menit",
        origin: "Fakfak",
        href: "/cerita-rakyat/asal-mula-burung-cendrawasih",
        accentColor: "#F59E0B",
        provinceId: "kosong",
        content: {
            openingQuote:
                "Keindahan sejati lahir dari ketulusan dan kerja keras. Sebaliknya, rasa iri dan permusuhan hanya membawa penyesalan mendalam.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Asal Mula Burung Cendrawasih",
            videoDescription:
                "Kisah ajaib tentang asal-usul burung cenderawasih di Fak-Fak, simbol keindahan dan kebanggaan tanah Papua.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Buah Pandan Ajaib Bumberi",
                },
                {
                    type: "paragraph",
                    text: "Di pegunungan Bumberi, wilayah Fak-Fak, hiduplah seorang perempuan tua bersama seekor anjing betina kesayangannya. Keduanya menggantungkan hidup dari hutan, mencari buah-buahan dan kuskus setiap hari untuk bertahan hidup.",
                },
                {
                    type: "paragraph",
                    text: "Suatu ketika, dalam perjalanan mencari makan yang cukup panjang, anjing itu kehabisan tenaga hingga mereka berhenti di sebuah tempat yang dipenuhi pohon pandan berbuah lebat. Perempuan tua itu memberikan buah tersebut kepada anjingnya yang kelaparan. Tak disangka, tak lama setelah memakan buah itu, perut sang anjing membesar dan ia melahirkan seekor anak anjing. Penasaran, perempuan tua itu turut memakan buah yang sama—dan mengalami hal serupa: ia melahirkan seorang bayi laki-laki yang diberi nama Kweiya.",
                },
                {
                    type: "heading",
                    text: "Kweiya Tumbuh Dewasa dan Kapak Besi",
                },
                {
                    type: "paragraph",
                    text: "Kweiya tumbuh menjadi pemuda yang tekun membuka hutan untuk berkebun, meski hanya berbekal kapak batu sederhana. Setiap hari ia dan ibunya membakar tumpukan daun dari pohon yang ditebang, hingga asapnya mengepul tinggi ke langit tanpa mereka sadari telah menarik perhatian orang dari kejauhan.",
                },
                {
                    type: "paragraph",
                    text: "Seorang pria tua yang sedang memancing di laut melihat kepulan asap misterius itu dan memutuskan untuk mencari sumbernya. Setelah berjalan kaki selama seminggu, ia akhirnya tiba dan bertemu Kweiya. Dengan ramah, pria itu memberikan sebuah kapak besi—alat yang jauh lebih tajam dari kapak batu milik Kweiya—untuk membantunya menebang pohon.",
                },
                {
                    type: "paragraph",
                    text: "Kweiya, yang ingin memperkenalkan pria itu kepada ibunya, menyembunyikannya di dalam bungkusan batang tebu. Ketika sang ibu diminta mengambilkan tebu untuk melepas dahaga Kweiya, ia terkejut mendapati seorang pria di dalam bungkusan itu. Setelah dijelaskan bahwa pria itulah yang memberikan kapak besi yang begitu berguna, sang ibu pun menerimanya dan mereka bertiga hidup bersama. Dari kebersamaan itu, lahirlah beberapa anak lain yang menjadi adik-adik tiri Kweiya.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Penyesalan dan Perubahan Wujud",
                },
                {
                    type: "paragraph",
                    text: "Seiring waktu, hubungan mereka merenggang karena rasa iri para adik tiri terhadap Kweiya. Suatu hari ketika kedua orang tua sedang mencari ikan, para adik tirinya mengeroyok dan melukai Kweiya. Terluka dan kesal, Kweiya bersembunyi sambil meminta tali dari kulit pohon genemo.",
                },
                {
                    type: "dialogue",
                    speaker: "Kweiya",
                    text: "Ek, ek, ek!",
                },
                {
                    type: "paragraph",
                    text: "Ketika ibunya pulang dan memanggil-manggil namanya, yang terdengar bukan lagi suara manusia, melainkan bunyi 'ek, ek, ek!'—Kweiya telah berubah wujud menjadi seekor burung ajaib dan melompat dari atap rumah menuju dahan pohon.",
                },
                {
                    type: "paragraph",
                    text: "Sang ibu yang sedih mengikuti jejak anaknya dan turut berubah wujud menjadi burung, lalu bertengger bersama Kweiya di dahan yang tinggi sambil berkicau riang. Sejak itulah burung cenderawasih muncul di bumi, dengan perbedaan wujud antara jantan (disebut siangga) dan betina (disebut hanggam tombor) dalam bahasa Iha di daerah Onin, Fak-Fak. Adik-adik tirinya yang menyesal kemudian saling melempar abu tungku hingga wajah mereka berubah warna, lalu ikut berubah menjadi burung-burung lain yang tersebar di hutan.",
                },
            ],
        },
    },
    {
        id: "biwar-sang-penakluk-naga",
        slug: "biwar-sang-penakluk-naga",
        title: "Biwar Sang Penakluk Naga",
        excerpt:
            "Kisah pahlawan muda Biwar dari Mimika yang membalaskan dendam keluarganya dan menaklukkan naga raksasa pemangsa perahu di sungai besar.",
        image: "/img/stories/4.png",
        readTime: "8 menit",
        origin: "Mimika",
        href: "/cerita-rakyat/biwar-sang-penakluk-naga",
        accentColor: "#60A5FA",
        provinceId: "papua-tengah",
        content: {
            openingQuote:
                "Keberanian dan ketekunan mampu mengalahkan rintangan yang tampak mustahil sekalipun. Keadilan dan kegigihan adalah kunci melindungi orang-orang yang kita cintai.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Biwar Sang Penakluk Naga",
            videoDescription:
                "Saksikan epik keberanian Biwar menaklukkan naga raksasa demi membela ibu dan desanya di Mimika, Papua.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Tragedi Naga Sungai Besar",
                },
                {
                    type: "paragraph",
                    text: "Di sebuah kampung kecil di Mimika, kehidupan berlangsung damai. Setiap hari, para lelaki mencari pohon sagu di hutan, sementara para wanita mengolah sarinya menjadi santapan. Suatu hari, ketika persediaan sagu menipis, rombongan warga—lelaki dan beberapa wanita—menyeberangi sungai besar dengan sepuluh perahu kecil untuk mencari pohon sagu baru.",
                },
                {
                    type: "paragraph",
                    text: "Di tengah penyeberangan, seekor naga raksasa muncul dan mengamuk, menghancurkan seluruh perahu mereka. Hampir semua penumpang tewas, kecuali seorang wanita hamil yang berhasil melarikan diri ke dalam hutan dan bersembunyi di sebuah gua.",
                },
                {
                    type: "heading",
                    text: "Masa Kecil Biwar dan Terungkapnya Rahasia",
                },
                {
                    type: "paragraph",
                    text: "Karena tak mungkin kembali ke kampung, wanita itu memilih bertahan hidup seorang diri di hutan. Beberapa bulan kemudian, ia melahirkan seorang bayi laki-laki yang diberi nama Biwar. Sang ibu mengajarinya berburu, memanah, dan bercocok tanam ubi, hingga mereka mampu membangun rumah honai sebagai tempat tinggal.",
                },
                {
                    type: "paragraph",
                    text: "Pada suatu pagi, Biwar meminta izin berburu, namun ibunya berpesan agar ia tidak mendekati sungai besar. Larangan itu justru membuat Biwar penasaran. Diam-diam, ia mendekati sungai tersebut dan menemukan ikan-ikan berukuran luar biasa besar, lalu menangkap beberapa ekor untuk dibawa pulang.",
                },
                {
                    type: "paragraph",
                    text: "Melihat hasil tangkapan yang tak biasa, sang ibu curiga dan akhirnya menceritakan tragedi yang menimpa keluarga dan warga kampung bertahun-tahun silam—bahwa ayah Biwar tewas dibunuh oleh naga raksasa penghuni sungai. Mendengar kisah itu, amarah Biwar memuncak dan ia bertekad membalaskan dendam.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Pertarungan Cerdik Tepi Sungai",
                },
                {
                    type: "paragraph",
                    text: "Dengan membawa panah dan tombak, Biwar mendatangi sarang sang naga dan menantangnya keluar. Pertarungan sengit pun terjadi—namun senjata Biwar tak mampu melukai tubuh naga yang keras, sementara semburan api sang naga nyaris membakarnya berkali-kali.",
                },
                {
                    type: "dialogue",
                    speaker: "Biwar",
                    text: "Keluar kau naga raksasa! Hadapi aku putra dari nelayan yang telah kau binasakan!",
                },
                {
                    type: "paragraph",
                    text: "Menyadari senjatanya tak berguna, Biwar mengubah strategi. Ia berlari menuju tebing di tepi sungai, dan tepat ketika naga bersiap menyemburkan api terbesarnya, Biwar mendorong sebongkah batu besar ke arah kepala sang naga. Makhluk itu pun tewas seketika dan tubuhnya hanyut terbawa arus sungai.",
                },
                {
                    type: "paragraph",
                    text: "Biwar kembali kepada ibunya yang telah menunggu sambil berdoa. Dengan sungai yang kini aman, mereka berdua memutuskan pulang ke kampung halaman. Warga menyambut mereka dengan sukacita, dan sejak saat itu, nama Biwar Sang Penakluk Naga dikenal luas sebagai simbol keberanian generasi muda Papua.",
                },
            ],
        },
    },
    {
        id: "legenda-cabo-pui-dan-batu-ajaib",
        slug: "legenda-cabo-pui-dan-batu-ajaib",
        title: "Legenda Cabo Pui dan Batu Ajaib",
        excerpt:
            "Pengorbanan tulus pemuda Cabo Pui dari Kayo Batu, Jayapura, yang mencari batu ajaib demi mengembalikan kemakmuran dan kerajinan gerabah kampungnya.",
        image: "/img/stories/5.png",
        readTime: "7 menit",
        origin: "Jayapura",
        href: "/cerita-rakyat/legenda-cabo-pui-dan-batu-ajaib",
        accentColor: "#A78BFA",
        provinceId: "papua",
        content: {
            openingQuote:
                "Terkadang, kebaikan besar menuntut pengorbanan yang tulus. Kesetiaan dan kepekaan terhadap petunjuk alam akan membawa terang dalam masa sulit.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Legenda Cabo Pui dan Batu Ajaib",
            videoDescription:
                "Kisah pengorbanan suci Cabo Pui dari Kayo Batu Jayapura demi kelestarian kerajinan gerabah dan kemakmuran masyarakatnya.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Mimpi di Kampung Kayo Batu",
                },
                {
                    type: "paragraph",
                    text: "Di Kampung Kayo Batu, Teluk Imbi, Jayapura, penduduknya dikenal terampil membuat gerabah dari tanah liat yang disebut sempe. Namun, tanah subur kampung itu perlahan menjadi gersang, membuat hasil pertanian dan tangkapan ikan kian berkurang. Warga bahkan sering menahan lapar meski telah menggelar berbagai ritual persembahan kepada para dewa.",
                },
                {
                    type: "paragraph",
                    text: "Di tengah keprihatinan itu, seorang pemuda bernama Cabo Pui bermimpi tentang sebuah batu pipih yang indah. Dalam mimpinya, ia bertemu seorang perempuan yang memiliki batu serupa, dan bersama-sama mereka membuat gerabah yang membawa kemakmuran bagi kampung. Yakin mimpi itu adalah pertanda, Cabo bertekad mencari batu tersebut—seorang diri, ditemani anjing setianya, Abu. Sebelum berangkat, ia berpesan kepada saudaranya, Tiaghe, untuk memperhatikan tanda-tanda alam dan menyusul ke Tanjung Suaja jika pertanda itu muncul.",
                },
                {
                    type: "heading",
                    text: "Perjalanan Menuju Kampung Ormu",
                },
                {
                    type: "paragraph",
                    text: "Cabo dan Abu menyusuri Sungai Numbai, mendaki bukit, dan singgah di beberapa kampung dalam perjalanannya. Di Kampung Abar, ia bertemu seorang warga bernama Abo yang menjamunya dengan ramah, namun tetua adat setempat tidak mengizinkan Cabo ikut membuat sempe di sana. Tanpa berkecil hati, Cabo melanjutkan perjalanan melewati bukit terjal menuju wilayah utara.",
                },
                {
                    type: "paragraph",
                    text: "Setelah melewati kabut tebal, Cabo tiba di Kampung Ormu dan bertemu pemimpinnya, Sirwai. Ia menceritakan mimpi dan tujuannya kepada Sirwai, yang kemudian mengajaknya menyusuri jalan menuju tempat batu itu berada. Sirwai menyambutnya layaknya saudara dan menjamu Cabo bersama para lelaki Kampung Ormu.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Pengorbanan Suci Tanjung Suaja",
                },
                {
                    type: "paragraph",
                    text: "Sebelum Cabo pulang, Sirwai mengungkapkan bahwa batu yang diimpikannya telah ada di dalam nokennya—namun batu itu memiliki kekuatan gaib yang menuntut pengorbanan besar dari Cabo demi kemakmuran kampungnya. Meski bingung, Cabo memantapkan hati untuk menerima takdir itu demi kebahagiaan warga Kayo Batu.",
                },
                {
                    type: "paragraph",
                    text: "Ditemani Abu, Cabo berlayar menembus gelapnya malam hingga tiba di Tanjung Suaja. Ia membakar perahunya, membersihkan diri di laut, lalu mendaki puncak bukit. Di sanalah ia merasakan energi luar biasa mengalir dalam tubuhnya—sebelum akhirnya tubuh Cabo dan Abu terjatuh ke dalam sebuah celah yang seketika menutup, menelan mereka berdua untuk selamanya.",
                },
                {
                    type: "paragraph",
                    text: "Di kampung, Tiaghe yang tengah mencari ikan menyadari hasil tangkapannya kembali melimpah—sebuah pertanda yang membuatnya teringat pada Cabo. Merasa gelisah, ia dan istrinya menyusuri jejak Cabo hingga ke Tanjung Out, tempat mereka menemukan sisa perahu yang terbakar serta batu ajaib yang terkubur di tanah merah.",
                },
                {
                    type: "paragraph",
                    text: "Dengan hati pilu, Tiaghe menyadari mereka tak akan pernah bertemu Cabo lagi. Mereka membawa pulang batu dan tanah merah itu, lalu membuat mangkuk kecil yang setelah dibakar menjadi kerajinan bernama kecabo. Sejak saat itu, kerajinan tanah liat khas Kayo Batu terus berkembang, dan kemakmuran kampung perlahan pulih berkat pengorbanan Cabo Pui.",
                },
            ],
        },
    },
    {
        id: "kasas-wombik-dan-keln-tosara",
        slug: "kasas-wombik-dan-keln-tosara",
        title: "Kasas Wombik dan Keln Tosara",
        excerpt:
            "Kisah suku Moi di Tanjung Saoka dan Kasuari tentang dua anjing berburu yang berubah wujud menjadi hantu Kasas Wombik dan kekalahan mereka oleh burung Keln Tosara.",
        image: "/img/stories/kasas.jpeg",
        readTime: "6 menit",
        origin: "Sorong (Suku Moi)",
        href: "/cerita-rakyat/kasas-wombik-dan-keln-tosara",
        accentColor: "#F43F5E",
        provinceId: "papua-barat-daya",
        content: {
            openingQuote:
                "Keberanian dan persatuan warga yang dibantu pertanda alam mampu mengalahkan teror gaib dan mengembalikan kedamaian di pesisir Papua.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Kasas Wombik dan Keln Tosara",
            videoDescription:
                "Legenda perburuan di Tanjung Saoka dan pertarungan sengit melawan hantu Kasas Wombik di tanah Sorong.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Perburuan di Tanjung Saoka",
                },
                {
                    type: "paragraph",
                    text: "Alkisah pada suatu pagi, seorang bapak bersama dua ekor anjingnya pergi berburu ke Tanjung Saoka dan Kasuari. Sepanjang hari mereka mencari hewan buruan di dalam hutan lebat. Menjelang sore, anjing-anjing itu menggonggong kencang setelah mencium bau seekor lau-lau (kangguru papua) yang berusaha menyelamatkan diri.",
                },
                {
                    type: "paragraph",
                    text: "Dengan sigap, sang bapak melemparkan tombaknya dan berhasil melumpuhkan lau-lau tersebut. Namun karena buruannya sangat berat, ia bermaksud mencari sebatang bambu untuk mengangkutnya pulang. Ia meminta kedua anjingnya, yang bernama Wombik, untuk menjaga hasil buruan yang digantung di pohon.",
                },
                {
                    type: "heading",
                    text: "Anjing yang Berbicara dan Berubah Wujud",
                },
                {
                    type: "paragraph",
                    text: "Ketika sang bapak pergi mencari bambu, kedua anjing itu memandang lau-lau dengan lapar dan berbincang layaknya manusia tentang bagian daging yang akan mereka dapatkan.",
                },
                {
                    type: "dialogue",
                    speaker: "Anjing Wombik",
                    text: "Ah trada, paling nanti tuan bilang kitong dapat dia pu tali perut kapa dengan dia pu kaki-kaki dan tulang-tulang itu.",
                },
                {
                    type: "paragraph",
                    text: "Sang tuan yang kembali membawa bambu terkejut mendengar percakapan manusia dari balik pohon. Ketika mengintip, betapa kagetnya ia melihat bahwa yang berbincang adalah kedua anjingnya sendiri. Saat menyadari keberadaan tuannya, kedua Wombik seketika berubah wujud menjadi sosok hantu terbang (Kasas Wombik) yang mengerikan.",
                },
                {
                    type: "paragraph",
                    text: "Dengan ketakutan luar biasa, sang bapak lari meninggalkan tombak dan buruannya menuju permukiman warga di tepi pantai sambil berteriak, 'Kasas, kasas wombik, kasaaasss!'",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Pertarungan Keln Tosara dan Daun Kiwuru",
                },
                {
                    type: "paragraph",
                    text: "Kedua hantu Wombik terbang mengejar hingga ke Tanjung Kasuari. Selama berhari-hari warga desa berusaha menangkap dan melumpuhkan hantu terbang itu namun selalu gagal karena Wombik melompat dari satu batu ke batu lainnya.",
                },
                {
                    type: "paragraph",
                    text: "Percobaan warga ini diamati oleh seekor burung. Burung cerdik itu mengetahui kelemahan Wombik. Ia mengambil daun dari tumbuhan kiwuru lalu menggosokkannya ke batu-batu pijakan Wombik sehingga menjadi sangat licin.",
                },
                {
                    type: "paragraph",
                    text: "Saat Wombik hinggap di atas batu yang telah diolesi daun kiwuru, kakinya tergelincir dan keduanya jatuh tak berdaya. Wombik akhirnya tewas tertimbun bebatuan yang runtuh menimpa tubuh mereka.",
                },
                {
                    type: "paragraph",
                    text: "Sebagai tanda kemenangan dan pembebasan warga dari teror Kasas Wombik, burung itu mengusapkan darah Wombik ke dadanya hingga berwarna merah. Hingga kini, burung berdada merah tersebut dinamai Keln Tosara oleh masyarakat Suku Moi, dan kisahnya diabadikan dalam lagu adat Kasas Wombik.",
                },
            ],
        },
    },
    {
        id: "kisah-danau-ayamaru",
        slug: "kisah-danau-ayamaru",
        title: "Kisah Danau Ayamaru",
        excerpt:
            "Kisah Chlumbles dari Maybrat yang tak sengaja memicu luapan air raksasa saat berburu musang hitam, hingga terciptanya Danau Ayamaru dan penemuan perahu kole-kole.",
        image: "/img/stories/ayamaru.jpeg",
        readTime: "8 menit",
        origin: "Maybrat (Suku Maybrat)",
        href: "/cerita-rakyat/kisah-danau-ayamaru",
        accentColor: "#10B981",
        provinceId: "papua-barat-daya",
        content: {
            openingQuote:
                "Kreativitas dan pengamatan terhadap alam di sekitar kita mampu mengubah ujian besar menjadi keahlian dan kebudayaan yang bermanfaat bagi keturunan.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Asal Mula Terjadinya Danau Ayamaru",
            videoDescription:
                "Kisah legendaris terbentuknya Danau Ayamaru dan penemuan perahu kole-kole oleh Chlumbles di Kabupaten Maybrat.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Perburuan di Lembah Aves",
                },
                {
                    type: "paragraph",
                    text: "Pada zaman dahulu, seorang pria bernama Chlumbles dari daerah Woman (kini Kampung Segior, Maybrat) pergi berburu ke arah selatan bersama anjing pemburunya. Di daerah Aves, anjingnya menggonggong hebat sambil menggali tanah di sekitar bebatuan besar.",
                },
                {
                    type: "paragraph",
                    text: "Penasaran dengan apa yang bersembunyi di bawah batu, Chlumbles ikut menggali tanah dan memindahkan batu-batu tersebut. Semakin dalam menggali, Chlumbles terkejut karena menemukan pasir laut dan beberapa cangkang kerang di tengah hutan pegunungan.",
                },
                {
                    type: "heading",
                    text: "Kemurkaan Ratu Air dan Terciptanya Danau",
                },
                {
                    type: "paragraph",
                    text: "Tiba-tiba, seekor musang hitam meloncat keluar dari lubang galian. Anjing Chlumbles dan Chlumbles sendiri segera mengejar musang tersebut. Tanpa disadari, lubang galian yang merupakan kediaman Ratu Air (Mos Masu Ano) terganggu.",
                },
                {
                    type: "paragraph",
                    text: "Seketika air memancar deras dari dalam tanah dan mengejar mereka bertiga (mos msun). Air terus mengalir menerjang daratan dari Maru Mana hingga mendekati Mapura. Chlumbles yang kelelahan dan ketakutan memanjat ke puncak gunung untuk menyelamatkan diri, sementara musang dan anjingnya tenggelam oleh arus air.",
                },
                {
                    type: "dialogue",
                    speaker: "Chlumbles",
                    text: "Woo refo fyie mefo? Aya fo mbetru remo refo! (Wooo... ini sudah bagaimana ini? Air sudah tergenang menutupi daerah ini!).",
                },
                {
                    type: "paragraph",
                    text: "Genangan air yang begitu luas itu tidak kunjung surut dan membentuk sebuah danau besar yang kini dikenal sebagai Danau Ayamaru.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Inspirasi Bebek Danau dan Penemuan Perahu",
                },
                {
                    type: "paragraph",
                    text: "Saat mengamati danau yang baru terbentuk, Chlumbles melihat sekelompok bebek danau berenang dengan tenang di atas permukaan air. Penasaran mengapa burung tersebut tidak tenggelam, Chlumbles terinspirasi untuk membuat sarana transportasi kayu yang menyerupai bentuk bebek.",
                },
                {
                    type: "paragraph",
                    text: "Ia menebang pohon besar dan memahatnya menjadi perahu kayu (kole-kole). Namun saat berada di atas air, perahunya tidak bisa bergerak karena belum memiliki alat pengayuh.",
                },
                {
                    type: "paragraph",
                    text: "Setelah memperhatikan bentuk selaput kaki bebek danau yang lebar, Chlumbles mendapat ide brilian untuk membuat dayung yang bagian bawahnya melebar mirip kaki bebek. Penemuan perahu dan dayung oleh Chlumbles ini menjadi cikal bakal tradisi perahu masyarakat di sekitar Danau Ayamaru hingga hari ini.",
                },
            ],
        },
    },
    {
        id: "empat-raja",
        slug: "empat-raja",
        title: "Empat Raja",
        excerpt:
            "Kisah enam telur ajaib di Sungai Waikeo yang menetas menjadi empat raja pembagi gugusan pulau megah Raja Ampat serta batu telur yang dikeramatkan.",
        image: "/img/stories/6.png",
        readTime: "7 menit",
        origin: "Raja Ampat",
        href: "/cerita-rakyat/empat-raja",
        accentColor: "#F87171",
        provinceId: "papua-barat-daya",
        content: {
            openingQuote:
                "Bakti, ketekunan, dan rasa hormat kepada orang tua akan membuahkan hasil yang membanggakan bagi diri sendiri maupun orang banyak.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Empat Raja Papua",
            videoDescription:
                "Legenda enam telur ajaib Sungai Waikeo yang menetas menjadi Empat Raja pembawa kemakmuran di kepulauan Raja Ampat.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Enam Telur di Sungai Waikeo",
                },
                {
                    type: "paragraph",
                    text: "Di tanah Papua, hiduplah sepasang suami istri yang telah lama menanti kehadiran seorang anak. Suatu hari, saat mencari kayu bakar di tepi Sungai Waikeo, sang suami tak sengaja menemukan sebuah lubang besar berisi enam butir telur raksasa. Terkejut sekaligus penasaran, keduanya sepakat membawa pulang telur-telur itu sebagai persediaan makanan.",
                },
                {
                    type: "paragraph",
                    text: "Keesokan harinya, keajaiban terjadi: telur-telur itu menetas menjadi manusia, bukan unggas. Empat menjadi anak laki-laki, satu anak perempuan, sementara satu telur lainnya mengeras menjadi batu. Kelima anak itu diberi nama War, Betani, Dohar, Mohamad, dan sang anak perempuan, Pintolee. Suami istri itu meyakini kelahiran ajaib ini sebagai jawaban doa mereka selama bertahun-tahun.",
                },
                {
                    type: "heading",
                    text: "Bakti Kelima Anak dan Kepergian Pintolee",
                },
                {
                    type: "paragraph",
                    text: "Kelima anak tumbuh menjadi sosok yang rajin dan berbakti, membantu orang tua mereka mengelola lahan pertanian hingga berkembang subur ke wilayah Teluk Kabui. Kebaikan mereka membuat seluruh warga desa turut kagum dan menaruh hormat.",
                },
                {
                    type: "paragraph",
                    text: "Di tengah kebahagiaan keluarga itu, Pintolee jatuh cinta kepada seorang pemuda yang tidak direstui keluarganya. Tetap teguh pada pilihannya, Pintolee memilih pergi meninggalkan saudara dan orang tuanya, berlayar menaiki cangkang kerang besar hingga terdampar di Pulau Numfor bersama pemuda pilihannya.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Warisan Empat Pulau dan Batu Telur Raja",
                },
                {
                    type: "paragraph",
                    text: "Bertahun-tahun kemudian, ketika usianya semakin renta, sang ayah memanggil keempat putranya untuk membagikan warisan berupa satu pulau bagi masing-masing anak: War diberi Pulau Waigeo, Betani diberi Pulau Salawati, Dohar diberi Pulau Lilinta, dan Mohamad mendapatkan Pulau Waiga. Sang ayah berpesan agar mereka senantiasa menjaga pulau-pulau tersebut beserta seluruh isinya.",
                },
                {
                    type: "dialogue",
                    speaker: "Sang Ayah",
                    text: "Jagalah pulau-pulau ini beserta seluruh isinya dengan ketekunan dan kebijaksanaan.",
                },
                {
                    type: "paragraph",
                    text: "Keempat bersaudara itu pun menetap dan memimpin pulau masing-masing dengan penuh ketekunan dan kebijaksanaan. Hingga sang ayah wafat, mereka tetap setia menjalankan amanahnya. Pulau-pulau itu tumbuh subur dan makmur, penduduknya hidup damai—dari sinilah lahir nama Raja Ampat, yang berarti empat raja yang memerintah gugusan pulau yang sejahtera.",
                },
                {
                    type: "paragraph",
                    text: "Sementara itu, telur yang berubah menjadi batu tetap dijaga dan diperlakukan layaknya seorang raja oleh penduduk setempat, lengkap dengan dua batu tegak atau menhir penjaga bernama Man Moro dan Man Metem di sisi pintu masuknya. Batu itu dikenal sebagai Batu Telur Raja, dan hanya boleh dilihat setahun sekali oleh keturunan raja saat upacara adat khusus.",
                },
            ],
        },
    },
    {
        id: "odesa-oufa-dan-burung-cendrawasih",
        slug: "odesa-oufa-dan-burung-cendrawasih",
        title: "Odesa Oufa dan Burung Cendrawasih",
        excerpt:
            "Kisah persahabatan anak kepala suku Arfak Odesa Oufa dan burung cenderawasih kecil Orna Mesra yang melahirkan tradisi perlindungan burung cenderawasih.",
        image: "/img/stories/odesa-oufa.jpeg",
        readTime: "7 menit",
        origin: "Pegunungan Arfak",
        href: "/cerita-rakyat/odesa-oufa-dan-burung-cendrawasih",
        accentColor: "#F59E0B",
        provinceId: "papua-barat",
        content: {
            openingQuote:
                "Perbuatan baik yang kita tanam kepada sesama makhluk akan berbuah pertolongan indah saat kita mengalami kesulitan.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Odesa Oufa dan Burung Cendrawasih",
            videoDescription:
                "Kisah kebaikan Odesa Oufa merawat burung cenderawasih di Pegunungan Arfak yang menginspirasi aturan perlindungan adat.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Burung Cenderawasih Pegunungan Arfak",
                },
                {
                    type: "paragraph",
                    text: "Di Pegunungan Arfak yang asri dan damai, hiduplah tiga ekor burung cenderawasih: sang ibu bernama Nam Mesra, serta dua anaknya yaitu Orna Mesra si bungsu dan kakaknya. Setiap pagi, kicauan merdu mereka menyemangati warga sekitar yang hidup berdampingan secara harmonis dengan alam.",
                },
                {
                    type: "paragraph",
                    text: "Di sekitar gunung tersebut, tinggal pula seorang anak kepala suku bernama Odesa Oufa. Ia dikenal baik hati, suka membantu sesama, dan selalu menjelajahi hutan bersama dua sahabatnya.",
                },
                {
                    type: "heading",
                    text: "Pertolongan di Balik Semak-semak",
                },
                {
                    type: "paragraph",
                    text: "Suatu hari saat asyik terbang bersama kakaknya, Orna Mesra tak sengaja menabrak batang pohon hingga terjatuh ke tanah dan mematahkan kakinya. Di saat ketakutan karena seekor burung elang raksasa mengincarnya dari atas dahan, Odesa Oufa dan kedua sahabatnya mendengar rintihan Orna dari balik semak-semak.",
                },
                {
                    type: "dialogue",
                    speaker: "Odesa Oufa",
                    text: "Jangan takut wahai cenderawasih kecil, saya dan sahabat-sahabat saya akan merawatmu hingga sembuh.",
                },
                {
                    type: "paragraph",
                    text: "Odesa Oufa membawa Orna pulang dan merawat kakinya yang patah dengan telaten hingga sembuh total. Sebelum terbang kembali ke hutan, Orna Mesra mengucapkan terima kasih dan memberikan sebuah janji pesan rahasia.",
                },
                {
                    type: "dialogue",
                    speaker: "Orna Mesra",
                    text: "Jika engkau membutuhkan pertolonganku, bernyanyilah 'lalala... lilili...', maka aku akan datang kepadamu.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Pesta Adat dan Perlindungan Cenderawasih",
                },
                {
                    type: "paragraph",
                    text: "Tak lama setelah berpisah, Odesa Oufa tergelincir dan jatuh ke dalam jurang yang sangat dalam. Mengingat janji Orna, Odesa bernyanyi nyaring. Mendengar nyanyian tersebut, Orna Mesra terbang membawa saudara dan kawan-kawannya untuk membantu menuntun Odesa Oufa keluar dari jurang dengan selamat.",
                },
                {
                    type: "paragraph",
                    text: "Mendengar kisah penyelamatan tersebut, sang Kepala Suku menggelar pesta adat selama tiga hari tiga malam. Kepala suku menetapkan aturan adat bahwasanya seluruh masyarakat dilarang keras memburu cenderawasih dan wajib mengganti mahkota hiasan dengan bunga dan dedaunan hutan.",
                },
            ],
        },
    },
    {
        id: "gowoda-dan-air-merah",
        slug: "gowoda-dan-air-merah",
        title: "Gowoda dan Air Merah",
        excerpt:
            "Kisah keteguhan gadis cantik Gowoda dari Teluk Oburauw Kaimana yang membongkar sihir Nenek Saseworo dan menemukan kebahagiaan bersama Mireta.",
        image: "/img/stories/gowo.jpeg",
        readTime: "9 menit",
        origin: "Kaimana",
        href: "/cerita-rakyat/gowoda-dan-air-merah",
        accentColor: "#EF4444",
        provinceId: "papua-barat",
        content: {
            openingQuote:
                "Kejujuran dan kebaikan hati akan senantiasa mengalahkan kejahatan, betapa pun kuatnya kebohongan berusaha menutupi kebenaran.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Gowoda dan Air Merah",
            videoDescription:
                "Legenda perjalanan Gowoda dari Kaimana dan asal usul Sungai Moda Eta yang berwarna merah.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Gadis Rajin dari Kampung Werafuta",
                },
                {
                    type: "paragraph",
                    text: "Di Kampung Werafuta, Teluk Oburauw, Kaimana, hiduplah seorang gadis yatim piatu bernama Gowoda. Ia dikenal sangat cantik, ramah, serta mahir berkebun, melaut, dan menganyam noken serta koba-koba. Suatu hari, Gowoda bertekad berlayar menuju Tanjung Simora untuk menemui seorang pemuda gagah dan baik hati bernama Mireta.",
                },
                {
                    type: "paragraph",
                    text: "Di tengah perjalanan laut yang panjang, Gowoda singgah di Tanjung Sermuku untuk meminta air minum pada seorang nenek bernama Saseworo. Namun Nenek Saseworo yang memiliki ilmu sihir justru tergiur melihat kecantikan Gowoda dan berniat merebut takdir sang gadis.",
                },
                {
                    type: "heading",
                    text: "Sihir Penyamaran Nenek Saseworo",
                },
                {
                    type: "paragraph",
                    text: "Dengan ilmu sihirnya, Nenek Saseworo merasuki wujud Gowoda menjadi cantik jelita dan mengurung roh Gowoda asli di dalam perut babi betina di perahu. Nenek Saseworo menyamar sebagai Gowoda dan disambut meriah oleh keluarga Mireta di Tanjung Simora.",
                },
                {
                    type: "paragraph",
                    text: "Namun saat melangkah ke dalam piring adat penyambutan, piring tersebut mendadak terbelah menjadi dua—sebuah pertanda buruk menurut adat setempat. Meski demikian, pernikahan penyamaran tetap berlangsung.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Terungkapnya Rahasia dan Kali Moda Eta",
                },
                {
                    type: "paragraph",
                    text: "Kakak tertua Mireta, Binuwa, merasa ada hal aneh. Ia memperhatikan bahwa dari dalam kandang babi keluar seorang gadis cantik yang secara diam-diam membersihkan rumah, memasak, dan menganyam noken yang sangat rapi.",
                },
                {
                    type: "paragraph",
                    text: "Binuwa akhirnya menangkap tangan gadis tersebut yang tak lain adalah Gowoda asli. Setelah mendengar kisah sebenarnya, Binuwa membantu Gowoda membongkar kejahatan Nenek Saseworo. Dalam perkelahian sengit di tepi sungai, penyamaran Saseworo hancur dan ia kembali ke wujud nenek tua lalu tewas.",
                },
                {
                    type: "paragraph",
                    text: "Darah Saseworo mengalir mengubah warna air sungai menjadi merah, yang kemudian dinamai Kali Moda Eta (Air Merah). Gowoda akhirnya menikah resmi dengan Mireta melalui upacara piring adat yang utuh dan bahagia.",
                },
            ],
        },
    },
    {
        id: "asal-usul-gunung-sigemerai",
        slug: "asal-usul-gunung-sigemerai",
        title: "Asal Usul Gunung Sigemerai",
        excerpt:
            "Legenda dua bersaudara Jaseso dan Jakukum di Teluk Bintuni yang menebang pohon kayu besi sakral hingga melahirkan nama Gunung Sigemerai.",
        image: "/img/stories/sigemerai.jpeg",
        readTime: "7 menit",
        origin: "Teluk Bintuni",
        href: "/cerita-rakyat/asal-usul-gunung-sigemerai",
        accentColor: "#8B5CF6",
        provinceId: "papua-barat",
        content: {
            openingQuote:
                "Rasa hormat pada janji leluhur dan hukum alam adalah kearifan yang harus senantiasa dijaga oleh setiap generasi.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Asal Usul Gunung Sigemerai",
            videoDescription:
                "Kisah dua bersaudara Jaseso dan Jakukum dari Teluk Bintuni dan asal-usul sebutan Gunung Sigemerai.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Dua Bersaudara di Pegunungan Bintuni",
                },
                {
                    type: "paragraph",
                    text: "Di kawasan pegunungan Teluk Bintuni, hiduplah dua saudara kandung bernama Jaseso dan Jakukum dari marga Tiri. Mereka hidup harmonis dengan alam, berkebun ubi, serta berburu hewan di antara pepohonan merbau dan matoa yang lebat.",
                },
                {
                    type: "paragraph",
                    text: "Suatu pagi yang cerah, keduanya bersepakat untuk membersihkan kebun dan menebang pohon-pohon liar agar tanaman ubi mereka tumbuh subur.",
                },
                {
                    type: "heading",
                    text: "Pohon Kayu Besi Sakral",
                },
                {
                    type: "paragraph",
                    text: "Ketika Jakukum mengayunkan kapaknya ke sebuah pohon besar, kapaknya melenting keras dan hanya mengelupas sedikit kulit pohon. Walau telah mengerahkan seluruh tenaga, pohon kayu besi itu tetap berdiri kokoh tanpa goresan berarti.",
                },
                {
                    type: "paragraph",
                    text: "Jaseso yang penasaran ikut mencoba menebangnya setelah berdoa pada arwah leluhur. Namun kapak taring babi milik mereka tetap melenting bagai membentur besi tebal.",
                },
                {
                    type: "dialogue",
                    speaker: "Jaseso",
                    text: "Leluhur kita pernah membuat perjanjian adat di tanah ini. Kapak taring babi tidak akan sanggup menumbangkannya kecuali dengan kapak besi dan ritual babi.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Kesetiaan Jakukum dan Nama Sigemerai",
                },
                {
                    type: "paragraph",
                    text: "Jaseso memutuskan berjalan jauh ke wilayah pantai seorang diri untuk mencari kapak besi, sementara Jakukum diminta tetap menjaga kebun dan pondok mereka.",
                },
                {
                    type: "paragraph",
                    text: "Hari berganti bulan, Jaseso tak kunjung kembali dari pesisir pantai. Jakukum yang setia tetap menunggu di bawah pohon kayu besi tersebut sambil meratap memanggil nama kakaknya hingga akhir hayatnya.",
                },
                {
                    type: "paragraph",
                    text: "Tempat tinggal mereka diabadikan oleh marga Tiri sebagai kawasan keramat, dan gunung bekas tempat penebangan kayu besi tersebut dinamai Gunung Sigemerai, yang berarti bekas kayu besi yang ditebang.",
                },
            ],
        },
    },
    {
        id: "legenda-asal-usul-sungai-digul",
        slug: "legenda-asal-usul-sungai-digul",
        title: "Legenda Asal Usul Sungai Digul",
        excerpt:
            "Kisah keberanian dan ketulusan pemuda bernama Digul yang mengorbankan jiwanya demi membuka aliran air kehidupan di pedalaman Papua Selatan.",
        image: "/img/stories/digul.jpeg",
        readTime: "8 menit",
        origin: "Boven Digoel (Papua Selatan)",
        href: "/cerita-rakyat/legenda-asal-usul-sungai-digul",
        accentColor: "#F59E0B",
        provinceId: "papua-selatan",
        content: {
            openingQuote:
                "Air Sungai Digul mengalir deras bukan sekadar arus alam, melainkan bukti ketulusan hati dan pengorbanan seorang pemuda pemberani.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Legenda Asal Usul Sungai Digul",
            videoDescription:
                "Legenda mengenai pemuda bernama Digul yang mengalirkan mata air kehidupan di Boven Digoel, Papua Selatan.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Kampung Damai di Tengah Hutan",
                },
                {
                    type: "paragraph",
                    text: "Dahulu kala di pedalaman hutan Papua Selatan, berdiri sebuah kampung kecil yang rukun. Di sana hiduplah Digul, seorang pemuda yang kuat, rajin, dan berhati tulus. Bersama ibunya yang tua, Digul berburu dan menanam sagu untuk bertahan hidup tanpa pernah mengeluh.",
                },
                {
                    type: "heading",
                    text: "Musim Kemarau Panjang & Mimpi Sang Tetua",
                },
                {
                    type: "paragraph",
                    text: "Suatu ketika, kemarau dahsyat melanda. Sungai-sungai mengering dan warga terancam kehausan. Dalam mimpinya, tetua kampung mendapat petunjuk bahwa air kehidupan terkurung oleh dinding batu raksasa di gunung timur, dan hanya orang berhati bersih yang mampu membuka jalannya.",
                },
                {
                    type: "dialogue",
                    speaker: "Digul",
                    text: "Jika tidak ada yang pergi, kita semua dan anak-anak akan menderita. Saya yang akan pergi mencari sumber air itu!",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Membuka Dinding Batu Raksasa",
                },
                {
                    type: "paragraph",
                    text: "Dengan restu ibunya, Digul menembus hutan lebat dan rawa-rawa hingga sampai di kaki gunung batu raksasa. Lewat doa yang tulus tanpa mementingkan diri sendiri, petir dan gemuruh memecahkan dinding batu raksasa tersebut hingga air meluap dahsyat.",
                },
                {
                    type: "heading",
                    text: "Pengorbanan Pemuda Digul",
                },
                {
                    type: "paragraph",
                    text: "Air meluap membelah hutan dan mengalir membawa kehidupan kembali ke kampung. Namun, Digul terseret oleh arus yang sangat kuat. Untuk mengenang keberaniannya, sungai besar yang mengalir hingga ke selatan tersebut diabadikan dengan nama Sungai Digul.",
                },
                {
                    type: "paragraph",
                    text: "Air Sungai Digul mengalir hingga hari ini memberi kehidupan bagi hutan, hewan, dan seluruh manusia di bumi Papua Selatan.",
                },
            ],
        },
    },
    {
        id: "legenda-danau-paniai",
        slug: "legenda-danau-paniai",
        title: "Legenda Danau Paniai",
        excerpt:
            "Kisah ditemukannya telaga jernih nan luas di pegunungan Paniai oleh pemburu Suku Mee yang menjadi Danau Paniai pemberi kehidupan.",
        image: "/img/stories/paniai.jpeg",
        readTime: "7 menit",
        origin: "Paniai (Suku Mee)",
        href: "/cerita-rakyat/legenda-danau-paniai",
        accentColor: "#3B82F6",
        provinceId: "papua-tengah",
        content: {
            openingQuote:
                "Keindahan alam pegunungan Paniai adalah anugerah tempat berteduh dan sumber kehidupan yang wajib dijaga dengan keharmonisan adat.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Legenda Danau Paniai",
            videoDescription:
                "Kisah ditemukannya Danau Paniai di pegunungan Papua Tengah oleh masyarakat Suku Mee.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Perburuan di Lembah Wissel",
                },
                {
                    type: "paragraph",
                    text: "Alkisah di dataran tinggi pegunungan Paniai, hiduplah kelompok masyarakat Suku Mee. Mereka menggantungkan hidup dari berburu udang dan binatang hutan di lereng pegunungan. Suatu ketika, seorang pemburu muda bersama anjingnya menjelajahi kawasan hutan perawan yang belum pernah dijamah manusia.",
                },
                {
                    type: "heading",
                    text: "Telaga Jernih di Puncak Pegunungan",
                },
                {
                    type: "paragraph",
                    text: "Setelah mendaki bukit-bukit terjal, pemburu tersebut terperangah mendapati sebuah cekungan lembah raksasa berisi air jernih berkilau bagaikan cermin. Di dalam air telaga tersebut, berenang ribuan udang air tawar (udang selingkuh) dan ikan-ikan yang melimpah.",
                },
                {
                    type: "dialogue",
                    speaker: "Pemburu Suku Mee",
                    text: "Paniai! Paniai! (Air yang bening dan memberi kehidupan!)",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Warisan Kehidupan Suku Mee",
                },
                {
                    type: "paragraph",
                    text: "Pemburu tersebut kembali ke kampungnya dan membawa seluruh warganya untuk berpindah dan bermukim di pesisir danau tersebut. Sejak saat itu, Danau Paniai menjadi sumber penghidupan utama Suku Mee dan diabadikan dalam Tari Suku Mee sebagai simbol kebersamaan dan rasa syukur.",
                },
            ],
        },
    },
    {
        id: "legenda-ukiran-sakral-kamoro",
        slug: "legenda-ukiran-sakral-kamoro",
        title: "Legenda Ukiran Sakral Kamoro",
        excerpt:
            "Kisah seniman ukir Suku Kamoro di Mimika yang mendapat ilham dari roh leluhur untuk menciptakan ukiran Mbitoro dan patung penghormatan.",
        image: "/img/stories/kamoro.jpeg",
        readTime: "6 menit",
        origin: "Mimika (Suku Kamoro)",
        href: "/cerita-rakyat/legenda-ukiran-sakral-kamoro",
        accentColor: "#10B981",
        provinceId: "papua-tengah",
        content: {
            openingQuote:
                "Setiap pahatan dan ukiran kayu menyimpan kehormatan marga serta doa-doa yang menghubungkan masa lalu dengan masa depan.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Legenda Ukiran Sakral Kamoro",
            videoDescription:
                "Legenda keahlian mengukir kayu sakral Mbitoro oleh masyarakat Suku Kamoro di Mimika.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Pahatan Pohon Kiwuru Mimika",
                },
                {
                    type: "paragraph",
                    text: "Di pesisir Mimika, masyarakat Suku Kamoro dikenal sangat menghormati alam pesisir dan sungai. Seorang pemahat tua bernama Arawa bermimpi didatangi roh leluhur yang memintanya membuat tiang ukir sakral (Mbitoro) untuk melindungi kampung dari bahaya.",
                },
                {
                    type: "heading",
                    text: "Proses Pembuatan Mbitoro Sakral",
                },
                {
                    type: "paragraph",
                    text: "Arawa bersama para pemuda suku memilih kayu pohon bakau terbaik. Dengan penuh ketelitian dan diiringi tabuhan tifa serta Tari Sasi, Arawa mengukir motif-motif klan yang melambangkan keberanian, hewan buruan, serta arwah nenek moyang.",
                },
                {
                    type: "dialogue",
                    speaker: "Arawa",
                    text: "Ukiran ini adalah identitas dan pelindung marga kita. Setiap garis adalah penghormatan pada leluhur.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Warisan Kebudayaan Kamoro",
                },
                {
                    type: "paragraph",
                    text: "Setelah Mbitoro berdiri di depan Karapao (rumah adat Kamoro), kedamaian dan kelimpahan hasil laut senantiasa melingkupi kampung tersebut. Tradisi mengukir Mbitoro kini diakui sebagai warisan budaya adiluhung Suku Kamoro yang dihormati di seluruh dunia.",
                },
            ],
        },
    },
    {
        id: "cerita-keperkasaan-panglima-caadara",
        slug: "cerita-keperkasaan-panglima-caadara",
        title: "Cerita Keperkasaan Panglima Caadara",
        excerpt:
            "Kisah keahlian strategi perang dan keberanian luar biasa pemuda Caadara dari Merauke dalam menumpas serangan laskar musuh demi melindungi sukunya.",
        image: "/img/stories/caadara.jpeg",
        readTime: "7 menit",
        origin: "Kiman, Merauke (Papua Selatan)",
        href: "/cerita-rakyat/cerita-keperkasaan-panglima-caadara",
        accentColor: "#10B981",
        provinceId: "papua-selatan",
        content: {
            openingQuote:
                "Seorang pahlawan sejati tidak hanya bertempur dengan raga, melainkan memimpin dengan ketenangan dan taktik yang bijaksana.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Cerita Keperkasaan Panglima Caadara",
            videoDescription:
                "Kisah kepahlawanan Caadara dari Merauke yang melegenda dalam kebudayaan masyarakat Kiman Papua Selatan.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Putra Panglima Wire dari Kramuderu",
                },
                {
                    type: "paragraph",
                    text: "Di desa Kramuderu Merauke, hiduplah Panglima Wire dan putranya, Caadara. Sejak kecil Caadara dilatih ilmu bela diri dan strategi perang. Kelincahan dan ketangkasan Caadara tumbuh melebihi teman sebayanya hingga ia disegani di seluruh kampung.",
                },
                {
                    type: "heading",
                    text: "Ujian Perburuan & Ancaman Musuh",
                },
                {
                    type: "paragraph",
                    text: "Saat berburu di hutan bersama sepuluh temannya, Caadara mendapati penampakan anjing pemburu—sebuah firasat bahaya. Benar saja, lima puluh prajurit musuh datang menyergap. Dengan tenang, Caadara memimpin pasukannya membuat benteng pertahanan semak rimbun.",
                },
                {
                    type: "dialogue",
                    speaker: "Caadara",
                    text: "Tetaplah menjaga kewaspadaan! Buat benteng pertahanan agar kita dapat menangkis dan membalikkan serangan musuh!",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Taktik Perang Caadara Ura",
                },
                {
                    type: "paragraph",
                    text: "Menggunakan parang dan ketangkasan tanpa perisai, Caadara menumbangkan puluhan prajurit musuh hingga sisanya lari terpukul mundur. Kemenangan besar ini disambut pesta kehormatan di kampungnya, dan strategi perangnya kini diabadikan sebagai ilmu taktik 'Caadara Ura'.",
                },
            ],
        },
    },
    {
        id: "legenda-taraot-dan-ikan-gabus",
        slug: "legenda-taraot-dan-ikan-gabus",
        title: "Legenda Taraot dan Ikan Gabus",
        excerpt:
            "Kisah pembelajaran moral keturunan Nenek Yamsyaot di Merauke tentang pentingnya mematuhi nasihat orang tua dan memikul tanggung jawab.",
        image: "/img/stories/gabus.jpeg",
        readTime: "6 menit",
        origin: "Merauke (Papua Selatan)",
        href: "/cerita-rakyat/legenda-taraot-dan-ikan-gabus",
        accentColor: "#3B82F6",
        provinceId: "papua-selatan",
        content: {
            openingQuote:
                "Kepatuhan pada pesan leluhur adalah penuntun langkah, dan setiap perbuatan selalu membawa konsekuensi yang harus dipertanggungjawabkan.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Legenda Taraot dan Ikan Gabus",
            videoDescription:
                "Kisah fabel mitologi dan pembelajaran moral Nenek Yamsyaot dari Merauke, Papua Selatan.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Kolam Ikan Gabus Nenek Yamsyaot",
                },
                {
                    type: "paragraph",
                    text: "Di pedalaman Merauke, Nenek Yamsyaot merawat ketujuh cucunya dengan penuh kasih sayang. Nenek memiliki seekor ikan gabus ajaib di kolam sakral yang dipeliharanya dan tidak boleh diganggu oleh siapapun.",
                },
                {
                    type: "heading",
                    text: "Kesalahan Ker di Kolam Sakral",
                },
                {
                    type: "paragraph",
                    text: "Suatu hari, cucunya yang bernama Ker berburu di dekat kolam dan memanah ikan gabus tersebut karena lapar tanpa mengetahui larangan sang nenek. Perbuatan Ker membuat Nenek Yamsyaot sangat bersedih dan kecewa.",
                },
                {
                    type: "dialogue",
                    speaker: "Nenek Yamsyaot",
                    text: "Pesan dan larangan orang tua ada untuk melindungi kalian. Setiap pelanggaran akan membawa pelajaran berharga di alam liar.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Petualangan dan Pembelajaran Moral",
                },
                {
                    type: "paragraph",
                    text: "Akibat kejadian tersebut, Ker dan keenam saudaranya mengalami petualangan gaib di hutan belantara. Mereka belajar bertahan hidup, mematuhi nasihat leluhur, serta memahami pentingnya memikul tanggung jawab atas setiap perbuatan.",
                },
            ],
        },
    },
    {
        id: "batu-menangis-puncak-trikora",
        slug: "batu-menangis-puncak-trikora",
        title: "Batu Menangis Puncak Trikora",
        excerpt:
            "Legenda larangan mengotori tanah sakral Puncak Trikora Wamena dan keajaiban batu menangis yang menurunkan suhu di Lembah Baliem.",
        image: "/img/stories/trikora.jpeg",
        readTime: "7 menit",
        origin: "Wamena (Puncak Trikora)",
        href: "/cerita-rakyat/batu-menangis-puncak-trikora",
        accentColor: "#EC4899",
        provinceId: "papua-pegunungan",
        content: {
            openingQuote:
                "Pilihlah setiap langkah dan perbuatan dengan bijak, serta hormatilah kesucian aturan alam dan adat istiadat setempat.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Batu Menangis Puncak Trikora",
            videoDescription:
                "Legenda kisah batu menangis di kaki Puncak Trikora Wamena, Papua Pegunungan.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Persiapan Pesta Ewe Ako di Wamena",
                },
                {
                    type: "paragraph",
                    text: "Di sebuah desa dekat Danau Habema di bawah kaki Puncak Trikora Wamena, masyarakat Suku Hubula bersiap merayakan pesta adat babi lima tahunan bernama Ewe Ako. Sepasang kakak beradik ikut bertugas menjelajahi hutan untuk mengumpulkan sayur-sayuran.",
                },
                {
                    type: "heading",
                    text: "Pelanggaran di Kaki Puncak Trikora",
                },
                {
                    type: "paragraph",
                    text: "Ketika berada di kaki Gunung Trikora (Hirip Akup)—tempat sakral yang dilarang keras untuk dikotori—sang adik laki-laki yang sudah tak tahan buang hajat terpaksa melanggar larangan tersebut dan menyeka dirinya di susunan batu sakral.",
                },
                {
                    type: "dialogue",
                    speaker: "Sang Kakak",
                    text: "Tahanlah wahai adikku, tempat ini sangat sakral bagi arwah nenek moyang kita.",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Menjadi Satu dengan Alam",
                },
                {
                    type: "paragraph",
                    text: "Seketika tubuh sang adik menyatu kaku dengan batu tersebut dan tak dapat dibebaskan. Sang kakak hanya bisa memeluknya dengan pilu. Konon hingga kini, saat roh anak tersebut merasa dingin dan menangis di kaki Puncak Trikora, suhu udara di seantero Wamena akan mendadak turun drastis diiringi hujan gerimis.",
                },
            ],
        },
    },
    {
        id: "pupa-dan-narinare-lembah-baliem",
        slug: "pupa-dan-narinare-lembah-baliem",
        title: "Pupa dan Narinare dari Lembah Baliem",
        excerpt:
            "Kisah persahabatan Pupa dan Narinare, penemuan Kali Baliem, dan awal mula tradisi bakar batu (Barapen) perdamaian di Wamena.",
        image: "/img/stories/pupa-narinare.jpeg",
        readTime: "8 menit",
        origin: "Lembah Baliem (Suku Hubula)",
        href: "/cerita-rakyat/pupa-dan-narinare-lembah-baliem",
        accentColor: "#F59E0B",
        provinceId: "papua-pegunungan",
        content: {
            openingQuote:
                "Perbedaan pendapat dan perselisihan sejatinya dapat diselesaikan dengan musyawarah adat dan persaudaraan yang sejati.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Pupa dan Narinare dari Lembah Baliem",
            videoDescription:
                "Kisah penemuan Kali Baliem oleh Pupa dan asal usul tradisi pesta Barapen perdamaian.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Dua Sahabat Pengembara Rimba",
                },
                {
                    type: "paragraph",
                    text: "Di hutan belantara Lembah Baliem, hiduplah dua orang sahabat bernama Pupa dan Narinare. Mereka mengolah kebun dan berburu bersama untuk mencukupi kebutuhan sehari-hari.",
                },
                {
                    type: "heading",
                    text: "Penemuan Sungai Agung Baliem",
                },
                {
                    type: "paragraph",
                    text: "Suatu ketika saat berburu babi hutan hingga jauh ke pedalaman bukit terjal, Pupa menemukan sebuah sungai yang sangat besar berkilau dengan air dingin melimpah—yang kelak dikenal sebagai Kali Baliem.",
                },
                {
                    type: "dialogue",
                    speaker: "Narinare",
                    text: "Sobat, sungai agung itu berada di tanah warisan leluhur keluargaku!",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Pesta Perdamaian Barapen",
                },
                {
                    type: "paragraph",
                    text: "Perselisihan klaim kepemilikan sungai meluas hingga memicu ketegangan antar suku. Kepala-kepala suku akhirnya berunding dan memutuskan menyerahkan Kali Baliem kepada Pupa, yang dirayakan dengan pesta adat Bakar Batu (Barapen) besar-besaran sebagai lambang persatuan abadi.",
                },
            ],
        },
    },
    {
        id: "asal-muasal-nama-wamena",
        slug: "asal-muasal-nama-wamena",
        title: "Asal Muasal Nama Wamena",
        excerpt:
            "Legenda kesalahpahaman gadis Ahumpua dan penjelajah Ap Huluan mengenai anak babi (Wamena) yang diabadikan menjadi nama kota Wamena.",
        image: "/img/stories/wamena.jpeg",
        readTime: "6 menit",
        origin: "Wamena (Ahumpua)",
        href: "/cerita-rakyat/asal-muasal-nama-wamena",
        accentColor: "#10B981",
        provinceId: "papua-pegunungan",
        content: {
            openingQuote:
                "Sebuah nama yang lahir dari kepolosan dan pertemuan dua budaya dapat mengukir sejarah panjang bagi suatu wilayah.",
            youtubeId: "dQw4w9WgXcQ",
            videoTitle: "Asal Muasal Nama Wamena",
            videoDescription:
                "Kisah sejarah dan asal-usul penamaan Kota Wamena di Lembah Baliem Papua Pegunungan.",
            paragraphs: [
                {
                    type: "heading",
                    text: "Gadis-Gadis Ahumpua di Kali Baliem",
                },
                {
                    type: "paragraph",
                    text: "Dahulu kala kawasan kota Wamena bernama Ahumpua. Setiap hari anak-anak gadis bertugas menggembala anak babi di tepi Kali Baliem sebelum mandi bersama.",
                },
                {
                    type: "heading",
                    text: "Pertemuan dengan Ap Huluan",
                },
                {
                    type: "paragraph",
                    text: "Suatu hari, datanglah seorang penjelajah berkulit putih (Ap Huluan). Ketika penjelajah tersebut bertanya dengan bahasa isyarat mengenai nama tempat itu, seorang gadis pemberi petunjuk mengira Ap Huluan menanyakan anak babi di sampingnya.",
                },
                {
                    type: "dialogue",
                    speaker: "Gadis Ahumpua",
                    text: "Tu Wamena! (Itu anak babi!)",
                },
                { type: "divider" },
                {
                    type: "heading",
                    text: "Lahirnya Kota Wamena",
                },
                {
                    type: "paragraph",
                    text: "Ap Huluan mencatat nama wilayah tersebut sebagai 'Wamena'. Sejak kedatangan masyarakat luas dan berkembangnya pemukiman di Ahumpua, nama Wamena secara resmi diabadikan sebagai nama kota legendaris di jantung Lembah Baliem Papua Pegunungan.",
                },
            ],
        },
    },
];

export function getStoryBySlug(slug: string): Story | undefined {
    return STORIES.find((s) => s.slug === slug);
}

