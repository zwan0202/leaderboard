const FALLBACK_GROUPS = [
    {
        "id": "group1",
        "name": "Neural Translators",
        "members": [
            {
                "name": "Alice Johnson",
                "photo": "https://i.pravatar.cc/150?img=1"
            },
            {
                "name": "Bob Smith",
                "photo": "https://i.pravatar.cc/150?img=2"
            },
            {
                "name": "Carol Davis",
                "photo": "https://i.pravatar.cc/150?img=3"
            },
            {
                "name": "David Brown",
                "photo": "https://i.pravatar.cc/150?img=4"
            }
        ],
        "bestScore": 0.8542,
        "lastUpdated": null
    },
    {
        "id": "group2",
        "name": "Token Masters",
        "members": [
            {
                "name": "Emma Wilson",
                "photo": "https://i.pravatar.cc/150?img=5"
            },
            {
                "name": "Frank Miller",
                "photo": "https://i.pravatar.cc/150?img=6"
            },
            {
                "name": "Grace Lee",
                "photo": "https://i.pravatar.cc/150?img=7"
            }
        ],
        "bestScore": 0.8123,
        "lastUpdated": null
    },
    {
        "id": "group3",
        "name": "Transformer Squad",
        "members": [
            {
                "name": "Henry Garcia",
                "photo": "https://i.pravatar.cc/150?img=8"
            },
            {
                "name": "Ivy Martinez",
                "photo": "https://i.pravatar.cc/150?img=9"
            },
            {
                "name": "Jack Robinson",
                "photo": "https://i.pravatar.cc/150?img=10"
            },
            {
                "name": "Kate Anderson",
                "photo": "https://i.pravatar.cc/150?img=11"
            }
        ],
        "bestScore": 0.7891,
        "lastUpdated": null
    },
    {
        "id": "group4",
        "name": "COMET Seekers",
        "members": [
            {
                "name": "Liam Taylor",
                "photo": "https://i.pravatar.cc/150?img=12"
            },
            {
                "name": "Mia Thomas",
                "photo": "https://i.pravatar.cc/150?img=13"
            }
        ],
        "bestScore": 0.7654,
        "lastUpdated": null
    },
    {
        "id": "group5",
        "name": "Deep Learning Crew",
        "members": [
            {
                "name": "Noah Jackson",
                "photo": "https://i.pravatar.cc/150?img=14"
            },
            {
                "name": "Olivia White",
                "photo": "https://i.pravatar.cc/150?img=15"
            },
            {
                "name": "Peter Harris",
                "photo": "https://i.pravatar.cc/150?img=16"
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    },
    {
        "id": "group6",
        "name": "AI Pioneers",
        "members": [
            {
                "name": "Quinn Martin",
                "photo": "https://i.pravatar.cc/150?img=17"
            },
            {
                "name": "Rachel Thompson",
                "photo": "https://i.pravatar.cc/150?img=18"
            },
            {
                "name": "Sam Garcia",
                "photo": "https://i.pravatar.cc/150?img=19"
            },
            {
                "name": "Tina Lopez",
                "photo": "https://i.pravatar.cc/150?img=20"
            }
        ],
        "bestScore": null,
        "lastUpdated": null
    }
];

async function loadGroupsFromJSON() {
    try {
        const response = await fetch('groups.json');
        if (!response.ok) {
            throw new Error('Failed to load groups.json');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.warn('Could not load groups.json, using fallback data:', error.message);
        return FALLBACK_GROUPS;
    }
}