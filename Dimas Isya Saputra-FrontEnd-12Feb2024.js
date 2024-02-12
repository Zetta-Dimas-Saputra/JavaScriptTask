const hitungPembayaranBulanan = (totalHarga, totalDurasi, jumlahDibeli) => {
  const pembayaranPerBulan = totalHarga / totalDurasi;
  const pembayaranBulanan = Array.from({ length: totalDurasi }, (_, i) => {
    const tanggalJatuhTempo = new Date();
    tanggalJatuhTempo.setMonth(tanggalJatuhTempo.getMonth() + i + 1);
    const pembayaranSaatIni = Math.min(pembayaranPerBulan, totalHarga);
    totalHarga -= pembayaranSaatIni;

    return {
      tanggalJatuhTempo: tanggalJatuhTempo.toLocaleDateString(),
      jumlah: `Rp ${pembayaranSaatIni.toFixed(2) * jumlahDibeli}`,
    };
  });

  return pembayaranBulanan;
};

function beliBuku(
  detailBuku,
  persentaseDiskon,
  persentasePajak,
  totalDurasi,
  jumlahDibeli
) {
  const TARIF_PAJAK = 0.01;
  const { harga } = detailBuku;

  const hargaTotal =
    harga *
    (1 - persentaseDiskon / 100) *
    (1 + (persentasePajak / 100 + TARIF_PAJAK));

  return hitungPembayaranBulanan(hargaTotal, totalDurasi, jumlahDibeli);
}

function beliBukuWithStock(
  detailBuku,
  persentaseDiskon,
  persentasePajak,
  stok,
  jumlahDibeli,
  totalDurasi
) {
  const TARIF_PAJAK = 0.01;
  const jadwalPembayaran = beliBuku(
    detailBuku,
    persentaseDiskon,
    persentasePajak,
    totalDurasi,
    jumlahDibeli
  );
  const hargaTotal =
    detailBuku.harga *
    (1 - persentaseDiskon / 100) *
    (1 + (persentasePajak / 100 + TARIF_PAJAK));
  const totalBiaya = hargaTotal * jumlahDibeli;

  if (stok < jumlahDibeli) {
    console.log(`Stok tidak mencukupi untuk membeli ${jumlahDibeli} buku.`);
    return;
  }

  console.log('Data Pembelian Buku:');
  console.log(`Jumlah yang dibeli: ${jumlahDibeli} buku`);
  console.log(`Total biaya: Rp ${totalBiaya.toFixed(2)}`);

  const sisaStok = stok - jumlahDibeli;

  if (sisaStok > 0) {
    console.log(`Sisa stok: ${sisaStok} buku`);
  } else if (sisaStok === 0) {
    console.log('Barang yang dibeli sudah maksimal dan tidak dapat tambah lagi');
  } else {
    console.log('Stok habis! Tidak bisa membeli lebih banyak buku.');
  }
  

  console.log('Jadwal Pembayaran:');
  console.log(jadwalPembayaran);
}

const detailBuku = {
  judul: 'Dilan 1990',
  pengarang: 'Pidi Baiq',
  harga: 20000.0,
};

const persentaseDiskon = 10;
const persentasePajak = 35;
const stokBuku = 15;
const jumlahDibeli = 17;
const totalDurasi = 6; // Jangka waktu kredit dalam bulan

beliBukuWithStock(
  detailBuku,
  persentaseDiskon,
  persentasePajak,
  stokBuku,
  jumlahDibeli,
  totalDurasi
);

console.log('============================================================');
console.log('==================== Logic Test ============================');
const elemenMayoritas = nums => {
  const counts = {};

  nums.forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
  });

  let mayoritas;
  let maxCount = 0;
  Object.keys(counts).forEach(num => {
    if (counts[num] > maxCount) {
      mayoritas = num;
      maxCount = counts[num];
    }
  });

  if (maxCount > nums.length / 2) {
    console.log('Mayoritas:');
    return mayoritas;
  } else {
    return null;
  }
};

console.log(elemenMayoritas([3, 2, 3])); // Output: 3
console.log(elemenMayoritas([2, 2, 1, 1, 1, 2, 2])); // Output: 2

//Ubahlah ke dalam bahasa inggris
