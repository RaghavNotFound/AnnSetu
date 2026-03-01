// Mock data for the Cold Storage Dashboard
// Replace these with actual API calls when integrating a backend

export const statsData = {
  totalFarmers: {
    value: 215,
    change: 5,
    changeLabel: "from yesterday",
    trend: "up",
  },
  totalInventory: {
    value: 1250,
    unit: "MT",
    progress: 75, // percentage of capacity
  },
  occupancy: {
    value: 87,
    unit: "%",
    change: 3,
    changeLabel: "from yesterday",
    trend: "up",
  },
  todaysLoading: {
    value: 92,
    unit: "MT",
    change: 22,
    changeLabel: "",
    trend: "up",
    progress: 65,
  },
  pendingRent: {
    value: 190600,
    change: 15400,
    trend: "up",
  },
};

export const roomUtilizationData = {
  overall: 85,
  change: 3,
  changeLabel: "from yesterday",
  trend: "up",
  rooms: [
    { name: "Room 1", utilization: 85, color: "#2D5A27" },
    { name: "Room 2", utilization: 64, color: "#4CAF50" },
    { name: "Room 3", utilization: 92, color: "#81C784" },
  ],
};

export const liveAlertsData = {
  totalValue: "₹16 Lakhs",
  alerts: [
    {
      id: 1,
      type: "danger",
      icon: "thermometer",
      message: "Temperature deviation in",
      location: "Room 2",
    },
    {
      id: 2,
      type: "warning",
      icon: "zap",
      message: "Power backup running",
      location: "",
    },
    {
      id: 3,
      type: "info",
      icon: "credit-card",
      message: "5 overdue payments",
      location: "",
    },
    {
      id: 4,
      type: "caution",
      icon: "alert-triangle",
      message: "3 aging stocks > 120 days",
      location: "",
    },
  ],
};

export const commodityDistributionData = [
  { name: "Potatoes", value: 45, color: "#2D5A27" },
  { name: "Onions", value: 26, color: "#81C784" },
  { name: "Tomatoes", value: 20, color: "#C8E6C9" },
  { name: "Others", value: 9, color: "#E8F5E9" },
];

export const stockAgingData = [
  { range: "0-30 days", value: 510, unit: "MT", color: "#2D5A27" },
  { range: "30-60 days", value: 390, unit: "MT", color: "#4CAF50" },
  { range: "60-90 days", value: 270, unit: "MT", color: "#81C784" },
  { range: "90+ days", value: 80, unit: "MT", color: "#C8E6C9" },
];

export const paymentCollectionData = {
  totalValue: "₹16 lakhs",
  items: [
    {
      id: 1,
      label: "Farmer Due",
      amount: 160000,
      icon: "user",
      color: "#FF9800",
      progress: 60,
    },
    {
      id: 2,
      label: "Vendor Due",
      amount: 75300,
      icon: "truck",
      color: "#FF9800",
      progress: 35,
    },
    {
      id: 3,
      label: "Rent Due",
      amount: 190600,
      icon: "home",
      color: "#4CAF50",
      progress: 80,
    },
    {
      id: 4,
      label: "Interest Generated",
      amount: 32400,
      icon: "trending-up",
      color: "#2196F3",
      progress: 20,
    },
  ],
};

export const recentActivityData = [
  {
    id: 1,
    type: "loading",
    icon: "package",
    color: "#4CAF50",
    title: "Loading entry",
    description: "Added 25 packets from Vijay Kumar",
    date: "April 16",
  },
  {
    id: 2,
    type: "dispatch",
    icon: "truck",
    color: "#2196F3",
    title: "Dispatch entry",
    description: "Added 12 packets to Tanvure Traders",
    date: "April 15",
  },
  {
    id: 3,
    type: "payment",
    icon: "check-circle",
    color: "#4CAF50",
    title: "Payment received",
    description: "₹23,000 money from Pramod S./Omveer Singh",
    date: "15",
  },
];

