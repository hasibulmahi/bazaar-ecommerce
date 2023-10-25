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
  typeof window !== "undefined" &&
    window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

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

  typeof window !== "undefined" &&
    window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

  return cartProducts;
};

const cartProducts = () => {
  const getLocalStorageCartProduct =
    typeof window !== "undefined" &&
    window.localStorage.getItem("cartProducts");

  if (!isEmpty(getLocalStorageCartProduct)) {
    return JSON.parse(getLocalStorageCartProduct);
  } else {
    return [];
  }
};

//state.cartProducts.filter((item) => item.id !== p.id)

const removeSameProducts = (products, p) => {
  let cartProducts = [...products];
  const removedItems = products.filter((item) => item.id !== p.id);
  console.log("removedItems", removedItems);
  if (removedItems.length) {
    cartProducts = [...removedItems];
  } else {
    cartProducts = [];
  }
  typeof window !== "undefined" &&
    window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  return cartProducts;
};

export const useCartStore = create((set) => ({
  cartProducts: cartProducts(),
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
  removeSameCartProducts: (p) =>
    set((state) => ({
      cartProducts: [...removeSameProducts(state.cartProducts, p)],
    })),
  removeAllCart: () => set((state) => ({ cartProducts: [] })),
}));

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// first a check korte hobe localstorage a kono object ache ki na - particular name a
// ebar check korte hobe zustand er kache cart er product ache ki na
// ebar jodi local strorage a thake seita zustand a setCart diye set korte hobe

// zustand a jookhon kono item add or remove hobe seita local storage a set korte hobe

// if (!isEmpty(getLocalStorageCartProduct)) {
//   localStorage.setItem("cartProducts", useCartStore.cartProducts);
// }

const getLocalStorageCartProduct =
  typeof window !== "undefined" && window.localStorage.getItem("cartProducts");
// if (!isEmpty(getLocalStorageCartProduct)) {
//   console.log("I am inside this");
//   // window.localStorage.setItem("cartProducts");
//   console.log("useCartStore", useCartStore());
// }
console.log("getLocalStorageCartProduct", getLocalStorageCartProduct);
