import { useState, useEffect } from "react";
import { ForCompaniesPageAPI } from "../services/api";

interface TimeZone {
  _id: string;
  name: string;
}

export const useTimeZones = () => {
  const [timeZones, setTimeZones] = useState<TimeZone[]>([]);
  const [timeZoneSearchQuery, setTimeZoneSearchQuery] = useState("");
  const [timeZoneOpen, setTimeZoneOpen] = useState(false);

  useEffect(() => {
    const fetchTimeZones = async () => {
      try {
        const query =
          timeZoneSearchQuery.length >= 2 ? timeZoneSearchQuery : "";
        const data = await ForCompaniesPageAPI.getAllTimeZones(query);

        if (data?.success) {
          setTimeZones(data.data);
        } else {
          setTimeZones([]);
        }
      } catch (error) {
        console.error("Error fetching time zones:", error);
        setTimeZones([]);
      }
    };

    fetchTimeZones();
  }, [timeZoneSearchQuery]);

  return {
    timeZones,
    timeZoneSearchQuery,
    setTimeZoneSearchQuery,
    timeZoneOpen,
    setTimeZoneOpen,
  };
};