export const inventoryPreviewData = [
  {
    id: 1,
    icon: "🥔",
    ageRange: "6-30 p.1",
    count: 5,
    location: "due in Agra...",
    quantity: "510 MT",
    color: "#FF9800",
  },
  {
    id: 2,
    icon: "🧅",
    ageRange: "60-90 days",
    location: "in Agra...",
    quantity: "390 MT",
    color: "#2196F3",
  },
  {
    id: 3,
    icon: "🥬",
    ageRange: "80+ days",
    location: "",
    quantity: "270 MT",
    color: "#4CAF50",
  },
];

// ─── FARMERS PAGE ───────────────────────────────────
export const farmersData = [
  { id: 1, name: "Vijay Kumar", village: "Khandauli", phone: "9876543210", totalStock: "125 MT", rooms: "R1, R2", pendingRent: 24500, joinDate: "2024-01-15", status: "active" },
  { id: 2, name: "Pramod Singh", village: "Fatehpur Sikri", phone: "9876543211", totalStock: "89 MT", rooms: "R1", pendingRent: 18200, joinDate: "2024-02-20", status: "active" },
  { id: 3, name: "Omveer Singh", village: "Shamshabad", phone: "9876543212", totalStock: "210 MT", rooms: "R2, R3", pendingRent: 0, joinDate: "2023-11-08", status: "active" },
  { id: 4, name: "Ramesh Chandra", village: "Bah", phone: "9876543213", totalStock: "56 MT", rooms: "R3", pendingRent: 32100, joinDate: "2024-03-01", status: "active" },
  { id: 5, name: "Sunil Yadav", village: "Etmadpur", phone: "9876543214", totalStock: "178 MT", rooms: "R1, R3", pendingRent: 5600, joinDate: "2023-09-12", status: "active" },
  { id: 6, name: "Dinesh Gupta", village: "Pinahat", phone: "9876543215", totalStock: "0 MT", rooms: "—", pendingRent: 41000, joinDate: "2023-06-20", status: "inactive" },
  { id: 7, name: "Anil Sharma", village: "Kiraoli", phone: "9876543216", totalStock: "95 MT", rooms: "R2", pendingRent: 12800, joinDate: "2024-04-10", status: "active" },
  { id: 8, name: "Manoj Tiwari", village: "Agra", phone: "9876543217", totalStock: "44 MT", rooms: "R1", pendingRent: 0, joinDate: "2024-05-15", status: "active" },
];

// ─── INVENTORY PAGE ─────────────────────────────────
export const inventoryData = [
  { id: 1, commodity: "Potatoes", variety: "Pukhraj", farmer: "Vijay Kumar", room: "Room 1", rack: "A-12", bags: 250, weight: "125 MT", loadDate: "2025-01-20", age: 40, status: "good" },
  { id: 2, commodity: "Potatoes", variety: "Chipsona", farmer: "Pramod Singh", room: "Room 1", rack: "A-08", bags: 178, weight: "89 MT", loadDate: "2025-02-05", age: 24, status: "good" },
  { id: 3, commodity: "Onions", variety: "Nasik Red", farmer: "Omveer Singh", room: "Room 2", rack: "B-03", bags: 420, weight: "210 MT", loadDate: "2024-11-12", age: 109, status: "aging" },
  { id: 4, commodity: "Potatoes", variety: "Kufri Jyoti", farmer: "Ramesh Chandra", room: "Room 3", rack: "C-15", bags: 112, weight: "56 MT", loadDate: "2025-02-18", age: 11, status: "fresh" },
  { id: 5, commodity: "Tomatoes", variety: "Hybrid", farmer: "Sunil Yadav", room: "Room 1", rack: "A-22", bags: 356, weight: "178 MT", loadDate: "2024-12-28", age: 63, status: "warning" },
  { id: 6, commodity: "Potatoes", variety: "Pukhraj", farmer: "Anil Sharma", room: "Room 2", rack: "B-11", bags: 190, weight: "95 MT", loadDate: "2025-01-10", age: 50, status: "good" },
  { id: 7, commodity: "Onions", variety: "Agrifound", farmer: "Manoj Tiwari", room: "Room 1", rack: "A-05", bags: 88, weight: "44 MT", loadDate: "2025-02-25", age: 4, status: "fresh" },
  { id: 8, commodity: "Potatoes", variety: "Chipsona", farmer: "Sunil Yadav", room: "Room 3", rack: "C-09", bags: 160, weight: "80 MT", loadDate: "2024-12-15", age: 76, status: "warning" },
];

