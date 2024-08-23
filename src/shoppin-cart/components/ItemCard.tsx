"use client";

import type { Product } from "../../products/data/products";
import Image from "next/image";

import { IoAddCircleOutline, IoRemove } from "react-icons/io5";
import { addProductToCart, removeSingleItemFromCart } from "../actions/actions";
import { MdDeleteOutline, MdAddCircleOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
  quantity: number;
}

export const ItemCard = ({ product, quantity }: Props) => {
  const router = useRouter();

  function onAddToCart() {
    addProductToCart(product.id);
    router.refresh();
  }

  function onRemoveItem() {
    removeSingleItemFromCart(product.id);
    router.refresh();
  }

  return (
    <div className="flex items-center  shadow rounded-lg w-full bg-white border-gray-100">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={180}
          height={180}
          className="rounded"
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* Title */}
      <div className="px-2 pb-5 w-full flex flex-col mt-2">
        <a href="#">
          <h3 className="font-bold text-xl tracking-tight text-black ">
            {product.name}
            <small className="text-xs p-2  text-gray-700 ">
              ${product.price.toFixed(2)}
            </small>
          </h3>
        </a>

        {/* Price and Add to Cart */}
        <div className="flex flex-col items-start justify-between">
          <span className="text-gray-900 dark:text-white text-sm">
            Cantidad: {quantity}
          </span>
          <span className="font-bold text-black text-sm">
            Total: ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex p-5 items-center justify-between">
        <MdAddCircleOutline
          size={19}
          className="transition-all hover:scale-105 focus:scale-107 m-4"
          onClick={onAddToCart}
        />
        {/* <span className="text-2xl text-white mx-10">{quantity}</span> */}

        <MdDeleteOutline
          size={19}
          className="transition-all hover:scale-105 focus:scale-107 "
          onClick={onRemoveItem}
        />
      </div>
    </div>
  );
};
