import {
  DeliveryDiningOutlined,
  Discount,
  MessageOutlined,
  Payment,
} from "@mui/icons-material";

export const categories = [
  {
    id: 1,
    name: "Casual",
    img: "./assets/category-1.jpg",
  },
  {
    id: 2,
    name: "Formal",
    img: "./assets/category-2.jpg",
  },
  {
    id: 3,
    name: "Sports wear",
    img: "./assets/category-3.jpg",
  },
];

export const products = [
  {
    id: 1,
    title: "Adidas Samba",
    description: "Adidas samba for casual wear",
    price: 350,
    category: ["men", "shoes", "Adidas"],
    colors: ["black", "blue", "green", "white"],
    size: [30, 32, 35, 36, 38, 39, 42],
    img: "../assets/samba.png",
  },
  {
    id: 2,
    title: "Nike SB GRAY WOLF",
    description: "SB for casual wear",
    price: 650,
    category: ["men", "shoes", "SB"],
    colors: ["black", "green", "white"],
    size: [30, 32, 39, 42],
    img: "../assets/sb.png",
  },
  {
    id: 3,
    title: "NEW BALANCE 530",
    description: "New balance 530 for casual wear and modern look",
    price: 400,
    category: ["men", "shoes"],
    colors: ["black", "white"],
    size: [30, 32, 35, 36, 38, 39, 42],
    img: "../assets/nb530.png",
  },
  // {
  //   id: 4,
  //   title: "NEW BALANCE 550",
  //   description: "New balance 550 for better looking and good impretion",
  //   price: 660,
  //   category: ["men", "shoes"],
  //   colors: ["black", "blue", "green", "white", "brown"],
  //   size: [30, 32, 35, 36, 38, 39, 42],
  //   img: "./assets/nb550.png",
  // },
  // {
  //   id: 5,
  //   title: "Asics",
  //   description: "Asics casual wear and for sports",
  //   price: 850,
  //   category: ["men", "shoes"],
  //   colors: ["black", "blue", "white"],
  //   size: [30, 32, 35, 36, 38, 39, 42],
  //   img: "./assets/asics.png",
  // },
  // {
  //   id: 6,
  //   title: "Asics",
  //   description: "Asics casual wear and for sports",
  //   price: 850,
  //   category: ["men", "shoes"],
  //   colors: ["black", "blue", "white"],
  //   size: [30, 32, 35, 36, 38, 39, 42],
  //   img: "./assets/asics.png",
  // },
  // {
  //   id: 7,
  //   title: "Asics",
  //   description: "Asics casual wear and for sports",
  //   price: 850,
  //   category: ["men", "shoes"],
  //   colors: ["black", "blue", "white"],
  //   size: [30, 32, 35, 36, 38, 39, 42],
  //   img: "./assets/asics.png",
  // },
  // {
  //   id: 8,
  //   title: "Asics",
  //   description: "Asics casual wear and for sports",
  //   price: 850,
  //   category: ["men", "shoes"],
  //   colors: ["black", "blue", "white"],
  //   size: [30, 32, 35, 36, 38, 39, 42],
  //   img: "./assets/asics.png",
  // },
];

// export const offers = [
//   {
//     id: 1,
//     title: "Fast delivery",
//     description: "Free Shipping for orders over £130",
//     icon: <DeliveryDiningOutlined />,
//   },
//   {
//     id: 2,
//     title: "Secure SSL",
//     description: "256-Bit Payment Protection",
//     icon: <MessageOutlined />,
//   },
//   {
//     id: 3,
//     title: "Paypal Or appDelivery",
//     description: "Pay with multiple credit cards",
//     icon: <Payment />,
//   },
//   {
//     id: 4,
//     title: "Get discounts",
//     description: "Join the sale campaign",
//     icon: <Discount />,
//   },
// ];
