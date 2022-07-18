import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useFetchProducts } from "../hooks";
import { ProductItem } from "../components";

export const ProductsList = () => {
  const location = useLocation();
  const { search = "" } = queryString.parse(location.search);

  //Obtenemos el término de búsqueda desde la url para hacer la petición
  const { products, isLoading } = useFetchProducts(search);

  return (
    <>
      <div className="wrapper">
        {isLoading && (
          <p className="p4 text-center">
            <i className="fa fa-spin fa-spinner fa-2x"></i>
          </p>
        )}

        <ul className="breadcrumb">
          {products.categories &&
            products.categories.map((c) => <li key={c} className="breadcrumb-item-">{c}</li>)
          }
        </ul>

        <ul className="list-unstyled m-0 ul-prod-list animate__animated animate__fadeIn">
          {products.items &&
            products.items.map(({ item }) => (
              <ProductItem key={item.id} item={item}></ProductItem>
            ))}
        </ul>
      </div>
    </>
  );
};
