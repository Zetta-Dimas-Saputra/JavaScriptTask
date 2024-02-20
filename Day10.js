const election = [
    {
        province : "Aceh",
        votes :[
            { voting01 : 200000},
            { voting02 : 400000},
            { voting03 : 300000}
        ]
    },
    {
        province : "Yogyakarta",
        votes :[
            { voting01 : 100000},
            { voting02 : 200000},
            { voting03 : 900000}
        ]
    },
    {
        province : "Bandung",
        votes :[
            { voting01 : 500000},
            { voting02 : 700000},
            { voting03 : 600000}
        ]
    },
    {
        province : "Surabaya",
        votes :[
            { voting01 : 600000},
            { voting02 : 900000},
            { voting03 : 700000}
        ]
    },
    {
        province : "Medan",
        votes :[
            { voting01 : 800000},
            { voting02 : 300000},
            { voting03 : 200000}
        ]
    }
];

// 1. Function untuk mencari provinsi dengan votes salah satu voting terbanyak
function findProvinceWithMaxVotes(data, type) {
    let maxVotes = 0;
    let provinceWithMaxVotes = [];

    data.forEach(provinceData => {
        provinceData.votes.forEach(vote => {
            const voteCount = vote[type];
            if (voteCount > maxVotes) {
                maxVotes = voteCount;
                provinceWithMaxVotes = [{ province: provinceData.province, maxVotes: maxVotes }];
            } else if (voteCount === maxVotes) {
                provinceWithMaxVotes.push({ province: provinceData.province, maxVotes: maxVotes });
            }
        });
    });

    return provinceWithMaxVotes;
}
console.log("Pencarian Provinsi Berdasarkan Jumlah Suara Terbanyak Salah Satu Paslon: ")
console.log(JSON.stringify(findProvinceWithMaxVotes(election, 'voting02'), null, 2));
console.log("\n");

// 2. Function untuk menghitung total suara dari setiap provinsi 
function calculateTotalVotesByProvince(data, type) {
    const totalVotesByProvince = {};
    let totalVotes = 0; 

    data.forEach(provinceData => {
        let votesInProvince = 0;
        provinceData.votes.forEach(vote => {
            votesInProvince += vote[type] || 0; 
        });
        totalVotesByProvince[provinceData.province] = votesInProvince;
        totalVotes += votesInProvince;
    });

    totalVotesByProvince['Total Votes'] = totalVotes;

    return totalVotesByProvince;
}
console.log("Jumlah suara voting di Provinsi: ")
console.log(JSON.stringify(calculateTotalVotesByProvince(election, 'voting01'), null, 2));
console.log("\n");

// 3. Function untuk menghitung total setiap voting dan di konversi menjadi persen
function calculateTotalVotes(data) {
    const totalVotes = {
        voting01: 0,
        voting02: 0,
        voting03: 0
    };

    data.forEach(provinceData => {
        provinceData.votes.forEach(vote => {
            for (let key in vote) {
                totalVotes[key] += vote[key];
            }
        });
    });

    return totalVotes;
}

function convertToPercentage(totalVotes) {
    const total = Object.values(totalVotes).reduce((accumulator, current) => accumulator + current, 0); 
    console.log(total);
    
    const percentageVotes = {};
    for (let key in totalVotes) {
        percentageVotes[key] = ((totalVotes[key] / total) * 100).toFixed(0) + '%';
    }

    return percentageVotes;
}
console.log("Jumlah suara dalam persen dari setiap voting: ")
const totalVotes = calculateTotalVotes(election);
console.log(JSON.stringify(convertToPercentage(totalVotes), null, 2));
