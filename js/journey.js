const dataHidangan = {
    sumatra: {
        appetizer: [
            {
                nama: "Pempek",
                asal: "Palembang, Sumatera Selatan",
                deskripsi: "Olahan ikan tenggiri dan tepung sagu yang digoreng, disajikan dengan kuah cuko asam-manis-pedas.",
                faktaUnik: "Konon pempek lahir dari ide seorang penjual ikan keliling di abad ke-16 yang terinspirasi oleh masyarakat Tionghoa Palembang — namanya pun berasal dari panggilan 'apek' untuk pedagang Tionghoa tua.",
                bahan: "Ikan tenggiri, tepung sagu, air, garam, telur. Kuah cuko: cuka, gula merah, cabai, bawang putih.",
                foto: "assets/img/pempek.jpeg"
            },
            {
                nama: "Martabak Kubang",
                asal: "Sumatera Barat",
                deskripsi: "Martabak Kubang adalah martabak khas Sumatera Barat yang berasal dari desa Kubang di Kota Payakumbuh. Terbuat dari adonan tepung yang diisi dengan telur, daun bawang, garam, merica, serta potongan daging sapi. ",
                faktaUnik: "Martabak Kubang berbeda dengan martabak lain karena bumbu dan bahannya yang sangat tradisional.",
                bahan: "Tepung terigu, Telur, Daging Sapi Cincang, Daun bawang, Kuah Kari.",
                foto: "assets/img/martabak-kubang.jpeg"
            }
        ],
        mainCourse: [
            {
                nama: "Rendang",
                asal: "Sumatera Barat (Minangkabau)",
                deskripsi: "Daging sapi dimasak perlahan berjam-jam dengan santan dan lebih dari 40 bumbu rempah hingga kuah mengering dan bumbu meresap sempurna.",
                faktaUnik: "Teknik memasak rendang sengaja mengeringkan kuah karena dulunya berfungsi sebagai bekal perjalanan jauh — rendang kering bisa tahan berminggu-minggu tanpa kulkas.",
                bahan: "Daging sapi, santan kental, cabai merah, serai, lengkuas, kunyit, jahe, bawang.",
                foto: "assets/img/rendang.jpeg"
            },
            {
                nama: "Mie Aceh",
                asal: "Aceh",
                deskripsi: "Mie tebal dengan kuah kari rempah yang kaya, disajikan dengan pilihan daging sapi, kambing, atau seafood.",
                faktaUnik: "Mie Aceh mencerminkan pengaruh perdagangan Arab, India, dan Tionghoa yang masuk melalui pelabuhan Aceh berabad-abad lalu.",
                bahan: "Mie tebal, cabai, kunyit, jintan, kapulaga, serai, protein pilihan, emping.",
                foto: "assets/img/mie-aceh.jpeg"
            }
        ],
        dessert: [
            {
                nama: "Lempok Durian",
                asal: "Jambi",
                deskripsi: "Lempok Durian adalah olahan buah durian khas Jambi yang dimasak lama dengan gula aren hingga mengental dan berwarna cokelat kehitaman.",
                faktaUnik: "Lempok Durian memiliki daya tahan yang cukup lama, menjadikannya pilihan oleh-oleh yang praktis bagi wisatawan.",
                bahan: "Daging Buah Durian, Gula Aren, Garam.",
                foto: "assets/img/lempok-durian.jpeg"
            },
            {
                nama: "Benjak Enjak",
                asal: "Lampung",
                deskripsi: "Benjak-enjak adalah kue tradisional khas Lampung yang terbuat dari campuran beras ketan putih, santan, pisang (biasanya pisang ambon atau pisang raja) yang dihaluskan, dan garam.",
                faktaUnik: "Benjak-enjak merupakan salah satu warisan kuliner Lampung yang hingga kini masih lestari. ",
                bahan: "Beras Ketan Putih, Santan Kelapa, Pisang, Garam",
                foto: "assets/img/benjak-enjak.jpeg"
            }
        ]
    },
    
    jawa: {
        appetizer: [
            {
                nama: "Lumpia Semarang",
                asal: "Semarang, Jawa Tengah",
                deskripsi: "Kulit lumpia tipis berisi rebung, telur, dan ayam atau udang, ditemani saus coklat kental manis-gurih.",
                faktaUnik: "Lumpia Semarang lahir dari kisah cinta antara Tjoa Thay Joe (pedagang Tionghoa) dan Wasih (perempuan Jawa) di abad ke-19.",
                bahan: "Kulit lumpia, rebung, ayam suwir, telur, saus tiram.",
                foto: "assets/img/lumpia.jpg"
            },
            {
                nama: "Tempe Mendoan",
                asal: "Banyumas, Jawa Tengah",
                deskripsi: "Tempe iris tipis dibalut tepung berbumbu daun bawang, digoreng setengah matang — teksturnya lembek di dalam, sedikit renyah di luar.",
                faktaUnik: "Tempe mendoan Banyumas sudah mendapat pengakuan sebagai Warisan Budaya Takbenda Indonesia (2021).",
                bahan: "Tempe, tepung, daun bawang, ketumbar, kunyit, garam.",
                foto: "assets/img/tempe-mendoan.jpg"
            }
        ],
        mainCourse: [
            {
                nama: "Gudeg",
                asal: "Yogyakarta, Jawa Tengah",
                deskripsi: "Nangka muda dimasak berjam-jam dengan santan dan gula merah hingga berwarna coklat manis.",
                faktaUnik: "Gudeg Yogya berbeda dari gudeg Solo — versi Yogya lebih kering dan lebih manis, sedangkan versi Solo lebih basah.",
                bahan: "Nangka muda, santan, gula merah, daun salam, serai, lengkuas.",
                foto: "assets/img/gudeg-surabaya.jpeg"
            },
            {
                nama: "Rawon",
                asal: "Surabaya, Jawa Timur",
                deskripsi: "Sup daging sapi berkuah hitam pekat yang warnanya berasal dari kluwek.",
                faktaUnik: "Kluwek mengandung sianida dalam kondisi mentah. Masyarakat Jawa secara turun-temurun menemukan cara menetralkannya dengan fermentasi.",
                bahan: "Daging sapi, kluwek, bawang, ketumbar, lengkuas, serai.",
                foto: "assets/img/rawon-surabaya.jpg"
            }
        ],
        dessert: [
            {
                nama: "Klepon",
                asal: "Jawa Tengah & Yogyakarta",
                deskripsi: "Bola-bola hijau kenyal dari tepung ketan berisi gula merah cair, dibalut kelapa parut.",
                faktaUnik: "Klepon viral di media sosial pada 2020 setelah sebuah video kontroversial tentang 'klepon tidak Islami' justru membuatnya semakin terkenal di seluruh dunia.",
                bahan: "Tepung ketan, air pandan, gula merah, kelapa parut.",
                foto: "assets/img/klepon.jpg"
            },
            {
                nama: "Es Dawet Ayu",
                asal: "Banjarnegara, Jawa Tengah",
                deskripsi: "Minuman sekaligus dessert berisi cendol hijau kenyal, santan segar, gula merah cair, dan es batu.",
                faktaUnik: "Ada tradisi unik di Banjarnegara — pengantin pria harus berjualan dawet sebelum akad nikah, sementara pengantin wanita menjadi kasirnya.",
                bahan: "Tepung beras, air pandan, santan, gula merah, es batu.",
                foto: "assets/img/dawet-ayu.jpg"
            }
        ]
    },
    
    kalimantan: {
        appetizer: [
            {
                nama: "Chai Kue",
                asal: "Pontianak, Kalimantan Barat",
                deskripsi: "Kulit tipis dari tepung beras berisi tumisan lobak dan ebi, dikukus lalu disiram minyak bawang putih.",
                faktaUnik: "Chai kue lahir dari komunitas Tionghoa Hakka yang menetap di Pontianak sejak abad ke-18.",
                bahan: "Tepung beras, lobak, ebi, bawang putih, sambal cabai.",
                foto: "assets/img/choipan.jpg"
            },
            {
                nama: "Pekasam atau Ikan Samu",
                asal: "Kalimantan Selatan",
                deskripsi: "Hidangan berbahan dasar ikan sungai kecil yang difermentasi. Ikan ini memiliki cita rasa asam-gurih yang tajam dengan tekstur daging yang lunak namun tetap padat.",
                faktaUnik: "Lahir dari tradisi masyarakat suku Banjar, kuliner ini mencerminkan filosofi kesabaran dalam pengawetan dan rasa syukur atas kelimpahan sungai.",
                bahan: "Ikan, Garam, Beras Sangrai",
                foto: "assets/img/pekasam.jpeg"
            }
        ],
        mainCourse: [
            {
                nama: "Daging Masak Habang",
                asal: "Kalimantan Selatan",
                deskripsi: "Hidangan olahan daging sapi dengan siraman bumbu merah kental yang sangat pekat dan ikonik.",
                faktaUnik: "Masak Habang memuat filosofi kemewahan rempah dalam balutan warna merah yang bersahaja.",
                bahan: "Daging Sapi, Cabai,Bawang Merah dan Putih, Jahe, Gula Merah, Kayu Manis",
                foto: "assets/img/ayam-habang.jpeg"
            },
            {
                nama: "Soto Banjar",
                asal: "Kalimantan Selatan",
                deskripsi: "Soto khas suku Banjar yang sangat ikonik dengan kuah yang kaya rempah dan cenderung sedikit keruh karena penggunaan susu cair atau etek kental/telur bebek di dalam kuahnya.",
                faktaUnik: "Soto Banjar mencerminkan akulturasi budaya yang kaya di sepanjang pelabuhan dagang Kalimantan Selatan, memadukan pengaruh rempah khas Timur Tengah dan Tionghoa (soun). ",
                bahan: "Ayam, Kayu Manis, Cengkih, Kapulaga, Ketupat, Soun, Perkedel Kentang.",
                foto: "assets/img/soto-banjar.jpeg"
            }
        ],
        dessert: [
            {
                nama: "Sorbet Durian",
                asal: "Kalimantan Timur",
                deskripsi: "Sajian pencuci mulut mendinginkan yang menonjolkan kemurnian rasa dari buah durian hutan asli Kalimantan.",
                faktaUnik: "Menyimpan filosofi kesabaran waktu yang bertemu dengan kesegaran modern. ",
                bahan: "Daging Durian, Air, Gula Pasir, Jeruk Nipis",
                foto: "assets/img/sorbet-durian.jpeg"
            },
            {
                nama: "Bingke",
                asal: "Kalimantan Barat",
                deskripsi: "Kue tradisional Banjar dari tepung beras dan santan berlapis, disiram kuah santan kental.",
                faktaUnik: "Kue Bingke merupakan kudapan legendaris dari Pontianak yang sangat melekat dengan budaya Melayu.",
                bahan: "Tepung terigu, Telur, Santan, Daun Pandan",
                foto: "assets/img/bingke.jpeg"
            }
        ]
    },
    
    sulawesi: {
        appetizer: [
            {
                nama: "Lalampa",
                asal: "Sulawesi Selatan",
                deskripsi: "Hidangan pembuka gurih yang terbuat dari beras ketan dengan isian ikan tongkol atau cakalang suwir yang dibumbui pedas.",
                faktaUnik: "Meskipun sekilas penampilannya mirip dengan lemper khas Jawa, Lalampa memiliki karakteristik rasa yang jauh lebih tajam, gurih, dan pedas.",
                bahan: "Beras Ketan, Ikan, Daun Pisang.",
                foto: "assets/img/lalampa-.jpeg"
            },
            {
                nama: "Jalangkote",
                asal: "Sulawesi Selatan",
                deskripsi: "Kudapan pastri goreng legendaris khas Makassar yang diisi dengan campuran potongan wortel, kentang, tauge, soun, serta potongan telur rebus.",
                faktaUnik: "Banyak orang kerap keliru menyamakan Jalangkote dengan kue pastel Jawa. Perbedaan mendasarnya terletak pada ketebalan kulitnya yang jauh lebih tipis dan cara penyajiannya.",
                bahan: "Tepung Terigu, Wortel dan Kentang, Tauge, dan Soun.",
                foto: "assets/img/jalangkote.jpeg"
            }
        ],
        mainCourse: [
            {
                nama: "Coto Makassar",
                asal: "Sulawesi Selatan",
                deskripsi: "Sup daging dan jeroan sapi yang dimasak dengan 40 jenis bumbu lokal, kuahnya gurih dan pekat dari kacang tanah sangrai.",
                faktaUnik: "Coto Makassar sudah ada sejak abad ke-16 sebagai hidangan istana Kerajaan Gowa.",
                bahan: "Daging sapi, jeroan, kacang tanah sangrai, ketumbar, jintan, kemiri.",
                foto: "assets/img/coto-makassar.jpeg"
            },
            {
                nama: "Ayam dalam Buluh",
                asal: "Sulawesi Utara",
                deskripsi: "Hidangan kuliner khas masyarakat Minahasa berupa potongan daging ayam yang dibumbui secara masif dengan aneka rempah aromatik segar",
                faktaUnik: "Teknik memasak ini memanfaatkan kelembapan dan uap internal dari dinding bambu hijau segar, mirip dengan filosofi memasak Ikan Pansuh di pedalaman Kalimantan.",
                bahan: "Daging Ayam, Ruas Bambu, Daun Singkong",
                foto: "assets/img/ayam-dalam-buluh.jpeg"
            }
        ],
        dessert: [
            {
                nama: "Es Pisang Ijo",
                asal: "Sulawesi Selatan",
                deskripsi: "Sajian pencuci mulut mendinginkan yang terdiri dari pisang raja matang dibalut adonan tepung kenyal berwarna hijau alami dari perasan daun suji.",
                faktaUnik: "Bagi masyarakat Bugis-Makassar, balutan warna hijau pada pisang secara tradisional melambangkan kesuburan, kemakmuran, dan kedamaian hati. ",
                bahan: "Pisang, santan, telur, Tepung Beras, Sirup Khas Sulawesi.",
                foto: "assets/img/es-pisang-ijo.jpeg"
            },
            {
                nama: "Klappertart",
                asal: "Sulawesi Utara",
                deskripsi: "Kue penutup (tart) bertekstur sangat lembut, creamy, dan lumer di mulut (soft custard) yang dipadukan dengan tekstur kenyal dari serutan daging kelapa muda. ",
                faktaUnik: "Klappertart merupakan produk akulturasi budaya yang sangat kental antara tradisi kuliner lokal Manado dengan pengaruh kuliner era kolonial Belanda di masa lampau.",
                bahan: "Daging Kelapa Muda, Susu, Tepung terigu, Kuning telur",
                foto: "assets/img/klappertart.jpeg"
            }
        ]
    },
    
    "bali-ntt": {
        appetizer: [
            {
                nama: "Sate Lilit",
                asal: "Bali",
                deskripsi: "Daging ikan atau ayam cincang dicampur parutan kelapa dan bumbu Bali, dililitkan pada batang serai lalu dibakar.",
                faktaUnik: "'Melilit' melambangkan persatuan dan keterikatan komunitas dalam budaya Bali.",
                bahan: "Ikan/ayam cincang, kelapa parut, bumbu Bali, batang serai.",
                foto: "assets/img/sate-lilit.jpeg"
            },
            {
                nama: "Catemak Jagung",
                asal: "NTT",
                deskripsi: "Catemak Jagung adalah sup jagung khas Nusa Tenggara Timur yang dibuat dari jagung muda pipil, kacang tanah, kacang hijau, dan potongan labu.",
                faktaUnik: "Masyarakat NTT sering menjadikan Catemak sebagai menu sarapan atau hidangan pembuka yang mengenyangkan.",
                bahan: "Jagung Muda, Kacang Tanah, Kacang Hijau, Labu, Bawang Merah, Bawang Putih",
                foto: "assets/img/cetemak-jagung.jpeg"
            }
        ],
        mainCourse: [
            {
                nama: "Ayam Betutu",
                asal: "Bali",
                deskripsi: "Ayam utuh diisi dan dilumuri bumbu Base Genep khas Bali, dibungkus daun pisang lalu dipanggang berjam-jam.",
                faktaUnik: "Dalam proses memasak tradisional, ayam betutu dikubur dalam sekam padi yang membara selama 8–12 jam.",
                bahan: "Ayam, 11 bumbu Bali (cabe, bawang, kunyit, jahe, lengkuas, serai, terasi, kemiri), daun pisang.",
                foto: "assets/img/ayam-betutu.jpeg"
            },
            {
                nama: "Ayam Taliwang",
                asal: "Lombok, Nusa Tenggara Barat",
                deskripsi: "Ayam kampung muda yang dibakar dengan bumbu pedas khas Lombok — cabai merah, bawang, terasi, dan rempah.",
                faktaUnik: "Nama 'Taliwang' berasal dari kampung Karang Taliwang di Mataram. Resep aslinya menggunakan ayam yang belum bertelur berumur 3–4 bulan.",
                bahan: "Ayam kampung, cabai merah, bawang, terasi, kencur, tomat, gula.",
                foto: "assets/img/ayam-taliwang.jpg"
            }
        ],
        dessert: [
            {
                nama: "Jeje Batun Badil",
                asal: "Bali",
                deskripsi: "Jaja Batun Bedil adalah kue tradisional Bali yang terbuat dari tepung beras ketan, berbentuk bulatan-bulatan kecil seperti batu atau peluru (dalam bahasa Bali, batun bedil berarti batu peluru).",
                faktaUnik: "Nama Batun Bedil secara harfiah berarti batu peluru, merujuk pada bentuk bulatan-bulatannya yang mirip peluru atau batu kecil. ",
                bahan: "Tepung beras, Tepung Tapioka, Air, kelapa parut, gula aren.",
                foto: "assets/img/jeje-batun-badil.jpeg"
            },
            {
                nama: "Karake",
                asal: "NTB",
                deskripsi: "Kue Karake adalah kue tradisional khas NTB yang terbuat dari tepung ketan dengan tekstur kenyal manis, mirip dengan jenang atau dodol.",
                faktaUnik: "Bentuk kue Karake yang memiliki tiga tonjolan ini jarang ditemukan pada kue pada umumnya, menjadikannya salah satu kue tradisional dengan bentuk paling unik di Indonesia.",
                bahan: "Tepung Ketan, Santan Kelapa, Gula Pasir, Garam, Vanili, Kulit Jagung",
                foto: "assets/img/kue-karake.jpeg"
            }
        ]
    },
    
    "maluku-papua": {
        appetizer: [
            {
                nama: "Lalampa",
                asal: "Sulawesi Utara / Maluku",
                deskripsi: "Mirip lemper Jawa, tapi isinya ikan cakalang berbumbu rempah, dibungkus daun pisang lalu dibakar.",
                faktaUnik: "Yang membedakannya dari lemper: dibakar langsung di atas bara api, sehingga aroma asap dan daun pisang meresap ke dalam ketan.",
                bahan: "Ketan, cakalang suwir, cabai, bawang, serai, daun pisang.",
                foto: "assets/img/lalampa.jpeg"
            },
            {
                nama: "Kohu-Kohu",
                asal: "Ambon, Maluku",
                deskripsi: "Salad tradisional Maluku dari kacang panjang, tauge, mentimun, kemangi, kelapa parut, dan ikan cakalang suwir.",
                faktaUnik: "Di Ambon, hidangan ini adalah menu sarapan wajib — memakannya dipercaya memberi tenaga untuk bekerja seharian.",
                bahan: "Kacang panjang, tauge, timun, kemangi, kelapa parut, cakalang, jeruk nipis.",
                foto: "assets/img/kohu-kohu.jpeg"
            }
        ],
        mainCourse: [
            {
                nama: "Papeda + Ikan Kuah Kuning",
                asal: "Maluku & Papua",
                deskripsi: "Bubur sagu bertekstur kenyal-lengket yang disajikan dengan kuah ikan berbumbu kunyit dan serai.",
                faktaUnik: "Papeda tidak dikunyah — melainkan ditelan langsung. Makan papeda bersama keluarga adalah ritual sosial yang sakral di Papua.",
                bahan: "Tepung sagu, ikan, kunyit, serai, bawang, jahe, asam.",
                foto: "assets/img/papeda-ikan-kuah-kuning.jpg"
            },
            {
                nama: "Ikan Kuah Pala Banda",
                asal: "Kepulauan Banda, Maluku Tengah",
                deskripsi: "Ikan kakap dimasak dalam kuah rempah pala yang segar-pedas khas Kepulauan Banda.",
                faktaUnik: "Dulu hidangan ini hanya disajikan untuk pejabat VOC Belanda — karena pala Banda adalah rempah paling mahal di dunia pada abad ke-17.",
                bahan: "Ikan kakap, buah pala muda, bawang, cabai, kunyit, serai, asam jawa.",
                foto: "assets/img/ikan-kuah-pala-banda.jpg"
            }
        ],
        dessert: [
            {
                nama: "Manisan Pala",
                asal: "Kepulauan Banda, Maluku",
                deskripsi: "Daging buah pala diiris tipis, diproses dengan gula hingga menjadi manisan kering bertabur gula pasir.",
                faktaUnik: "Manisan pala adalah cara masyarakat Banda memanfaatkan seluruh bagian buah pala yang berharga, termasuk dagingnya yang biasanya dibuang.",
                bahan: "Buah pala, gula pasir, air garam, air kapur sirih.",
                foto: "assets/img/panisan-pala.jpg"
            },
            {
                nama: "Bubur Sagu Mutiara",
                asal: "Ambon, Maluku",
                deskripsi: "Sagu mutiara berwarna-warni dimasak dengan santan, kayu manis, daun pandan, dan gula merah.",
                faktaUnik: "Bubur ne adalah makanan yang selalu muncul dalam perayaan Islam dan budaya lokal Maluku secara bersamaan.",
                bahan: "Sagu mutiara, santan, gula merah, kayu manis, pandan.",
                foto: "assets/img/bubur-ne.jpg"
            }
        ]
    }
};