// ─── LOADING ENTRIES ────────────────────────────────
export const loadingEntriesData = [
  { id: "LD-2025-0142", date: "2025-03-01", farmer: "Vijay Kumar", commodity: "Potatoes", variety: "Pukhraj", bags: 25, weight: "12.5 MT", room: "Room 1", rack: "A-12", vehicle: "UP80-AT-4521", gatePass: "GP-0284", status: "completed" },
  { id: "LD-2025-0141", date: "2025-02-28", farmer: "Pramod Singh", commodity: "Potatoes", variety: "Chipsona", bags: 40, weight: "20 MT", room: "Room 1", rack: "A-08", vehicle: "UP80-BT-7832", gatePass: "GP-0283", status: "completed" },
  { id: "LD-2025-0140", date: "2025-02-27", farmer: "Omveer Singh", commodity: "Onions", variety: "Nasik Red", bags: 15, weight: "7.5 MT", room: "Room 2", rack: "B-03", vehicle: "UP80-CT-1245", gatePass: "GP-0282", status: "completed" },
  { id: "LD-2025-0139", date: "2025-02-26", farmer: "Sunil Yadav", commodity: "Tomatoes", variety: "Hybrid", bags: 30, weight: "15 MT", room: "Room 3", rack: "C-09", vehicle: "UP80-AT-9087", gatePass: "GP-0281", status: "completed" },
  { id: "LD-2025-0138", date: "2025-02-25", farmer: "Manoj Tiwari", commodity: "Onions", variety: "Agrifound", bags: 20, weight: "10 MT", room: "Room 1", rack: "A-05", vehicle: "UP80-DT-3456", gatePass: "GP-0280", status: "completed" },
  { id: "LD-2025-0137", date: "2025-02-24", farmer: "Anil Sharma", commodity: "Potatoes", variety: "Pukhraj", bags: 35, weight: "17.5 MT", room: "Room 2", rack: "B-11", vehicle: "UP80-BT-6543", gatePass: "GP-0279", status: "completed" },
];

// ─── DISPATCH ENTRIES ───────────────────────────────
export const dispatchEntriesData = [
  { id: "DS-2025-0098", date: "2025-03-01", farmer: "Omveer Singh", buyer: "Tanvure Traders", commodity: "Onions", bags: 12, weight: "6 MT", room: "Room 2", vehicle: "UP80-AT-2233", gatePass: "GP-0285", destination: "Delhi Mandi", status: "in-transit" },
  { id: "DS-2025-0097", date: "2025-02-28", farmer: "Vijay Kumar", buyer: "Krishna Agro", commodity: "Potatoes", bags: 50, weight: "25 MT", room: "Room 1", vehicle: "UP80-CT-4567", gatePass: "GP-0284", destination: "Lucknow", status: "delivered" },
  { id: "DS-2025-0096", date: "2025-02-27", farmer: "Sunil Yadav", buyer: "Shree Balaji Foods", commodity: "Tomatoes", bags: 20, weight: "10 MT", room: "Room 1", vehicle: "UP80-BT-8901", gatePass: "GP-0283", destination: "Jaipur", status: "delivered" },
  { id: "DS-2025-0095", date: "2025-02-26", farmer: "Pramod Singh", buyer: "Agra Fresh Mart", commodity: "Potatoes", bags: 30, weight: "15 MT", room: "Room 1", vehicle: "UP80-DT-1122", gatePass: "GP-0282", destination: "Agra Local", status: "delivered" },
  { id: "DS-2025-0094", date: "2025-02-25", farmer: "Anil Sharma", buyer: "Delhi Cold Chain", commodity: "Potatoes", bags: 45, weight: "22.5 MT", room: "Room 2", vehicle: "UP80-AT-3344", gatePass: "GP-0281", destination: "Delhi", status: "delivered" },
];

