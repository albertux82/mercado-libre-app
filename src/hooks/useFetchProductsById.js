/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getFetchProductById } from "../helpers/getFetchProductById";

export const useFetchProductsById = (id) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async () => {
    const newProd = await getFetchProductById(id);
    setProduct(newProd);
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return {
    product,
    isLoading,
  };
};
