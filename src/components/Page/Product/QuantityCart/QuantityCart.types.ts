export type QuantityCartProps = {
  product: {
    attributes: Product;
  };
};

type Product = {
  name: string;
  slug: string;
  price: number;
};
