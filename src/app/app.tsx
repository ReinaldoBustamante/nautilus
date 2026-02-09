import { RouterProvider } from "react-router"
import { appRoutes } from "./app.routes"
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



export const App = () => {
    const queryClient = new QueryClient()
    return (
        <>
            
            <Toaster
                position="top-right"
                containerStyle={{
                    top: "120px"
                }}
                toastOptions={{
                    className: 'md:mr-16 text-2xl w-80 h-15'
                }}
            />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={appRoutes} />
            </QueryClientProvider>

        </>
    )
}