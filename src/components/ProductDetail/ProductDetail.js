import { useParams } from "react-router-dom";
import { formatNumber } from "../../helpers/formatNumber";
import { useFetchProductsById } from "../../hooks/useFetchProductsById";
import "./ProductDetail.css";

export const ProductDetail = () => {
  const { id } = useParams();

  const { product, isLoading } = useFetchProductsById(id);

  return (
    <>
      {isLoading && <p className="p4 text-center"><i className="fa fa-spin fa-spinner fa-2x"></i></p>}

      {product.error && !isLoading && (
        <p className="text-danger">{product.error}</p>
      )}

      {product.item && (
        <div className="card animate__animated animate__fadeIn">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="image text-center hover01 column">
                  <div>
                    <figure>
                        <img
                          className="p-image img-fluid"
                          alt={product.item.title}
                          src={product.item.picture}
                        ></img>
                    </figure>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5">
                <div className="p-info">
                  <p className="text-14 d-inline-block p-condition">
                    <span>{product.item.condition} - </span>
                    <span>{product.item.sold_quantity} vendidos</span>
                  </p>
                  <span className="text-24 fw-semibold p-title">
                    {product.item.title}
                  </span>
                  <span className="text-46 d-flex p-price">
                    {formatNumber(product.item.price.amount)}
                  </span>
                  <button className="btn btn-buy" title="Comprar ahora">Comprar</button>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-sm-8">
                <div className="description">
                  <span className="desc-title">Descripción del producto</span>
                  <span className="desc-text myScroll">{product.item.desciption}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};