import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_CREDITS, API_KEY, API_URL } from "../services/api";

export function useMovieDetail() {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  const fetchMovieDetail = useCallback(
    async () => {
      try {
        const {
          data,
        } = await axios.get(`${API_URL}${API_CREDITS}/${params.id}`, {
          params: {
            api_key: API_KEY,
            language: "es",
          },
        });
        setMovieDetail(data);
      } catch(error) {}
    },
    [params.id]
  );

  useEffect(() => {
    fetchMovieDetail();
  }, [fetchMovieDetail]);

  return {
    movieDetail,
  };
}
