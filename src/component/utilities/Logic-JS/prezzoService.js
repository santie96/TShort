function truncate(num, decimals = 2) {
  const factor = 10 ** decimals;

  return Math.floor(num * factor) / factor;
}

export function calcoloPrezzoScontato(price, sale, newArrivals) {
  const priceSale = price - (price * sale) / 100;
  const priceSale2 = truncate(priceSale, 2).toFixed(2);
  const priceTot = sale === 0 ? price : priceSale2;
  const showSale = !newArrivals && sale > 0;

  return { priceTot, showSale, OriginalPrice: price };
}
