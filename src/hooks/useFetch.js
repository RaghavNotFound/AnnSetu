"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook for fetching data with loading/error states.
 * Makes it trivial to swap from mock to real API calls.
 *
 * Usage:
 *   const { data, loading, error, refetch } = useFetch(() => dashboardService.getStats());
 */
export function useFetch(fetchFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFn();
      setData(result);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    execute();
  }, deps);

  return { data, loading, error, refetch: execute };
}

export default useFetch;
