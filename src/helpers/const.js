export const API = "http://localhost:7999/musics";
export const LIMIT = 6;

export const ACTIONS = {
  products: "products",
  oneProduct: "oneProduct",
  pageTotalCount: "pageTotalCount",
  user: "user",
  cart: "cart",
  cartLength: "cartLength",
};

export function totalSumFunc(products) {
  let data = products.reduce((acc, item) => acc + item.subPrice, 0);
  return data;
}

export function calcSubPrice(product) {
  return +product.count * product.price;
}
