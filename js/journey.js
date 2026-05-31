//Mapping provinsi ke wilayah
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
});

function bukaModal(wilayah) {
    console.log('Klik wilayah : ', wilayah);
}

