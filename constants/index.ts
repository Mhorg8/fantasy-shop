import {
  CardItem,
  SmallBoxItem,
  NavLink,
  Product,
  CategoryItem,
  FooterLinks,
} from "@/app/types/types";

export const navLinks: NavLink[] = [
  {
    navLink: "holyday",
    image: "/navlink-1.jpeg",
    subLinks: [
      {
        subTitle: "holyday",
        subItems: [
          { subTitle: "all new in holyday", path: "/holyday" },
          { subTitle: "christmas gifts", path: "/holyday/christmas-gift" },
        ],
      },

      {
        subTitle: "By price",
        subItems: [
          { subTitle: "under $50", path: "/holyday/byPrice/under-50" },
          { subTitle: "under $100", path: "/holyday/byPrice/under-100" },
          { subTitle: "$100 - $200", path: "/holyday/byPrice/100-200" },
          { subTitle: "$200 & up", path: "/holyday/byPrice/200-and-up" },
        ],
      },

      {
        subTitle: "By recipient",
        subItems: [
          { subTitle: "for men", path: "/holyday/byRecipient/men" },
          { subTitle: "for women", path: "/holyday/byRecipient/women" },
          { subTitle: "for kids", path: "/holyday/byRecipient/kids" },
          { subTitle: "for families", path: "/holyday/byRecipient/family" },
          { subTitle: "for friends", path: "/holyday/byRecipient/friend" },
        ],
      },
    ],
  },
  {
    navLink: "gift",
    image: "/navLink-2.jpg",
    subLinks: [
      {
        subTitle: "gift",
        subItems: [
          { subTitle: "all new in holyday", path: "/holyday" },
          { subTitle: "christmas gifts", path: "/holyday/christmas-gift" },
        ],
      },

      {
        subTitle: "gift",
        subItems: [
          { subTitle: "under $50", path: "/holyday/byPrice/under-50" },
          { subTitle: "under $100", path: "/holyday/byPrice/under-100" },
          { subTitle: "$100 - $200", path: "/holyday/byPrice/100-200" },
          { subTitle: "$200 & up", path: "/holyday/byPrice/200-and-up" },
        ],
      },

      {
        subTitle: "gift",
        subItems: [
          { subTitle: "for men", path: "/holyday/byRecipient/men" },
          { subTitle: "for women", path: "/holyday/byRecipient/women" },
          { subTitle: "for kids", path: "/holyday/byRecipient/kids" },
          { subTitle: "for families", path: "/holyday/byRecipient/family" },
          { subTitle: "for friends", path: "/holyday/byRecipient/friend" },
        ],
      },
    ],
  },
  {
    navLink: "valentine",
    image: "/navLink-3.jpg",
    subLinks: [
      {
        subTitle: "valentine",
        subItems: [
          { subTitle: "all new in holyday", path: "/holyday" },
          { subTitle: "christmas gifts", path: "/holyday/christmas-gift" },
        ],
      },

      {
        subTitle: "valentine",
        subItems: [
          { subTitle: "under $50", path: "/holyday/byPrice/under-50" },
          { subTitle: "under $100", path: "/holyday/byPrice/under-100" },
          { subTitle: "$100 - $200", path: "/holyday/byPrice/100-200" },
          { subTitle: "$200 & up", path: "/holyday/byPrice/200-and-up" },
        ],
      },

      {
        subTitle: "valentine",
        subItems: [
          { subTitle: "for men", path: "/holyday/byRecipient/men" },
          { subTitle: "for women", path: "/holyday/byRecipient/women" },
          { subTitle: "for kids", path: "/holyday/byRecipient/kids" },
          { subTitle: "for families", path: "/holyday/byRecipient/family" },
          { subTitle: "for friends", path: "/holyday/byRecipient/friend" },
        ],
      },
    ],
  },
];

export const cardDetails: CardItem[] = [
  {
    title: "Count it down",
    image: "/count-it-down.webp",
    btnText: "advent calenders",
    path: "/",
  },
  {
    title: "Surprises all around",
    image: "/surprises-all-around.webp",
    btnText: "stocking stuffer for everyone",
    path: "/",
  },
  {
    title: "Deck the halls",
    image: "/deck-the-halls.webp",
    btnText: "holiday decor",
    path: "/",
  },
  {
    title: "Big socks to fill",
    image: "/big-socks-to-fill.webp",
    btnText: "stocking stuffer for kids",
    path: "/",
  },
];

