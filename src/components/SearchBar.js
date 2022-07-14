import { useForm } from "../hooks/useForm";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import queryString from "query-string";

export const SearchBar = () => {
  const location = useLocation();
  const { search = "" } = queryString.parse(location.search);
  const history = createBrowserHistory({ window });
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    searchText: search,
  });
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    history.push(`./items?search=${searchText.trim()}`);
    navigate(`./items?search=${searchText.trim()}`);
  };

  return (
    <>
      <header className="p-3 mb-4 border-bottom searchBar">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink className="navbar-brand" to="/">
              <img src="../assets/images/Logo_ML.png" alt="Mercado Libre"></img>
            </NavLink>

            <form onSubmit={handleSearch} className="col ms-2" role="search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control input-search"
                  placeholder="Nunca dejes de buscar"
                  aria-label="Search"
                  autoComplete="off"
                  name="searchText"
                  value={searchText}
                  onChange={handleInputChange}
                ></input>
                <button
                  type="submit"
                  className="btn- btn-search"
                  title="Buscar"
                >
                  <img
                    src="../assets/images/ic_Search.png"
                    alt="icon-search"
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
