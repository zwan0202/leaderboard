const DEFAULT_AVATAR = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2UwZTBlMCIvPjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjYjBiMGIwIi8+PHBhdGggZD0iTSAzMCAxMjAgUSAzMCA5MCA3NSA5MCBRIDEyMCA5MCAxMjAgMTIwIFoiIGZpbGw9IiNiMGIwYjAiLz48L3N2Zz4=';

const FALLBACK_GROUPS = [
    {
        "id": "AIC001",
        "name": "AIC001",
        "members": [
            {
                "name": "Thi To Nu Dinh",
                "photo": "./photos/AIC001/Thi_To_Nu_Dinh.jpeg"
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC002",
        "name": "AIC002",
        "members": [
            {
                "name": "Md Ahanaf Mubashshir Alvi",
                "photo": "./photos/AIC002/Md_Ahanaf_Mubashshir_Alvi.jpeg"
            },
            {
                "name": "Ngoc Cuong Hoang",
                "photo": "./photos/AIC002/Ngoc_Cuong_Hoang.png"
            },
            {
                "name": "Phuong Tran Tran",
                "photo": "./photos/AIC002/Phuong_Tran_Tran.jpeg"
            },
            {
                "name": "Le Quynh Nhu Doan",
                "photo": "./photos/AIC002/Le_Quynh_Nhu_Doan.jpeg"
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC003",
        "name": "AIC003",
        "members": [
            {
                "name": "Quoc Chien Kieu",
                "photo": "./photos/AIC003/Quoc_Chien_Kieu.jpg"
            },
            {
                "name": "Haohua Mai",
                "photo": "./photos/AIC003/Haohua_Mai.jpg"
            },
            {
                "name": "Musrat Jahan",
                "photo": "./photos/AIC003/Musrat_Jahan.jpg"
            },
            {
                "name": "Ritiz Karkee",
                "photo": DEFAULT_AVATAR
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC004",
        "name": "AIC004",
        "members": [
            {
                "name": "Liang Huang",
                "photo": "./photos/AIC004/Liang_Huang.jpg"
            },
            {
                "name": "Simin Li",
                "photo": "./photos/AIC004/Simin_Li.jpg"
            },
            {
                "name": "Fuyu Li",
                "photo": "./photos/AIC004/Fuyu_Li.jpg"
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC005",
        "name": "AIC005",
        "members": [
            {
                "name": "Mahmuda Haque Mumu",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Ayushma Pandey",
                "photo": DEFAULT_AVATAR
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC006",
        "name": "AIC006",
        "members": [
            {
                "name": "Abdurrahman Adeiza Aliyu",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Faiyaz Zaman",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Yee Chyi Too",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Ahnad As Saboor Siam",
                "photo": DEFAULT_AVATAR
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC007",
        "name": "AIC007",
        "members": [
            {
                "name": "Surendra Phuyal",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Aakash shrestha",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Kushum Ranjitkar",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Dylan Tomlinson",
                "photo": DEFAULT_AVATAR
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC008",
        "name": "AIC008",
        "members": [
            {
                "name": "Ayush Tiwari",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Tikaram Dumre",
                "photo": DEFAULT_AVATAR
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC009",
        "name": "AIC009",
        "members": [
            {
                "name": "Sayeed Anwar",
                "photo": "./photos/AIC009/Sayeed_Anwar.jpg"
            },
            {
                "name": "Sonish khanal",
                "photo": "./photos/AIC009/Sonish_khanal.jpeg"
            },
            {
                "name": "Mahmudur Rahman",
                "photo": "./photos/AIC009/Mahmudur_Rahman.jpeg"
            },
            {
                "name": "Shibbir Talukder",
                "photo": "./photos/AIC009/Shibbir_Talukder.jpeg"
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC010",
        "name": "AIC010",
        "members": [
            {
                "name": "Jahidul Islam",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Ahsan Muhammad Saeed",
                "photo": DEFAULT_AVATAR
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC011",
        "name": "AIC011",
        "members": [
            {
                "name": "Chathura Janadara Kodithuwakku Maddege",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Masachchige Ravidu Supun Karunathilaka",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Kavishka Himashana Ubeysekara",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Ishan Diluksha Sumanasekara Imbulana Liyanage",
                "photo": DEFAULT_AVATAR
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC012",
        "name": "AIC012",
        "members": [
            {
                "name": "Tarik Bulut",
                "photo": "./photos/AIC012/Tarik_Bulut.jpg"
            },
            {
                "name": "Hu Thanh Le",
                "photo": "./photos/AIC012/Hu_Thanh_Le.jpg"
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC013",
        "name": "AIC013",
        "members": [
            {
                "name": "Romik Gurung",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Dipan Shrestha",
                "photo": DEFAULT_AVATAR
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC014",
        "name": "AIC014",
        "members": [
            {
                "name": "Mohd Maqsoodali Ansari",
                "photo": DEFAULT_AVATAR
            },
            {
                "name": "Saikat Barua",
                "photo": DEFAULT_AVATAR
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC015",
        "name": "AIC015",
        "members": [
            {
                "name": "Anjan Shrestha",
                "photo": "./photos/AIC015/Anjan_Shrestha.jpg"
            },
            {
                "name": "Yukesh Chamlagain",
                "photo": "./photos/AIC015/Yukesh_Chamlagain.jpeg"
            },
            {
                "name": "Rafsan Rahman",
                "photo": "./photos/AIC015/Rafsan_Rahman.jpeg"
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "AIC016",
        "name": "AIC016",
        "members": [
            {
                "name": "Quang Thuan Nguyen",
                "photo": "./photos/AIC016/Quang_Thuan_Nguyen.png"
            },
            {
                "name": "Nguyen Ba Dat Hoang",
                "photo": "./photos/AIC016/Nguyen_Ba_Dat_Hoang.jpeg"
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    }
];


const STORAGE_KEY = 'leaderboardGroups';

// Load groups from localStorage first, then JSON file, then fallback
async function loadGroupsFromJSON() {
    // Try localStorage first
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            console.log('Loaded groups from localStorage');
            return JSON.parse(stored);
        }
    } catch (error) {
        console.warn('Error reading from localStorage:', error.message);
    }

    // Try loading from JSON file
    try {
        const response = await fetch('groups.json');
        if (!response.ok) {
            throw new Error('Failed to load groups.json');
        }
        const data = await response.json();
        console.log('Loaded groups from groups.json');
        // Save to localStorage for next time
        saveGroupsToStorage(data);
        return data;
    } catch (error) {
        console.warn('Could not load groups.json, using fallback data:', error.message);
        console.warn('Note: If running locally, you need a local web server.');
        console.warn('Quick start: python3 -m http.server 8000');
        // Save fallback to localStorage
        saveGroupsToStorage(FALLBACK_GROUPS);
        return FALLBACK_GROUPS;
    }
}

// Save groups to localStorage
function saveGroupsToStorage(groups) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
        console.log('Groups saved to localStorage');
    } catch (error) {
        console.error('Error saving to localStorage:', error.message);
    }
}