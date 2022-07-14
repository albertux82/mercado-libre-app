import { Link } from "react-router-dom";
import { formatNumber} from '../helpers/formatNumber';

export const ProductItem = (product) => {

  return (
    <>
        <li>
          <div className="wrapper">
            <div className="item d-block d-sm-flex">
              {/* Image */}
              <div className="image text-center hover01 column">
                <div>
                  <Link to={`../items/${product.item.id}`} title={product.item.title}>
                    <figure>
                      <img
                        src={product.item.picture}
                        alt={product.item.title}
                        width={180}
                        height={180}
                      ></img>
                    </figure>
                  </Link>
                </div>
              </div>

              <div className="d-block d-sm-flex mt-3 w-100">
              {/* Info */}
              <div className="info">
                <div className="d-flex align-items-center item-price">
                  <span>
                    <Link to={`../items/${product.item.id}`}>
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
                <div className="item-title">
                  <Link to={`../items/${product.item.id}`} title={product.item.title}>
                    {product.item.title}
                  </Link>
                </div>
              </div>

              {/* Address */}
              <div className="ms-auto p-0 pt-2 p-sm-4">
                <span className="item-address">{product.item.address}</span>
              </div>

              </div>

            </div>
          </div>
        </li>      
    </>
  );
};