export const smallBoxItem: SmallBoxItem[] = [
  { id: 1, title: "sport", path: "/sport" },
  { id: 2, title: "food & drink", path: "/food-and-drink" },
  { id: 3, title: "reading", path: "/reading" },
  { id: 4, title: "geek", path: "/geek" },
  { id: 5, title: "gardening", path: "/gardening" },
  { id: 6, title: "pets & animals", path: "/pets-and-animals" },
  { id: 7, title: "game & puzzles", path: "/pets-and-animals" },
  { id: 8, title: "outdoors", path: "/outdoors" },
];

export const tempProducts: Product[] = [
  {
    id: 1,
    productName: "product-1",
    price: 22,
    image: "/product-1.webp",
    rate: 4,
    rateCount: 19,
  },
  {
    id: 2,
    productName: "product-2",
    image: "/product-2.webp",
    price: 22,
    rate: 4,
    rateCount: 19,
  },
  {
    id: 3,
    productName: "product-13",
    image: "/product-3.webp",
    price: 22,
    rate: 4,
    rateCount: 19,
  },
  {
    id: 4,
    productName: "product-14",
    image: "/product-4.webp",
    price: 22,
    rate: 4,
    rateCount: 19,
  },
  {
    id: 5,
    productName: "product-15",
    image: "/product-5.webp",
    price: 22,
    rate: 4,
    rateCount: 19,
  },
  {
    id: 6,
    productName: "product-15s",
    price: 22,
    image: "/product-6.webp",
    rate: 4,
    rateCount: 19,
  },
  {
    id: 7,
    productName: "product-1sa",
    price: 22,
    image: "/product-7.webp",
    rate: 4,
    rateCount: 19,
  },
  {
    id: 8,
    productName: "product-11",
    image: "/product-8.webp",
    rate: 4,
    price: 22,
    rateCount: 19,
  },
  {
    id: 9,
    productName: "product-112",
    image: "/product-9.webp",
    price: 22,
    rate: 4,
    rateCount: 19,
  },
  {
    id: 10,
    productName: "product-133",
    image: "/product-110.webp",
    price: 22,
    rate: 4,
    rateCount: 19,
  },
];

export const categoryItems: CategoryItem[] = [
  {
    title: "shop by recipient",
    items: [
      { text: "women", path: "/women" },
      {
        text: "men",
        path: "/men",
      },
      {
        text: "kids",
        path: "/kids",
      },
      {
        text: "friend",
        path: "/friend",
      },
      {
        text: "family",
        path: "/family",
      },
    ],
  },
  {
    title: "shop by category",
    items: [
      { text: "personalized", path: "/personalized" },
      {
        text: "jewelry",
        path: "/jewelry",
      },
      {
        text: "home decor",
        path: "/home-decor",
      },
      {
        text: "food-drink",
        path: "/friend",
      },
      {
        text: "kitchen",
        path: "/kitchen",
      },
    ],
  },
  {
    title: "shop by occasion",
    items: [
      { text: "wedding", path: "/wedding" },
      {
        text: "housewarming",
        path: "/housewarming",
      },
      {
        text: "birthday",
        path: "/birthday",
      },
      {
        text: "baby shower",
        path: "/baby-shower",
      },
      {
        text: "christmas gift",
        path: "/christmas-gift",
      },
    ],
  },
];

export const footerLinks: FooterLinks[] = [
  {
    id: 1,
    title: "support",
    links: [
      { title: "track & manage orders", path: "/orders" },
      { title: "shipping & return FAQ", path: "/shipping" },
      { title: "gifts", path: "/gifts" },
      { title: "submit feedback", path: "/feedback" },
    ],
  },
  {
    id: 2,
    title: "about us",
    links: [
      { title: "our story", path: "/our-story" },
      { title: "projects", path: "/projects" },
      { title: "better to give", path: "/better-to-give" },
      { title: "our team", path: "/our-team" },
      { title: "careers", path: "/feedback" },
    ],
  },

  {
    id: 3,
    title: "markers & products",
    links: [
      { title: "independent makers", path: "/markers" },
      { title: "submit your product", path: "/submit-your-product" },
      { title: "shopping centers", path: "/shopping-center" },
    ],
  },
  {
    id: 4,
    title: "about us",
    links: [
      { title: "our story", path: "/our-story" },
      { title: "projects", path: "/projects" },
      { title: "better to give", path: "/better-to-give" },
      { title: "our team", path: "/our-team" },
      { title: "careers", path: "/feedback" },
    ],
  },
];
