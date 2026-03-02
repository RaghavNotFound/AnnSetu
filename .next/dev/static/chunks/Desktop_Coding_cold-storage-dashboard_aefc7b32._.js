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
"[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
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
function SettingsSection({ icon: Icon, title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl border border-gray-200 shadow-sm",
        style: {
            padding: "22px 24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                style: {
                    gap: 10,
                    marginBottom: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg flex items-center justify-center",
                        style: {
                            width: 36,
                            height: 36,
                            backgroundColor: "#E8F5E9"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "w-4.5 h-4.5",
                            style: {
                                color: "#2D5A27",
                                width: 18,
                                height: 18
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: 16
                        },
                        className: "font-semibold text-gray-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = SettingsSection;
function FieldRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between border-b border-gray-100",
        style: {
            padding: "12px 0"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 13
                },
                className: "text-gray-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 14
                },
                className: "font-medium text-gray-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = FieldRow;
function Settings() {
    _s();
    const { data, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Settings.useFetch": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$services$2f$dashboardService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getSettings()
    }["Settings.useFetch"]);
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
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    const { facility, billing, alerts, users } = data;
    const roleStyles = {
        Administrator: {
            bg: "#E8F5E9",
            color: "#2D5A27"
        },
        Manager: {
            bg: "#E3F2FD",
            color: "#1565C0"
        },
        Accountant: {
            bg: "#FFF3E0",
            color: "#E65100"
        },
        Operator: {
            bg: "#F3E5F5",
            color: "#7B1FA2"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 20
                        },
                        className: "font-bold text-gray-900",
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-2 bg-[#2D5A27] text-white rounded-lg font-medium hover:bg-[#234a1f] transition-colors",
                        style: {
                            padding: "9px 18px",
                            fontSize: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            " Save Changes"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                        title: "Facility Information",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Name",
                                value: facility.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Location",
                                value: facility.location
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Total Capacity",
                                value: facility.capacity
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Number of Rooms",
                                value: facility.rooms
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "License No.",
                                value: facility.license
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Owner",
                                value: facility.owner
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
                        title: "Billing Configuration",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Rent per MT/month",
                                value: `₹${billing.rentPerMT}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Loading Charge",
                                value: `₹${billing.loadingCharge}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Unloading Charge",
                                value: `₹${billing.unloadingCharge}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "GST Rate",
                                value: `${billing.gstRate}%`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Late Fee",
                                value: `${billing.lateFee}% per month`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Billing Cycle",
                                value: billing.billingCycle
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
                        title: "Alert Thresholds",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Temperature Deviation",
                                value: `±${alerts.tempThreshold}°C`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Humidity Deviation",
                                value: `±${alerts.humidityThreshold}%`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Power Backup Delay",
                                value: `${alerts.powerBackupDelay} sec`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Payment Overdue After",
                                value: `${alerts.overduePaymentDays} days`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldRow, {
                                label: "Stock Aging Alert",
                                value: `${alerts.stockAgingAlert} days`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        title: "User Management",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 12
                            },
                            children: users.map((user)=>{
                                const rs = roleStyles[user.role] || roleStyles.Operator;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center rounded-lg hover:bg-gray-50 transition-colors",
                                    style: {
                                        gap: 14,
                                        padding: "12px 14px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-full bg-[#2D5A27] flex items-center justify-center text-white font-semibold flex-shrink-0",
                                            style: {
                                                width: 36,
                                                height: 36,
                                                fontSize: 14
                                            },
                                            children: user.name.charAt(0)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    style: {
                                                        gap: 8
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 14
                                                            },
                                                            className: "font-medium text-gray-900",
                                                            children: user.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                                            lineNumber: 103,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full font-medium",
                                                            style: {
                                                                fontSize: 11,
                                                                padding: "2px 10px",
                                                                backgroundColor: rs.bg,
                                                                color: rs.color
                                                            },
                                                            children: user.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: 12,
                                                        marginTop: 2
                                                    },
                                                    className: "text-gray-400",
                                                    children: [
                                                        user.email,
                                                        " · Last login: ",
                                                        user.lastLogin
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "w-4 h-4 text-gray-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, user.id, true, {
                                    fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(Settings, "SQiu/ERDFU2z9FXNnaaLMvwmgy8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c2 = Settings;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SettingsSection");
__turbopack_context__.k.register(_c1, "FieldRow");
__turbopack_context__.k.register(_c2, "Settings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/src/app/(dashboard)/settings/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$views$2f$Settings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/src/views/Settings.jsx [app-client] (ecmascript)");
"use client";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$src$2f$views$2f$Settings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Building2
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
            d: "M10 12h4",
            key: "a56b0p"
        }
    ],
    [
        "path",
        {
            d: "M10 8h4",
            key: "1sr2af"
        }
    ],
    [
        "path",
        {
            d: "M14 21v-3a2 2 0 0 0-4 0v3",
            key: "1rgiei"
        }
    ],
    [
        "path",
        {
            d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
            key: "secmi2"
        }
    ],
    [
        "path",
        {
            d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
            key: "16ra0t"
        }
    ]
];
const Building2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("building-2", __iconNode);
;
 //# sourceMappingURL=building-2.js.map
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Building2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript)");
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Save
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
            d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
            key: "1c8476"
        }
    ],
    [
        "path",
        {
            d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
            key: "1ydtos"
        }
    ],
    [
        "path",
        {
            d: "M7 3v4a1 1 0 0 0 1 1h7",
            key: "t51u73"
        }
    ]
];
const Save = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("save", __iconNode);
;
 //# sourceMappingURL=save.js.map
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Save",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript)");
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Shield
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
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
];
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("shield", __iconNode);
;
 //# sourceMappingURL=shield.js.map
}),
"[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Coding$2f$cold$2d$storage$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Coding/cold-storage-dashboard/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_Coding_cold-storage-dashboard_aefc7b32._.js.map