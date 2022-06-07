import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { API_KEY, API_NOWPLAYING, API_URL } from "../services/api";

export function useSlider() {
  const [nowPlaying, setNowPlaying] = useState([]);

  const fetchSlider = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}${API_NOWPLAYING}`, {
        params: {
          api_key: API_KEY,
          language: "es",
          page: 1,
        },
      });
      const data = response.data.results;
      setNowPlaying(data);
    } catch {}
  }, []);

  useEffect(() => {
    fetchSlider();
  }, [fetchSlider]);

  return {
    nowPlaying,
    fetchSlider,
  };
}
