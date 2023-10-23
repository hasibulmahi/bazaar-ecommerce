import { has, isEmpty } from "lodash";
import { create } from "zustand";

const removeOneItem = (products, item) => {
  // amader j item ache tar kono duplicate ache ki na
  // joodi duplicate thake  - tahoel sei gulo k 1t array te nibo
  // tarpot oi array theke first item ta bad dibo
  // r jodi duplicate item na thake tahole oi item bade baki gulo k niye nibo
  // const filteredItem = products.filter((item)=>)
};

const cartItemObject = (p, quantity = 1) => {
  return {
    id: p.id,
    title: p.title,
    image: p.image,
    price: p.price,
    quantity: quantity,
  };
};

export const addCartProducts = (products, p) => {
  let cartProducts = [...products];
  const duplicateItem = products.find((item) => item.id === p.id);
  if (duplicateItem) {
    cartProducts = cartProducts.filter((item) => item.id !== p.id);
    cartProducts.push(cartItemObject(p, duplicateItem.quantity + 1));
  } else {
    cartProducts.push(cartItemObject(p));
  }
  return cartProducts;
};
export const removeProducts = (products, p) => {
  let cartProducts = [...products];
  const duplicateItem = products.find((item) => item.id === p.id);
  if (duplicateItem && duplicateItem.quantity > 1) {
    cartProducts = cartProducts.filter((item) => item.id !== p.id);
    cartProducts.push(cartItemObject(p, duplicateItem.quantity - 1));
  } else {
    cartProducts = cartProducts.filter((item) => item.id !== p.id);
  }
  return cartProducts;
};

export const useCartStore = create((set) => ({
  cartProducts: [],
  // setCartProducts: (p) =>
  //   set((state) => ({ cartProducts: [p, ...state.cartProducts] })),
  setCartProducts: (p) =>
    set((state) => ({
      cartProducts: [...addCartProducts(state.cartProducts, p)],
    })),
  removeCartProducts: (p) =>
    set((state) => ({
      cartProducts: [...removeProducts(state.cartProducts, p)],
    })),
  removeAllCart: () => set((state) => ({ cartProducts: [] })),
}));

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
