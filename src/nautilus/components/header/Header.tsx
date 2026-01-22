import { Link } from "react-router"
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { SideMenu } from "./side-menu/SideMenu";

interface HeaderProps {
    menuIsOpen: boolean,
    setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({ menuIsOpen, setMenuIsOpen }: HeaderProps) => {
    return <div className="w-full fixed">
        <div className="border-b bg-[#FAFBFC] border-b-gray-200 flex justify-between items-center p-4 md:pl-8 md:pr-8 ">
            <img src={"/images/nautilus_logo.png"} alt="Nautilus Logo" className="w-40 " />
            <nav className="hidden md:flex md:gap-8">
                <Link to={'/'} className="font-medium hover:text-[#16B3DE]" onClick={() => setMenuIsOpen(false)}>Inicio</Link>
                <Link to={'/'} className="font-medium hover:text-[#16B3DE]" onClick={() => setMenuIsOpen(false)}>Servicios</Link>
                <Link to={'/'} className="font-medium hover:text-[#16B3DE]" onClick={() => setMenuIsOpen(false)}>Nosotros</Link>
                <Link to={'/'} className="font-medium hover:text-[#16B3DE]" onClick={() => setMenuIsOpen(false)}>Contacto</Link>
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