// State modal
let modalWilayah = '';
let modalCourse = 'appetizer';
let modalIndex = 0;

// Buka modal
function bukaModal(wilayah) {
    modalWilayah = wilayah;
    modalCourse = 'appetizer';
    modalIndex = 0;
    updateModal();
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Tutup modal
function tutupModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Update isi modal
function updateModal() {
    const hidangan = dataHidangan[modalWilayah][modalCourse][modalIndex];
    const namaWilayah = {
        'sumatra': 'Sumatra',
        'jawa': 'Jawa',
        'kalimantan': 'Kalimantan',
        'sulawesi': 'Sulawesi',
        'bali-ntt': 'Bali & Nusa Tenggara',
        'maluku-papua': 'Maluku & Papua'
    };

    document.getElementById('modal-wilayah').textContent = namaWilayah[modalWilayah];
    document.getElementById('modal-nama').textContent = hidangan.nama;
    document.getElementById('modal-asal').textContent = hidangan.asal;
    document.getElementById('modal-deskripsi').textContent = hidangan.deskripsi;
    document.getElementById('modal-fakta').textContent = hidangan.faktaUnik;
    document.getElementById('modal-bahan').textContent = hidangan.bahan;
    document.getElementById('modal-foto').src = hidangan.foto;
    document.getElementById('modal-foto').alt = hidangan.nama;

    document.querySelectorAll('.course-tab').forEach((tab, i) => {
        tab.classList.remove('active');
        if (i === ['appetizer', 'mainCourse', 'dessert'].indexOf(modalCourse)) {
        tab.classList.add('active');
        }
    });
}

// Navigasi hidangan
function prevHidangan() {
    const total = dataHidangan[modalWilayah][modalCourse].length;
    modalIndex = (modalIndex - 1 + total) % total;
    updateModal();
}

function nextHidangan() {
    const total = dataHidangan[modalWilayah][modalCourse].length;
    modalIndex = (modalIndex + 1) % total;
    updateModal();
}

// Ganti course
function setCourse(course) {
    modalCourse = course;
    modalIndex = 0;
    updateModal();
}

// Tambahkan hidangan ke journey
function tambahkanHidangan() {
    const hidangan = dataHidangan[modalWilayah][modalCourse][modalIndex];
    const courseKey = modalCourse === 'appetizer' ? 'appetizer' 
                    : modalCourse === 'mainCourse' ? 'main' 
                    : 'dessert';
    localStorage.setItem(`slot-${courseKey}`, JSON.stringify({
        nama: hidangan.nama,
        wilayah: modalWilayah,
        foto: hidangan.foto
    }));
    
    updateJourneyBar();
    tutupModal();
    
    cekSelesai();
}

// Update journey bar dari localStorage
function updateJourneyBar() {
    const courses = ['appetizer', 'main', 'dessert'];
    courses.forEach(course => {
        const data = localStorage.getItem(`slot-${course}`);
        const slot = document.getElementById(`slot-${course}`);
        if (data && slot) {
        const parsed = JSON.parse(data);
        slot.querySelector('.jb-food').textContent = parsed.nama;
        slot.classList.add('filled');
        }
    });
}

// Cek apakah semua slot terisi → redirect ke summary
function cekSelesai() {
    const appetizer = localStorage.getItem('slot-appetizer');
    const main = localStorage.getItem('slot-main');
    const dessert = localStorage.getItem('slot-dessert');
    if (appetizer && main && dessert) {
        setTimeout(() => {
            window.location.href = 'summary.html';
        }, 800);
    }
}

document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) tutupModal();
});

