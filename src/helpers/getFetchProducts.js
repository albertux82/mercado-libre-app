
export const getFetchProducts = async (itemprod) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${itemprod}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const products = data.results.map((item) => {
        return {
            author: {
                name: "Alberto",
                lastname: "Salazar",
            },
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
                address: item.address.state_name
            },
        };
    });
    return products;
}