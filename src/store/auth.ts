import { create } from "zustand";
import { AuthStore } from "../interfaces";
import { auth } from "../services/auth";

const useBrandsStore = create<AuthStore>((set) => ({
  data: [],
  isLoading: false,
  sign_in: async (data) => {
    set({ isLoading: true });
    try {
      const response = await auth.login(data);
      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
        set({ isLoading: false });
    }
  },
  activation: async (data) => {
    set({ isLoading: true });
    try {
      const response = await auth.activate(data);
      set({ data: response.data });
    } catch (err) {
      console.error(err);
    } finally {
        set({ isLoading: false });
    }
  }
}));

export default useBrandsStore;
