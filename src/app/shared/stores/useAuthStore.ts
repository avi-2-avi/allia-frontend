import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../models/User";

type AuthStore = {
  token?: string,
  user?: User,
  login: (token: string, user: User) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

export const useAuthStore = create<AuthStore>()(persist(((set, get) => ({
  token: undefined,
  user: undefined,
  login: (token: string, user: User) => {
    set(() => ({ token, user }))
  },

  logout: () => set(() => ({ token: undefined, user: undefined })),
  isLoggedIn: () => get().token !== undefined,
})), {
  name: "user"
}));