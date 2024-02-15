const users = [
    {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990/05/15",
      address: [
        {
        alamat: "Jl. Pattimura No. 10",
        postcode: "97124",
        kelurahan: "Teluk Ambon",
        kecamatan: "Sirimau",
        kota: "Ambon",
        provinsi: "Maluku"
      },
      {
        alamat: "Jl. Diponegoro No. 20",
        postcode: "65111",
        kelurahan: "Diponegoro",
        kecamatan: "Gedong Tataan",
        kota: "Bandar Lampung",
        provinsi: "Lampung"
      }
    ]
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      dateOfBirth: "1995/08/20",
      address: [
        {
        alamat: "Jl. Cihampelas No. 123",
        postcode: "40131",
        kelurahan: "Cihampelas",
        kecamatan: "Sukajadi",
        kota: "Bandung",
        provinsi: "Jawa Barat"
      }
    ]
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      dateOfBirth: "1988/11/02",
      address: [
        {
        alamat: "Jl. Raya Cianjur No. 10",
        postcode: "43215",
        kelurahan: "Sukamanah",
        kecamatan: "Cianjur",
        kota: "Cianjur",
        provinsi: "Jawa Barat"
      }
    ]
    },
    {
      firstName: "Maria",
      lastName: "Gonzalez",
      dateOfBirth: "1992/03/18",
      address: [
        {
        alamat: "Jl. Gajah Mada No. 10",
        postcode: "80111",
        kelurahan: "Pemecutan",
        kecamatan: "Denpasar Barat",
        kota: "Denpasar",
        provinsi: "Bali"
      }
    ]
    },
    {
      firstName: "Ahmad",
      lastName: "Rahman",
      dateOfBirth: "1985/09/10",
      address: [
        {
        alamat: "Jl. Merdeka No. 17",
        postcode: "86318",
        kelurahan: "Merdeka",
        kecamatan: "Ende Tengah",
        kota: "Ende",
        provinsi: "Nusa Tenggara Timur"
      }
    ]
    },
    {
      firstName: "Siti",
      lastName: "Fatimah",
      dateOfBirth: "1998/07/25",
      address: [
        {
        alamat: "Jl. Pangeran Diponegoro No. 22",
        postcode: "98612",
        kelurahan: "Diponegoro",
        kecamatan: "FakFak Timur",
        kota: "FakFak",
        provinsi: "Papua Barat"
      }
    ]
    },
    {
        firstName: "Budi",
        lastName: "Santoso",
        dateOfBirth: "1980/12/05",
        address: [
          {
            alamat: "Jl. Veteran No. 56",
            postcode: "96115",
            kelurahan: "Veteran",
            kecamatan: "Kota Timur",
            kota: "Gorontalo",
            provinsi: "Gorontalo"
          }
        ]
      },
    {
      firstName: "Ani",
      lastName: "Suryani",
      dateOfBirth: "1993/04/30",
      address: [
        {
        alamat: "Jl. Kartini No. 78",
        postcode: "65111",
        kelurahan: "Kartini",
        kecamatan: "Kemayoran",
        kota: "Jakarta Pusat",
        provinsi: "DKI Jakarta"
      }
    ]
    },
    {
        firstName: "Rudi",
        lastName: "Wijaya",
        dateOfBirth: "1983/10/12",
        address: [
          {
            alamat: "Jl. Diponegoro No. 123",
            postcode: "93121",
            kelurahan: "Diponegoro",
            kecamatan: "Kendari Selatan",
            kota: "Kendari",
            provinsi: "Sulawesi Tenggara"
          }
        ]
      },
      {
        firstName: "Dewi",
        lastName: "Kusuma",
        dateOfBirth: "1996/06/28",
        address: [
          {
            alamat: "Jl. Gatot Subroto No. 56",
            postcode: "24412",
            kelurahan: "Gatot Subroto",
            kecamatan: "Langsa Barat",
            kota: "Langsa",
            provinsi: "Aceh"
          }
        ]
      }      
  ];  


