export type GlobalCategoryProps = {
  data: Attributes[];
};

type Attributes = {
  attributes: AttributesData;
};

type AttributesData = {
  name: string;
  products: [];
  slug: string;
  image: any;
};
