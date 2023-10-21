import { create } from "zustand";

// export const useCartStore = create((set) => ({
//   cartProducts: [],
//   setCartProducts: (c) =>
//     set((state) => ({ cartProducts: state.cartProducts.push(c) })),
//   //   removeAllCard: () => set({ cartProducts: [] }),
// }));

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const myFunction = () => {
  return "Hello world";
};
