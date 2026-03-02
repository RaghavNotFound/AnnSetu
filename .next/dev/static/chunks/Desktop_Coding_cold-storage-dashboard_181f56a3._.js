(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Coding/cold-storage-dashboard/src/hooks/useFetch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useFetch",
    ()=>useFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useFetch(fetchFn, deps = []) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const execute = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const result = await fetchFn();
            setData(result);
        } catch (err) {
            setError(err.message || "An error occurred");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFetch.useEffect": ()=>{
            execute();
        }
    }["useFetch.useEffect"], deps);
    return {
        data,
        loading,
        error,
        refetch: execute
    };
}
_s(useFetch, "RiL7vLwmC7ZWXKL/bXt2EIBjBYk=");
const __TURBOPACK__default__export__ = useFetch;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/services/dashboardService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardService",
    ()=>dashboardService,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Dashboard Service
 * 
 * Currently returns mock data. When backend is ready:
 * 1. Import api from './api'
 * 2. Replace mock imports with api.get() calls
 * 3. Keep the same return shape so components don't need changes
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/data/mockData.js [app-client] (ecmascript)");
;
// Simulate network delay for realistic loading states
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
const dashboardService = {
    /**
   * Fetch all dashboard stats (top cards)
   * Backend endpoint: GET /api/dashboard/stats
   */ async getStats () {
        await delay(300);
        // return api.get('/dashboard/stats');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statsData"];
    },
    /**
   * Fetch room utilization data
   * Backend endpoint: GET /api/dashboard/room-utilization
   */ async getRoomUtilization () {
        await delay(400);
        // return api.get('/dashboard/room-utilization');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roomUtilizationData"];
    },
    /**
   * Fetch live alerts
   * Backend endpoint: GET /api/dashboard/alerts
   */ async getLiveAlerts () {
        await delay(250);
        // return api.get('/dashboard/alerts');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liveAlertsData"];
    },
    /**
   * Fetch commodity distribution
   * Backend endpoint: GET /api/dashboard/commodity-distribution
   */ async getCommodityDistribution () {
        await delay(350);
        // return api.get('/dashboard/commodity-distribution');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commodityDistributionData"];
    },
    /**
   * Fetch stock aging data
   * Backend endpoint: GET /api/dashboard/stock-aging
   */ async getStockAging () {
        await delay(300);
        // return api.get('/dashboard/stock-aging');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stockAgingData"];
    },
    /**
   * Fetch payment collection data
   * Backend endpoint: GET /api/dashboard/payments
   */ async getPaymentCollection () {
        await delay(350);
        // return api.get('/dashboard/payments');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paymentCollectionData"];
    },
    /**
   * Fetch recent activity
   * Backend endpoint: GET /api/dashboard/recent-activity
   */ async getRecentActivity () {
        await delay(200);
        // return api.get('/dashboard/recent-activity');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recentActivityData"];
    },
    /**
   * Fetch inventory preview
   * Backend endpoint: GET /api/dashboard/inventory-preview
   */ async getInventoryPreview () {
        await delay(300);
        // return api.get('/dashboard/inventory-preview');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventoryPreviewData"];
    },
    // ─── PAGE-LEVEL SERVICES ────────────────────────────
    async getFarmers () {
        await delay(300);
        // return api.get('/farmers');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["farmersData"];
    },
    async getInventory () {
        await delay(350);
        // return api.get('/inventory');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inventoryData"];
    },
    async getLoadingEntries () {
        await delay(300);
        // return api.get('/loading');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadingEntriesData"];
    },
    async getDispatchEntries () {
        await delay(300);
        // return api.get('/dispatch');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchEntriesData"];
    },
    async getBilling () {
        await delay(350);
        // return api.get('/billing');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["billingData"];
    },
    async getReports () {
        await delay(400);
        // return api.get('/reports');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reportsData"];
    },
    async getIoTData () {
        await delay(300);
        // return api.get('/iot');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iotData"];
    },
    async getSettings () {
        await delay(200);
        // return api.get('/settings');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["settingsData"];
    }
};
const __TURBOPACK__default__export__ = dashboardService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Inventory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/hooks/useFetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$services$2f$dashboardService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/services/dashboardService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const statusConfig = {
    fresh: {
        bg: "#E8F5E9",
        color: "#2D5A27",
        label: "Fresh"
    },
    good: {
        bg: "#E3F2FD",
        color: "#1565C0",
        label: "Good"
    },
    warning: {
        bg: "#FFF3E0",
        color: "#E65100",
        label: "Warning"
    },
    aging: {
        bg: "#FFEBEE",
        color: "#C62828",
        label: "Aging"
    }
};
function Inventory() {
    _s();
    const { data, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Inventory.useFetch": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$services$2f$dashboardService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getInventory()
    }["Inventory.useFetch"]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    if (loading || !data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 20
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 animate-pulse",
                style: {
                    padding: "22px 24px",
                    height: 500
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    const filtered = data.filter((item)=>item.commodity.toLowerCase().includes(search.toLowerCase()) || item.farmer.toLowerCase().includes(search.toLowerCase()) || item.room.toLowerCase().includes(search.toLowerCase()));
    const totalWeight = data.reduce((s, i)=>s + parseFloat(i.weight), 0);
    const totalBags = data.reduce((s, i)=>s + i.bags, 0);
    const agingCount = data.filter((i)=>i.status === "aging" || i.status === "warning").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 16
                },
                children: [
                    {
                        label: "Total Stock",
                        value: `${totalWeight} MT`
                    },
                    {
                        label: "Total Bags",
                        value: totalBags.toLocaleString("en-IN")
                    },
                    {
                        label: "Items Tracked",
                        value: data.length
                    },
                    {
                        label: "Aging Alerts",
                        value: agingCount
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl border border-gray-200 shadow-sm",
                        style: {
                            padding: "20px 22px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 11,
                                    marginBottom: 8
                                },
                                className: "font-semibold text-gray-400 uppercase tracking-wider",
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 28
                                },
                                className: "font-bold text-gray-900",
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 shadow-sm",
                style: {
                    padding: "22px 24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        style: {
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 17
                                },
                                className: "font-semibold text-gray-900",
                                children: "Inventory Details"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                style: {
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search inventory...",
                                                value: search,
                                                onChange: (e)=>setSearch(e.target.value),
                                                className: "bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20",
                                                style: {
                                                    paddingLeft: 40,
                                                    paddingRight: 16,
                                                    paddingTop: 9,
                                                    paddingBottom: 9,
                                                    width: 240
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors",
                                        style: {
                                            padding: "9px 14px",
                                            fontSize: 13
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this),
                                            " Filter"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-100 transition-colors",
                                        style: {
                                            padding: "9px 14px",
                                            fontSize: 13
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                lineNumber: 75,
                                                columnNumber: 15
                                            }, this),
                                            " Export"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflowX: "auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            style: {
                                width: "100%",
                                borderCollapse: "collapse"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-gray-200",
                                        children: [
                                            "Commodity",
                                            "Variety",
                                            "Farmer",
                                            "Room / Rack",
                                            "Bags",
                                            "Weight",
                                            "Age",
                                            "Status"
                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left font-semibold text-gray-400 uppercase tracking-wider",
                                                style: {
                                                    padding: "10px 12px",
                                                    fontSize: 11
                                                },
                                                children: h
                                            }, h, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: filtered.map((item)=>{
                                        const sc = statusConfig[item.status] || statusConfig.good;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 12px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        style: {
                                                            gap: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                className: "w-4 h-4 text-[#2D5A27]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                                lineNumber: 96,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 14
                                                                },
                                                                className: "font-medium text-gray-900",
                                                                children: item.commodity
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                                lineNumber: 97,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 12px",
                                                        fontSize: 13
                                                    },
                                                    className: "text-gray-600",
                                                    children: item.variety
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 12px",
                                                        fontSize: 13
                                                    },
                                                    className: "text-gray-700 font-medium",
                                                    children: item.farmer
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 12px",
                                                        fontSize: 13
                                                    },
                                                    className: "text-gray-600",
                                                    children: [
                                                        item.room,
                                                        " / ",
                                                        item.rack
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 12px",
                                                        fontSize: 14
                                                    },
                                                    className: "font-semibold text-gray-900",
                                                    children: item.bags
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 12px",
                                                        fontSize: 14
                                                    },
                                                    className: "font-semibold text-gray-900",
                                                    children: item.weight
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 12px",
                                                        fontSize: 13
                                                    },
                                                    className: "text-gray-600",
                                                    children: [
                                                        item.age,
                                                        " days"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 12px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full font-medium",
                                                        style: {
                                                            fontSize: 12,
                                                            padding: "4px 12px",
                                                            backgroundColor: sc.bg,
                                                            color: sc.color
                                                        },
                                                        children: sc.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                        lineNumber: 107,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(Inventory, "2FlCvafNy5gufkpfTLh4TzLfIpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Inventory;
var _c;
__turbopack_context__.k.register(_c, "Inventory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/inventory/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$views$2f$Inventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/views/Inventory.jsx [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$views$2f$Inventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Funnel
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
            key: "sc7q7i"
        }
    ]
];
const Funnel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("funnel", __iconNode);
;
 //# sourceMappingURL=funnel.js.map
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript)");
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Download
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 15V3",
            key: "m9g1x1"
        }
    ],
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "path",
        {
            d: "m7 10 5 5 5-5",
            key: "brsn70"
        }
    ]
];
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("download", __iconNode);
;
 //# sourceMappingURL=download.js.map
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript)");
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Package
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw"
        }
    ],
    [
        "path",
        {
            d: "M12 22V12",
            key: "d0xqtd"
        }
    ],
    [
        "polyline",
        {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }
    ],
    [
        "path",
        {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }
    ]
];
const Package = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("package", __iconNode);
;
 //# sourceMappingURL=package.js.map
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Package",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_Coding_cold-storage-dashboard_181f56a3._.js.map