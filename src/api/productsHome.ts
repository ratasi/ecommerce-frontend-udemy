import { useEffect, useState } from "react";

export function useGetProductsHome() {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/products?filters[position][$lte]=8&sort=position&populate=deep`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, result, error };
}
