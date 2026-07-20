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
            "Kisah Towjatuwa dan buaya sakti Watuwe dari Sungai Tami, Jayapura, yang mengajarkan balasan kebaikan dan kehormatan pada janji leluhur.",
        image: "/img/stories/1.png",
        readTime: "7 menit",
        origin: "Jayapura",
        href: "/cerita-rakyat/towjatuwa-buaya-sakti",
        accentColor: "#6EE7B7",
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
        image: "/img/stories/3.png",
        readTime: "8 menit",
        origin: "Fakfak",
        href: "/cerita-rakyat/asal-mula-burung-cendrawasih",
        accentColor: "#F59E0B",
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
];

export function getStoryBySlug(slug: string): Story | undefined {
    return STORIES.find((s) => s.slug === slug);
}
