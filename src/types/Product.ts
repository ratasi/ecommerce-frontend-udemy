export type ProductProps = {
  getProductData: DataProduct[];
};

type DataProduct = {
  attributes: AttributesProduct;
  id: number;
};

export type AttributesProduct = {
  category_product: Category;
  images: {
    data: ImageData[];
  };
  name: string;
  price: number;
  slug: string;
  description: string;
};

type Category = {
  data: {
    id: number;
    attributes: {
      name: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};

type ImageData = {
  id: number;
  attributes: {
    url: string;
  };
};
