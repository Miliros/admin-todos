import { ProductCard } from "@/products";
import { products } from "@/products/data/products";

export default function ProductPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <p className="flex justify-center p-2 font-medium"> Products to buy </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {products.map((producto) => (
          <ProductCard
            key={producto.id}
            id={producto.id}
            name={producto.name}
            price={producto.price}
            description={producto.description}
            image={producto.image}
          />
        ))}
      </div>
    </div>
  );
}
