import { RouterProvider } from "react-router"
import { appRoutes } from "./app.routes"
import { Toaster } from "react-hot-toast";

export const App = () => {

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
            <RouterProvider router={appRoutes} />
        </>
    )
}