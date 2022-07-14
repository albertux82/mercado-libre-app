import { useParams } from "react-router-dom";
import { formatNumber } from "../helpers/formatNumber";
import { useFetchProductsById } from "../hooks/useFetchProductsById";

export const ProductDetail = () => {
  const { id } = useParams();

  const { product, isLoading } = useFetchProductsById(id);

  return (
    <>
      {isLoading && <p className="p4 text-center"><i className="fa fa-spin fa-spinner fa-2x"></i></p>}

      {product.error && !isLoading && (
        <p className="text-danger text-center p-4">{product.error}</p>
      )}

      {product.item && (
        <div className="card p-card animate__animated animate__fadeIn">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="p-image text-center hover01 column">
                  <div>
                    <figure>
                        <img
                          className="img-fluid"
                          alt={product.item.title}
                          src={product.item.picture}
                        ></img>
                    </figure>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5">
                <div className="p-info">
                  <p className="d-inline-block condition">
                    <span>{product.item.condition} - </span>
                    <span>{product.item.sold_quantity} vendidos</span>
                  </p>
                  <span className="fw-semibold title">
                    {product.item.title}
                  </span>
                  <span className="d-flex price">
                    {formatNumber(product.item.price.amount)}
                  </span>
                  <button className="btn btn-buy" title="Comprar ahora">Comprar</button>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-sm-8">
                <div className="description">
                  <span className="title">Descripción del producto</span>
                  <span className="desc-text scroll">{product.item.desciption}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};