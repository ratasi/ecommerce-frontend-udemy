export type NavbarProps = {
  result: NavbarResponse | any;
};

type NavbarResponse = {
  data: Navbar[];
};

export type Navbar = {
  id: number;
  attributes: {
    name: string;
    slug: string;
  };
};
