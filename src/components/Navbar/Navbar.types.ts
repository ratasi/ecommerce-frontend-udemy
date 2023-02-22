export type NavbarProps = {
  result: NavbarResponse | any;
};

type NavbarResponse = {
  data: NavbarData[];
};

export type NavbarData = {
  id: number;
  attributes: {
    name: string;
    slug: string;
  };
};
