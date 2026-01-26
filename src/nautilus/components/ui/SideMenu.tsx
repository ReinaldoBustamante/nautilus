import { IoHomeOutline } from "react-icons/io5"
import { MdOutlineEmail, MdWorkOutline } from "react-icons/md"
import { RiCalendarScheduleLine } from "react-icons/ri"
import { RxEnter } from "react-icons/rx"
import { Link } from "react-router"

interface SideMenuProps {
    menuIsOpen: boolean,
    setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideMenu = ({ menuIsOpen, setMenuIsOpen }: SideMenuProps) => {
    return <div className={`
            absolute w-70 top-0 right-0 h-dvh border-l 
            border-l-gray-200 bg-white z-50 pt-26 p-4 flex flex-col justify-between 
            gap-4 transform transition-transform duration-300 
            ${menuIsOpen ? "translate-x-0" : "translate-x-full"}`
    }>
        <ul className="flex flex-col gap-4">
            <Link to={'/'} className="font-medium text-white flex items-center gap-2 bg-[#10ACDB] p-2 pr-4 pl-4 rounded-md" onClick={() => setMenuIsOpen(false)}>
                <IoHomeOutline size={24} />
                <span>Inicio</span>
            </Link>
            <Link to={'/'} className="font-medium hover:text-[#16B3DE] flex items-center gap-2 p-2 pr-4 pl-4  rounded-md" onClick={() => setMenuIsOpen(false)}>
                <MdWorkOutline size={24} />
                <span>Servicios</span>
            </Link>
            <Link to={'/'} className="font-medium hover:text-[#16B3DE] flex items-center gap-2 p-2 pr-4 pl-4  rounded-md" onClick={() => setMenuIsOpen(false)}>
                <MdOutlineEmail size={24} />
                <span>Contacto</span>
            </Link>
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