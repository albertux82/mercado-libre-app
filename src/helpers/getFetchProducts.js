import { API_URL } from "./settings";

export const getFetchProducts = async (itemprod) => {
  const url = `${API_URL}/sites/MLA/search?q=${itemprod}&limit=4`;
  const resp = await fetch(url);
  const data = await resp.json();
  // console.log(data)
  var categories = [];

  //Intentamos obtener el filtro de "category"
  const filterCategory = data.available_filters.filter(
    ({ id }) => id === "category"
  );
  //Si existe lo ordenamos por "results"
  if (filterCategory.length > 0) {
    const filterList = filterCategory[0].values;
    sorting(filterList, "results");
    //Asignamos la lista de nombres de categorias ya ordenados
    //obtenemos los nombres del array filtrado
    let nombres = filterList.map((c) => c.name);
    //Asignamos los primeros 4 nombres de la lista ya ordenada
    categories = obtenerPrimerosNElementos(nombres);
  }

  //Obtener los primeros n elementos de un arreglo
  function obtenerPrimerosNElementos(datos, n = 4) {
    if (n < 0) {
      return [];
    }

    return datos.slice(0, n);
  }

  //Función de ordenamiento descendente
  function sorting(object, key) {
    function sortByKey(a, b) {
      var x = a[key];
      var y = b[key];
      return x > y ? -1 : x < y ? 1 : 0;
    }
    object.sort(sortByKey);
  }

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

  //Construimos el listado de productos
  // const producstList = data.results.map((item) => {

  //   return {
  //     author: {
  //       name: "Alberto",
  //       lastname: "Salazar",
  //     },
  //     categories: categories,
  //     item: {
  //       id: item.id,
  //       title: item.title,
  //       price: {
  //         currency: item.currency_id,
  //         amount: item.price,
  //         decimals: 2,
  //       },
  //       picture: item.thumbnail,
  //       condition: item.condition,
  //       free_shipping: item.shipping.free_shipping,
  //       address: item.address.state_name,
  //     },
  //   };
  // });

  return producstList;
};