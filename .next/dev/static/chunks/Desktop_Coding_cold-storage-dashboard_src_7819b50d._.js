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
"[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IoTMonitoring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/hooks/useFetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$services$2f$dashboardService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/services/dashboardService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const compressorStyles = {
    running: {
        bg: "#E8F5E9",
        color: "#2D5A27",
        label: "Running"
    },
    warning: {
        bg: "#FFF3E0",
        color: "#E65100",
        label: "Warning"
    },
    stopped: {
        bg: "#FFEBEE",
        color: "#C62828",
        label: "Stopped"
    }
};
const severityStyles = {
    warning: {
        bg: "#FFF3E0",
        color: "#E65100",
        border: "#FFE0B2"
    },
    info: {
        bg: "#E3F2FD",
        color: "#1565C0",
        border: "#BBDEFB"
    },
    critical: {
        bg: "#FFEBEE",
        color: "#C62828",
        border: "#FFCDD2"
    }
};
function IoTMonitoring() {
    _s();
    const { data, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "IoTMonitoring.useFetch": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$services$2f$dashboardService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getIoTData()
    }["IoTMonitoring.useFetch"]);
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
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 shadow-sm",
                style: {
                    padding: "16px 24px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between flex-wrap",
                    style: {
                        gap: 20
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            style: {
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "w-5 h-5 text-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 14
                                    },
                                    className: "font-semibold text-gray-900",
                                    children: [
                                        "Power: ",
                                        data.powerStatus.source
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        [
                            {
                                label: "Backup",
                                value: data.powerStatus.backup
                            },
                            {
                                label: "Voltage",
                                value: `${data.powerStatus.voltage}V`
                            },
                            {
                                label: "Frequency",
                                value: `${data.powerStatus.frequency} Hz`
                            },
                            {
                                label: "Daily Consumption",
                                value: data.powerStatus.dailyConsumption
                            }
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                style: {
                                    gap: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 12
                                        },
                                        className: "text-gray-400",
                                        children: [
                                            item.label,
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13
                                        },
                                        className: "font-medium text-gray-700",
                                        children: item.value
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.label, true, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 16
                },
                children: data.rooms.map((room)=>{
                    const cs = compressorStyles[room.compressorStatus] || compressorStyles.running;
                    const tempDiff = Math.abs(room.temperature - room.setTemp).toFixed(1);
                    const tempOk = tempDiff <= 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl border border-gray-200 shadow-sm",
                        style: {
                            padding: "22px 24px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                style: {
                                    marginBottom: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: 16
                                        },
                                        className: "font-semibold text-gray-900",
                                        children: room.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full font-medium",
                                        style: {
                                            fontSize: 12,
                                            padding: "4px 12px",
                                            backgroundColor: cs.bg,
                                            color: cs.color
                                        },
                                        children: cs.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 12,
                                    marginBottom: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg",
                                        style: {
                                            padding: "14px 16px",
                                            backgroundColor: tempOk ? "#F0FFF0" : "#FFF8F0"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                style: {
                                                    gap: 6,
                                                    marginBottom: 6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                                        className: "w-4 h-4",
                                                        style: {
                                                            color: tempOk ? "#2D5A27" : "#E65100"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 11
                                                        },
                                                        className: "font-semibold text-gray-400 uppercase",
                                                        children: "Temp"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                        lineNumber: 84,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 24,
                                                    color: tempOk ? "#2D5A27" : "#E65100"
                                                },
                                                className: "font-bold",
                                                children: [
                                                    room.temperature,
                                                    "°C"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 11,
                                                    marginTop: 4
                                                },
                                                className: "text-gray-400",
                                                children: [
                                                    "Set: ",
                                                    room.setTemp,
                                                    "°C"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg",
                                        style: {
                                            padding: "14px 16px",
                                            backgroundColor: "#F0F4FF"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                style: {
                                                    gap: 6,
                                                    marginBottom: 6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                                        className: "w-4 h-4 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                        lineNumber: 91,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 11
                                                        },
                                                        className: "font-semibold text-gray-400 uppercase",
                                                        children: "Humidity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 24,
                                                    color: "#1565C0"
                                                },
                                                className: "font-bold",
                                                children: [
                                                    room.humidity,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 11,
                                                    marginTop: 4
                                                },
                                                className: "text-gray-400",
                                                children: [
                                                    "Set: ",
                                                    room.setHumidity,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 120
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                        data: room.history,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                vertical: false,
                                                stroke: "#f5f5f5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 103,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "time",
                                                tick: {
                                                    fontSize: 10,
                                                    fill: "#9CA3AF"
                                                },
                                                axisLine: false,
                                                tickLine: false
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                tick: {
                                                    fontSize: 10,
                                                    fill: "#9CA3AF"
                                                },
                                                axisLine: false,
                                                tickLine: false,
                                                domain: [
                                                    "auto",
                                                    "auto"
                                                ]
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 105,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "temp",
                                                stroke: "#2D5A27",
                                                strokeWidth: 2,
                                                dot: {
                                                    r: 3
                                                },
                                                name: "Temp °C"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 11,
                                    marginTop: 10
                                },
                                className: "text-gray-400",
                                children: [
                                    "Last maintenance: ",
                                    room.lastMaintenance
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        ]
                    }, room.id, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-gray-200 shadow-sm",
                style: {
                    padding: "22px 24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        style: {
                            gap: 8,
                            marginBottom: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-5 h-5 text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: 15
                                },
                                className: "font-semibold text-gray-900",
                                children: "Active IoT Alerts"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 10
                        },
                        children: data.alerts.map((alert)=>{
                            const ss = severityStyles[alert.severity] || severityStyles.info;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center rounded-lg border",
                                style: {
                                    gap: 14,
                                    padding: "12px 16px",
                                    backgroundColor: ss.bg,
                                    borderColor: ss.border
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        className: "w-4 h-4 flex-shrink-0",
                                        style: {
                                            color: ss.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 14
                                            },
                                            className: "text-gray-800",
                                            children: alert.message
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 12
                                        },
                                        className: "text-gray-400 flex-shrink-0",
                                        children: [
                                            alert.room,
                                            " · ",
                                            alert.time
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, alert.id, true, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(IoTMonitoring, "SQiu/ERDFU2z9FXNnaaLMvwmgy8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = IoTMonitoring;
var _c;
__turbopack_context__.k.register(_c, "IoTMonitoring");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/iot/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$views$2f$IoTMonitoring$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/views/IoTMonitoring.jsx [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$views$2f$IoTMonitoring$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Coding_cold-storage-dashboard_src_7819b50d._.js.map