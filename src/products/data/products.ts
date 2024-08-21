export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "UUID-ABC-1",
    name: "Sunglases",
    price: 15,
    description: "Vintage Sunglasses",
    image: "/images/products/110c46171d2a2b50cc1c4fd564cecaea.jpg",
  },
  {
    id: "UUID-ABC-2",
    name: "Cap",
    price: 25,
    description: "Vingate Cap white",
    image: "/images/products/a884e06ce70e61ac87ea783203948871.jpg",
  },
  {
    id: "UUID-ABC-3",
    name: "Beach Bag & Glasses Holder",
    price: 36,
    description: "Luxury Bag",
    image: "/images/products/7715d19fdf46644f7f0ee9bf67bd1b03.jpg",
  },
  {
    id: "UUID-ABC-4",
    name: "Bikini",
    price: 45,
    description: "Summer Bikini",
    image: "/images/products/a48849ae59b8ee95f700abab138ad4b3.jpg",
  },
  {
    id: "UUID-ABC-5",
    name: "Cosmetic Bag",
    price: 45,
    description: "small size cosmetic bag",
    image: "/images/products/4743a9a049fc48625278975ea526c2f6.jpg",
  },
  {
    id: "UUID-ABC-6",
    name: "hair comb",
    price: 45,
    description: "small size hair comb",
    image: "/images/products/fa7513341e30ab2402b2ac7a69b54bff.jpg",
  },
];
