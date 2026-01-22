import { RouterProvider } from "react-router"
import { appRoutes } from "./app.routes"

export const App = () => {
    return <RouterProvider router={appRoutes} />
}