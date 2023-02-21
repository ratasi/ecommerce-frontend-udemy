export type MenuMobileProps = {
  categories: Navbar[];
};

export type Navbar = {
  id: number;
  attributes: {
    name: string;
    slug: string;
  };
};
