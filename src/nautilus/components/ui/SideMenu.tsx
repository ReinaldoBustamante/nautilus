import { RiCalendarScheduleLine } from "react-icons/ri"
import { RxEnter } from "react-icons/rx"
import { Link } from "react-router"
import { navRoutes } from "./Header"

interface SideMenuProps {
    menuIsOpen: boolean,
    setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    setScrollTarget: React.Dispatch<React.SetStateAction<string>>,
    sectionActive: string
}

export const SideMenu = ({ menuIsOpen, setMenuIsOpen, setScrollTarget, sectionActive }: SideMenuProps) => {
    return <div className={`
            absolute w-70 top-0 right-0 h-dvh border-l 
            border-l-gray-200 bg-white z-50 pt-26 p-4 flex flex-col justify-between 
            gap-4 transform transition-transform duration-300 
            ${menuIsOpen ? "translate-x-0" : "translate-x-full"}`
    }>
        <ul className="flex flex-col gap-4">
            {
                navRoutes.map(({ id, name, icon: Icon }) => {
                    return <Link to={'/'}
                        className={`font-medium flex items-center p-2 pr-4 transition-all pl-4 gap-2 ${sectionActive === id && 'bg-[#10ACDB]  rounded-md text-white'}`}
                        onClick={() => {
                            setMenuIsOpen(false)
                            setScrollTarget(id)
                        }}>
                        <Icon size={24} />
                        <span>{name}</span>
                    </Link>
                })
            }
        </ul>

        <div className="flex flex-col gap-3">
            <Link to={'/auth'} className="border border-[#10ACDB] text-[#10ACDB] w-full font-medium p-3 flex items-center gap-2 pr-4 pl-4  rounded-md">
                <RxEnter size={24} />
                <span>Iniciar Sesión</span>
            </Link>
            <Link to={'/agendar'} onClick={() => setMenuIsOpen(false)} className="bg-[#10ACDB] w-full text-white font-medium p-3 flex items-center gap-2 pr-4 pl-4  rounded-md">
                <RiCalendarScheduleLine size={24} />
                <span>Agendar Cita</span>
            </Link>
        </div>

    </div>
}