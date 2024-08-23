import { Product, products } from "@/products/data/products";
import { ItemCard } from "@/shoppin-cart/components/ItemCard";
import { cookies } from "next/headers";
import Link from "next/link";

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }) => {
  const productsInCart: ProductInCart[] = [];
  for (const id of Object.keys(cart)) {
    const product = products.find((prod) => prod.id === id);
    if (product) {
      productsInCart.push({ product: product, quantity: cart[id] });
    }
  }
  return productsInCart;
};

export default function CartPage() {
  const cookiesStore = cookies();
  const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}") as {
    [id: string]: number;
  };
  const productsInCart = getProductsInCart(cart);
  const totalToPay = productsInCart.reduce(
    (prev, current) => current.product.price * current.quantity + prev,
    0
  );

  return (
    <div className="flex flex-col justify-center p-0">
      <h1 className="hidden mt-4 text-xl font-bold text-gray-800 lg:block mb-2">
        PRODUCTS CART
      </h1>
      <hr className="mb-5" />

      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-2 w-full">
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}
        </div>

        <section
          aria-labelledby="summary-heading"
          className="w-full mt-10 flex flex-col items-center"
        >
          <h2 id="summary-heading" className="sr-only">
            Order summary
          </h2>

          <div className="w-full max-w-md">
            <dl className="space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">Total</dt>
                <dd className="ml-4 text-base font-medium text-gray-900">
                  ${totalToPay}
                </dd>
              </div>
            </dl>
            <p className="mt-1 text-sm text-gray-500">
              Shipping and taxes will be calculated at checkout.
            </p>
          </div>

          <div className="mt-10 w-full max-w-md">
            <button
              type="submit"
              className="w-full border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-900  focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Checkout
            </button>
          </div>

          <div className="mt-6 text-center text-sm w-full max-w-md">
            <p>
              or
              <Link
                href={"/dashboard/products"}
                className="font-medium text-black hover:text-amber-900 m-1"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
