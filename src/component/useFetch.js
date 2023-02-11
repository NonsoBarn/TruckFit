import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  // const [error, setError] = useState(null);

  let componentMounted = true;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    if (componentMounted) {
      const productsdata = await response.json();
      //   const productdata = await response.clone().json();
      setData(productsdata);
      setFilter(productsdata);
      setProduct(productsdata);

      setLoading(false);
    }

    return () => {
      componentMounted = false;
    };
  };

  return {
    data,
    setData,
    filter,
    setFilter,
    loading,
    setLoading,
    product,
  };
};

export default useFetch;
