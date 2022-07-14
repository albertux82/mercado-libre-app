/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getFetchProducts } from "../helpers/getFetchProducts";

export const useFetchProducts = (itemprod) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const newProds = await getFetchProducts(itemprod);
    setProducts(newProds);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    isLoading
  };
};
