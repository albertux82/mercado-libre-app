import { ProductItem } from "../components";

export const ProductListPage = ({ products }) => {
  return (
    <>
      <div className="main">
        <div className="container">
          <ul className="breadcrumb">
            {products.categories &&
              products.categories.map((c) => (
                <li key={c} className="breadcrumb-item-">
                  {c}
                </li>
              ))}
          </ul>

          <ul className="list-unstyled m-0 ul-prod-list animate__animated animate__fadeIn">
            {products.items &&
              products.items.map(({ item }) => (
                <ProductItem key={item.id} item={item}></ProductItem>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
