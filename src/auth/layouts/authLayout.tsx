import { MdOutlineArrowBack } from "react-icons/md"
import { Link, Outlet } from "react-router"
import { ScrollToTop } from "../../utils/ScrollToTop"

export const AuthLayout = () => {
    return <div className="flex flex-col">
        <div className="p-4 pt-8 pb-8 bg-[#F6F9FB] flex flex-col gap-4">
            <Link to={'/'} className="flex items-center gap-2">
                <MdOutlineArrowBack size={24} />
                <span>Volver al inicio</span>
            </Link>
        </div>
        <div className="bg-[#F6F9FB] md:pt-10 p-4 h-svh">
            <ScrollToTop />
            <Outlet />
        </div>
    </div>
}