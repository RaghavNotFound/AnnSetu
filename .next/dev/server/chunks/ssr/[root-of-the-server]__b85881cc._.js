module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/data/mockData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data for the Cold Storage Dashboard
// Replace these with actual API calls when integrating a backend
__turbopack_context__.s([
    "billingData",
    ()=>billingData,
    "commodityDistributionData",
    ()=>commodityDistributionData,
    "dispatchEntriesData",
    ()=>dispatchEntriesData,
    "farmersData",
    ()=>farmersData,
    "inventoryData",
    ()=>inventoryData,
    "inventoryPreviewData",
    ()=>inventoryPreviewData,
    "iotData",
    ()=>iotData,
    "liveAlertsData",
    ()=>liveAlertsData,
    "loadingEntriesData",
    ()=>loadingEntriesData,
    "paymentCollectionData",
    ()=>paymentCollectionData,
    "recentActivityData",
    ()=>recentActivityData,
    "reportsData",
    ()=>reportsData,
    "roomUtilizationData",
    ()=>roomUtilizationData,
    "settingsData",
    ()=>settingsData,
    "sidebarMenuItems",
    ()=>sidebarMenuItems,
    "statsData",
    ()=>statsData,
    "stockAgingData",
    ()=>stockAgingData
]);
const statsData = {
    totalFarmers: {
        value: 200,
        change: 5,
        changeLabel: "from yesterday",
        trend: "up"
    },
    totalInventory: {
        value: 1250,
        unit: "MT",
        progress: 75
    },
    occupancy: {
        value: 87,
        unit: "%",
        change: 3,
        changeLabel: "from yesterday",
        trend: "up"
    },
    todaysLoading: {
        value: 92,
        unit: "MT",
        change: 22,
        changeLabel: "",
        trend: "up",
        progress: 65
    },
    pendingRent: {
        value: 190600,
        change: 15400,
        trend: "up"
    }
};
const roomUtilizationData = {
    overall: 85,
    change: 3,
    changeLabel: "from yesterday",
    trend: "up",
    rooms: [
        {
            name: "Room 1",
            utilization: 85,
            color: "#2D5A27"
        },
        {
            name: "Room 2",
            utilization: 64,
            color: "#4CAF50"
        },
        {
            name: "Room 3",
            utilization: 92,
            color: "#81C784"
        }
    ]
};
const liveAlertsData = {
    totalValue: "₹16 Lakhs",
    alerts: [
        {
            id: 1,
            type: "danger",
            icon: "thermometer",
            message: "Temperature deviation in",
            location: "Room 2"
        },
        {
            id: 2,
            type: "warning",
            icon: "zap",
            message: "Power backup running",
            location: ""
        },
        {
            id: 3,
            type: "info",
            icon: "credit-card",
            message: "5 overdue payments",
            location: ""
        },
        {
            id: 4,
            type: "caution",
            icon: "alert-triangle",
            message: "3 aging stocks > 120 days",
            location: ""
        }
    ]
};
const commodityDistributionData = [
    {
        name: "Potatoes",
        value: 45,
        color: "#2D5A27"
    },
    {
        name: "Onions",
        value: 26,
        color: "#81C784"
    },
    {
        name: "Tomatoes",
        value: 20,
        color: "#C8E6C9"
    },
    {
        name: "Others",
        value: 9,
        color: "#E8F5E9"
    }
];
const stockAgingData = [
    {
        range: "0-30 days",
        value: 510,
        unit: "MT",
        color: "#2D5A27"
    },
    {
        range: "30-60 days",
        value: 390,
        unit: "MT",
        color: "#4CAF50"
    },
    {
        range: "60-90 days",
        value: 270,
        unit: "MT",
        color: "#81C784"
    },
    {
        range: "90+ days",
        value: 80,
        unit: "MT",
        color: "#C8E6C9"
    }
];
const paymentCollectionData = {
    totalValue: "₹16 lakhs",
    items: [
        {
            id: 1,
            label: "Farmer Due",
            amount: 160000,
            icon: "user",
            color: "#FF9800",
            progress: 60
        },
        {
            id: 2,
            label: "Vendor Due",
            amount: 75300,
            icon: "truck",
            color: "#FF9800",
            progress: 35
        },
        {
            id: 3,
            label: "Rent Due",
            amount: 190600,
            icon: "home",
            color: "#4CAF50",
            progress: 80
        },
        {
            id: 4,
            label: "Interest Generated",
            amount: 32400,
            icon: "trending-up",
            color: "#2196F3",
            progress: 20
        }
    ]
};
const recentActivityData = [
    {
        id: 1,
        type: "loading",
        icon: "package",
        color: "#4CAF50",
        title: "Loading entry",
        description: "Added 25 packets from Vijay Kumar",
        date: "April 16"
    },
    {
        id: 2,
        type: "dispatch",
        icon: "truck",
        color: "#2196F3",
        title: "Dispatch entry",
        description: "Added 12 packets to Tanvure Traders",
        date: "April 15"
    },
    {
        id: 3,
        type: "payment",
        icon: "check-circle",
        color: "#4CAF50",
        title: "Payment received",
        description: "₹23,000 money from Pramod S./Omveer Singh",
        date: "15"
    }
];
const inventoryPreviewData = [
    {
        id: 1,
        icon: "🥔",
        ageRange: "6-30 p.1",
        count: 5,
        location: "due in Agra...",
        quantity: "510 MT",
        color: "#FF9800"
    },
    {
        id: 2,
        icon: "🧅",
        ageRange: "60-90 days",
        location: "in Agra...",
        quantity: "390 MT",
        color: "#2196F3"
    },
    {
        id: 3,
        icon: "🥬",
        ageRange: "80+ days",
        location: "",
        quantity: "270 MT",
        color: "#4CAF50"
    }
];
const farmersData = [
    {
        id: 1,
        name: "Vijay Kumar",
        village: "Khandauli",
        phone: "9876543210",
        totalStock: "125 MT",
        rooms: "R1, R2",
        pendingRent: 24500,
        joinDate: "2024-01-15",
        status: "active"
    },
    {
        id: 2,
        name: "Pramod Singh",
        village: "Fatehpur Sikri",
        phone: "9876543211",
        totalStock: "89 MT",
        rooms: "R1",
        pendingRent: 18200,
        joinDate: "2024-02-20",
        status: "active"
    },
    {
        id: 3,
        name: "Omveer Singh",
        village: "Shamshabad",
        phone: "9876543212",
        totalStock: "210 MT",
        rooms: "R2, R3",
        pendingRent: 0,
        joinDate: "2023-11-08",
        status: "active"
    },
    {
        id: 4,
        name: "Ramesh Chandra",
        village: "Bah",
        phone: "9876543213",
        totalStock: "56 MT",
        rooms: "R3",
        pendingRent: 32100,
        joinDate: "2024-03-01",
        status: "active"
    },
    {
        id: 5,
        name: "Sunil Yadav",
        village: "Etmadpur",
        phone: "9876543214",
        totalStock: "178 MT",
        rooms: "R1, R3",
        pendingRent: 5600,
        joinDate: "2023-09-12",
        status: "active"
    },
    {
        id: 6,
        name: "Dinesh Gupta",
        village: "Pinahat",
        phone: "9876543215",
        totalStock: "0 MT",
        rooms: "—",
        pendingRent: 41000,
        joinDate: "2023-06-20",
        status: "inactive"
    },
    {
        id: 7,
        name: "Anil Sharma",
        village: "Kiraoli",
        phone: "9876543216",
        totalStock: "95 MT",
        rooms: "R2",
        pendingRent: 12800,
        joinDate: "2024-04-10",
        status: "active"
    },
    {
        id: 8,
        name: "Manoj Tiwari",
        village: "Agra",
        phone: "9876543217",
        totalStock: "44 MT",
        rooms: "R1",
        pendingRent: 0,
        joinDate: "2024-05-15",
        status: "active"
    }
];
const inventoryData = [
    {
        id: 1,
        commodity: "Potatoes",
        variety: "Pukhraj",
        farmer: "Vijay Kumar",
        room: "Room 1",
        rack: "A-12",
        bags: 250,
        weight: "125 MT",
        loadDate: "2025-01-20",
        age: 40,
        status: "good"
    },
    {
        id: 2,
        commodity: "Potatoes",
        variety: "Chipsona",
        farmer: "Pramod Singh",
        room: "Room 1",
        rack: "A-08",
        bags: 178,
        weight: "89 MT",
        loadDate: "2025-02-05",
        age: 24,
        status: "good"
    },
    {
        id: 3,
        commodity: "Onions",
        variety: "Nasik Red",
        farmer: "Omveer Singh",
        room: "Room 2",
        rack: "B-03",
        bags: 420,
        weight: "210 MT",
        loadDate: "2024-11-12",
        age: 109,
        status: "aging"
    },
    {
        id: 4,
        commodity: "Potatoes",
        variety: "Kufri Jyoti",
        farmer: "Ramesh Chandra",
        room: "Room 3",
        rack: "C-15",
        bags: 112,
        weight: "56 MT",
        loadDate: "2025-02-18",
        age: 11,
        status: "fresh"
    },
    {
        id: 5,
        commodity: "Tomatoes",
        variety: "Hybrid",
        farmer: "Sunil Yadav",
        room: "Room 1",
        rack: "A-22",
        bags: 356,
        weight: "178 MT",
        loadDate: "2024-12-28",
        age: 63,
        status: "warning"
    },
    {
        id: 6,
        commodity: "Potatoes",
        variety: "Pukhraj",
        farmer: "Anil Sharma",
        room: "Room 2",
        rack: "B-11",
        bags: 190,
        weight: "95 MT",
        loadDate: "2025-01-10",
        age: 50,
        status: "good"
    },
    {
        id: 7,
        commodity: "Onions",
        variety: "Agrifound",
        farmer: "Manoj Tiwari",
        room: "Room 1",
        rack: "A-05",
        bags: 88,
        weight: "44 MT",
        loadDate: "2025-02-25",
        age: 4,
        status: "fresh"
    },
    {
        id: 8,
        commodity: "Potatoes",
        variety: "Chipsona",
        farmer: "Sunil Yadav",
        room: "Room 3",
        rack: "C-09",
        bags: 160,
        weight: "80 MT",
        loadDate: "2024-12-15",
        age: 76,
        status: "warning"
    }
];
const loadingEntriesData = [
    {
        id: "LD-2025-0142",
        date: "2025-03-01",
        farmer: "Vijay Kumar",
        commodity: "Potatoes",
        variety: "Pukhraj",
        bags: 25,
        weight: "12.5 MT",
        room: "Room 1",
        rack: "A-12",
        vehicle: "UP80-AT-4521",
        gatePass: "GP-0284",
        status: "completed"
    },
    {
        id: "LD-2025-0141",
        date: "2025-02-28",
        farmer: "Pramod Singh",
        commodity: "Potatoes",
        variety: "Chipsona",
        bags: 40,
        weight: "20 MT",
        room: "Room 1",
        rack: "A-08",
        vehicle: "UP80-BT-7832",
        gatePass: "GP-0283",
        status: "completed"
    },
    {
        id: "LD-2025-0140",
        date: "2025-02-27",
        farmer: "Omveer Singh",
        commodity: "Onions",
        variety: "Nasik Red",
        bags: 15,
        weight: "7.5 MT",
        room: "Room 2",
        rack: "B-03",
        vehicle: "UP80-CT-1245",
        gatePass: "GP-0282",
        status: "completed"
    },
    {
        id: "LD-2025-0139",
        date: "2025-02-26",
        farmer: "Sunil Yadav",
        commodity: "Tomatoes",
        variety: "Hybrid",
        bags: 30,
        weight: "15 MT",
        room: "Room 3",
        rack: "C-09",
        vehicle: "UP80-AT-9087",
        gatePass: "GP-0281",
        status: "completed"
    },
    {
        id: "LD-2025-0138",
        date: "2025-02-25",
        farmer: "Manoj Tiwari",
        commodity: "Onions",
        variety: "Agrifound",
        bags: 20,
        weight: "10 MT",
        room: "Room 1",
        rack: "A-05",
        vehicle: "UP80-DT-3456",
        gatePass: "GP-0280",
        status: "completed"
    },
    {
        id: "LD-2025-0137",
        date: "2025-02-24",
        farmer: "Anil Sharma",
        commodity: "Potatoes",
        variety: "Pukhraj",
        bags: 35,
        weight: "17.5 MT",
        room: "Room 2",
        rack: "B-11",
        vehicle: "UP80-BT-6543",
        gatePass: "GP-0279",
        status: "completed"
    }
];
const dispatchEntriesData = [
    {
        id: "DS-2025-0098",
        date: "2025-03-01",
        farmer: "Omveer Singh",
        buyer: "Tanvure Traders",
        commodity: "Onions",
        bags: 12,
        weight: "6 MT",
        room: "Room 2",
        vehicle: "UP80-AT-2233",
        gatePass: "GP-0285",
        destination: "Delhi Mandi",
        status: "in-transit"
    },
    {
        id: "DS-2025-0097",
        date: "2025-02-28",
        farmer: "Vijay Kumar",
        buyer: "Krishna Agro",
        commodity: "Potatoes",
        bags: 50,
        weight: "25 MT",
        room: "Room 1",
        vehicle: "UP80-CT-4567",
        gatePass: "GP-0284",
        destination: "Lucknow",
        status: "delivered"
    },
    {
        id: "DS-2025-0096",
        date: "2025-02-27",
        farmer: "Sunil Yadav",
        buyer: "Shree Balaji Foods",
        commodity: "Tomatoes",
        bags: 20,
        weight: "10 MT",
        room: "Room 1",
        vehicle: "UP80-BT-8901",
        gatePass: "GP-0283",
        destination: "Jaipur",
        status: "delivered"
    },
    {
        id: "DS-2025-0095",
        date: "2025-02-26",
        farmer: "Pramod Singh",
        buyer: "Agra Fresh Mart",
        commodity: "Potatoes",
        bags: 30,
        weight: "15 MT",
        room: "Room 1",
        vehicle: "UP80-DT-1122",
        gatePass: "GP-0282",
        destination: "Agra Local",
        status: "delivered"
    },
    {
        id: "DS-2025-0094",
        date: "2025-02-25",
        farmer: "Anil Sharma",
        buyer: "Delhi Cold Chain",
        commodity: "Potatoes",
        bags: 45,
        weight: "22.5 MT",
        room: "Room 2",
        vehicle: "UP80-AT-3344",
        gatePass: "GP-0281",
        destination: "Delhi",
        status: "delivered"
    }
];
const billingData = {
    summary: {
        totalRevenue: 1245000,
        totalPending: 190600,
        totalCollected: 1054400,
        thisMonth: 186000
    },
    invoices: [
        {
            id: "INV-2025-0312",
            date: "2025-03-01",
            farmer: "Vijay Kumar",
            type: "Storage Rent",
            period: "Feb 2025",
            amount: 24500,
            paid: 0,
            status: "pending"
        },
        {
            id: "INV-2025-0311",
            date: "2025-02-28",
            farmer: "Omveer Singh",
            type: "Storage Rent",
            period: "Feb 2025",
            amount: 41200,
            paid: 41200,
            status: "paid"
        },
        {
            id: "INV-2025-0310",
            date: "2025-02-28",
            farmer: "Pramod Singh",
            type: "Storage Rent",
            period: "Feb 2025",
            amount: 18200,
            paid: 0,
            status: "overdue"
        },
        {
            id: "INV-2025-0309",
            date: "2025-02-27",
            farmer: "Sunil Yadav",
            type: "Loading Charges",
            period: "Feb 2025",
            amount: 5600,
            paid: 5600,
            status: "paid"
        },
        {
            id: "INV-2025-0308",
            date: "2025-02-26",
            farmer: "Ramesh Chandra",
            type: "Storage Rent",
            period: "Feb 2025",
            amount: 32100,
            paid: 0,
            status: "overdue"
        },
        {
            id: "INV-2025-0307",
            date: "2025-02-25",
            farmer: "Anil Sharma",
            type: "Storage Rent",
            period: "Feb 2025",
            amount: 12800,
            paid: 12800,
            status: "paid"
        },
        {
            id: "INV-2025-0306",
            date: "2025-02-24",
            farmer: "Manoj Tiwari",
            type: "Loading Charges",
            period: "Feb 2025",
            amount: 8500,
            paid: 8500,
            status: "paid"
        },
        {
            id: "INV-2025-0305",
            date: "2025-02-20",
            farmer: "Dinesh Gupta",
            type: "Storage Rent",
            period: "Jan 2025",
            amount: 41000,
            paid: 0,
            status: "overdue"
        }
    ]
};
const reportsData = {
    monthlyRevenue: [
        {
            month: "Sep",
            revenue: 98000,
            expenses: 42000
        },
        {
            month: "Oct",
            revenue: 125000,
            expenses: 48000
        },
        {
            month: "Nov",
            revenue: 142000,
            expenses: 51000
        },
        {
            month: "Dec",
            revenue: 168000,
            expenses: 55000
        },
        {
            month: "Jan",
            revenue: 186000,
            expenses: 58000
        },
        {
            month: "Feb",
            revenue: 195000,
            expenses: 52000
        }
    ],
    occupancyTrend: [
        {
            month: "Sep",
            occupancy: 62
        },
        {
            month: "Oct",
            occupancy: 71
        },
        {
            month: "Nov",
            occupancy: 78
        },
        {
            month: "Dec",
            occupancy: 84
        },
        {
            month: "Jan",
            occupancy: 89
        },
        {
            month: "Feb",
            occupancy: 87
        }
    ],
    topFarmers: [
        {
            name: "Omveer Singh",
            stock: "210 MT",
            revenue: 245000
        },
        {
            name: "Sunil Yadav",
            stock: "178 MT",
            revenue: 198000
        },
        {
            name: "Vijay Kumar",
            stock: "125 MT",
            revenue: 156000
        },
        {
            name: "Anil Sharma",
            stock: "95 MT",
            revenue: 112000
        },
        {
            name: "Pramod Singh",
            stock: "89 MT",
            revenue: 98000
        }
    ],
    commodityBreakdown: [
        {
            commodity: "Potatoes",
            stock: "625 MT",
            percentage: 50
        },
        {
            commodity: "Onions",
            stock: "254 MT",
            percentage: 20
        },
        {
            commodity: "Tomatoes",
            stock: "188 MT",
            percentage: 15
        },
        {
            commodity: "Others",
            stock: "183 MT",
            percentage: 15
        }
    ]
};
const iotData = {
    rooms: [
        {
            id: 1,
            name: "Room 1",
            temperature: -18.2,
            humidity: 82,
            setTemp: -18,
            setHumidity: 80,
            compressorStatus: "running",
            lastMaintenance: "2025-02-10",
            powerSource: "mains",
            history: [
                {
                    time: "00:00",
                    temp: -18.0,
                    humidity: 81
                },
                {
                    time: "04:00",
                    temp: -18.1,
                    humidity: 82
                },
                {
                    time: "08:00",
                    temp: -17.8,
                    humidity: 80
                },
                {
                    time: "12:00",
                    temp: -18.5,
                    humidity: 83
                },
                {
                    time: "16:00",
                    temp: -18.2,
                    humidity: 82
                },
                {
                    time: "20:00",
                    temp: -18.3,
                    humidity: 81
                }
            ]
        },
        {
            id: 2,
            name: "Room 2",
            temperature: -15.8,
            humidity: 78,
            setTemp: -18,
            setHumidity: 80,
            compressorStatus: "warning",
            lastMaintenance: "2025-01-22",
            powerSource: "mains",
            history: [
                {
                    time: "00:00",
                    temp: -17.5,
                    humidity: 79
                },
                {
                    time: "04:00",
                    temp: -17.0,
                    humidity: 78
                },
                {
                    time: "08:00",
                    temp: -16.5,
                    humidity: 77
                },
                {
                    time: "12:00",
                    temp: -16.0,
                    humidity: 78
                },
                {
                    time: "16:00",
                    temp: -15.8,
                    humidity: 78
                },
                {
                    time: "20:00",
                    temp: -15.5,
                    humidity: 77
                }
            ]
        },
        {
            id: 3,
            name: "Room 3",
            temperature: -18.5,
            humidity: 81,
            setTemp: -18,
            setHumidity: 80,
            compressorStatus: "running",
            lastMaintenance: "2025-02-15",
            powerSource: "mains",
            history: [
                {
                    time: "00:00",
                    temp: -18.4,
                    humidity: 80
                },
                {
                    time: "04:00",
                    temp: -18.5,
                    humidity: 81
                },
                {
                    time: "08:00",
                    temp: -18.3,
                    humidity: 80
                },
                {
                    time: "12:00",
                    temp: -18.6,
                    humidity: 82
                },
                {
                    time: "16:00",
                    temp: -18.5,
                    humidity: 81
                },
                {
                    time: "20:00",
                    temp: -18.4,
                    humidity: 80
                }
            ]
        }
    ],
    alerts: [
        {
            id: 1,
            room: "Room 2",
            type: "temperature",
            message: "Temperature 2.2°C above set point",
            severity: "warning",
            time: "10 min ago"
        },
        {
            id: 2,
            room: "Room 2",
            type: "compressor",
            message: "Compressor efficiency degraded",
            severity: "warning",
            time: "25 min ago"
        },
        {
            id: 3,
            room: "Room 1",
            type: "door",
            message: "Door opened for >5 minutes",
            severity: "info",
            time: "1 hr ago"
        }
    ],
    powerStatus: {
        source: "Mains",
        backup: "DG Set Ready",
        voltage: 415,
        frequency: 50.1,
        dailyConsumption: "2,450 kWh"
    }
};
const settingsData = {
    facility: {
        name: "Manjula Cold Storage",
        location: "Agra, Uttar Pradesh",
        capacity: "1,500 MT",
        rooms: 3,
        license: "CS/UP/AGR/2023/0456",
        owner: "Manjula Enterprises Pvt Ltd"
    },
    billing: {
        rentPerMT: 150,
        loadingCharge: 500,
        unloadingCharge: 500,
        gstRate: 18,
        lateFee: 2,
        billingCycle: "Monthly"
    },
    alerts: {
        tempThreshold: 2,
        humidityThreshold: 5,
        powerBackupDelay: 30,
        overduePaymentDays: 15,
        stockAgingAlert: 90
    },
    users: [
        {
            id: 1,
            name: "Admin",
            email: "admin@manjulacs.com",
            role: "Administrator",
            lastLogin: "2025-03-01 09:15"
        },
        {
            id: 2,
            name: "Rajesh Kumar",
            email: "rajesh@manjulacs.com",
            role: "Manager",
            lastLogin: "2025-03-01 08:30"
        },
        {
            id: 3,
            name: "Seema Devi",
            email: "seema@manjulacs.com",
            role: "Accountant",
            lastLogin: "2025-02-28 17:45"
        },
        {
            id: 4,
            name: "Gate Operator",
            email: "gate@manjulacs.com",
            role: "Operator",
            lastLogin: "2025-03-01 07:00"
        }
    ]
};
const sidebarMenuItems = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: "layout-dashboard",
        path: "/"
    },
    {
        id: "farmers",
        label: "Farmers",
        icon: "users",
        path: "/farmers"
    },
    {
        id: "inventory",
        label: "Inventory",
        icon: "warehouse",
        path: "/inventory"
    },
    {
        id: "loading",
        label: "Loading",
        icon: "package-plus",
        path: "/loading"
    },
    {
        id: "dispatch",
        label: "Dispatch",
        icon: "truck",
        path: "/dispatch"
    },
    {
        id: "billing",
        label: "Billing & Payments",
        icon: "credit-card",
        path: "/billing"
    },
    {
        id: "reports",
        label: "Reports",
        icon: "bar-chart-3",
        path: "/reports"
    },
    {
        id: "iot",
        label: "IoT Monitoring",
        icon: "wifi",
        path: "/iot"
    },
    {
        id: "settings",
        label: "Settings",
        icon: "settings",
        path: "/settings"
    }
];
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/warehouse.js [app-ssr] (ecmascript) <export default as Warehouse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/package-plus.js [app-ssr] (ecmascript) <export default as PackagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/wifi.js [app-ssr] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/data/mockData.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const iconMap = {
    "layout-dashboard": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
    users: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    warehouse: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"],
    "package-plus": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"],
    truck: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
    "credit-card": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
    "bar-chart-3": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
    wifi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
    settings: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
};
function Sidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "fixed left-0 top-0 h-screen bg-[#33cc33] flex flex-col z-50",
        style: {
            width: 220
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "28px 24px",
                    borderBottom: "1px solid rgba(255,255,255,0.1)"
                },
                className: "flex items-center justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-full flex items-center justify-center p-2",
                        style: {
                            width: 44,
                            height: 44,
                            backgroundColor: "rgba(255,255,255,0.0)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/ann-setu-logo.svg",
                            alt: "Logo",
                            className: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-black font-bold text-lg tracking-tight",
                        children: "Ann Setu"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 overflow-y-auto",
                style: {
                    padding: "32px 20px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarMenuItems"].map((item)=>{
                        const Icon = iconMap[item.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"];
                        const isActive = pathname === item.path || item.path !== "/" && pathname.startsWith(item.path);
                        const isDashboardActive = item.path === "/" && pathname === "/";
                        const active = isActive || isDashboardActive;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.path,
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "10px 16px",
                                    borderRadius: 8,
                                    fontSize: 13,
                                    fontWeight: 500,
                                    textDecoration: "none",
                                    transition: "all 0.2s",
                                    backgroundColor: active ? "rgba(0,0,0,0.15)" : "transparent",
                                    color: active ? "#000" : "rgba(0,0,0,0.6)"
                                },
                                onMouseEnter: (e)=>{
                                    if (!active) {
                                        e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.08)";
                                        e.currentTarget.style.color = "#000";
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    if (!active) {
                                        e.currentTarget.style.backgroundColor = "transparent";
                                        e.currentTarget.style.color = "rgba(0,0,0,0.6)";
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        style: {
                                            width: 18,
                                            height: 18,
                                            flexShrink: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
;
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "h-16 bg-[#ffffff] mx-4 rounded-xl px-6 flex items-center justify-between sticky top-0 z-50 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-xl bg-black/10 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-black font-bold text-sm",
                            children: "M"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-black font-bold text-sm leading-tight",
                                children: "Manjula"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black/60 text-[11px] tracking-wide",
                                children: "Cold Storage – Agra"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 max-w-lg mx-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search chambers, farmers...",
                            className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/8 text-black text-sm placeholder-black/40 border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/15 focus:bg-black/10 transition-all"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "relative p-2 rounded-lg hover:bg-black/10 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                            className: "w-5 h-5 text-black/70"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "relative p-2 rounded-lg hover:bg-black/10 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "w-5 h-5 text-black/70"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center",
                                children: "1"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-full bg-black/15 text-black font-bold text-sm flex items-center justify-center cursor-pointer hover:bg-black/20 transition-colors",
                        children: "M"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/components/AuthGuard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/context/AuthContext.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AuthGuard({ children }) {
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [
        loading,
        user,
        router
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#F0F2F5]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 border-4 border-[#33cc33] border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/AuthGuard.jsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 font-medium",
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/AuthGuard.jsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/AuthGuard.jsx",
                lineNumber: 25,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/components/AuthGuard.jsx",
            lineNumber: 24,
            columnNumber: 13
        }, this);
    }
    if (!user) return null; // will redirect above
    return children;
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/layout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$components$2f$layout$2f$Sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Sidebar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$components$2f$layout$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/components/layout/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$components$2f$AuthGuard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/components/AuthGuard.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DashboardLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$components$2f$AuthGuard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen bg-[#F0F2F5]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$components$2f$layout$2f$Sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/layout.jsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[220px] flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/layout.jsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$components$2f$layout$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/layout.jsx",
                            lineNumber: 14,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "flex-1 overflow-x-hidden overflow-y-auto",
                            style: {
                                padding: "24px 28px"
                            },
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/layout.jsx",
                            lineNumber: 15,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/layout.jsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/layout.jsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/layout.jsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b85881cc._.js.map