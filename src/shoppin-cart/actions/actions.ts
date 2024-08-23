//desde client

/* cookie:cart
{
'uui-123-1':4,
'uui-123-2':1,
'uui-123-3':2,
}
*/
import { getCookie, hasCookie, setCookie } from "cookies-next";
export const getCookieCart = (): { [id: string]: number } => {
  //obtengo el carrito
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse((getCookie("cart") as string) ?? "{}");
    return cookieCart;
  }
  return {};
};

export const addProductToCart = (id: string) => {
  //agreggo un producto al carrito
  const cookieCart = getCookieCart();
  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }
  setCookie("cart", JSON.stringify(cookieCart)); //seteo con actualizaciones
};

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  delete cookieCart[id];
  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeSingleItemFromCart = (id: string) => {
  const cookieCart = getCookieCart();

  if (cookieCart[id]) {
    cookieCart[id] -= 1; // Reduce la cantidad en 1

    if (cookieCart[id] === 0) {
      delete cookieCart[id]; // Elimina el producto si la cantidad es 0
    }

    setCookie("cart", JSON.stringify(cookieCart)); // Actualiza la cookie
  }
};
