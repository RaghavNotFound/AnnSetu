// API configuration - point this to your backend when ready
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";

/**
 * Generic fetch wrapper with error handling
 * Replace mock implementations with real API calls
 */
async function fetchFromAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
      // Add auth headers here when implementing authentication
      // 'Authorization': `Bearer ${getToken()}`,
    },
    ...options,
  };

  const response = await fetch(url, config);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export const api = {
  get: (endpoint) => fetchFromAPI(endpoint, { method: "GET" }),
  post: (endpoint, data) =>
    fetchFromAPI(endpoint, { method: "POST", body: JSON.stringify(data) }),
  put: (endpoint, data) =>
    fetchFromAPI(endpoint, { method: "PUT", body: JSON.stringify(data) }),
  delete: (endpoint) => fetchFromAPI(endpoint, { method: "DELETE" }),
};

export default api;
