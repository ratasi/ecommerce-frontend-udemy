export type CategoryProps = {
  getCategoryData: DataAttributes[];
};

type DataAttributes = {
  attributes: CategoryData;
};

export type CategoryData = {
  name: string;
  slug: string;
  products: {
    data: Product[];
  };
};

type Product = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    price: number;
    images: {
      data: ProductImage[];
    };
  };
};

type ProductImage = {
  id: number;
  attributes: {
    url: string;
  };
};
