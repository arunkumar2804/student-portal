import { create } from 'zustand';

type Role = 'student' | 'faculty' | 'admin' | null;

interface AuthState {
  user: any | null;
  role: Role;
  isLoading: boolean;
  setUser: (user: any, role: Role) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: null,
  isLoading: false,
  setUser: (user, role) => set({ user, role }),
  logout: () => set({ user: null, role: null }),
}));
