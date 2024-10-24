import { create } from "zustand";
import { ProductStore } from "../interfaces";
import { products } from "../services/products";

const useProductsStore = create<ProductStore>((set) => ({
  products: [],
  isLoading: false,
  getProductsById: async (id) => {
    set({ isLoading: true });
    try {
      const response = await products.get_products_by_id(id);
      set({ products: response?.data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductsStore;