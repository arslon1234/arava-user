import { create } from "zustand";
import { BranchStore } from "../interfaces";
import { branches } from "../services/branchs";

const useBrandsStore = create<BranchStore>((set) => ({
  branches: [],
  isLoading: false,
  getBranchs: async () => {
    set({ isLoading: true });
    try {
      const response = await branches.get_branchs();
      set({ branches: response.data.content });
    } catch (err) {
      console.error(err);
    } finally {
        set({ isLoading: false });
    }
  },
}));

export default useBrandsStore;