// ─── BILLING & PAYMENTS ─────────────────────────────
export const billingData = {
  summary: { totalRevenue: 1245000, totalPending: 190600, totalCollected: 1054400, thisMonth: 186000 },
  invoices: [
    { id: "INV-2025-0312", date: "2025-03-01", farmer: "Vijay Kumar", type: "Storage Rent", period: "Feb 2025", amount: 24500, paid: 0, status: "pending" },
    { id: "INV-2025-0311", date: "2025-02-28", farmer: "Omveer Singh", type: "Storage Rent", period: "Feb 2025", amount: 41200, paid: 41200, status: "paid" },
    { id: "INV-2025-0310", date: "2025-02-28", farmer: "Pramod Singh", type: "Storage Rent", period: "Feb 2025", amount: 18200, paid: 0, status: "overdue" },
    { id: "INV-2025-0309", date: "2025-02-27", farmer: "Sunil Yadav", type: "Loading Charges", period: "Feb 2025", amount: 5600, paid: 5600, status: "paid" },
    { id: "INV-2025-0308", date: "2025-02-26", farmer: "Ramesh Chandra", type: "Storage Rent", period: "Feb 2025", amount: 32100, paid: 0, status: "overdue" },
    { id: "INV-2025-0307", date: "2025-02-25", farmer: "Anil Sharma", type: "Storage Rent", period: "Feb 2025", amount: 12800, paid: 12800, status: "paid" },
    { id: "INV-2025-0306", date: "2025-02-24", farmer: "Manoj Tiwari", type: "Loading Charges", period: "Feb 2025", amount: 8500, paid: 8500, status: "paid" },
    { id: "INV-2025-0305", date: "2025-02-20", farmer: "Dinesh Gupta", type: "Storage Rent", period: "Jan 2025", amount: 41000, paid: 0, status: "overdue" },
  ],
};

// ─── REPORTS ────────────────────────────────────────
export const reportsData = {
  monthlyRevenue: [
    { month: "Sep", revenue: 98000, expenses: 42000 },
    { month: "Oct", revenue: 125000, expenses: 48000 },
    { month: "Nov", revenue: 142000, expenses: 51000 },
    { month: "Dec", revenue: 168000, expenses: 55000 },
    { month: "Jan", revenue: 186000, expenses: 58000 },
    { month: "Feb", revenue: 195000, expenses: 52000 },
  ],
  occupancyTrend: [
    { month: "Sep", occupancy: 62 },
    { month: "Oct", occupancy: 71 },
    { month: "Nov", occupancy: 78 },
    { month: "Dec", occupancy: 84 },
    { month: "Jan", occupancy: 89 },
    { month: "Feb", occupancy: 87 },
  ],
  topFarmers: [
    { name: "Omveer Singh", stock: "210 MT", revenue: 245000 },
    { name: "Sunil Yadav", stock: "178 MT", revenue: 198000 },
    { name: "Vijay Kumar", stock: "125 MT", revenue: 156000 },
    { name: "Anil Sharma", stock: "95 MT", revenue: 112000 },
    { name: "Pramod Singh", stock: "89 MT", revenue: 98000 },
  ],
  commodityBreakdown: [
    { commodity: "Potatoes", stock: "625 MT", percentage: 50 },
    { commodity: "Onions", stock: "254 MT", percentage: 20 },
    { commodity: "Tomatoes", stock: "188 MT", percentage: 15 },
    { commodity: "Others", stock: "183 MT", percentage: 15 },
  ],
};

