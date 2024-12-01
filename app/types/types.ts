interface SubLinks {
  subTitle: string;
  subItems: {
    subTitle: string;
    path: string;
  }[];
}
export interface NavLink {
  navLink: string;
  image: string;
  subLinks: SubLinks[];
}

export interface CardItem {
  title: string;
  image: string;
  path: string;
  btnText: string;
}

export interface SmallBoxItem {
  id: number;
  title: string;
  path: string;
}

export interface Product {
  id: number;
  rate: number;
  rateCount: number;
  price: number;
  productName: string;
  image: string;
}

export interface CategoryItem {
  title: string;
  items: {
    text: string;
    path: string;
  }[];
}

export interface FooterLinks {
  id: number;
  title: string;
  links: {
    title: string;
    path: string;
  }[];
}
