
export const getFetchProductById = async (id) => {

    const url = `https://api.mercadolibre.com/items/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();

    if(data.error){
      return data
    }
  
    const url_d = `https://api.mercadolibre.com/items/${id}/description`;
    const resp_d = await fetch(url_d);
    const desc = await resp_d.json();
  
    const product = {
      author: {
        name: "Alberto",
        lastname: "Salazar",
      },
      item: {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
          decimals: 2,
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        desciption: desc.plain_text,
      },
    };
    return product;
  };
  