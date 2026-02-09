
import type { ReactNode } from 'react'
import { Navigate } from 'react-router'
import { AuthStore } from '../auth/store/auth.store'

interface Props {
    children: ReactNode;
    allowedRole: 'admin' | 'doctor'; // Forzamos a que pases un rol
}

export const PrivateRoutes = ({ children, allowedRole }: Props) => {
    const { isAuthenticated, role } = AuthStore()

    if (!isAuthenticated) return <Navigate to="/auth" />
    if (role !== allowedRole) {
        return <Navigate to={role === 'doctor' ? '/dashboard' : '/panel'} />
    }
    return children
}