"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

// Type definitions
interface DailyData {
  date: string;
  count: number;
}

interface MonthData {
  month: string;
  monthName: string;
  count: number;
}

interface CountryData {
  country: string;
  count: number;
}

interface AboutUsData {
  data: {
    last5MinCount: number;
    dailyData: DailyData[];
    countryData: CountryData[];
    monthData: MonthData[];
  };
  totalCount: number;
}

interface RealTimeDataContextType {
  data: AboutUsData;
  isLoading: boolean;
  lastUpdated: Date | null;
  error: string | null;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Create context
const RealTimeDataContext = createContext<RealTimeDataContextType | undefined>(
  undefined
);

// Custom hook to use the context
export const useRealTimeData = () => {
  const context = useContext(RealTimeDataContext);
  if (context === undefined) {
    throw new Error(
      "useRealTimeData must be used within a RealTimeDataProvider"
    );
  }
  return context;
};

interface RealTimeDataProviderProps {
  children: ReactNode;
  initialData: AboutUsData;
  updateInterval?: number; // in milliseconds, default 2 minutes
}

const RealTimeDataProvider: React.FC<RealTimeDataProviderProps> = ({
  children,
  initialData,
  updateInterval = 2 * 60 * 1000, // 2 minutes
}) => {
  const [data, setData] = useState<AboutUsData>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(new Date());
  const [error, setError] = useState<string | null>(null);

  // Function to fetch fresh data
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`${BASE_URL}/get-graph-counts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
        // Add timestamp to prevent caching
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
      const freshData: AboutUsData = await response.json();
      setData(freshData);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Set up interval for periodic updates
  useEffect(() => {
    // Only run on client side and if we're in a browser environment
    if (typeof window === "undefined") return;
    const interval = setInterval(fetchData, updateInterval);
    // Also update when page becomes visible (user returns to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden && lastUpdated) {
        const timeSinceLastUpdate = Date.now() - lastUpdated.getTime();
        // If more than 1 minute has passed, fetch fresh data
        if (timeSinceLastUpdate > 60 * 1000) {
          fetchData();
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    // Cleanup
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [fetchData, updateInterval, lastUpdated]);

  // Provide context value
  const contextValue: RealTimeDataContextType = {
    data,
    isLoading,
    lastUpdated,
    error,
  };

  return (
    <RealTimeDataContext.Provider value={contextValue}>
      {children}
    </RealTimeDataContext.Provider>
  );
};

export default RealTimeDataProvider;
