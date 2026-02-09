import { create } from 'zustand'
import { loginUser } from '../actions/login-user.action'
import { persist, createJSONStorage } from 'zustand/middleware';
import { userInfoAction } from '../actions/user-info.action';

type AuthState = {
  role: string | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  doctor_id: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void

}

export const AuthStore = create<AuthState>()(
  persist(
    (set) => ({
      role: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      doctor_id: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const data = await loginUser(email, password);
          const userData = await userInfoAction(data.token)
          set({
            token: data.token,
            role: data.role,
            isAuthenticated: true,
            isLoading: false,
            doctor_id: userData.user.id
          });
        } catch (err) {
          set({
            role: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
            doctor_id: null,
            error: 'Credenciales inválidas',
          });
        }
      },

      logout: () => {
        set({
          role: null,
          token: null,
          isAuthenticated: false,
          doctor_id: null
        });
      },
    }),
    {
      name: 'auth-storage', // Nombre único para la key en el localStorage
      storage: createJSONStorage(() => localStorage), // Usa localStorage por defecto
      // Opcional: Si no quieres persistir el estado 'isLoading' o 'error'
      partialize: (state) => ({
        token: state.token,
        role: state.role,
        isAuthenticated: state.isAuthenticated,
        doctor_id: state.doctor_id
      }),
    }
  )
);