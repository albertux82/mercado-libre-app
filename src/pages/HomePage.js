import { useState } from "react";
import { ProductItem } from "../components";
import { SearchBar } from "../components/SearchBar";

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  //Esta función recibe como parámetro "newInputValue" que es el nuevo valor del input recibido desde el <SearchBar>
  const onSearchProduct = (newInputValue) => {
    setProducts(newInputValue);
 }

  return (
    <>
      <SearchBar onNewInputValue={(value) => onSearchProduct(value)}></SearchBar>

      <div className="main">
        <div className="container">

            <ul className="breadcrumb">
              {
                products.categories &&
                  products.categories.map((c) => <li key={c} className="breadcrumb-item-">{c}</li>)
              }
            </ul>
  
            <ul className="list-unstyled m-0 ul-prod-list animate__animated animate__fadeIn">
              {
                products.items &&
                products.items.map(({item}) => (
                  <ProductItem key={item.id} item={item}></ProductItem>
                ))
              }
            </ul>
   
          
        </div>
      </div>
    </>
  );
};
