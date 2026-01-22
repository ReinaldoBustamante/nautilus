import { createBrowserRouter, Navigate } from "react-router";
import { NautilusLayout } from "../nautilus/layouts/NautilusLayout";
import { HomePage } from "../nautilus/pages/home/HomePage";
import { BookAppointmentPage } from "../nautilus/pages/bookAppointment/BookAppointmentPage";
import { AuthLayout } from "../auth/layouts/authLayout";
import { LoginPage } from "../auth/pages/login/LoginPage";


export const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <NautilusLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'agendar',
                element: <BookAppointmentPage />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
])