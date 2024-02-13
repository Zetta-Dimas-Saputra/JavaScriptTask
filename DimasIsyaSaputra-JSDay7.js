const songs = [
    { title: 'Serigala Militia', artist: 'Seringai', genre: 'Metal', duration: '00:55:00' },
    { title: 'Ya Sudahlah', artist: 'Bondan Prakoso', genre: 'Pop', duration: '00:05:15' },
    { title: 'Gak Iso Turu', artist: 'Bayu Skak', genre: 'Pop Rock', duration: '00:04:15' },
    { title: 'Pelangi di Matamu', artist: 'Jamrud', genre: 'Rock', duration: '00:04:12' },
    { title: 'Kenangan Terindah', artist: 'Samsons', genre: 'Pop Rock', duration: '00:04:30' },
    { title: 'Mantan Terindah', artist: 'Kahitna', genre: 'Pop', duration: '00:04:00' },
    { title: 'Hampa', artist: 'Ari Lasso', genre: 'Pop', duration: '00:04:48' },
    { title: 'Seperti Yang Kau Minta', artist: 'Chrisye', genre: 'Pop', duration: '00:04:36' },
    { title: 'Bento', artist: 'Iwan Fals', genre: 'Rock', duration: '00:05:12' },
    { title: 'Pelangi', artist: 'Hivi!', genre: 'Pop', duration: '00:03:48' },
    { title: 'Cinta Pertama dan Terakhir', artist: 'Sherina', genre: 'Pop', duration: '00:04:18' },
    { title: 'Mungkin Nanti', artist: 'Peterpan', genre: 'Pop Rock', duration: '00:04:06' },
    { title: 'Tentang Aku, Kau dan Dia', artist: 'Kahitna', genre: 'Pop', duration: '00:03:54' },
    { title: 'Aku Lelakimu', artist: 'Virzha', genre: 'Pop Rock', duration: '00:04:42' },
    { title: 'Rumah Kita', artist: 'God Bless', genre: 'Rock', duration: '00:04:24' },
    { title: 'Perahu Kertas', artist: 'Maudy Ayunda', genre: 'Pop', duration: '00:03:42' },
    { title: 'Dia', artist: 'Anji', genre: 'Pop', duration: '00:04:54' },
    { title: 'Kala Cinta Menggoda', artist: 'Chrisye', genre: 'Pop', duration: '00:05:06' },
    { title: 'Bukan Cinta Biasa', artist: 'Siti Nurhaliza', genre: 'Pop', duration: '00:04:24' },
    { title: 'Kupu-Kupu Malam', artist: 'Peterpan', genre: 'Pop Rock', duration: '00:04:12' },
    { title: 'Saat Terakhir', artist: 'St 12', genre: 'Pop', duration: '00:04:36' },
    { title: 'Cobalah Mengerti', artist: 'Peterpan', genre: 'Pop Rock', duration: '00:04:18' },
    { title: 'Cintaku Takkan Berubah', artist: 'Anie Carera', genre: 'Pop', duration: '00:05:00' },
    { title: 'Walau Habis Terang', artist: 'Peterpan', genre: 'Pop Rock', duration: '00:04:42' },
    { title: 'Cinta Sejati', artist: 'Bunga Citra Lestari', genre: 'Pop', duration: '00:04:30' },
    { title: 'Dunia Batas', artist: 'Padi', genre: 'Pop Rock', duration: '00:04:06' },
    { title: 'Mata Ke Hati', artist: 'Hivi!', genre: 'Pop', duration: '00:03:36' },
    { title: 'Kekasih Gelapku', artist: 'Ungu', genre: 'Pop Rock', duration: '00:04:54' },
    { title: 'Takkan Pisah', artist: 'Eren', genre: 'Pop', duration: '00:04:48' },
    { title: 'Tentang Dia', artist: 'Melly Goeslaw', genre: 'Pop', duration: '00:04:00' },
    { title: 'Mungkin Nanti', artist: 'Peterpan', genre: 'Pop Rock', duration: '00:04:06' },

    // Daftar lagu diatas 10 menit
    { title: 'Shine On You Crazy Diamond', artist: 'Pink Floyd', genre: 'Pop', duration: '00:25:00' },
    { title: 'Echoes', artist: 'Pink Floyd', genre: 'Pop', duration: '00:23:00' },
    { title: 'Dogss', artist: 'Pink Floyd', genre: 'Pop', duration: '00:17:00' },
];

