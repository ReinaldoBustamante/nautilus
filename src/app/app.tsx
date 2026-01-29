import { RouterProvider } from "react-router"
import { appRoutes } from "./app.routes"
import { Toaster } from "react-hot-toast";

export const App = () => {

    return (
        <>
            <Toaster
                position="top-right"
                containerStyle={{
                    top: "120px" // mueve todo el contenedor 100px desde arriba
                }}
                toastOptions={{
                    className: 'md:mr-16'
                }}
            />
            <RouterProvider router={appRoutes} />
        </>
    )
}