import { Link } from "react-router-dom";
import { formatNumber } from "../helpers/formatNumber";

export const ProductItem = (product) => {
  return (
    <>
      <li>
        <div className="wrapper">
          <div className="item d-block d-sm-flex">
            {/* Image */}
            <div className="image text-center hover01 column">
              <div>
                <Link to={`../items/${product.item.id}`} title={product.item.title} >
                  <figure>
                    <img
                      src={product.item.picture}
                      alt={product.item.title}
                      width={180}
                      height={180}
                      title={product.item.title}
                    ></img>
                  </figure>
                </Link>
              </div>
            </div>

            <div className="d-block d-sm-flex mt-3 w-100">

              {/* Info */}
              <div className="info">
                <div className="d-flex align-items-center price">
                  <span>
                    <Link to={`../items/${product.item.id}`} alt={product.item.title} title={product.item.title}>
                      {formatNumber(product.item.price.amount)}
                    </Link>
                  </span>
                  {product.item.free_shipping && (
                    <span className="ms-2 pb-1">
                      <img
                        src="assets/images/ic_shipping.png"
                        alt="Envío gratis"
                        title="Envío gratis"
                      ></img>
                    </span>
                  )}
                </div>
                <div>
                  <Link to={`../items/${product.item.id}`} alt={product.item.title}
                  title={product.item.title} className="title" >
                    {product.item.title}
                  </Link>
                </div>
              </div>

              {/* Address */}
              <div className="ms-auto p-0 pt-2 p-sm-4">
                <span className="address">{product.item.address}</span>
              </div>
              
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
