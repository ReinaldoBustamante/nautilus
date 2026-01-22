import { Outlet } from "react-router"
import { Header } from "../components/header/Header"
import { useState } from "react"

export const NautilusLayout = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const closeMenu = () => setMenuIsOpen(false)

    return <div className="flex flex-col">
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <div className="pt-36 pb-4 pl-4 pr-4 bg-[#F6F9FB] h-dvh">
            <Outlet context={{ closeMenu }} />
        </div>
    </div>
}