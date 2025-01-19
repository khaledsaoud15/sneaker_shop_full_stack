import {
  DeliveryDiningOutlined,
  Discount,
  MessageOutlined,
  Payment,
} from "@mui/icons-material";

export const products = [
  {
    id: 1,
    title: "Shiny Dress",
    stars: 2,
    reviews: 4.1,
    brand: "chanel",
    description: "Adidas samba for casual wear",
    price: 95.5,
    category: ["women", "shoes", "soft", "women's fashion"],
    colors: ["black", "blue", "green", "white"],
    size: ["S", "M", "L", "XL"],
    thumbnail: "../assets/Images.png",
    images: [
      "https://i.pinimg.com/236x/f3/50/c9/f350c971240b48084341e6cda04988e7.jpg",
      "https://i.pinimg.com/736x/43/2f/52/432f52e3271ad677bd163e23b5d16009.jpg",
      "https://i.pinimg.com/236x/46/42/73/46427347b1cea215a5399050d4e07155.jpg",
      "https://i.pinimg.com/236x/9d/e7/73/9de7736407bcfd1f298770b431790fad.jpg",
    ],
  },
  {
    id: 2,
    title: "Long dress",
    stars: 4,
    reviews: 4.1,
    brand: "chanel",
    description: "SB for casual wear",
    price: 650,
    category: ["women", "dress", "casual", "women's fashion"],
    colors: ["black", "green", "white"],
    size: ["S", "M", "L", "XL"],
    thumbnail: "../assets/Images-1.png",
    images: [
      "https://i.pinimg.com/236x/f3/50/c9/f350c971240b48084341e6cda04988e7.jpg",
      "https://i.pinimg.com/736x/43/2f/52/432f52e3271ad677bd163e23b5d16009.jpg",
      "https://i.pinimg.com/236x/46/42/73/46427347b1cea215a5399050d4e07155.jpg",
      "https://i.pinimg.com/236x/9d/e7/73/9de7736407bcfd1f298770b431790fad.jpg",
    ],
  },
  {
    id: 3,
    title: "Pijamas",
    stars: 3,
    reviews: 4.1,
    brand: "chanel",
    description: "New balance 530 for casual wear and modern look",
    price: 400,
    category: ["women", "dress"],
    colors: ["black", "white"],
    size: ["S", "M", "L", "XL"],
    thumbnail: "../assets/Images-2.png",
    images: [
      "https://i.pinimg.com/236x/f3/50/c9/f350c971240b48084341e6cda04988e7.jpg",
      "https://i.pinimg.com/736x/43/2f/52/432f52e3271ad677bd163e23b5d16009.jpg",
      "https://i.pinimg.com/236x/46/42/73/46427347b1cea215a5399050d4e07155.jpg",
      "https://i.pinimg.com/236x/9d/e7/73/9de7736407bcfd1f298770b431790fad.jpg",
    ],
  },
  {
    id: 4,
    title: "NEW BALANCE 530",
    stars: 2,
    reviews: 4.1,
    brand: "chanel",
    description: "New balance 530 for casual wear and modern look",
    price: 400,
    category: ["women", "dress"],
    colors: ["black", "white"],
    size: ["S", "M", "L", "XL"],
    thumbnail: "../assets/Images-3.png",
    images: [
      "https://i.pinimg.com/236x/f3/50/c9/f350c971240b48084341e6cda04988e7.jpg",
      "https://i.pinimg.com/736x/43/2f/52/432f52e3271ad677bd163e23b5d16009.jpg",
      "https://i.pinimg.com/236x/46/42/73/46427347b1cea215a5399050d4e07155.jpg",
      "https://i.pinimg.com/236x/9d/e7/73/9de7736407bcfd1f298770b431790fad.jpg",
    ],
  },
  {
    id: 5,
    title: "Sunglases",
    stars: 3,
    reviews: 4.1,
    brand: "chanel",
    description: "New balance 530 for casual wear and modern look",
    price: 400,
    category: ["women", "dress", "women's accessorie"],
    colors: ["black", "white"],
    size: ["S", "M", "L", "XL"],
    thumbnail: "../assets/Images-4.png",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1502767089025-6572583495f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1566421966482-ad8076104d8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    id: 6,
    title: "NEW BALANCE 530",
    stars: 4,
    reviews: 4.1,
    brand: "chanel",
    description: "New balance 530 for casual wear and modern look",
    price: 400,
    category: ["women", "dress"],
    colors: ["black", "white"],
    size: ["S", "M", "L", "XL"],
    thumbnail: "../assets/Images-5.png",
    images: [
      "https://i.pinimg.com/236x/f3/50/c9/f350c971240b48084341e6cda04988e7.jpg",
      "https://i.pinimg.com/736x/43/2f/52/432f52e3271ad677bd163e23b5d16009.jpg",
      "https://i.pinimg.com/236x/46/42/73/46427347b1cea215a5399050d4e07155.jpg",
      "https://i.pinimg.com/236x/9d/e7/73/9de7736407bcfd1f298770b431790fad.jpg",
    ],
  },
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
