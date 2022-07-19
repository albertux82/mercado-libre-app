import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { ProductListPage } from "./ProductListPage";

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  //Esta función recibe como parámetro el nuevo valor del input recibido desde el <SearchBar>
  const onSearchProduct = (newInputValue) => {
    setProducts(newInputValue);
  };

  return (
    <>
      <SearchBar onSearchProduct={onSearchProduct}></SearchBar>

      <ProductListPage products={products}></ProductListPage>
    </>
  );
};
