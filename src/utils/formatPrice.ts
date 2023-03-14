export function formatPrice(price: number) {
  const priceFormated = price.toString().replace(".", ",") + " €";

  return priceFormated;
}
