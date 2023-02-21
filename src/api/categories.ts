import { useEffect, useState } from "react";

export function useGetCategoriesApi() {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_HOST}api/categories`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
}
