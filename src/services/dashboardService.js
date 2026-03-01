/**
 * Dashboard Service
 * 
 * Currently returns mock data. When backend is ready:
 * 1. Import api from './api'
 * 2. Replace mock imports with api.get() calls
 * 3. Keep the same return shape so components don't need changes
 */

import {
  statsData,
  roomUtilizationData,
  liveAlertsData,
  commodityDistributionData,
  stockAgingData,
  paymentCollectionData,
  recentActivityData,
  inventoryPreviewData,
  farmersData,
  inventoryData,
  loadingEntriesData,
  dispatchEntriesData,
  billingData,
  reportsData,
  iotData,
  settingsData,
} from "../data/mockData";

// Simulate network delay for realistic loading states
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const dashboardService = {
  /**
   * Fetch all dashboard stats (top cards)
   * Backend endpoint: GET /api/dashboard/stats
   */
  async getStats() {
    await delay(300);
    // return api.get('/dashboard/stats');
    return statsData;
  },

  /**
   * Fetch room utilization data
   * Backend endpoint: GET /api/dashboard/room-utilization
   */
  async getRoomUtilization() {
    await delay(400);
    // return api.get('/dashboard/room-utilization');
    return roomUtilizationData;
  },

  /**
   * Fetch live alerts
   * Backend endpoint: GET /api/dashboard/alerts
   */
  async getLiveAlerts() {
    await delay(250);
    // return api.get('/dashboard/alerts');
    return liveAlertsData;
  },

  /**
   * Fetch commodity distribution
   * Backend endpoint: GET /api/dashboard/commodity-distribution
   */
  async getCommodityDistribution() {
    await delay(350);
    // return api.get('/dashboard/commodity-distribution');
    return commodityDistributionData;
  },

  /**
   * Fetch stock aging data
   * Backend endpoint: GET /api/dashboard/stock-aging
   */
  async getStockAging() {
    await delay(300);
    // return api.get('/dashboard/stock-aging');
    return stockAgingData;
  },

  /**
   * Fetch payment collection data
   * Backend endpoint: GET /api/dashboard/payments
   */
  async getPaymentCollection() {
    await delay(350);
    // return api.get('/dashboard/payments');
    return paymentCollectionData;
  },

  /**
   * Fetch recent activity
   * Backend endpoint: GET /api/dashboard/recent-activity
   */
  async getRecentActivity() {
    await delay(200);
    // return api.get('/dashboard/recent-activity');
    return recentActivityData;
  },

  /**
   * Fetch inventory preview
   * Backend endpoint: GET /api/dashboard/inventory-preview
   */
  async getInventoryPreview() {
    await delay(300);
    // return api.get('/dashboard/inventory-preview');
    return inventoryPreviewData;
  },

  // ─── PAGE-LEVEL SERVICES ────────────────────────────

  async getFarmers() {
    await delay(300);
    // return api.get('/farmers');
    return farmersData;
  },

  async getInventory() {
    await delay(350);
    // return api.get('/inventory');
    return inventoryData;
  },

  async getLoadingEntries() {
    await delay(300);
    // return api.get('/loading');
    return loadingEntriesData;
  },

  async getDispatchEntries() {
    await delay(300);
    // return api.get('/dispatch');
    return dispatchEntriesData;
  },

  async getBilling() {
    await delay(350);
    // return api.get('/billing');
    return billingData;
  },

  async getReports() {
    await delay(400);
    // return api.get('/reports');
    return reportsData;
  },

  async getIoTData() {
    await delay(300);
    // return api.get('/iot');
    return iotData;
  },

  async getSettings() {
    await delay(200);
    // return api.get('/settings');
    return settingsData;
  },
};

export default dashboardService;
