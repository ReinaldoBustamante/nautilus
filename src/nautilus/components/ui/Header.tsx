import { Link, useNavigate } from "react-router"
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { RxEnter } from "react-icons/rx";
import { SideMenu } from "./SideMenu";

interface HeaderProps {
    menuIsOpen: boolean,
    setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ menuIsOpen, setMenuIsOpen }: HeaderProps) => {

    const navigate = useNavigate()
    return <div className="w-full fixed z-1000">
        <div className="border-b bg-[#FAFBFC] border-b-gray-200 flex justify-between items-center p-4 md:pl-20 md:pr-20 ">
            <img src={"/images/nautilus_logo.png"} alt="Nautilus Logo" className="w-52 " onClick={() => {
                navigate('/')
            }} />
            <nav className="hidden md:flex md:gap-12 items-center">
                <Link to={'/'} className="text-black font-medium text-xl hover:text-[#16B3DE]" onClick={() => setMenuIsOpen(false)}>Inicio</Link>
                <Link to={'/'} className="text-black font-medium text-xl hover:text-[#16B3DE]" onClick={() => setMenuIsOpen(false)}>Servicios</Link>
                <Link to={'/'} className="text-black font-medium text-xl hover:text-[#16B3DE]" onClick={() => setMenuIsOpen(false)}>Contacto</Link>
                <Link to={'/auth'} className="border border-[black] text-[black] hover:border-[#10ACDB] hover:text-white hover:bg-[#10ACDB] w-full font-medium p-3 flex items-center gap-2 pr-4 pl-4  rounded-md">
                    <RxEnter size={24} />
                    <span className="text-xl">Iniciar Sesión</span>
                </Link>
            </nav>
            {
                menuIsOpen
                    ? <IoMdClose className="flex md:hidden z-999" size={28} onClick={() => setMenuIsOpen(false)} />
                    : <AiOutlineMenu className="flex md:hidden z-999" size={28} onClick={() => setMenuIsOpen(true)} />
            }
        </div>
        <div
            className={`
                fixed inset-0 bg-black/40
                transition-opacity duration-300
                ${menuIsOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                md:hidden
                z-40
            `}
            onClick={() => setMenuIsOpen(false)}
        />
        <SideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </div>
}