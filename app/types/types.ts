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

export interface User {
  id: string; // Unique user ID
  username: string; // User's name
  email: string; // User's email address
  password: string; // User's hashed password
  phoneNumber?: string; // User's phone number (optional)
  isAdmin?: boolean; // Flag for admin users (optional)
  profileImg?: string; // URL to the user's profile image (optional)
  createdAt?: Date; // Date the user was created
  updatedAt?: Date; // Date the user was last updated
  verify?: boolean; // Whether the user is verified (optional)
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
