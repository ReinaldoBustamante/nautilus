import type { IconType } from "react-icons"
import { NavigatorMenu } from "./NavigatorMenu"
import { AuthStore } from "../../auth/store/auth.store"

type MenuItem = {
    icon: IconType,
    label: string,
    path: string
}

export const SideBar = ({ menuList, isMenuActivate }: { menuList: MenuItem[], isMenuActivate: boolean }) => {
    const { logout } = AuthStore();

    return (
        <aside 
            className={`
                fixed top-0 left-0 z-50 h-screen bg-white border-r border-gray-100 shadow-xl p-10 
                flex flex-col gap-4 justify-between w-80
                transition-transform duration-300 ease-in-out
                ${isMenuActivate ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0 md:flex
            `}
        >
            <div className="flex flex-col gap-8">
                <img src="/images/nautilus_logo.png" alt="nautilus logo" className="border-b-2 pb-4 border-gray-200" />
                <NavigatorMenu menuList={menuList} />
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center bg-[#F2F6F8] rounded-xl p-4">
                    <span className="rounded-full w-14 h-14 bg-[#21B1C4] flex items-center justify-center text-xl text-white font-bold">NB</span>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-sm">Dr. Nicolas Bustamante</h2>
                        <p className="text-gray-500 text-xs font-semibold">Otorrinolaringologo</p>
                    </div>
                </div>
                <button 
                    className="p-3 text-white rounded-xl font-bold text-lg bg-[#EF4343] hover:scale-105 transition-all cursor-pointer" 
                    onClick={logout}
                >
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    );
}