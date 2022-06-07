import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useParams } from "react-router";
import { API_CREDITS, API_KEY, API_URL } from "../services/api";

export function useCredits() {
  const params = useParams();
  const [cast, setCast] = useState([]);

  const fetchCredits = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}${API_CREDITS}/${params.id}/credits`,
        {
          params: {
            api_key: API_KEY,
            language: "es",
          },
        }
      );
      setCast(data.cast);
    } catch {}
  }, [params.id]);


  useEffect(() => {
    fetchCredits();
  }, [fetchCredits]);

  return {
    cast,
  };
}
