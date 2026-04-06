import { useState, useEffect } from "react";
import { ForCompaniesPageAPI } from "../services/api";

interface Country {
  _id: string;
  name: string;
  iso2: string;
}

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countrySearchQuery, setCountrySearchQuery] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const query = countrySearchQuery.length >= 2 ? countrySearchQuery : "";
        const data = await ForCompaniesPageAPI.getAllCountriesList(query);

        if (data?.success) {
          setCountries(data.data);
        } else {
          setCountries([]);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([]);
      }
    };

    fetchCountries();
  }, [countrySearchQuery]);

  return {
    countries,
    countrySearchQuery,
    setCountrySearchQuery,
    countryOpen,
    setCountryOpen,
  };
};
