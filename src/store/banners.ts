import { create } from "zustand";
import { BannerStore } from "../interfaces";
import { banners } from "../services/banners";

const useBrandsStore = create<BannerStore>((set) => ({
  banners: [],
  isLoading: false,
  getData: async () => {
    set({ isLoading: true });
    try {
      const response = await banners.get_banners();
      set({ banners: response.data });
    } catch (err) {
      console.error(err);
    } finally {
        set({ isLoading: false });
    }
  },
}));

export default useBrandsStore;