updateJourneyBar();

const ProvinsiKeWilayah = {
    //Sumatra
    'IDAC': 'sumatra', // Aceh
    'IDSU': 'sumatra', // Sumatra Utara
    'IDSB': 'sumatra', // Sumatra Barat
    'IDRI': 'sumatra', // Riau
    'IDKR': 'sumatra', // Kepulauan Riau
    'IDJA': 'sumatra', // Jambi
    'IDSS': 'sumatra', // Sumatra Selatan
    'IDBB': 'sumatra', // Bangka Belitung
    'IDBE': 'sumatra', // Bengkulu
    'IDLA': 'sumatra', // Lampung

    // JAWA
    'IDBT': 'jawa', // Banten
    'IDJK': 'jawa', // DKI Jakarta
    'IDJB': 'jawa', // Jawa Barat
    'IDJT': 'jawa', // Jawa Tengah
    'IDYO': 'jawa', // DI Yogyakarta
    'IDJI': 'jawa', // Jawa Timur

    // KALIMANTAN
    'IDKB': 'kalimantan', // Kalimantan Barat
    'IDKT': 'kalimantan', // Kalimantan Tengah
    'IDKS': 'kalimantan', // Kalimantan Selatan
    'IDKI': 'kalimantan', // Kalimantan Timur
    'IDKU': 'kalimantan', // Kalimantan Utara

    // SULAWESI
    'IDSA': 'sulawesi', // Sulawesi Utara
    'IDGO': 'sulawesi', // Gorontalo
    'IDST': 'sulawesi', // Sulawesi Tengah
    'IDSR': 'sulawesi', // Sulawesi Barat
    'IDSN': 'sulawesi', // Sulawesi Selatan
    'IDSG': 'sulawesi', // Sulawesi Tenggara

    // BALI & NUSA TENGGARA
    'IDBA': 'bali-ntt', // Bali
    'IDNB': 'bali-ntt', // Nusa Tenggara Barat
    'IDNT': 'bali-ntt', // Nusa Tenggara Timur

    // MALUKU & PAPUA
    'IDMA': 'maluku-papua', // Maluku
    'IDMU': 'maluku-papua', // Maluku Utara
    'IDPA': 'maluku-papua', // Papua
    'IDPB': 'maluku-papua', // Papua Barat
};

document.querySelectorAll('#peta-container svg path').forEach(path => {
    const id = path.getAttribute('id');
    if (!id || id.startsWith('label')) return;

    path.addEventListener('click', function() {
        const wilayah = ProvinsiKeWilayah[id];
        if (wilayah) {
            bukaModal(wilayah);
        }
    });

    path.addEventListener('mouseenter', function() {
        const wilayah = ProvinsiKeWilayah[id];
        if (wilayah) {
        this.setAttribute('title', wilayah.toUpperCase());
        }
    });

    path.addEventListener('mouseenter', function() {
    this.style.fill = '#E6A817';
    this.style.opacity = '1';
    });

    path.addEventListener('mouseleave', function() {
    this.style.fill = '#C96A2B';
    this.style.opacity = '0.6';
    });
});

