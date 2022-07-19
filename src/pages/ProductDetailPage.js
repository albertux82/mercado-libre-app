import { useParams } from "react-router-dom";
import { formatNumber } from "../helpers/utils";
import { useFetchProductsById } from "../hooks";
import { SearchBar } from "../components/SearchBar";

export const ProductDetailPage = () => {
  const { id } = useParams();
  
  //Usamos el Hook para hacer la petición y traer el producto
  const { product, isLoading } = useFetchProductsById(id);

  return (
    <>
      <SearchBar onSearchProduct={()=>{}}></SearchBar>

      {
        isLoading && <p className="p4 text-center"><i className="fa fa-spin fa-spinner fa-2x"></i></p>
      }

      {
        product.error && !isLoading && (
          <p className="text-danger text-center p-4">{product.error}</p>
        )
      }

      {
        product.item && (
          <div className="main">
            <div className="container">
                <div className="p-card bg-white animate__animated animate__fadeIn">
                  <div>
                      <div className="row g-0">
                        <div className="col-12 col-sm-6 col-lg-8">
                          <div className="text-center hover01 column">
                            <div>
                              <figure>
                                  <img
                                    className="img-fluid"
                                    alt={product.item.title}
                                    src={product.item.picture}
                                    title={product.item.title}
                                    width={680}
                                    height={680}
                                  ></img>
                              </figure>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                          <div>
                            <p className="d-inline-block- condition-sold">
                              <span className="condition">{product.item.condition} - </span>
                              <span className="sold">{product.item.sold_quantity} vendidos</span>
                            </p>
                            <h1 className="fw-semibold title">
                              {product.item.title}
                            </h1>
                            <span className="d-flex price">
                              {formatNumber(product.item.price.amount)}
                            </span>
                            <button className="btn btn-buy" title="Comprar ahora">Comprar</button>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-4 g-0">
                        <div className="col-12 col-lg-8">
                          <div className="description">
                            <span className="title">Descripción del producto</span>
                            <span className="desc-text scroll">{product.item.desciption}</span>
                          </div>
                        </div>
                      </div>
                    
                  </div>
                </div>
            </div>
          </div>
        )
      }
    </>
  );
};