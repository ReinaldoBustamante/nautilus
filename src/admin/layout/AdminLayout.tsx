import { Outlet } from "react-router"
import { SideBar } from "../../components/ui/SideBar"
import { FiHome } from "react-icons/fi"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { AiOutlineMenu } from "react-icons/ai"

export const AdminLayout = () => {

    const menuList = [
        {
            icon: FiHome,
            label: 'Home',
            path: '/panel'
        },
    ]
    const [isMenuActivate, setMenuIsActivate] = useState(false)
    return <div className="flex">
        <SideBar menuList={menuList} isMenuActivate={isMenuActivate} />

        <div className="flex-1 overflow-y-auto flex flex-col gap-8">
            <div className="md:hidden flex justify-end p-4 py-6 bg-white border-b border-gray-200 sticky top-0">
                {
                    isMenuActivate
                        ? <IoMdClose className="flex md:hidden z-1000 self-end" size={28} onClick={() => setMenuIsActivate(false)} />
                        : <AiOutlineMenu className="flex md:hidden z-1000 self-end" size={28} onClick={() => setMenuIsActivate(true)} />
                }
            </div>
            <div className="p-10">
                <Outlet />
            </div>
        </div>
    </div>
}