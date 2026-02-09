import { Link, useNavigate } from "react-router"
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { RxEnter } from "react-icons/rx";
import { SideMenu } from "./SideMenu";
import { MdOutlineEmail, MdWorkOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

interface HeaderProps {
    menuIsOpen: boolean,
    setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setScrollTarget: React.Dispatch<React.SetStateAction<string>>,
    sectionActive: string
}

export const navRoutes = [
    { id: 'home', name: 'Inicio', icon: IoHomeOutline },
    { id: 'services', name: 'Servicios', icon: MdWorkOutline },
    { id: 'contacts', name: 'Contacto', icon: MdOutlineEmail }
]

export const Header = ({ menuIsOpen, setMenuIsOpen, setScrollTarget, sectionActive }: HeaderProps) => {
    const navigate = useNavigate()

    return (
        <div className="w-full fixed z-1000">
            <div className="border-b bg-[#FAFBFC] border-b-gray-200 flex justify-between items-center p-4 md:pl-20 md:pr-20">
                <img
                    src={"/images/nautilus_logo.png"}
                    alt="Nautilus Logo"
                    className="w-52"
                    onClick={() => navigate('/')}
                />

                <nav className="hidden md:flex md:gap-12 items-center">
                    {navRoutes.map(route => (
                        <Link
                            key={route.id}
                            to={'/'}
                            className={`font-medium text-xl hover:text-[#16B3DE] ${sectionActive === route.id ? 'text-[#16B3DE]' : ''}`}
                            onClick={() => {
                                setScrollTarget("")
                                setTimeout(() => setScrollTarget(route.id), 0)
                            }}
                        >
                            {route.name}
                        </Link>
                    ))}

                    <Link
                        to={'/auth'}
                        className="border border-[black] text-[black] hover:border-[#10ACDB] hover:text-white hover:bg-[#10ACDB] w-full font-medium p-3 flex items-center gap-2 pr-4 pl-4 rounded-md"
                    >
                        <RxEnter size={24} />
                        <span className="text-xl">Iniciar Sesión</span>
                    </Link>
                </nav>

                {menuIsOpen
                    ? <IoMdClose className="flex md:hidden z-999" size={28} onClick={() => setMenuIsOpen(false)} />
                    : <AiOutlineMenu className="flex md:hidden z-999" size={28} onClick={() => setMenuIsOpen(true)} />
                }
            </div>

            <SideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} setScrollTarget={setScrollTarget} sectionActive={sectionActive} />
        </div>
    )
}
