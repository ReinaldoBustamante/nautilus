import { Outlet } from "react-router"

import { useState } from "react"
import { Header } from "../components/ui/Header"
import { ScrollToTop } from "../../utils/ScrollToTop"

export const NautilusLayout = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [sectionActive, setSectionActive] = useState("home");
    const [scrollTarget, setScrollTarget] = useState("home");

    const closeMenu = () => setMenuIsOpen(false)


    return <div className="flex flex-col h-lvh">
        <Header
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
            setScrollTarget={setScrollTarget}
            sectionActive={sectionActive}
        />
        <div className=" flex-1 pt-27 md:pt-20">
            <ScrollToTop />
            <Outlet context={{ closeMenu, scrollTarget, setSectionActive }} />
        </div>
        <footer className="p-4 bg-[#0C2D44] md:p-20 md:pt-2 md:pb-4">
            <p className="text-white text-center md:text-xl text-lg py-4">© 2026 Centro Nautilus. Todos los derechos reservados.</p>
        </footer>
    </div>
}