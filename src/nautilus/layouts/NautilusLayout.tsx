import { Outlet } from "react-router"

import { useState } from "react"
import { Header } from "../components/ui/Header"

export const NautilusLayout = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const closeMenu = () => setMenuIsOpen(false)

    return <div className="flex flex-col h-lvh">
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <div className=" bg-white flex-1 pt-27 md:pt-27">
            <Outlet context={{ closeMenu }} />
        </div>
        <footer className="p-4 bg-[#0C2D44] md:p-20 md:pt-4 md:pb-4">
            <p>a</p>
        </footer>
    </div>
}