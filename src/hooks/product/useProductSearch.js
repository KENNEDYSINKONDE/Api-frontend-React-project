import { useState, useEffect } from "react";
import { ProductApi } from "../../services/api/ProductApi";

export function useProductSearch(keyword) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let response;
        if (!keyword) {
          // Fetch all products if no keyword
          response = await ProductApi.getProducts();
        } else {
          response = await ProductApi.searchProduct(keyword);
        }

        const data = response.data;

        // Handle both full list and search results
        if (!data.original || data.original.length === 0) {
          setProducts([]); // still an empty array if no match
        } else {
          setProducts(data.original);
        }
      } catch (err) {
        console.error(err);
        setProducts([]);
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(fetchProducts, 400); // debounce 400ms
    return () => clearTimeout(timeout);
  }, [keyword]);

  return { products, loading, error };
}
