import { useState } from "react"
import type { IconType } from "react-icons"
import { Link } from "react-router"

type MenuItem = {
    icon: IconType,
    label: string,
    path: string
}

export const NavigatorMenu = ({ menuList }: { menuList: MenuItem[] }) => {

    const [labelActive, setLabelActive] = useState('Home')

    return <ul className="flex flex-col gap-2">
        {
            menuList.map(menuItem => {
                return <Link 
                    key={menuItem.path}
                    to={menuItem.path}
                    className={`${labelActive === menuItem.label
                        ? 'p-3 bg-[#21B1C4] text-white rounded-xl hover:scale-102 transition-all cursor-pointer'
                        : 'p-3 text-[#21B1C4]hover:scale-102 transition-all cursor-pointer hover:bg-gray-100 rounded-xl'}
                    `}
                    onClick={() => setLabelActive(menuItem.label)}>
                    <div className="flex items-center gap-3">
                        <menuItem.icon className="size-6" />
                        <p className="text-lg font-semibold">{menuItem.label}</p>
                    </div>
                </Link>
            })
        }

    </ul>
}