module.exports = [
"[project]/Desktop/Coding/cold-storage-dashboard/src/hooks/useFetch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useFetch",
    ()=>useFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useFetch(fetchFn, deps = []) {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        execute();
    }, deps);
    return {
        data,
        loading,
        error,
        refetch: execute
    };
}
const __TURBOPACK__default__export__ = useFetch;
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/services/dashboardService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/data/mockData.js [app-ssr] (ecmascript)");
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["statsData"];
    },
    /**
   * Fetch room utilization data
   * Backend endpoint: GET /api/dashboard/room-utilization
   */ async getRoomUtilization () {
        await delay(400);
        // return api.get('/dashboard/room-utilization');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roomUtilizationData"];
    },
    /**
   * Fetch live alerts
   * Backend endpoint: GET /api/dashboard/alerts
   */ async getLiveAlerts () {
        await delay(250);
        // return api.get('/dashboard/alerts');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["liveAlertsData"];
    },
    /**
   * Fetch commodity distribution
   * Backend endpoint: GET /api/dashboard/commodity-distribution
   */ async getCommodityDistribution () {
        await delay(350);
        // return api.get('/dashboard/commodity-distribution');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commodityDistributionData"];
    },
    /**
   * Fetch stock aging data
   * Backend endpoint: GET /api/dashboard/stock-aging
   */ async getStockAging () {
        await delay(300);
        // return api.get('/dashboard/stock-aging');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stockAgingData"];
    },
    /**
   * Fetch payment collection data
   * Backend endpoint: GET /api/dashboard/payments
   */ async getPaymentCollection () {
        await delay(350);
        // return api.get('/dashboard/payments');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paymentCollectionData"];
    },
    /**
   * Fetch recent activity
   * Backend endpoint: GET /api/dashboard/recent-activity
   */ async getRecentActivity () {
        await delay(200);
        // return api.get('/dashboard/recent-activity');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recentActivityData"];
    },
    /**
   * Fetch inventory preview
   * Backend endpoint: GET /api/dashboard/inventory-preview
   */ async getInventoryPreview () {
        await delay(300);
        // return api.get('/dashboard/inventory-preview');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventoryPreviewData"];
    },
    // ─── PAGE-LEVEL SERVICES ────────────────────────────
    async getFarmers () {
        await delay(300);
        // return api.get('/farmers');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["farmersData"];
    },
    async getInventory () {
        await delay(350);
        // return api.get('/inventory');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inventoryData"];
    },
    async getLoadingEntries () {
        await delay(300);
        // return api.get('/loading');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadingEntriesData"];
    },
    async getDispatchEntries () {
        await delay(300);
        // return api.get('/dispatch');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchEntriesData"];
    },
    async getBilling () {
        await delay(350);
        // return api.get('/billing');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billingData"];
    },
    async getReports () {
        await delay(400);
        // return api.get('/reports');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reportsData"];
    },
    async getIoTData () {
        await delay(300);
        // return api.get('/iot');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iotData"];
    },
    async getSettings () {
        await delay(200);
        // return api.get('/settings');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$data$2f$mockData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["settingsData"];
    }
};
const __TURBOPACK__default__export__ = dashboardService;
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dispatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/hooks/useFetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$services$2f$dashboardService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/services/dashboardService.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const statusConfig = {
    "in-transit": {
        bg: "#FFF3E0",
        color: "#E65100",
        label: "In Transit"
    },
    delivered: {
        bg: "#E8F5E9",
        color: "#2D5A27",
        label: "Delivered"
    }
};
function Dispatch() {
    const { data, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$services$2f$dashboardService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getDispatchEntries());
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    if (loading || !data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: 20
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 animate-pulse",
                style: {
                    padding: "22px 24px",
                    height: 500
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    const filtered = data.filter((e)=>e.id.toLowerCase().includes(search.toLowerCase()) || e.farmer.toLowerCase().includes(search.toLowerCase()) || e.buyer.toLowerCase().includes(search.toLowerCase()));
    const inTransit = data.filter((e)=>e.status === "in-transit").length;
    const delivered = data.filter((e)=>e.status === "delivered").length;
    const totalDispatched = data.reduce((s, e)=>s + parseFloat(e.weight), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16
                },
                children: [
                    {
                        label: "In Transit",
                        value: inTransit
                    },
                    {
                        label: "Delivered",
                        value: delivered
                    },
                    {
                        label: "Total Dispatched",
                        value: `${totalDispatched} MT`
                    }
                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl border border-gray-200 shadow-sm",
                        style: {
                            padding: "20px 22px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 11,
                                    marginBottom: 8
                                },
                                className: "font-semibold text-gray-400 uppercase tracking-wider",
                                children: s.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 28
                                },
                                className: "font-bold text-gray-900",
                                children: s.value
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.label, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 shadow-sm",
                style: {
                    padding: "22px 24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        style: {
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 17
                                },
                                className: "font-semibold text-gray-900",
                                children: "Dispatch Entries"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                style: {
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search dispatches...",
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
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex items-center gap-2 bg-[#2D5A27] text-white rounded-lg font-medium hover:bg-[#234a1f] transition-colors",
                                        style: {
                                            padding: "9px 18px",
                                            fontSize: 14
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            " New Dispatch"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            overflowX: "auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            style: {
                                width: "100%",
                                borderCollapse: "collapse"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-gray-200",
                                        children: [
                                            "Dispatch ID",
                                            "Date",
                                            "Farmer",
                                            "Buyer",
                                            "Commodity",
                                            "Bags / Weight",
                                            "Destination",
                                            "Vehicle",
                                            "Status"
                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-left font-semibold text-gray-400 uppercase tracking-wider",
                                                style: {
                                                    padding: "10px 10px",
                                                    fontSize: 11
                                                },
                                                children: h
                                            }, h, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: filtered.map((entry)=>{
                                        const sc = statusConfig[entry.status] || statusConfig.delivered;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 10px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        style: {
                                                            gap: 6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                className: "w-4 h-4 text-blue-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                                lineNumber: 90,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 13
                                                                },
                                                                className: "font-medium text-blue-600",
                                                                children: entry.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                                lineNumber: 91,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                        lineNumber: 89,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 10px",
                                                        fontSize: 13
                                                    },
                                                    className: "text-gray-600",
                                                    children: entry.date
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 10px",
                                                        fontSize: 13
                                                    },
                                                    className: "text-gray-700 font-medium",
                                                    children: entry.farmer
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 10px",
                                                        fontSize: 13
                                                    },
                                                    className: "text-gray-700 font-medium",
                                                    children: entry.buyer
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 10px",
                                                        fontSize: 13
                                                    },
                                                    className: "text-gray-600",
                                                    children: entry.commodity
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 10px",
                                                        fontSize: 14
                                                    },
                                                    className: "font-semibold text-gray-900",
                                                    children: [
                                                        entry.bags,
                                                        " bags / ",
                                                        entry.weight
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 10px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        style: {
                                                            gap: 4
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-3.5 h-3.5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                                lineNumber: 101,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 13
                                                                },
                                                                className: "text-gray-600",
                                                                children: entry.destination
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                                lineNumber: 102,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 10px",
                                                        fontSize: 13
                                                    },
                                                    className: "text-gray-600",
                                                    children: entry.vehicle
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        padding: "14px 10px"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full font-medium",
                                                        style: {
                                                            fontSize: 12,
                                                            padding: "4px 12px",
                                                            backgroundColor: sc.bg,
                                                            color: sc.color
                                                        },
                                                        children: sc.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                        lineNumber: 107,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, entry.id, true, {
                                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/dispatch/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$views$2f$Dispatch$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/views/Dispatch.jsx [app-ssr] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$views$2f$Dispatch$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Plus
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MapPin
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=Desktop_Coding_cold-storage-dashboard_b689380c._.js.map