// ─── IOT MONITORING ─────────────────────────────────
export const iotData = {
  rooms: [
    {
      id: 1, name: "Room 1", temperature: -18.2, humidity: 82, setTemp: -18, setHumidity: 80,
      compressorStatus: "running", lastMaintenance: "2025-02-10", powerSource: "mains",
      history: [
        { time: "00:00", temp: -18.0, humidity: 81 },
        { time: "04:00", temp: -18.1, humidity: 82 },
        { time: "08:00", temp: -17.8, humidity: 80 },
        { time: "12:00", temp: -18.5, humidity: 83 },
        { time: "16:00", temp: -18.2, humidity: 82 },
        { time: "20:00", temp: -18.3, humidity: 81 },
      ],
    },
    {
      id: 2, name: "Room 2", temperature: -15.8, humidity: 78, setTemp: -18, setHumidity: 80,
      compressorStatus: "warning", lastMaintenance: "2025-01-22", powerSource: "mains",
      history: [
        { time: "00:00", temp: -17.5, humidity: 79 },
        { time: "04:00", temp: -17.0, humidity: 78 },
        { time: "08:00", temp: -16.5, humidity: 77 },
        { time: "12:00", temp: -16.0, humidity: 78 },
        { time: "16:00", temp: -15.8, humidity: 78 },
        { time: "20:00", temp: -15.5, humidity: 77 },
      ],
    },
    {
      id: 3, name: "Room 3", temperature: -18.5, humidity: 81, setTemp: -18, setHumidity: 80,
      compressorStatus: "running", lastMaintenance: "2025-02-15", powerSource: "mains",
      history: [
        { time: "00:00", temp: -18.4, humidity: 80 },
        { time: "04:00", temp: -18.5, humidity: 81 },
        { time: "08:00", temp: -18.3, humidity: 80 },
        { time: "12:00", temp: -18.6, humidity: 82 },
        { time: "16:00", temp: -18.5, humidity: 81 },
        { time: "20:00", temp: -18.4, humidity: 80 },
      ],
    },
  ],
  alerts: [
    { id: 1, room: "Room 2", type: "temperature", message: "Temperature 2.2°C above set point", severity: "warning", time: "10 min ago" },
    { id: 2, room: "Room 2", type: "compressor", message: "Compressor efficiency degraded", severity: "warning", time: "25 min ago" },
    { id: 3, room: "Room 1", type: "door", message: "Door opened for >5 minutes", severity: "info", time: "1 hr ago" },
  ],
  powerStatus: { source: "Mains", backup: "DG Set Ready", voltage: 415, frequency: 50.1, dailyConsumption: "2,450 kWh" },
};

// ─── SETTINGS ───────────────────────────────────────
export const settingsData = {
  facility: { name: "Manjula Cold Storage", location: "Agra, Uttar Pradesh", capacity: "1,500 MT", rooms: 3, license: "CS/UP/AGR/2023/0456", owner: "Manjula Enterprises Pvt Ltd" },
  billing: { rentPerMT: 150, loadingCharge: 500, unloadingCharge: 500, gstRate: 18, lateFee: 2, billingCycle: "Monthly" },
  alerts: { tempThreshold: 2, humidityThreshold: 5, powerBackupDelay: 30, overduePaymentDays: 15, stockAgingAlert: 90 },
  users: [
    { id: 1, name: "Admin", email: "admin@manjulacs.com", role: "Administrator", lastLogin: "2025-03-01 09:15" },
    { id: 2, name: "Rajesh Kumar", email: "rajesh@manjulacs.com", role: "Manager", lastLogin: "2025-03-01 08:30" },
    { id: 3, name: "Seema Devi", email: "seema@manjulacs.com", role: "Accountant", lastLogin: "2025-02-28 17:45" },
    { id: 4, name: "Gate Operator", email: "gate@manjulacs.com", role: "Operator", lastLogin: "2025-03-01 07:00" },
  ],
};

export const sidebarMenuItems = [
  { id: "dashboard", label: "Dashboard", icon: "layout-dashboard", path: "/" },
  { id: "farmers", label: "Farmers", icon: "users", path: "/farmers" },
  { id: "inventory", label: "Inventory", icon: "warehouse", path: "/inventory" },
  { id: "loading", label: "Loading", icon: "package-plus", path: "/loading" },
  { id: "dispatch", label: "Dispatch", icon: "truck", path: "/dispatch" },
  { id: "billing", label: "Billing & Payments", icon: "credit-card", path: "/billing" },
  { id: "reports", label: "Reports", icon: "bar-chart-3", path: "/reports" },
  { id: "iot", label: "IoT Monitoring", icon: "wifi", path: "/iot" },
  { id: "settings", label: "Settings", icon: "settings", path: "/settings" },
];
