export type BestSellerProps = {
  result: any;
  loading: boolean;
  error: string;
};

export type ProductProps = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    price: number;
    images: {
      data: ProductImage[];
    };
    category_product: {
      data: {
        attributes: {
          slug: string;
        };
      };
    };
  };
};

type ProductImage = {
  id: number;
  attributes: {
    url: string;
  };
};
