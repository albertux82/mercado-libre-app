import { useEffect, useState } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import queryString from "query-string";
import { getFetchProducts } from "../helpers";

export const SearchBar = ({ onSearchProduct }) => {
  const history = createBrowserHistory({ window });
  const location = useLocation();
  const navigate = useNavigate();

  //1) Obtenemos el queryParam "q" de location
  const { q = "" } = queryString.parse(location.search);

  //2) Inicializamos el valor del input
  const [input, setInput] = useState(q);

  const getProducts = async () => {
    const newProds = await getFetchProducts(input);
    onSearchProduct(newProds);
  };

  //3) Si el (input o "q") contiene algun valor se hace la petición
  useEffect(() => {
    input !== "" && getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //4) Al enviar el formulario, hacemos la petición con el valor del input
  const submitAction = (e) => {
    e.preventDefault();
    getProducts();
    history.push(`/items?q=${input.trim()}`);
    navigate(`/items?q=${input.trim()}`);
  };

  const handleChange = (e) => {
    setInput(e.target.value); //Permite escribir en el input
  };

  return (
    <>
      {" "}
      <header className="p-2 border-bottom searchBar">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink className="navbar-brand" to="/">
              <img
                src="../assets/images/Logo_ML.png"
                alt="Mercado Libre"
                title="Mercado Libre"
                width={53}
                height={36}
              ></img>
            </NavLink>

            <form onSubmit={submitAction} className="col ms-2" role="search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control input-search"
                  placeholder="Nunca dejes de buscar"
                  aria-label="Search"
                  autoComplete="off"
                  value={input}
                  onChange={handleChange}
                ></input>
                <button
                  type="submit"
                  className="btn- btn-search"
                  title="Buscar"
                >
                  <img
                    src="../assets/images/ic_Search.png"
                    alt="icon-search"
                    title="Search"
                    width={18}
                    height={18}
                  ></img>
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};