// 1. Function Cari nama
// Membuat fungsi untuk mencari nama dalam array pengguna.
function findName(name) {
	const nameGroup = users.filter((user) => {
		// Menggabungkan firstName dan lastName dari setiap pengguna.
		const fullName = user.firstName + user.lastName;
		// Mengonversi kedua nama menjadi huruf kecil, dan menghilangkan karakter non-alfanumerik dan spasi.
		return fullName
			.toLowerCase()
			.replace(/([^\w]+|\s+)/g, '')
			.includes(name.toLowerCase().replace(/([^\w]+|\s+)/g, ''));
	});
	// Mengembalikan array pengguna ke output yang memiliki nama sesuai dengan kriteria pencarian.
	return nameGroup;
}

console.log("Hasil pencarian nama:", JSON.stringify(findName('john'), null, 2));
console.log('\n');

// 2. Function Cari user dengan alamat lebih dari satu
// Membuat fungsi untuk mencari pengguna yang memiliki lebih dari satu alamat.
function findUserByTotalOfAddresses(n) {
    const UsersWithTotalAddress = users.filter((user) => user.address.length === n);
    // Menampilkan jumlah pengguna yang memiliki alamat sesuai dengan kriteria.
    console.log(`User with ${n} address: ${UsersWithTotalAddress.length} users`);
    return UsersWithTotalAddress;
}

let usersWithTotalAddresses = findUserByTotalOfAddresses(2);
usersWithTotalAddresses.forEach((users) => {
    console.log(users);
    console.log('\n');
});

// 3. Function sorting ascending untuk kota dan tanggal lahir
// Membuat fungsi untuk mengurutkan pengguna secara menaik berdasarkan kota atau tanggal lahir.
function sortingAscending(field) {
    return users.sort((userA, userB) => {
      if (field === 'dateOfBirth') {
        // Mengambil tanggal lahir dari setiap pengguna.
        const dateOfBirthA = new Date(userA[field]);
        const dateOfBirthB = new Date(userB[field]);
        // Mengembalikan perbedaan tanggal lahir.
        return dateOfBirthA - dateOfBirthB;

      } else if (field === 'kota') {
        // Mengambil nama kota dari setiap pengguna, dan mengonversi menjadi huruf kecil.
        const kotaA = (userA.address && userA.address.kota) ? userA.address.kota.toLowerCase() : '';
        const kotaB = (userB.address && userB.address.kota) ? userB.address.kota.toLowerCase() : '';
        // Mengurutkan kota secara alfabetis.
        if (kotaA < kotaB) return -1;
        if (kotaA > kotaB) return 1;
        return 0;
      }
    });
}

// Menampilkan hasil pengurutan menaik berdasarkan kota dan tanggal lahir.
console.log("Hasil sorting ascending kota:", JSON.stringify(sortingAscending('kota'), null, 2));
console.log("Hasil sorting ascending tanggal lahir:", JSON.stringify(sortingAscending('dateOfBirth'), null, 2));

// 4. Function sorting descending untuk kota dan tanggal lahir
// Membuat fungsi untuk mengurutkan pengguna secara menurun berdasarkan kota atau tanggal lahir.
function sortingDescending(field) {
    return users.sort((userA, userB) => {
      if (field === 'dateOfBirth') {
        // Mengambil tanggal lahir dari setiap pengguna.
        const dateOfBirthA = new Date(userA[field]);
        const dateOfBirthB = new Date(userB[field]);
        // Mengembalikan perbedaan tanggal lahir.
        return dateOfBirthB - dateOfBirthA;

      } else if (field === 'kota') {
        // Mengambil nama kota dari setiap pengguna, dan mengonversi menjadi huruf kecil.
        const kotaA = (userA.address && userA.address[0] && userA.address[0].kota) ? userA.address[0].kota : '';
        const kotaB = (userB.address && userB.address[0] && userB.address[0].kota) ? userB.address[0].kota : '';
        // Mengurutkan kota secara alfabetis dengan cara terbalik.
        return kotaB.localeCompare(kotaA);
      }
    
    });
}

// Menampilkan hasil pengurutan menurun berdasarkan kota dan tanggal lahir.
console.log("Hasil sorting descending kota:", JSON.stringify(sortingDescending('kota'), null, 2));
console.log("Hasil sorting descending tanggal lahir:", JSON.stringify(sortingDescending('dateOfBirth'), null, 2));