// Fungsi untuk menyaring lagu berdasarkan nama artis
function filterSongsByArtist(artistFilter) {
    const filteredSongs = songs.filter(song =>
      song.artist
        .toLowerCase() // Mengubah nama artis menjadi huruf kecil
        .replace(/\s+/g, '') // Menghapus spasi dalam nama artis
        .includes(artistFilter.toLowerCase()) // Memeriksa apakah nama artis mengandung filter yang diberikan
    );
    return filteredSongs; // Mengembalikan daftar lagu yang sesuai dengan kriteria artis yang diberikan
  }
  
function filterSongsByGenre(genreFilter) {
    const filteredSongs = songs.filter(song =>
      song.genre
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(genreFilter.toLowerCase()) 
    );
    return filteredSongs;
  }
  
// Fungsi untuk membuat playlist berdasarkan durasi maksimum 1 jam (3600 detik)
function createPlaylist(songs) {
    let playlistSong = []; // Let berfungsi untuk Inisialisasi playlist
    let playlistDuration = 0; 
    let randomSongs = randomArray(songs);
    let remainingSongs = []; // untuk menyimpan lagu yang tidak muat dalam playlist
  
    randomSongs.forEach(song => { // Melakukan iterasi melalui setiap elemen dalam array randomSongs
      const songDuration = convertDurationToSeconds(song.duration); // Mengonversi durasi lagu menjadi detik
      if (playlistDuration + songDuration <= 3600) { // Jika penambahan durasi lagu masih di bawah 1 jam
        playlistSong.push(song); // Tambahkan lagu ke playlist
        playlistDuration += songDuration; // Tambahkan durasi lagu ke durasi playlist
      } else {
        remainingSongs.push(song); // Menambahkan lagu ke daftar lagu yang tidak muat dalam playlist
      }
    });

    if (playlistDuration < 3600 && remainingSongs.length > 0) { // Jika masih ada ruang dalam playlist dan masih ada lagu yang tersisa/cek
      remainingSongs.forEach(song => {
        const songDuration = convertDurationToSeconds(song.duration);
        if (playlistDuration + songDuration <= 3600) {
          playlistSong.push(song);
          playlistDuration += songDuration;
        }
      });
    }

    // Fungsi untuk mengonversi durasi lagu dari format 'jam:menit:detik' menjadi detik
    function convertDurationToSeconds(duration) {
    const [hours, minutes, seconds] = duration
      .split(':') // Memisahkan jam, menit, dan detik berdasarkan tanda ':' dan menyimpannya dalam array
      .map(val => parseInt(val)); // Mengonversi setiap bagian durasi menjadi bilangan bulat menggunakan parseInt
    return hours * 3600 + minutes * 60 + seconds; // Menghitung total detik dari jam, menit, dan detik
    }
  
    // Menghitung total durasi playlist dalam format jam:menit:detik
    const totalDurationHH = Math.floor(playlistDuration / 3600); // Menghitung jam
    const totalDurationMM = Math.floor((playlistDuration % 3600) / 60); // Menghitung menit
    const totalDurationSS = playlistDuration % 60; // Menghitung detik
    const totalDurationFormatted = `${totalDurationHH.toString()
        .padStart(2, '0')}:${totalDurationMM.toString()
        .padStart(2, '0')}:${totalDurationSS.toString().padStart(2, '0')}`; // Format total durasi playlist
  
    return { playlistSong, totalDuration: totalDurationFormatted }; // Mengembalikan playlist beserta total durasinya
  }
  
  // Fungsi untuk mengacak urutan array/Pengacakan Playlist disini
  function randomArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Mendapatkan indeks acak untuk ditukar
      [array[i], array[j]] = [array[j], array[i]]; // Menukar posisi elemen
    }
    return array; // Mengembalikan array yang sudah diacak
  }

  console.log('Songs grouped by artist:', filterSongsByArtist('CITRALESTARI'));
  console.log('\n');

  console.log('Songs grouped by genre:', filterSongsByGenre('pop rock'));
  console.log('\n');
  
  const { playlistSong, totalDuration } = createPlaylist(songs);
  console.log('Generated Playlist:', playlistSong); // Menampilkan playlist yang telah dibuat
  console.log('Total Duration:', totalDuration); // Menampilkan total durasi playlist
