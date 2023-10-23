import { create } from "zustand";

const removeOneItem = (products, item) => {
  // amader j item ache tar kono duplicate ache ki na
  // joodi duplicate thake  - tahoel sei gulo k 1t array te nibo
  // tarpot oi array theke first item ta bad dibo
  // r jodi duplicate item na thake tahole oi item bade baki gulo k niye nibo
  // const filteredItem = products.filter((item)=>)
};

export const addCartProducts = (products, p) => {
  console.log("products", products.length);
  console.log("p", p);
  let cartProducts = [];
  if (products.length >= 1 && products.length <= 10) {
    products.map((item) => {
      if (item.id === p.id) {
        cartProducts.push({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity + 1,
        });
      } else {
        cartProducts.push({
          id: p.id,
          title: p.title,
          image: p.image,
          price: p.price,
          quantity: 1,
        });
      }
    });
  }
  if (products.length === 0) {
    console.log("salam");
    cartProducts.push({
      id: p.id,
      title: p.title,
      image: p.image,
      price: p.price,
      quantity: 1,
    });
  }
  console.log("cartProducts==", cartProducts);
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
      cartProducts: [...state.cartProducts.filter((item) => item.id !== p.id)],
    })),
  removeAllCart: () => set((state) => ({ cartProducts: [] })),
}));

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
