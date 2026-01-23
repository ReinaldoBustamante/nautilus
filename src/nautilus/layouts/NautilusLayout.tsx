import { Outlet } from "react-router"
import { Header } from "../components/header/Header"
import { useState } from "react"

export const NautilusLayout = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const closeMenu = () => setMenuIsOpen(false)

    return <div className="flex flex-col">
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <div className="p-4 pt-36  bg-[#F6F9FB] md:p-20 md:pt-64">
            <Outlet context={{ closeMenu }} />
        </div>
        <footer className="w-full p-4 bg-[#0C2D44] md:p-20 md:pt-4 md:pb-4">
            <p>a</p>
        </footer>
    </div>
}