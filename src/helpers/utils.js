//Función que retorna el nombre de "n" categorías ordenadas de mayor a menor
export function filterCategory(data, key) {
  //Intentamos obtener el filtro de "category"
  const filterCategory = data.filter(({ id }) => id === key);

  //Si existe lo ordenamos por "results"
  if (filterCategory.length > 0) {
    const filterList = filterCategory[0].values;
    sorting(filterList, "results");
    //Asignamos la lista de nombres de categorias ya ordenados
    //obtenemos los nombres del array filtrado
    let nombres = filterList.map((c) => c.name);
    //Asignamos los primeros 4 nombres de la lista ya ordenada
    return getFirstNElements(nombres, 4);
  } else {
    return [];
  }
}

//Función de ordenamiento descendente
export function sorting(object, key) {
  function sortByKey(a, b) {
    var x = a[key];
    var y = b[key];
    return x > y ? -1 : x < y ? 1 : 0;
  }
  object.sort(sortByKey);
}

//Obtener los primeros n elementos de un arreglo
export function getFirstNElements(datos, n = 1) {
  if (n < 0) {
    return [];
  }
  return datos.slice(0, n);
}

//Formato para precios
export const formatNumber = (q) => {
  return q.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
