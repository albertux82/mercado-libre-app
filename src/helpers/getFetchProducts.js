import { API_URL, filterCategory} from "../helpers";

export const getFetchProducts = async (itemprod) => {
  const url = `${API_URL}/sites/MLA/search?q=${itemprod}&limit=4`;
  const resp = await fetch(url);
  const data = await resp.json();

  var categories =  filterCategory(data.available_filters, "category");

  const items = data.results.map((item) => {
    return {
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 2,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        address: item.address.state_name,
      },
    };
  });

  const producstList = {
    author: {
      name: "Alberto",
      lastname: "Salazar",
    },
    categories: categories,
    items: items,
  };
  return producstList;
};